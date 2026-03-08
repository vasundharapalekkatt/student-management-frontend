import  Home  from "./pages/Home"
import  StudentForm  from "./pages/StudentForm"
import  Studentdetails  from "./pages/Studentdetails"
import  Header  from "./components/Header"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/student-form" element={<StudentForm/>}/>
        <Route path="/student-details" element={<Studentdetails/>}/>
        <Route path="/header" element={<Header/>}/>
      </Routes>
    </>
  )
}

export default App
