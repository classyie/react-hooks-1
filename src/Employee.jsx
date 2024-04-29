

import React, { useState } from "react";

function Employee() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployeed, setStatus] = useState("yes")
    const nameUpdate = (event) => {
        // setName("Harshit")
        setName(event.target.value);
    }
    const ageUpdate = (event) => {
        setAge(event.target.value);
    }
    const statusUpdate = () => {
        if (age<18){
            setStatus("No")
        }
        else(
            setStatus("Yes")
        )
    }
    return (
        <>
            <input type="text" onChange={nameUpdate} placeholder="Enter Your Name"/> 
            {name}
            
            <br />
            <input type="number" onChange={ageUpdate}  />
            <p>{age}</p>
            <button onClick={statusUpdate} >IsEMployee</button>
            <p>{isEmployeed}</p>
        </>
    )
}
export default Employee;