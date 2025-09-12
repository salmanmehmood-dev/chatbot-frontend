import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import rehypePrettyCode from 'rehype-pretty-code';
import { serialize } from 'next-mdx-remote';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface Blog {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  image?: { url: string };
  content: string; // MDX string
}

async function getBlog(slug: string): Promise<Blog | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/blogs?where[slug][equals]=${slug}`);
  const data = await res.json();
  return data.docs[0] || null;
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug);
  if (!blog) return notFound();

  // Serialize MDX with rehype-pretty-code (SSR Shiki highlighting)
  const mdxSource: MDXRemoteSerializeResult = await serialize(blog.content, {
    mdxOptions: {
      rehypePlugins: [
        [rehypePrettyCode, {
          theme: {
            dark: 'vitesse-dark',
            light: 'vitesse-light',
          },
          keepBackground: false,
        }],
      ],
      format: 'mdx',
    },
  });

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-500 text-sm mb-4">Published on {new Date(blog.date).toLocaleDateString()} by {blog.author}</p>
      {blog.image?.url && (
        <Image width={640} height={256} src={blog.image.url} alt={blog.title} className="w-full h-64 object-cover rounded mb-6" />
      )}
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <MDXRemote {...mdxSource} />
      </article>
    </div>
  );
}
