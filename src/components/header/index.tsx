import { getAllPosts } from "@/lib/mdx";
import SiteHeader from "./site-header";

export default async function Header() {
  const projects = await getAllPosts("projects");

  return <SiteHeader projects={projects} />;
}
