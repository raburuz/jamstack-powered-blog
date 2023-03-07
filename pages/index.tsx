import { Blogger } from '@/projects/blogger';
import { getAllDocsWithData, IBlogPost, orderDataByDate} from '../projects/blogger/lib/mdx';
import { Seo } from '@/projects/common'

export default function Home({ docs }:{docs:IBlogPost[]}) {
  return (
    <>
      <Seo 
        title='Δrkift Blog' 
        desc='Explora el fascinante mundo de la programación con nuestro blog. Desde lenguajes de programación populares hasta tendencias emergentes, descubre artículos, tutoriales y consejos útiles para mejorar tus habilidades como desarrollador. Únete a nuestra comunidad de programadores y mantente actualizado sobre las últimas noticias y avances tecnológicos'
      />
      <main>
        <Blogger docs={docs}/>
      </main>
    </>
  )
}

export async function getStaticProps(context:any) {
  // MDX text - can be from a local file, database, anywhere
  const docs = await getAllDocsWithData();
  const orderDocs = orderDataByDate(docs);
  return {
    // Passed to the page component as props
    props: { docs: orderDocs },
  }
}