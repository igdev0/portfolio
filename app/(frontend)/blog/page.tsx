import Nav from '@/components/nav';
import nav from '@/content/nav';
import Footer from '@/components/footer';

export default function BlogPage() {
  return (
      <main>
        <Nav {...nav}/>
        <Footer/>
      </main>
  )
}