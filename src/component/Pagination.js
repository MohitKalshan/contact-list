import React, {useState} from "react";

const Pagination = ({showPerPage}) => {
    const [count, setCount] = useState(1);
       
  return (
    <>
      <nav aria-label="Page navigation example">
        <button className="btn btn-primary">Page</button>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#"  onClick={()=>{setCount(count+1)}}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
