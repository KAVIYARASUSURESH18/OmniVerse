import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";
import ScrollToTop from "./components/layout/ScrollToTop";





function Layout({children}){


return (

<>

<Navbar/>

<Sidebar/>

<main></main>
  


<Footer/>

{children}

</main>


<MobileMenu/>


</>

)


}


export default Layout;
