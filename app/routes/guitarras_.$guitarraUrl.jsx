import { useLoaderData } from "@remix-run/react"
import { getGuitarra } from "~/models/guitarras.server"
import styles from '~/styles/guitarras.css'

export function meta({data}) {
  if(!data) {
    return [
      {
        title: `GuitarLA - Guitarra No encontrada`,
        description: `Guitarras, venta de guitarras, guitarra no encontrada`
      },
    ];  
  }

  return [
    {
      title: `GuitarLA - ${data?.data[0]?.attributes.nombre}`,
      description: `Guitarras, venta de guitarras, guitarra ${data?.data[0]?.attributes.nombre}`
    },
  ];  
}

export function links() {
  return [
    { 
      rel: "stylesheet", 
      href: styles
    }
  ];
}

export async function loader({params}) {
  const { guitarraUrl } = params // Obtenemos el nombre de la guitarra que queremos en especifico

  // Filtrar guitarra por url
  const guitarra = await getGuitarra(guitarraUrl)
  // console.log(guitarra.data[0].attributes.nombre) // información sobre la guitarra que hemos seleccionado para visualizar sus datos en la página

  // Si no se encuentra la guitarra lanzsamos un error
  if (guitarra.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra no encontrada'
    })
  }

  return guitarra
}

export default function Guitarra() {

  const guitarra = useLoaderData()
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;

  const texto = descripcion.map(desc => {
    return desc.children.map(descrip => {
      return descrip.text
    })
  })

  return (
    <div className="guitarra">
      <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />

      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{texto}</p>
        <p className="precio">{precio}€</p>
      </div>
    </div>
  )
}