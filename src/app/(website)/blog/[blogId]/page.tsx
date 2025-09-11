import BlogDetailPage from "@/components/home/blog-detail-page";

interface PageProps {
  params: Promise<{ blogId: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { blogId } = await params;
  return (
    <div>
      <BlogDetailPage blogId={blogId} />
    </div>
  );
};

export default Page;
