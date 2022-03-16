import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";
import useTable from "../hooks/useTable";
import styles from "./table.module.css";
import TableFooter from "./tablefooter";
import Interceptor from "../interceptor";

const Table = ({ data, rowsPerPage }) => {
  const navigate = useNavigate()
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  const addData = () => {
    navigate(`/book/add-book`, { replace: true });
  }
  const editData = (id) => {
    navigate(`/book/edit-book/?`+id, { replace: true });
  }

  const onDelete = async id => {
    const response = await Interceptor('delete', `book/${id}`)
    alert(response.msg)
    //navigate(`/book-listing`, { replace: true });
    window.location.reload(false)
  }

  return (
    <div>
    <button style={{marginLeft: "10px", float: "right", margin: '12px'}} onClick={ () => addData()} className="btn btn-info">Add</button>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>Name of the Book</th>  
            <th className={styles.tableActionHeader}>Action</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el, i) => (
            <tr className={styles.tableRowItems} key={i}>
              <td className={styles.tableCell}>{el[1].book}</td>
              <td className={styles.tableAction}> <button onClick={ () => editData(el[1]._id)} className='btn btn-info' style={{marginRight: '9px'}}>Update</button>
              <button onClick={ () => {if (window.confirm("Delete the book?")) {onDelete(el[1]._id) }}} className="btn btn-info">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </div>
  );
};

export default Table;