import { Post, PostMetadata } from "@/types/PostTypes";
import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

const postsDir = path.join(process.cwd(), "posts");

export async function getPostSlugs() {
  return await fs.readdir(postsDir);
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDir, `${realSlug}.md`);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const { content, data } = matter(fileContents);

  //const processedContent = processImagePaths(content);

  return {
    slug: realSlug,
    title: data.title,
    date: new Date(data.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }), // ✅ Pre-format the date
    content: content,
    tags: data.tags || [],
  };
}

export async function getAllPosts(): Promise<PostMetadata[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => await getPostBySlug(slug)),
  );
  return posts
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .map(({ slug, title, date, tags }) => ({ slug, title, date, tags }));
}
