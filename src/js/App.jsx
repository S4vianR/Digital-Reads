import React from "react";
import { useEffect, useState } from "react";
import useContentful from "./useContenful";
import Libros from "./components/Libros";

const App = () => {
  const [libros, setLibros] = useState([]);
  const { getLibros } = useContentful();

  useEffect(() => {
    getLibros().then((data) => setLibros(data));
  }, []);

  return (
    <div className="h-fit flex flex-1 gap-12 xs:flex-col xs:p-3 md:flex-row">
        {libros.map((libro, index) => (
          <Libros key={index} libro={libro} />
        ))}
    </div>
  );
};

export default App;
