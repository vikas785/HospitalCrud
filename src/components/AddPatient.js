import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'

const AddPatient = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")

    const patients = useSelector((state)=>state)
    const dispatch = useDispatch()

    const navigate = useNavigate() 

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(!name || !email || !number){
            return toast.warning("Please fill all the fields!");
        }
       
        const checkEmail = patients.find(
            (patient)=> patient.email === email && email
        )

        const checkNumber = patients.find(
            (patient)=> patient.number === parseInt(number)
        )

        

        if(checkEmail){
            return toast.error("This email already exists!");
        }

        if(checkNumber){
            return toast.error("This number already exists!");
        }

        const data ={
            id: patients[patients.length - 1].id + 1,
            name,
            email,
            number
 
        }

        dispatch({type:"ADD_PATIENT", payload:data})
        toast.success("Patient added succesfully")
        navigate("/")

        

        


    }
    
    




  return (
    <div className="container">

        <div className="row">
            <h1 className=" display-3 my-5 text-center">
                Add Patient Details
                
            </h1>
            <div className="col-md-6 shadow mx-auto p-5 ">
                <form onSubmit={handleSubmit}>
                    <div className="form-group p-2">
                        <input type="text" placeholder="Name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                    </div>
                    <div className="form-group p-2">
                        <input type="email" placeholder="Email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="form-group p-2">
                        <input type="number" placeholder="Phone Number" className="form-control" value={number} onChange={(e)=>setNumber(e.target.value)} />
                    </div>

                    <div className="form-group p-2">
                        <input type="submit" value="Add Patient" className="btn btn-block btn-dark w-100" />
                    </div>

                </form>
                
            
            </div>
        </div>
         
    </div>
  )
}

export default AddPatient