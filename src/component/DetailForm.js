import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const DetailForm = () => {
  let navigate = useNavigate();
  const [task, setTask] = useState({
    id: "",
    name: "",
    phone: "",
  });

  const { id, name, phone} = task;
  const onInputChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://jsonplaceholder.typicode.com/users", task);
    navigate("/");
  };
  return (
    <>
      <div className="container my-5">
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            ID
          </label>
          <input
            className="form-control"
            type="text"
            name="id"
            placeholder="Enter id"
            value={id}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            name="title"
            placeholder="Enter Name"
            value={name}
            onChange={onInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            phone
          </label>
          <input
            className="form-control"
            type="text"
            name="phone"
            placeholder="Enter Phone"
            value={phone}
            onChange={onInputChange}
          />
        </div>
        <button
          onClick={onSubmit}
          type="button"
          className="btn btn-outline-primary mx-2"
        >
          Submit
        </button>
        <Link to='/'>
        <button type="button" className="btn btn-outline-danger">
          Cancel
        </button>
          </Link>
      </div>
    </>
  );
};

export default DetailForm;
