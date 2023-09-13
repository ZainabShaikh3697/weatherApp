import './App.css';
import axios from 'axios';
import { useState } from 'react';
import LandingPage from './LandingPage/LandingPage';
import ResultPage from './ResultPage/ResultPage';

function App() {
  const [cityVal, setCity] = useState('')
  const [Apidata, setApidata] = useState({})
  const [show, setShow] = useState(true)
  const [error, setError] = useState('')
  const callWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=imperial&appid=c33953d1b992154e8a23b674115f1a0b`)
      .then((response) => {
        setApidata(response.data)
        setError("")
      }).catch((errorMsg) => {
        // setError(errorMsg.response.data.message)
        if (errorMsg.response.data.message === "city not found") {
          setError("Invalid City Name!!")
        }
      })
  }
  const inputChange = (e) => {
    setCity(e.target.value)
    if (e.target.value === '') {
      setShow(true)
    }
    else {
      setShow(false)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='App-box'>
          <div className='App-textbox' >
            <div className='App-input'>
              <div>
                <input className="City-input" placeholder='City Name' value={cityVal} onChange={(e) => inputChange(e)}></input>
              </div>
              <div className='error-msg'>{error}</div>
            </div>
            <button className='btn-input' onClick={callWeather} disabled={show}> SEARCH </button>
          </div>
          {Object.keys(Apidata).length === 0 && <LandingPage />}

          {Object.keys(Apidata).length > 0 && <ResultPage apidata={Apidata} />} {/* <LandingPage apidata={apidata} /> */}
        </div>
      </header>
    </div>
  );
}


export default App;
