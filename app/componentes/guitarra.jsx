import { Link } from '@remix-run/react'
export default function Guitarra({guitarra}) {
  const { descripcion, imagen, precio, url, nombre } = guitarra
  
  const imgMedium = imagen.data.attributes.formats.medium.url
  /* const imgSmall = imagen.data.attributes.formats.small.url */
  /* const imgThumbnail = imagen.data.attributes.formats.thumbnail.url */

  return (
    <div className="guitarra">      
      <img src={imgMedium} alt={`Imagen guitarra ${nombre}`} />
      
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion[0].children[0].text}</p>
        <p className="precio">{precio}€</p>
        
        <Link 
          className='enlace' 
          to={`/guitarras/${url}`}>
          Ver Producto
        </Link>
      </div>
    </div>
  )
}