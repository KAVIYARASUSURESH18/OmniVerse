import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MobileMenu from "./MobileMenu";


function Layout({children}){


return (

<>

<Navbar/>

<Sidebar/>

<main>

{children}

</main>


<MobileMenu/>


</>

)


}


export default Layout;
