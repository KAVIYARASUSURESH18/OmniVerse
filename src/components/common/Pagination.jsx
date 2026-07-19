import {
  ChevronLeft,
  ChevronRight
} from "lucide-react";


const Pagination = ({
  currentPage,
  totalPages,
  onPageChange
}) => {


  const handlePrevious = () => {

    if(currentPage > 1){

      onPageChange(currentPage - 1);

    }

  };



  const handleNext = () => {

    if(currentPage < totalPages){

      onPageChange(currentPage + 1);

    }

  };



  return (

    <div

    className="
    flex
    items-center
    justify-center
    gap-5
    mt-8
    "

    >



      {/* Previous Button */}


      <button

      onClick={handlePrevious}

      disabled={currentPage === 1}

      className={`
      
      flex
      items-center
      gap-2
      px-4
      py-2
      rounded-xl
      transition

      ${
        currentPage === 1

        ?

        "bg-slate-700 text-gray-500 cursor-not-allowed"

        :

        "bg-cyan-600 text-white hover:bg-cyan-500"

      }

      `}

      >


        <ChevronLeft size={18}/>

        Previous


      </button>





      {/* Page Number */}


      <div

      className="
      bg-slate-900
      border
      border-slate-700
      px-5
      py-2
      rounded-xl
      text-white
      "

      >

        {currentPage} / {totalPages}

      </div>





      {/* Next Button */}


      <button

      onClick={handleNext}

      disabled={currentPage === totalPages}

      className={`
      
      flex
      items-center
      gap-2
      px-4
      py-2
      rounded-xl
      transition


      ${
        currentPage === totalPages

        ?

        "bg-slate-700 text-gray-500 cursor-not-allowed"

        :

        "bg-cyan-600 text-white hover:bg-cyan-500"

      }

      `}

      >


        Next

        <ChevronRight size={18}/>


      </button>



    </div>


  );

};


export default Pagination;
