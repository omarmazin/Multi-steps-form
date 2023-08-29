import React,{useState} from "react";
import "./page4.css"
export default function Page4() {
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
    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = "/thanx"
      }
    return(
        <div>
            <div className="page3">
            <aside className="asideBar3">
                <nav className="asideContainer">
                    {
                        items.map((items,index)=>(
                            <div key={index} className="circle">
                            <div  className="section"
                            style={index ===3?{backgroundColor:"white",color:"rgb(75, 75, 170)"}:{}}
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

                    <p className="head">Finishing up</p>
                    <p className="head-text">Double-check everything looks OK before confirming.</p>
                    <div className="checking-container">

                        <p>Arcade monthly </p><a href="/Page2" style={{color:"blue",marginBottom:'20px;'}}>Change</a>
                        <p>$9/mo</p>



                    </div>
                </form>
            </main>
        </div>
        </div>
    )
    
}
