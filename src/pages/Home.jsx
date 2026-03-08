import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    
    <>
    <Header/>
      <div>
        <section>
          <div className="row" >
            <div className="col-4"></div>
            <div className="col-4 card py-5 border rounded text-center mt-5 text-light">
              <h2 className="text-dark">Welcome To Students Portal</h2>
              <p className="text-dark">Affiliated By APJ Abdul Kalam Technological University</p>
              <h3 className="text-dark">ABC COLLEGE</h3>
              <Link to={"/student-form"} ><button className='btn text-white' style={{backgroundColor:"orange"}}>Start</button></Link>
            </div>
            <div className="col-4"></div>
          </div>
          
        </section>
      </div>
    </>
  )
}

export default Home