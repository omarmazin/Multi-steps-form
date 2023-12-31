import React, { useState } from "react";
import "./page1.css";
// import Page2 from "./page2"
export default function Page1(){
    const [nameInput, setnameInput] = useState('');
    const [emailInput, setemailInput] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    
    const nameHandler = (event) => {
        setnameInput(event.target.value);
    };
    const emailHandler = (event)=>{
        setemailInput(event.target.value)
    }
    const phoneHandler = (event) =>{
        setphoneNumber(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("name",nameInput)
        localStorage.setItem("email",emailInput)
        localStorage.setItem("phone",phoneNumber)
        if (nameInput.trim() === '' || emailInput.trim() === '' || phoneNumber.trim() === '') {
            alert('All inputs are required');
          } else {
            // Redirect to Page2 if all inputs are valid
            window.location.href = "/Page2"
        }
      };
    
    const [items,setItems] = useState([{
        id:1,
        step:1,
        paragraph:"YOUR INFO",

    },
    {
        id:2,
        step:2,
        paragraph:"SELECT PLAN",
    },
    {
        id:3,
        step:3,
        paragraph:"ADD-ONS",
        
    },
    {
        id:4,
        step:4,
        paragraph:"SUMMARY",
        
    }]
    )
    return(
        <div className="page1">
            <aside className="asideBar1">
                <nav className="asideContainer">
                        {
                            items.map((items,index)=>(
                                <div key={index} className="circle">
                                    <div  className="section"
                                    style={index ===0?{backgroundColor:"white",color:"rgb(75, 75, 170)"}:{}}
                                     >
                                        {items.id}
                                        </div>
                                    <div className="textHandler">
                                        <p className="step">STEP : {items.step}</p>
                                        <p className="paragraph">{items.paragraph}</p>
                                    </div>
                                </div>  ))}
                </nav>
            </aside>
            <main className="mainContainer">
                <form onSubmit={handleSubmit}>
                    <p className="head">Personal Info</p>
                    <p className="head-text">Please provide your name, email address , and phone number .</p>
                    <div className="inputContainer">
                        <label htmlFor="nameInput">Name :</label><br/>
                        <input
                            type="text"
                            id="nameInput"
                            value={nameInput}
                            onChange={nameHandler}
                            required
                            placeholder="e.g. Omar Bawzir"
                        />
                        <br/>
                        <label htmlFor="emailInput">Email :</label>
                        <br/>
                        <input
                            type="email"
                            id="emailInput"
                            value={emailInput}
                            onChange={emailHandler}
                            required
                            placeholder="e.g. OmarBawzir@lorem.com"
                        />
                        <br/>
                        <label htmlFor="phoneInput">Phone Number :</label>
                        <br/>
                        <input
                            type="text"
                            id="phoneInput"
                            value={phoneNumber}
                            onChange={phoneHandler}
                            placeholder="e.g +1 234 567"
                            required
                        />
                    </div>
                        <button className="submit" type="submit">Next step</button>
                </form>
            </main>
        </div>
    )
}