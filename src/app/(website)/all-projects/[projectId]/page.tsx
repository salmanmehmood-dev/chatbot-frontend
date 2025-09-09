import ProjectDetail from "@/components/projets/project-detail";


interface PageProps {
  params: Promise<{ projectId: string }>;
}

const page = async ({ params }: PageProps) => {
  const { projectId } = await params;
  return (
    <div>
      <ProjectDetail projectId={projectId} />
    </div>
  );
};

export default page;
