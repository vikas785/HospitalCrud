import React from 'react'
import {Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {toast} from 'react-toastify'


const Home = () => {

  const patients = useSelector(state=>state);
  const dispatch = useDispatch()

  const deletePatient = (id)=>{
    dispatch({type: "DELETE_PATIENT", payload: id})
    toast.success("Patient details updated successfully")

  }

  
  

  return (
    <div className="container">

        <div className="row">
            <div className="col-md-12 my-5 text-end">
                <Link to="/add" className="btn btn-outline-dark">Add Contact</Link>
            </div>
            <div className="col-md-6 mx-auto">
            
              <table className='table table-hover'>
                <thead className="text-white bg-dark text-center">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Number</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                

                <tbody className="text-center">
                  {
                    patients.map((patient,id)=>(
                      <tr key={id}>
                        <td>{id + 1}</td>
                        <td>{patient.name}</td>
                        <td>{patient.email}</td>
                        <td>{patient.number}</td>
                        <td>
                          <Link to={`/edit/${patient.id}`} className="btn btn-small btn-primary ">
                            Edit
                          </Link>

                          <button type="button" onClick={()=>deletePatient(patient.id)} className="btn btn-small btn-danger ms-2">Delete</button>
                        </td>

                      </tr>
                    ))
                  } 
                </tbody>

              </table>
            
            </div>
        </div>
         
    </div>
  )
}

export default Home