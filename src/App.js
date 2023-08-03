// import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";

function App() {
  return (
    // <BrowserRouter>
    //   <div className="App">
    <Routes>
      <Route path="/" element={<Main />}>
        <Route />
      </Route>
    </Routes>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
