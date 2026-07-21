import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Anime from "./pages/Anime";
import Games from "./pages/Games";
import Engineering from "./pages/Engineering";

import Login from "./pages/Login";
import Profile from "./pages/Profile";

import ProtectedRoute from "./components/common/ProtectedRoute";
import BackToTop from "./components/common/BackToTop";
import MovieDetails from "./components/movies/MovieDetails";
import AnimeDetails from "./components/anime/AnimeDetails";



function App() {


  return (

    <Routes>


      {/* Public Pages */}

      <Route
        path="/"
        element={<Home />}
      />


      <Route
        path="/movies"
        element={<Movies />}
      />


      <Route
        path="/anime"
        element={<Anime />}
      />


      <Route
        path="/games"
        element={<Games />}
      />


      <Route
        path="/engineering"
        element={<Engineering />}
      />


      <Route
        path="/login"
        element={<Login />}
      />



      {/* Protected Pages */}


      <Route

        path="/profile"

        element={

          <ProtectedRoute>

            <Profile />

          </ProtectedRoute>

        }

      />


    </Routes>
  
    function Layout({children}){

return (

<>

<Navbar/>

{children}

<Footer/>

<BackToTop/>

</>

)

}

<Route
  path="/anime/:id"
  element={<AnimeDetails />}
/>

  
export default Layout;

  );

}



export default App;
