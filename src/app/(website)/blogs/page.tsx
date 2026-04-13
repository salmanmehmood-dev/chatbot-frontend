import Link from 'next/link';
import Image from 'next/image';

async function getBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/blogs?limit=100`, { cache: 'no-store' });
  const data = await res.json();
  return data.docs;
}

interface Blog {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  image?: {
    url: string;
  };
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="max-w-3xl mx-auto py-8 bg-white dark:bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-brand dark:text-white">Blogs</h1>
      <ul>
        {Array.isArray(blogs) && blogs.length > 0 ? (
          blogs.map((blog: Blog) => (
            <li key={blog.id} className="mb-8">
              <Link href={`/blogs/${blog.slug}`}
                className="block group rounded-xl transition-all duration-200 border border-header-border dark:border-dark-border bg-white dark:bg-header-background/60 hover:bg-accent-mint/10 dark:hover:bg-header-background/80 shadow-sm hover:shadow-lg">
                <div className="flex items-center gap-4 p-4">
                  {blog.image?.url && (
                    <Image width={96} height={96} src={blog.image.url} alt={blog.title} className="w-24 h-24 object-cover rounded-lg bg-gray-100 dark:bg-header-background" />
                  )}
                  <div>
                    <h2 className="text-xl font-semibold text-brand dark:text-white group-hover:text-accent-mint transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-footer-muted dark:text-footer-muted text-sm">Published on {new Date(blog.date).toLocaleDateString()}</p>
                    <p className="text-header-text dark:text-footer-link text-sm">By {blog.author}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <li className="text-muted dark:text-footer-muted">No blogs found.</li>
        )}
      </ul>
    </div>
  );
}
