import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { deleteStudentAPI, getStudentsAPI } from '../services/allAPI'
import { useNavigate } from 'react-router-dom'

const Studentdetails = () => {

  const [students,setStudents] = useState([])
  const navigate = useNavigate()
  
  const getStudents = async()=>{
    const result = await getStudentsAPI()
    if(result.status === 200){
      setStudents(result.data)
    }
  }

  const handleDelete = async(id)=>{
    const result = await deleteStudentAPI(id)
    if(result.status === 200){
      alert("Student Deleted")
      getStudents()
    }
  }

  const handleUpdate = async(student)=>{
     navigate("/student-form",{state:student})
  }





  useEffect(()=>{
    getStudents()
  },[])

  return (
    <>
    <Header/>
    <div className="container">
      <h3 className="text-center mt-4 text-success">Student Details</h3>
      <table className='table table-bordered mt-4'>
        <thead className='text-dark'>
          <tr>
            <th>Sl No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((item,index)=>(
            <tr key={index}>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.course}</td>
            <td>{item.phone}</td>
            <td><button onClick={()=>handleUpdate(item)} className='btn btn-warning'>Edit</button>
            <button onClick={()=>handleDelete(item._id)} className='btn btn-danger ms-2'>Delete</button></td>
          </tr>
          ))
            
          }
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Studentdetails