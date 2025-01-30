"use client"
import Image from "next/image";
import Todo from "./components/todo/Todo";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: '',
  })

  const onChangeHandler = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setFormData(form => ({...form,[name]:value}));
    console.log(formData)
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      //api code 


      toast.success('Success')

    } catch (error) {
      //show error message
      toast.error("error")
    }
  }

  return (
    <>
    <ToastContainer theme="dark"/>
      <form onSubmit={handleSubmit}  className="flex items-start flex-col gap-2 w-[80%] max-w-[600] mt-24 px-2 mx-auto ">
        <input onChange={onChangeHandler}
        value={formData.title}
          type="text"
          name="title"
          placeholder="inter title"
          className="px-3 py-2 border-2 w-full "
        />
        <textarea onChange={onChangeHandler}
        value={formData.description}
          name="description"
          placeholder="inter description"
          className="px-3 py-2 border-2 w-full "
        ></textarea>
        <button type="submit" className="bg-orange-600 py-3 px-11 text-white">
          Add todo
        </button>
      </form>
    {/* ==================== */}
      <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID:
              </th>
              <th scope="col" className="px-6 py-3">
               Title: 
              </th>
              <th scope="col" className="px-6 py-3">
                description 
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
          <Todo></Todo>

          </tbody>
        </table>
      </div>
    </>
  );
}
