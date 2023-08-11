
import './App.css';
import Page1 from './Components/page1';
// import Page2 from './Components/page2/page2';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route index element={<Page1/>} />
        {/* <Route path="Page2" element={<Page2/>}/> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
