import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Interceptor from "../interceptor";

function EditEmpForm({preloadedValues, id}) {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { register, formState: { errors }, handleSubmit, reset } = useForm({defaultValues: preloadedValues});

  const onSubmit = async data => {

    const response = await Interceptor('put', `book/${id}`, data)

    if(response === 11000 ){
      setError('The name of the Book is already available')
    }
    else {
      navigate('/book-listing', { replace: true });
      reset();
    }
  }

  const handleChange = () => {
    setError('')
  }

  return (
    <div style={{maxWidth: '539px', margin: '0 auto'}} className="container p-4 justify-content-center align-items-center">
      {error && <span className="text-danger">{error}</span>}
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-outline mb-4">
      <label className="form-label">Name of the Book</label>
      <input {...register("book", { required: true })} onChange={handleChange} className="form-control" />
      {errors.book?.type === 'required' && <span className="text-danger">Book name is required</span>}
      </div>
      <button type="submit" className="btn btn-primary btn-block">Add</button>
      </form>
    </div>
  );
}

export default EditEmpForm;