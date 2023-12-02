export async function getCurso() {
  const respuesta = await fetch(`${process.env.API_URL}/curso?populate=imagen`);
  return await respuesta.json();
}

export async function getCursos(url) {
  const respuesta = await fetch(
    `${process.env.API_URL}/curso?filters[url]=${url}&populate=imagen`
  );
  return await respuesta.json();
}
