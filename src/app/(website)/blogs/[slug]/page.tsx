import { notFound } from 'next/navigation';
import Image from 'next/image';
import React from 'react';

interface Blog {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  image?: { url: string };
  content: string;
}

interface LexicalNode {
  type: string;
  tag?: string;
  detail?: number;
  format?: number;
  text?: string;
  listType?: 'number' | 'bullet';
  children?: LexicalNode[];
  language?: string;
  fields?: {
    url?: string;
    newTab?: boolean;
  };
}

async function getBlog(slug: string): Promise<Blog | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/blogs?where[slug][equals]=${slug}`);
  const data = await res.json();
  return data.docs[0] || null;
}

export default async function BlogPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const blog = await getBlog(params.slug);
  if (!blog) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-500 text-sm mb-4">
        Published on {new Date(blog.date).toLocaleDateString()} by {blog.author}
      </p>
      {blog.image?.url && (
        <Image
          width={640}
          height={256}
          src={blog.image.url}
          alt={blog.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
      )}
      <div className="prose dark:prose-invert max-w-none">
        <RenderLexicalContent content={blog.content} />
      </div>
    </div>
  );
}

// Render Lexical JSON Content
function renderLexicalNode(node: LexicalNode, key?: React.Key): React.ReactNode {
  if (!node) return null;

  switch (node.type) {
    case 'root':
      return node.children?.map((child: LexicalNode, i: number) => renderLexicalNode(child, i));

    case 'heading': {
      const Tag = (node.tag || `h${node.detail || 2}`) as keyof React.JSX.IntrinsicElements;
      return React.createElement(
        Tag,
        { key, className: 'font-bold mt-6 mb-3 text-header-text dark:text-accent-mint' },
        node.children?.map((child: LexicalNode, i: number) => renderLexicalNode(child, i))
      );
    }

    case 'paragraph':
      return (
        <p key={key} className="mb-4 leading-relaxed">
          {node.children?.map((child: LexicalNode, i: number) => renderLexicalNode(child, i))}
        </p>
      );

    case 'codeblock': {
      const language = node.language || 'bash';
      const code = node.children?.map((child: LexicalNode) => child.text).join('\n') || '';
      return (
        <pre
          key={key}
          className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 overflow-x-auto"
          data-language={language}
        >
          <code className={`language-${language}`}>{code}</code>
        </pre>
      );
    }

    case 'code': {
      const codeText = node.text || '';
      const language = node.language || 'text';
      return codeText.includes('\n') || language !== 'text' ? (
        <pre
          key={key}
          className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 overflow-x-auto"
          data-language={language}
        >
          <code className={`language-${language}`}>{codeText}</code>
        </pre>
      ) : (
        <code key={key} className="bg-gray-100 dark:bg-gray-900 px-1 rounded text-sm">
          {codeText}
        </code>
      );
    }

    case 'list': {
      const ListTag = node.listType === 'number' ? 'ol' : 'ul';
      return React.createElement(
        ListTag,
        { key, className: 'ml-6 list-disc mb-4' },
        node.children?.map((child: LexicalNode, i: number) => renderLexicalNode(child, i))
      );
    }

    case 'listitem':
      return <li key={key}>{node.children?.map((child: LexicalNode, i: number) => renderLexicalNode(child, i))}</li>;

    case 'link':
      return (
        <a
          key={key}
          href={node.fields?.url || '#'}
          target={node.fields?.newTab ? '_blank' : undefined}
          rel="noopener noreferrer"
          className="text-accent-mint underline hover:text-brand dark:text-accent-mint"
        >
          {node.children?.map((child: LexicalNode, i: number) => renderLexicalNode(child, i))}
        </a>
      );

    case 'text': {
      let text: React.ReactNode = node.text;
      if (node.format) {
        if (node.format & 1) text = <strong key={key}>{text}</strong>;
        if (node.format & 2) text = <em key={key}>{text}</em>;
        if (node.format & 8) text = <u key={key}>{text}</u>;
        if (node.format & 16)
          text = (
            <code key={key} className="bg-gray-100 dark:bg-gray-900 px-1 rounded text-sm">
              {text}
            </code>
          );
      }
      return text;
    }

    default:
      return node.children?.map((child: LexicalNode, i: number) => renderLexicalNode(child, i));
  }
}

function RenderLexicalContent({ content }: { content: string }) {
  try {
    const lexical = typeof content === 'string' ? JSON.parse(content) : content;
    return <>{renderLexicalNode(lexical.root)}</>;
  } catch {
    return null;
  }
}
