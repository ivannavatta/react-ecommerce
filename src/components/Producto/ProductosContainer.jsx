import React, { useEffect, useState } from 'react'
import { getData } from '../Products/Products'
import '../steelheets/Filter.css'
import TaskList from '../Filter/TaskList';
import Filter from '../Filter/Filter';
import Spinner from '../Spinner/Spinner';
const ProductosContainer = () => {
  const [data, setData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  
  useEffect(() => {
    getData()
      .then((res) => {
        setData(res);
        setDataLoaded(true); 
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {dataLoaded && ( 
        <Filter>
          {(filterState, handleFilter) => (
            <>
              <label className="filter-label">Filtrar por categorias</label>
              <select
                className="filter-select"
                name="filter"
                id="filter"
                value={filterState}
                onChange={handleFilter}
              >
                <option value="all">All</option>
                <option value="samsung">Samsung</option>
                <option value="apple">Iphone</option>
                <option value="amazon">Amazfit</option>
                
              </select> 
    
              <TaskList
                data={
                  filterState === "all"
                    ? data
                    : data.filter((data) =>
                        filterState === "samsung"
                          ? data.category === "samsung"
                          : filterState === "apple"
                          ?  data.category === "apple"
                          : filterState === "amazon"
                          ? data.category === "amazon"
                          : data.color === 'white'
                      )
                }
              />
            </>
          )}
        </Filter>
      )}
      {!dataLoaded && <Spinner />}
    </>
  );
};

export default ProductosContainer