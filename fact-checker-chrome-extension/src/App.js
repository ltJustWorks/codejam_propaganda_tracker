import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

const DJANGO_ENDPOINT = "http://127.0.0.1:8000"

const handleInputChange = (newInput, setInput) => {
  setInput(newInput);
}

function App() {
  const [input, setInput] = useState("")
  const [response, setResponse] = useState(null)
  const [inputSubmitted, setInputSubmitted] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(DJANGO_ENDPOINT + "fact-check/?input_string=" + input)
        setResponse(response)
      }
      catch (e) {
        console.error("error while getting api response:", e)
      }
    }

    fetchData()
    //setInputSubmitted(false)
  }, [inputSubmitted])

  return (
    <div className="App">
      <div className="title">
        Fact Checker
      </div>
      <div className="content-fields">
        <input type='text' placeholder='Type text here' onChange={(newInput) => handleInputChange(newInput, setInput)} />
        <button onClick={() => setInputSubmitted(true)}>Check</button>
      </div>
      <div>
        {response ? (<p>Response: {JSON.stringify(response, null, 2)}</p>) : null}
      </div>
    </div>
  );
}

export default App;
