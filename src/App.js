import Login from "./components/login";
import Task from "./components/task";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateCategory from "./components/createCategory";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-category" element={<CreateCategory/>} />
      </Routes>
    </div>
  );
}

export default App;
