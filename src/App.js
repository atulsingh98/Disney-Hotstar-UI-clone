import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Detail from "./components/Detail";
import { useSelector } from "react-redux";

function App() {
  const authState = useSelector((state) => state.auth);
  const user = authState.name === "" || !authState.name;
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="detail/:Id" element={<Detail />} />
        <Route path="/home" element={<Home user={user} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
