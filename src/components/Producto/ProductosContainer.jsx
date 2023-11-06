import React, { useEffect, useState} from 'react'
import { getData } from '../Products/Products'
import '../steelheets/Filter.css'
import TaskList from '../Filter/TaskList';
import Filter from '../Filter/Filter';
import Spinner from '../Spinner/Spinner';


const ProductosContainer = () => {
  const [data, setData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [filterState, setFilterState] = useState("all"); // Estado local para el filtro

  useEffect(() => {
    getData()
      .then((res) => {
        setData(res);
        setDataLoaded(true); 
      })
      .catch((err) => console.log(err));
  }, []);

  // Función para manejar el cambio en el filtro
  const handleFilter = (event) => {
    setFilterState(event.target.value);
  };

  return (
    <>
      {dataLoaded && ( 
        <Filter>
        {(filter, handleFilter) => (
          <>
            <label className="filter-label">Filtrar por categorías</label>
            <select
              className="filter-select"
              name="filter"
              id="filter"
              value={filter}
              onChange={handleFilter}
            >
              <option value="all">All</option>
              <option value="samsung">Samsung</option>
              <option value="apple">Iphone</option>
              <option value="amazon">Amazfit</option>
            </select>
      
            <TaskList
              filterState={filter} // Cambia "filterState" a "filter"
              data={filter === "all" ? data : data.filter((data) =>
                filter === "samsung"
                  ? data.category === "samsung"
                  : filter === "apple"
                  ? data.category === "apple"
                  : filter === "amazon"
                  ? data.category === "amazon"
                  : filter === "amazfit"
                  ? data.category === "amazfit"
                  : ""
              )}
            />
            {console.log('filter', filter)} // Cambia "filterState" a "filter"
          </>
        )}
      </Filter>
      )}
      {!dataLoaded && <Spinner />}
    </>
  );
};

export default ProductosContainer;







