import Loader from "../components/common/Loader";


function Movies(){

const loading = true;


return (

<>

{
loading ?

<Loader/>

:

<MovieGrid/>

}

</>

)

}


export default Movies;
