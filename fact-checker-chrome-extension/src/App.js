import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

const DJANGO_ENDPOINT = "http://127.0.0.1:8000"

const handleInputChange = (event, setInput) => {
  setInput(event.target.value);
}

function App() {
  const [input, setInput] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`http://localhost:8000/fact-check/?input_string=${input}`)
      setResponse(response.data.result.response)
      setLoading(false)

    }
    catch (e) {
      console.log("error while getting api response:", e)
    }
  }

  return (
    <div className="App">
      <div className="title">
        Fact Checker
      </div>
      <div className="content-fields">
        <input type='text' placeholder='Type text here' onChange={(event) => handleInputChange(event, setInput)} />
        <button onClick={() => handleClick()}>Check</button>
      </div>
      <div>
        {response === ""
          ? <p>Input your tweet to generate a response.</p>
          : <p>{JSON.stringify(response)}</p>
        }
      </div>
      {
        loading
          ? <div className='loader'></div>
          : <></>
      }
    </div>
  );
}

export default App;
