import React, { useState, useEffect } from "react";
import useContentful from "./useContenful";
import Libros from "./components/Libros";

const App = () => {
  const { getLibros } = useContentful();
  const [libros, setLibros] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [selectedGenero, setSelectedGenero] = useState("todos");

  useEffect(() => {
    getLibros().then(({ libros, generos }) => {
      setLibros(libros);
      setGeneros(generos);
    });
  }, []);

  const handleChange = (event) => {
    setSelectedGenero(event.target.value);
  };

  const filteredLibros =
    selectedGenero === "todos"
      ? libros
      : libros.filter((libro) => libro.genero === selectedGenero);

  return (
    <div className="flex flex-col items-center p-8 gap-8 w-full">
      <div className="flex flex-row gap-2 justify-end items-center text-lg w-full">
        <label htmlFor="genero" className="font-bold">Género: </label>
        <select
          name="genero"
          id="genero"
          onChange={handleChange}
          value={selectedGenero}
          className="border rounded-md w-48"
        >
          <option value="todos">Todos</option>
          {generos.map((genero, index) => (
            <option key={index} value={genero}>
              {genero}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-4 w-full lg:grid-cols-3 xs:grid-cols-1">
        {filteredLibros.map((libro, index) => (
          <Libros key={index} libro={libro} />
        ))}
      </div>
    </div>
  );
};

export default App;
