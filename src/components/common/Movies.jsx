import { useState } from "react";

import Pagination from "../components/common/Pagination";


function Movies(){


const [page,setPage] = useState(1);



return (

<>


<MovieGrid page={page}/>



<Pagination

currentPage={page}

totalPages={10}

onPageChange={setPage}

/>


</>

)


}


export default Movies;

