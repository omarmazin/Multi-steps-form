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
        id:1,
        plan:"Arcade",
        yearlyPrice:90,
        monthlyPrice:9,
        icon:iconArcade
    },{
        id:2,
        plan:"Advanced",
        yearlyPrice:120,
        monthlyPrice:12,
        icon:iconAdvanced
    },{
        id:3,
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
      const [selectedChoice, setSelectedChoice] = useState(null); // Initialize with no choice selected
      const handleChoiceClick = (index) => {
        setSelectedChoice(index); 
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        const price = window.localStorage.setItem("Price","")
        const plan = window.localStorage.setItem("Plan","")
      }
      
      const [clickedDivId, setClickedDivId] = useState(null);

      const handleClickMonthly = (event) => {
        const clickedId = event.target.id;
        setClickedDivId(clickedId);
        console.log('Clicked div id:', clickedId);
        switch (clickedId){
            case '1':
                window.localStorage.setItem("Price","9$")
                window.localStorage.setItem("Plan","mo")
                break;
            case '2':
                window.localStorage.setItem("Price","12$")
                window.localStorage.setItem("Plan","mo")
                break;
            case '3':
                window.localStorage.setItem("Price","15$")
                window.localStorage.setItem("Plan","mo")
                break;
            default:
                console.error("Not Found");
        }
      };
      const back = ()=>{
        window.location.href = "/"
      }
      const handleClickYearly = (event) =>{
        const clickedId = event.target.id;
        setClickedDivId(clickedId);
        console.log('Clicked div id: ', clickedId);
        switch (clickedId){
            case '1':
                window.localStorage.setItem("Price","90$")
                window.localStorage.setItem("Plan","yr")
                break;
            case '2':
                window.localStorage.setItem("Price","120$")
                window.localStorage.setItem("Plan","yr")
                break;
            case '3':
                window.localStorage.setItem("Price","150$")
                window.localStorage.setItem("Plan","yr")
                break;
            default:
                console.error("Not Found");
        }

    } 
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
                <form onSubmit={handleSubmit}>
                    <p className="head">Select your plan</p>
                    <p className="head-text">You have the option of monthly or yearly billing.</p>
                    <div className="plan-container">
                        {
                            
                            plan.map((plan,index)=>(
                                <div key={index} className="card" onClick={() => handleChoiceClick(index) } style={{border: selectedChoice === index ? '1px solid blueviolet' : 'none', }}
                                >
                                    <img src={plan.icon} alt={plan.plan}/>
                                    <p className="planName" >{plan.plan}</p>
                                    
                                    {
                                        isToggled || <p id={plan.id} onClick={handleClickMonthly} className="planPrice" >${plan.monthlyPrice}/mo</p>

                                    }
                                    {isToggled&&
                                    <p id={plan.id} onClick={handleClickYearly} className="planPrice">${plan.yearlyPrice}/yr</p>   
                                                                
                                    }
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
                    <button className="back" onClick={back} >Go back</button>   
                    <button className="submit" type="submit">Next Step</button> 
                     
                </form>
            </main>
        </div>
    )
}