import Link from 'next/link';
import Image from 'next/image';

async function getBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/blogs?limit=100`, { cache: 'no-store' });
  const data = await res.json();
  return data.docs;
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      <ul>
        {Array.isArray(blogs) && blogs.length > 0 ? (
          blogs.map((blog: any) => (
            <li key={blog.id} className="mb-8">
              <Link href={`/blogs/${blog.slug}`}>
                <div className="flex items-center gap-4 cursor-pointer">
                  {blog.image?.url && (
                    <Image width={96} height={96} src={blog.image.url} alt={blog.title} className="w-24 h-24 object-cover rounded" />
                  )}
                  <div>
                    <h2 className="text-xl font-semibold">{blog.title}</h2>
                    <p className="text-gray-500 text-sm">Published on {new Date(blog.date).toLocaleDateString()}</p>
                    <p className="text-gray-700 text-sm">By {blog.author}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <li>No blogs found.</li>
        )}
      </ul>
    </div>
  );
}
