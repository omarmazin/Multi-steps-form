import React, { useState } from "react"
import "./page2.css"
import iconArcade from "../assets/icon-arcade.svg"
import iconAdvanced from "../assets/icon-advanced.svg"
import iconPro from "../assets/icon-pro.svg"
import Toggle from 'react-toggle';

export default function Page2(){
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
    }])
    const [plan,setPlan] = useState([{
        plan:"Arcade",
        yearlyPrice:90,
        monthlyPrice:9,
        icon:iconArcade
    },{
        plan:"Advanced",
        yearlyPrice:120,
        monthlyPrice:12,
        icon:iconAdvanced
    },{
        plan:"Pro",
        yearlyPrice:150,
        monthlyPrice:15,
        icon:iconPro
    }
    ])
    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => {
        setIsToggled(!isToggled);
      };
    return(
        <div className="page2">
            <aside className="asideBar2">
                <nav className="asideContainer">
                    {
                        items.map((items,index)=>(
                            <div key={index} className="circle">
                            <div  className="section"
                            style={index ===1?{backgroundColor:"white",color:"rgb(75, 75, 170)"}:{}}
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
                <p className="head">Select your plan</p>
                <p className="head-text">You have the option of monthly or yearly billing.</p>
                <div className="plan-container">
                    {
                        plan.map((plan,index)=>(
                            <div className="card">
                                <img src={plan.icon} alt={plan.plan}/>
                                <p className="planName">{plan.plan}</p>
                                <p className="planPrice">${plan.monthlyPrice}/mo</p>
                            </div>
                        ))
                    }
                </div>
                <div className="toggle-labels">
                    <span>Montly</span>
                    <label className="toggle-switch">
                        <input type="checkbox" checked={isToggled} onChange={handleToggle} />
                        <span className="slider"></span>
                    </label>
                    <span>Yearly</span>
                </div>

                
            {/* {isToggled && 
            <p className="planPrice" >${plan.monthlyPrice}/yr</p>
            
            } */}
            </main>
        </div>
    )
}