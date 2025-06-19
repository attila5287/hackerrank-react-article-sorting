import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        <a
          href="https://github.com/attila5287/hackerrank-react-article-sorting"
          target="_blank"
        >
          <img src={reactLogo} className="logo react" alt="React logo" />
          Article Sorting
        </a>
      </h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App
