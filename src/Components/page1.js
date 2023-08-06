import React, { useState } from "react";
import "./main.css"
export default function Page1(){
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

                                </div>  
                            ))
                        }
                </nav>
            </aside>
            <main className="mainContainer">
                <form>
                    <p className="head">Personal Info</p>
                    <p className="head-text">Please provide your name, email address , and phone number .</p>
                </form>
            </main>
        </div>
    )
}