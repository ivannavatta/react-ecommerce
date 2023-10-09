import { useState } from "react";

function Filter({children}){
    const [fiterState, setFilterState] = useState('all');

    
    const handleFilter = (e) => {
        setFilterState(e.target.value);
    }
    
    return children(fiterState, handleFilter)
}

export default Filter;