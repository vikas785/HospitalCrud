import React,{useEffect, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link, useParams, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify'




const EditPatient = () => {
    const {id} = useParams()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")

    const patients = useSelector((state)=>state)
    const dispatch = useDispatch()

    const navigate = useNavigate() 

    const currentPatient = patients.find(
        (patient) => patient.id === parseInt(id)
    )

    useEffect(()=>{
        if(currentPatient){
            setName(currentPatient.name)
            setEmail(currentPatient.email)
            setNumber(currentPatient.number)
        }
    },[currentPatient])

   

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(!name || !email || !number){
            return toast.warning("Please fill all the fields!");
        }
       
        const checkEmail = patients.find(
            (patient)=> patient.id !== parseInt(id) && patient.email === email && email
        )

        const checkNumber = patients.find(
            (patient)=> patient.id !== parseInt(id) &&  patient.number === parseInt(number)
        )

        

        if(checkEmail){
            return toast.error("This email already exists!");
        }

        if(checkNumber){
            return toast.error("This number already exists!");
        }

        const data ={
            id: parseInt(id),
            name,
            email,
            number
 
        }

        dispatch({type:"UPDATE_PATIENT", payload:data})
        toast.success("Patient details updated succesfully")
        navigate("/")
    }

  return (

    <div className="container">
        {
           currentPatient ? (
            <div className="row">
                <h1 className=" display-3 my-5 text-center">
                    Edit Patient Details {id} 
                    
                </h1>
                <div className="col-md-6 shadow mx-auto p-5 ">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group p-2">
                            <input type="text" placeholder="Name" className="form-control"
                             value={name} 
                             onChange={(e)=>setName(e.target.value)} />
                        </div>
                        <div className="form-group p-2">
                            <input type="email" placeholder="Email" className="form-control"
                             value={email}
                             onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <div className="form-group p-2">
                            <input type="number" placeholder="Phone Number" className="form-control"
                             value={number}
                             onChange={(e)=>setNumber(e.target.value)} />
                        </div>

                        <div className="form-group p-2">
                            <input type="submit" value="Update Patient" className="btn  btn-dark " />
                            <Link to="/" className="btn  btn-danger ms-3" >Cancel</Link>
                        </div>

                    </form>
                    
                
                </div>
            </div>
           ):(
               <h1 className="display-3 my-5 text-center">
                   Incorrect Student Id
               </h1>
           )
        }

        
         
    </div>
  )
}

export default EditPatient