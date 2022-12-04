import Header from "./components/header/Header";
import {  Overlay } from "./utils";
import Sidebar from "./components/sidebar/SideBar";
import { useEffect, useState } from "react";
import Home from "./routes/home/Home";
import { Route } from 'react-router-dom';
import Login from './routes/login/Login';
import SignUp from './routes/singup/SignUp';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if(isSidebarOpen === true){
      document.body.style.overflow = "hidden"
    }
    else{
      document.body.style.overflow = "auto"
    }
  }, [isSidebarOpen])

  return (
    <>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      { isSidebarOpen && <Overlay setIsSidebarOpen={setIsSidebarOpen}/>}
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/login">
          <Login/>
      </Route>
      <Route path="/signup">
          <SignUp/>
      </Route>
      
      

    </>
  );
}


export default App;
