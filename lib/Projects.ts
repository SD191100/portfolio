import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

export type Project = {
  title: string;
  slug: string;
  content: string;
  date: string;
  tags: string[];
  link: string;
}
export type ProjectMetadata = {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  link: string;
}
const projectsDir = path.join(process.cwd(), "projects");

export async function getProjectSlugs() {
  return await fs.readdir(projectsDir);
}
export async function getProjectBySlug(slug: string): Promise<Project> {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(projectsDir, `${realSlug}.md`);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const { content, data } = matter(fileContents);

//export async function getProjectBySlug(slug: string): Promise<Project> {
  //const realSlug = slug.replace(/\.md$/, "");
  //const fullPath = path.join(projectsDir, `${realSlug}.md`);
  //const projectContents = await fs.readFile(fullPath, "utf8");
  //const { content, data } = matter(projectContents);

  return {
    slug: realSlug,
    title: data.title,
    date: new Date(data.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    content: content,
    tags: data.tags || [],
    link: data.link,
  }
}

export async function getAllProjects(): Promise<ProjectMetadata[]> {
  const slugs = await getProjectSlugs();
  const projects = await Promise.all(
    slugs.map(async (slug: string) => await getProjectBySlug(slug)),
  );
  return projects.map(({slug, title, date, tags, link}: ProjectMetadata) => ({ slug, title, date, tags, link}))
}

