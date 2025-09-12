import Image from 'next/image'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { blogs } from '@/data/blog'

interface Props {
  blogId: string
}

const BlogDetailPage: React.FC<Props> = ({ blogId }) => {
  const blog = blogs.find((b) => b.blogId === blogId)

  const getInitials = (name: string) => {
    const names = name.trim().split(' ')
    const initials = names.map(n => n[0].toUpperCase()).slice(0, 2).join('')
    return initials
  }

  if (!blog) {
    return <p className="text-center text-red-500">Blog not found</p>
  }

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl leading-10 font-bold text-gray-900 dark:text-white mb-4">
        {blog.title}
      </h1>

      {/* Author & Date */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold">
            {getInitials(blog?.author)}
          </div>
        {/* {blog.authorImage ? (
          <Image
            src={blog.authorImage}
            alt={blog.author}
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : (
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold">
            {getInitials(blog?.author)}
          </div>
        )} */}
        <div className="text-sm flex flex-col gap-1 ml-2" >
          <p className="font-medium text-gray-900 dark:text-white">{blog.author}</p>
          <p className="text-gray-500 dark:text-gray-400">Published on {blog.date}</p>
        </div>
      </div>

      {/* Featured Image */}
      {blog.image && (
        <div className="mb-10">
          <Image
            src={blog.image}
            alt={blog.title}
            width={900}
            height={500}
            className="rounded-lg w-full object-cover"
            priority
          />
        </div>
      )}

      {/* Markdown content */}
      <article className="prose prose-lg max-w-none dark:prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog.content}</ReactMarkdown>
      </article>
    </div>
  )
}

export default BlogDetailPage
