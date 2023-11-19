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
  const [references, setReferences] = useState([])

  const handleClick = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`http://localhost:8000/fact-check/?input_string=${input}`)
      setResponse(response.data.result.response)
      setReferences(response.data.result.references)
      setLoading(false)

    }
    catch (e) {
      console.log("error while getting api response:", e)
    }
  }

  return (
    <div className="App">
      {
        response.length > 0
          ? <></>
          : <div><div className="title">
            Fact Checker
          </div>
            <div className="content-fields">
              <textarea placeholder='Type text here' value={input} onChange={(event) => handleInputChange(event, setInput)} style={{ overflow: 'hidden' }} />
              <button onClick={() => handleClick()}>Check</button>
            </div>
            <div>
              {response === ""
                ? <p>Input your tweet to generate a response.</p>
                : <p>{JSON.stringify(response)}</p>
              }
            </div></div>
      }

      {
        loading
          ? <div className='loader'></div>
          : <></>
      }
      {references.length > 0
        ? <div>References:</div>
        : <></>
      }
      {
        references.length > 0 && references.slice(0, 5).map(ref => (
          <a href={ref.trim()} target="_blank" rel="noopener noreferrer">
            {ref.trim()}
          </a>
        ))
      }
    </div>
  );
}

export default App;
