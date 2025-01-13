
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   BrowserRouter
// } from 'react-router-dom';
function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);
  const showAlert = (msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    });
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
  const toggleB = ()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(4 8 41)'
      showAlert("Dark Mode","success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(()=>{
      // document.title = "TextUtils is a amazing";
      // },2000);
      // setInterval(()=>{
      //   document.title = "Install TextUtils";
      //   },1500);
        
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode","success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="TextUtils" mode={mode} toggle={toggleB} />
        <Alert alert={alert} />
        <div className="container my-3" mode={mode}>
                {/* <Routes>
                  <Route path="/about" element={<About />} />
                </Routes>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <TextForm
                        showAlert={showAlert}
                        heading="Enter the text to analyze below"
                        mode={mode}
                      />
                    }
                  />
                </Routes> */}
                <TextForm
                        showAlert={showAlert}
                        heading="Enter the text to analyze below"
                        mode={mode}
                />
          </div>
      {/* </BrowserRouter> */}
      </>
  );
}

export default App;
