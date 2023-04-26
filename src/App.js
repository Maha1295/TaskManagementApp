import Login from "./components/login";
import Task from "./components/task";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateCategory from "./components/createCategory";
import { useState } from "react";
import LoadCategory from "./components/loadCategory";

function App() {
  const [userName, setUserName] = useState("");

  const getUserName = (uName) => {
    setUserName(uName);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login setUserName={getUserName} />} />
        <Route path="/home" element={<Home userName={userName} />} />
        <Route path="/create-category" element={<CreateCategory />} />
        <Route path="/load-category" element={<LoadCategory />} />
      </Routes>
    </div>
  );
}

export default App;
