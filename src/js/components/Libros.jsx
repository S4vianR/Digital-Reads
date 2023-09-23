  import React from "react";

  const Libros = ({ libro }) => {
    return (
      <div className="flex flex-col flex-1 bg-white p-8 rounded-lg shadow-lg xs:h-[fit-content] md:h-[43rem] lg:h-[45rem]">
        <div className="flex flex-1 xs:flex-col xs:justify-center xs:items-center xs:w-full md:flex-row">
          <div className="w-64 lg:flex lg:flex-col lg:justify-center lg:items-center">
            <h5 className="text-2xl font-bold text-gray-900 mb-2">
              {libro.titulo}
            </h5>
            <h6 className="text-xl font-medium text-gray-900 mb-2">
              {libro.autor}
            </h6>
            <p className="text-gray-700 text-base">{libro.descripcion}</p>
          </div>
          <div className="flex flex-col justify-center items-center p-5">
            <img
              src={`https:${libro.portada}`}
              alt={libro.titulo}
              className="self-center xs:mt-4 xs:h-[20rem] md:mt-0 md:w-[20rem] md:h-[30rem]"
            />
          </div>
        </div>
        {/* Just a div as a black line as a separator */}
        <div className="border border-black border-opacity-30 my-4"></div>
        <div className="flex justify-center">
          <a
            href={`https:${libro.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="self-center mt-4 md:mt-3"
          >
            {/* Classes are tailwind */}
            <button className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">
              Ver libro
            </button>
          </a>
        </div>
      </div>
    );
  };

  export default Libros;
