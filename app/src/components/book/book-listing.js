import React, { useEffect, useState } from "react";
import Table from "../table/table";
import Interceptor from "../interceptor";

const debouncingFunc = (func, delay) => {
  let timerId;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
};

function Book() {
  const [result, setResult] = useState({})
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    // You can await here
    const response = await Interceptor('get', 'book')
    setResult(response)
  }

  useEffect ( () => {
    fetchData();
  }, [])

  const handleChange = (e) => {
    const query = e.target.value;
    setInput(query);

    const search = () => {
      const queryData = Object.entries(result).filter((item) => {
        return item[1].book.toLowerCase().includes(query.toLowerCase());
      });
      setFilteredData(queryData);
    };
    const optimisedSearch = debouncingFunc(search, 100);
    optimisedSearch();
  }

  return (
    <div className="container h-100">
    <div className="row d-flex w-40 justify-content-center align-items-center">
    <main>
    <div style={{maxWidth: '539px', margin: '0 auto'}}>
      <input style={{margin: '12px'}}
          type="text"
          name="input"
          value={input}
          placeholder="Search..."
          onChange={handleChange}
        />
        {(result && filteredData) && <Table data={((filteredData.length > 0 && filteredData) || input) ? filteredData:  Object.entries(result)} rowsPerPage={5} />}
      </div>
    </main>
    </div>
    </div>
  );
}

export default Book;