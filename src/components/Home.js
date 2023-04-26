import { useNavigate } from "react-router-dom";

import Nav from "../utils/nav";
import Card from "../utils/card";
import "./home.css";

const Home = (props) => {
  
  const categoryOperations = [
    "Create Category",
    "Load Category",
    "List Category",
    "Search",
  ];

  const navigate = useNavigate();

  const onClickHandler = (event) =>{
    console.log(event.target.value)
    if(event.target.value === categoryOperations[0]){
      navigate("/create-category")
    }
    if(event.target.value === categoryOperations[1]){
      navigate("/load-category")
    }
  }

  const renderCatrgoryOptions = () => {
    const opertaions = categoryOperations.map((operation) => {
      return (
        <li>
          <button onClick={onClickHandler} className="op-btn" value={operation}>{operation}</button>
        </li>
      );
    });
    return opertaions;
  };

  return (
    <>
      <Nav>Welcome {props.userName} To Manage Task</Nav>
      <Card>
          <ul>{renderCatrgoryOptions()}</ul>
      </Card>
    </>
  );
};

export default Home;
