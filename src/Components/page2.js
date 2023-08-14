import React, { useState } from "react"
import "./page2.css"
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
            <main className="mainContainer">l
                    dsewew
            </main>
        </div>
    )
}