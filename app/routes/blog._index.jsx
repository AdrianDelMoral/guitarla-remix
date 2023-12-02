import { useLoaderData } from "@remix-run/react";
import ListadoPosts from "../componentes/listado-posts";
import { getPosts } from "~/models/posts.server";

export function meta() {
  return [
    {
      title: 'GuitarLA - Nuestro Blog',
      description: 'GuitarLA, Blog de música y venga de guitarras'
    },
  ];
}

export async function loader() {
  const posts = await getPosts()
  return posts.data
}

export default function Blog() {
  const posts = useLoaderData()
  return (
    <main className="contenedor">
        <ListadoPosts
          posts={posts}
        />
    </main>
  )
}