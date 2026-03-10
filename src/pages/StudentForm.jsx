import React, { useState } from 'react'
import Header from '../components/Header'
import { addStudentAPI, editStudentAPI } from '../services/allAPI'
import { useLocation } from 'react-router-dom'
import './Home.css'

const StudentForm = () => {

  const location = useLocation()
  const updateStudent= location.state

  const [student,setStudent] = useState({
    name:updateStudent?.name || "",
    email:updateStudent?.email || "",
    course:updateStudent?.course || "",
    phone:updateStudent?.phone || ""
  })
  

  const handleSubmit =async(e)=>{
    e.preventDefault()
    if(updateStudent){
      const result = await editStudentAPI(updateStudent._id,student)
    
    if(result.status===200){
      alert("Student Updated Successfully")
      setStudent({
        name:"",
        email:"",
        course:"",
        phone:""
      })
      }
    }else{
      const result = await addStudentAPI(student)
      if(result.status===200){
        alert("Student Added Successfully")
        setStudent({
        name:"",
        email:"",
        course:"",
        phone:""
      })
      }
    }
  }

  

  return (
    <>
    <Header/>
    <div className='container'>
      <h3 className='text-center text-dark p-5'>Add Student Details</h3>
      <form className='d-flex justify-center items-center' onSubmit={handleSubmit}>
        <div className='card border rounded text-center mt-4 p-4' style={{width:"500px",marginLeft:"100px"}}>
          <div className="mb-3 d-flex align-items-center ">
            <label className='form-label'>Name:</label>
            <input type="text" value={student.name} placeholder='Enter Your Name' className='ms-2 w-full bg-white rounded p-2 form-control' onChange={(e)=>setStudent({...student,name:e.target.value})}/>
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label className='form-label'>Email:</label>
            <input type="text" value={student.email} placeholder='Enter Your Email' className='ms-2 w-full bg-white rounded p-2 form-control' onChange={(e)=>setStudent({...student,email:e.target.value})}/>
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label className='form-label'>Course:</label>
            <input type="text" value={student.course} placeholder='Enter Your Course' className='ms-2 w-full bg-white rounded p-2 form-control' onChange={(e)=>setStudent({...student,course:e.target.value})}/>
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label className='form-label'>Phone:</label>
            <input type="text" value={student.phone} placeholder='Enter Your Phone' className='ms-2 w-full bg-white rounded p-2 form-control' onChange={(e)=>setStudent({...student,phone:e.target.value})}/>
          </div>
          <div>
            <button className='btn text-light w-100 bg-dark'>Submit</button>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default StudentForm