import Menu from '../Menu';
import Hero from '../Hero';
import About from '../About';
import Clients from '../Clients';
import Footer from '../Footer';
import Services from '../Services';
import Contact from '../Contact';

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </>
  )
}

export default Layout;