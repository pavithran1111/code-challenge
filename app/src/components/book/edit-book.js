import React, { useEffect, useState } from "react";
import EditBookForm from "./edit-book-form";
import Interceptor from "../interceptor"; 

function EditEmp() {
  const [id, setId] = useState(()=> window.location.search.replace('?', ''))
  const [data, setData] = useState()
  

  const fetchData = async () => {
    // You can await here
    const response = await Interceptor('get', `book/${id}`)
    setData(response[0])
  }

  useEffect(() => {
    fetchData();
  }, []) 

  return data ? <EditBookForm preloadedValues={data} id={id} /> : <div>Loading</div>
}

export default EditEmp;