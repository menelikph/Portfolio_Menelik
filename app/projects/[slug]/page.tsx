import ProjectDetail from "@/app/components/project-detail";
import { projects } from "@/constants/contants";
import { notFound } from "next/navigation";


export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((project) => project.id === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
