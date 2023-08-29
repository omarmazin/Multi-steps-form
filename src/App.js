
import './App.css';
import Page1 from './Components/page1';
import Page2 from './Components/page2';
import Page3 from "./Components/page3";
import Page4 from './Components/page4';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route index element={<Page1/>} />
        <Route path="/Page2" element={<Page2/>}/>
        <Route path="/Page3" element={<Page3/>}/>
        <Route path="/Page4" element={<Page4/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
