import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useRouteError,
  isRouteErrorResponse,
  Link,
} from "@remix-run/react";

import styles from '~/styles/index.css'
import Header from '~/componentes/header';
import Footer from '~/componentes/footer';

export function meta() {
  return [
    { 
      charset: 'utf-8',
      title: 'GuitarLA - Remix', 
      name: 'viewport', 
      content: 'width=device-width,initial-scale=1'
    },
  ];
}


export function links() {
  return [
    {
      rel:'stylesheet',
      href:'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },
    // <link rel="preconnect" href="https://fonts.googleapis.com">
    {
      rel:'preconnect',
      href:'https://fonts.googleapis.com'
    },
    // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    {
      rel:'preconnect',
      href:'https://fonts.gstatic.com',
      crossOrigin: "true"
    },
    // <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap" rel="stylesheet"></link>
    {
      rel:'stylesheet',
      href:'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap>'
    },
    { 
      rel: 'stylesheet',
      href: styles
    },
  ];
}

export default function App() {
  return(
    <Document>
      <Outlet />
    </Document>
  )
}

function Document({children}) {
  return(
    <html lang='es'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        
        {children}
        
        <Footer />
        <Scripts/>
        <LiveReload/>
      </body>
    </html>
  )
}

/* Manejo de errores */
export function ErrorBoundary() {// Aquí toma el error, se pasa a este componente
  const error = useRouteError()
  
  if (isRouteErrorResponse(error)) {
    return (
        <Document>
          <p className='error'>
            {error.status} {error.statusText}
          </p>
          <Link to='/' className='error-enlace'>
            ➡Tal vez quieras volver a la página principal⬅
          </Link>
        </Document>
      )
  }
}