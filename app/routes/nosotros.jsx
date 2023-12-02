import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return [
    {
      title: 'GuitarLA - Sobre Nosotros',
      description: 'Venta de guitarras, blog de música'
    },
  ];
}

export function links() {
  return [
    { 
      rel: 'stylesheet', 
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ];
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div className="">
          <p>
            Sed eu efficitur est. Fusce ante velit, sagittis ut lacus et, ornare venenatis nisl. Curabitur auctor quis est a tempus. Maecenas accumsan, mi sed tempus dictum, erat velit aliquet mauris, consequat accumsan nibh quam id tortor. Sed a ipsum augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi arcu, laoreet quis justo sed, sollicitudin tempor mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus et nunc egestas, tincidunt erat non, tristique sapien. Mauris hendrerit a magna in posuere. Integer eu magna ac mi fringilla lobortis.
          </p>
          <p>
            Sed eu efficitur est. Fusce ante velit, sagittis ut lacus et, ornare venenatis nisl. Curabitur auctor quis est a tempus. Maecenas accumsan, mi sed tempus dictum, erat velit aliquet mauris, consequat accumsan nibh quam id tortor. Sed a ipsum augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi arcu, laoreet quis justo sed, sollicitudin tempor mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus et nunc egestas, tincidunt erat non, tristique sapien. Mauris hendrerit a magna in posuere. Integer eu magna ac mi fringilla lobortis.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros