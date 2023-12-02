import { useLoaderData } from "@remix-run/react"
import { getPost } from "~/models/posts.server"
import { formatearFecha } from "../utils/helpers";

export function meta({data}) {
  const titulo = data?.data[0]?.attributes.titulo

  return [
    {
      title: `GuitarLA - ${titulo}`,
      description: `Guitarras, venta de guitarras, entrada sobre ${titulo}`
    },
  ];  
}

export async function loader({params}) {

  const { postUrl } = params // Obtenemos el nombre de la post que queremos en especifico

  // Filtrar post por url
  const post = await getPost(postUrl)
  
  // console.log(post.data[0].attributes.nombre) // información sobre la post que hemos seleccionado para visualizar sus datos en la página

  // Si no se encuentra la post lanzsamos un error
  if (post.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Entrada no encontrada'
    })
  }
  return post
}

export default function Post() {
  const post = useLoaderData()
  const { contenido, imagen, titulo, publishedAt } = post?.data[0]?.attributes;
  return (
    <article className="post mt-5">
      <img className="imagen" src={imagen?.data?.attributes?.url} alt={`imagen blog ${titulo}`} />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">Publicado el {formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  )
}