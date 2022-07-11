import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { usePromiseTracker } from "react-promise-tracker";

import { trackPromise } from 'react-promise-tracker';
export function MyForm(props) {
   
    const [startDate, setStartDate] = useState(new Date());
    const [exitDate, setExitDate] = useState(new Date());
    const [redirect,setRedirect] = useState(0)
    const [user, setUser] = useState({startdate:String(startDate),exitdate:String(exitDate),gender:'Male'})
    const handlenameChange = (event) => {
        const name = event.target.value

        setUser({ name: name, college_name: user.college_name, gender: user.gender,phone:user.phone,  startdate:user.startdate, exitdate:user.exitdate, events: user.events });

    }
    const handlecollegeChange = (event) => {
        const college = event.target.value

        setUser({ name: user.name, college_name: college, gender: user.gender,phone:user.phone,  startdate:user.startdate, exitdate:user.exitdate, events: user.events });
      
    }
    const handlephoneChange = (event) => {
        const phone = event.target.value

        setUser({ name: user.name, college_name: user.college,phone: phone, gender: user.gender,  startdate:user.startdate, exitdate:user.exitdate, events: user.events });
       
    }
    const handlegender = (event) => {
        const gender = event.target.value

        setUser({ name: user.name, college_name: user.college_name, gender: gender,phone:user.phone, startdate:user.startdate, exitdate:user.exitdate, events: user.events });
      
    }
    const handleevent = (event) => {
        const even = event.target.value

        setUser({ name: user.name, college_name: user.college_name, gender: user.gender,phone:user.phone, startdate:user.startdate, exitdate:user.exitdate, events: even });
   
    }
    const handleentrydate = (date) => {
        const d = String(date)
        console.log(d)
        setStartDate(date)
        setUser({ name: user.name, college_name: user.college_name, gender: user.gender,phone:user.phone, startdate: d, exitdate: user.exitdate , events: user.events});
        
    }
    const handleexitdate = (date) => {
        const d = String(date)
        
        setExitDate(date)
        setUser({ name: user.name, college_name: user.college_name, gender: user.gender,phone:user.phone, startdate: user.startdate, exitdate:d, events: user.events });
        
    }
    const onSubmit = (event) => {
        trackPromise(
            fetch('https://backend-accomodation.herokuapp.com/store-data', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // We convert the React state to JSON and send it as the POST body
                body: JSON.stringify(user)
            }).then(function (response) {
                if(response.status==200){
                    setRedirect(1)
                }
            }));

        event.preventDefault();




    }
    const LoadingIndicator = props => {
        const { promiseInProgress } = usePromiseTracker();
        return (
            promiseInProgress && (
                <>
                    <br></br>
                    <progress className="progress w-56"></progress>
                </>
            )
        );
    }
    if(redirect===1){
        return(
            <div className='grid place-items-center min-h-screen text-center'>
                <p className='text-2xl font-bold text-black'>Form has been successfully submitted</p>
            </div>
        )
    }
    else{
    return (


        

        <form onSubmit={onSubmit} className="bg-transparent">
            <div className='grid gap-4 w-full mb-10'>
                <div className='md:w-3/4'>
                    <label class="label">
                        <span class="label-text text-left">Name</span>
                    </label>
                    <input required className='input bg-black bg-opacity-75 w-full' type="text" name="name" placeholder='Name' onChange={handlenameChange} />
                </div>
                <div className='w-1/3'>
                    <label className="label">
                        <span className="label-text text-left">Gender</span>
                    </label>
                    <div className="form-control">
                        <div className="input-group rounded-md">
                            <select required className="select bg-black bg-opacity-75 rounded-md" onChange={handlegender}>
                                <option selected>Male</option>
                                <option>Female</option>
                                <option>Transgender</option>
                                <option>Non-Binary</option>
                                <option>I prefer not to say</option>
                            </select>
                        </div>
                    </div>



                </div>
                <div className='w-3/4 md:w-3/4'>
                    <label className="label">
                        <span className="label-text text-left">Phone Number</span>
                    </label>
                    <input required className='input bg-black bg-opacity-75 w-full' type="text" name="name" placeholder='Phone' onChange={handlephoneChange} />
                </div>
                <div className='w-3/4 md:w-3/4'>
                    <label className="label">
                        <span className="label-text text-left">College Name</span>
                    </label>
                    <input required className='input bg-black bg-opacity-75 w-full' type="text" name="name" placeholder='College Name' onChange={handlecollegeChange} />
                </div>
                <div className='w-3/4 md:w-3/4'>
                    <label className="label">
                        <span className="label-text text-left">Registered Event</span>
                    </label>
                    <input required className='input bg-black bg-opacity-75 w-full' type="text" name="name" placeholder='Event or Workshop name' onChange={handleevent} />
                </div>
                <div className='form-control'>
                    <label className='label'>
                    <span className="label-text text-left">Entry date</span>
                    </label>
                    <div><DatePicker dateFormat="   dd-MM-yyyy" className='bg-black bg-opacity-75 rounded-md w-3/4 md:w-3/4 min-h-12' selected={startDate} onChange={(date) => handleentrydate(date)} />
                </div>
                </div>
                <div className='form-control'>
                    <label className='label'>
                    <span className="label-text text-left">Exit date</span>
                    </label>
                    <div><DatePicker dateFormat="   dd-MM-yyyy" className='bg-black bg-opacity-75 rounded-md w-3/4 md:w-3/4 min-h-12' selected={exitDate} onChange={(date) => handleexitdate(date)} />
                </div>
                </div>
                <LoadingIndicator />
                <br/>
                    <div className='flex items-center justify-center md:w-3/4'>
                    
                    <button type="submit" className='btn btn-warning' style={{background: "linear-gradient(to right, #1FA2FF 0%, #12D8FA  51%, #1FA2FF  100%)"}}>
                        Submit
                    </button>
                </div>
                
            </div>
        </form>
    );
    }
}

export default MyForm;