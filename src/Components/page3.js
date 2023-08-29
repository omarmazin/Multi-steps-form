import React,{useState} from "react"
import "./page3.css"
export default function Page3() {
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
    const [checkbox] = useState([{
        title:"Online service",
        desc:"Access to multiplayer games",
        price:"1"
    },{
        title:"Larger storage",
        desc:"Extra 1TB of cloud save",
        price:"2"
    },{
        title:"Customizable Profile",
        desc:"Custome theme on your profile",
        price:"2"
    }])
    

    const [checkedItems, setCheckedItems] = useState([]);
        const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = "/page4"
      }
      const back = ()=>{
        window.location.href = "/page2"
      }
      const addOns = window.localStorage.setItem('Add-ons',checkedItems)

    const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;
      if (checked) {
        setCheckedItems((prevCheckedItems) => [...prevCheckedItems, name]);
      } else {
        setCheckedItems((prevCheckedItems) =>
          prevCheckedItems.filter((item) => item !== name)
        );
      }
    }
    return(
        <div className="page3">
            <aside className="asideBar3">
                <nav className="asideContainer">
                    {
                        items.map((items,index)=>(
                            <div key={index} className="circle">
                            <div  className="section"
                            style={index ===2?{backgroundColor:"white",color:"rgb(75, 75, 170)"}:{}}
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

                    <p className="head">Pick add-ons</p>
                    <p className="head-text">Add-ons help enhance your gaming experience .</p>
                    <div className="checkbox-container">
                        {
                            checkbox.map((index)=>(
                                <div key={index} className="div">
                                    <input
                                        type="checkbox"
                                        name={index.title}
                                        checked={checkedItems.includes(index.title)}
                                        onChange={handleCheckboxChange} 
                                    />
                                    <div className="subject">
                                        <p className="add-head">{index.title}</p>
                                        <p className="add-desc">{index.desc}</p>
                                    </div>
                                    <p className="add-price">+{index.price}/mo</p>
                                    
                                </div>
                            ))
                            
                        }
                    <button className="back" onClick={back} >Go back</button>   
                    <button className="submit" type="submit">Next Step</button> 

                    </div>
                </form>
            </main>
        </div>
    )   
}