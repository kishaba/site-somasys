import Menu from '../Menu';
import Hero from '../Hero';
import About from '../About';
import Clients from '../Clients';
import Footer from '../Footer';
import Services from '../Services';
import Contact from '../Contact';
import Numbers from '../Numbers';

import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <Hero />
      <Link href="/about" passHref>
        <About />
      </Link>
      <Services />
      <Clients />
      <Contact />
      <Numbers />
      <Footer />
    </>
  )
}

export default Layout;