import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    // <BrowserRouter>
    //   <div className="App">
    <Routes>
      <Route path="/" element={<Main />}></Route>
    </Routes>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
