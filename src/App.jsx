import React, { useState } from "react";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import Body from "./component/Body";
import Footer from "./component/Footer";
import catRunning from "./assets/gif/running-cat.gif";
import "./App.scss";

function App() {
  const [load, setLoading] = useState(true);
  setTimeout(() => {
    setLoading((load) => !load);
  }, 2000);

  return (
    <>
      <Header />
      <SideBar />
      <Body />
      <Footer />
      <div className={load ? "loading" : "disable"}>
        <div className="_icon">
          <img src={catRunning} alt="running-cat" />
          <br />
        </div>
      </div>
    </>
  );
}

export default App;
