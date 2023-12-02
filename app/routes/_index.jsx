import { useLoaderData } from "@remix-run/react";

import { getGuitarras } from "~/models/guitarras.server";
import ListadoGuitarras from "../componentes/listado-guitarras";
import stylesGuitarras from '~/styles/guitarras.css'

import { getPosts } from "~/models/posts.server";
import ListadoPosts from "../componentes/listado-posts";
import stylesBlog from '~/styles/blog.css'

import { getCurso } from "~/models/curso.server";
import Curso from "../componentes/curso";
import stylesCurso from '~/styles/curso.css'

export function meta() {
  return [
    {
      title: "GuitarLA - Inicio",
      description: "Venta de guitarras y blog de música",
    },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesGuitarras,
    },
    {
      rel: "stylesheet",
      href: stylesBlog,
    },
    {
      rel: "stylesheet",
      href: stylesCurso,
    },
  ];
}

export const loader = async () => {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(), 
    getPosts(),
    getCurso(),
  ]);

  /*
    console.log(guitarras.data);
    console.log(posts.data);
    */
  console.log(curso);

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data,
  };
};

// No se porqué a partir de aquí, no muestra datos ni nada
export default function Index() {
  const { guitarras, posts, curso } = useLoaderData();

  /* 
    console.log(guitarras)
    console.log(posts) 
    */
 console.log(curso) 

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras 
          guitarras={guitarras} 
        />
      </main>

      <Curso 
        curso={curso?.attributes}
      />

      <section className="contenedor">
        <ListadoPosts 
          posts={posts}
        />
      </section>
    </>
  );
}
