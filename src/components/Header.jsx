
const Header = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-dark px-4'>
        <div className="d-flex align-items-center ">
          <img src="https://capstoneguide.com/wp-content/uploads/2020/09/Student-Management-System-Capstone-Project-Document.jpg" alt="students" style={{ width: "40px", height: "40px", marginRight: "10px" }} />
          <h6 className="text-light fw-bolder">Student Management System</h6>
        </div>
        <div className="ms-auto">
          <a href="/student-form" className="text-decoration-none me-4 text-light">Add Students</a>
          <a href="/student-details" className="text-decoration-none me-4 text-light">View Students</a>

        </div>

      </nav>
    </>
  )
}

export default Header