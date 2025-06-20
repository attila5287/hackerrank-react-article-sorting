# solution 1 (as basic as required)

```JS
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { data } from "./data";

function App() {  
  // Local state to manage sorted articles
  const [sortedArticles, setSortedArticles] = useState(
    [...data].sort((a, b) => b.upvotes - a.upvotes) // Default: most upvoted
  );

  const handleMostUpvoted = () => {
    setSortedArticles([...data].sort((a, b) => b.upvotes - a.upvotes));
  };

  const handleMostRecent = () => {
    setSortedArticles(
      [...data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    );
  };
  console.log(...data);
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
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={handleMostUpvoted}>Sort by upvotes</button>
        <button onClick={handleMostRecent}>Sort by date</button>
      </div>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((value, index) => {
              return <th key={index}>{value}</th>;
            })}
          </tr>
        </thead>
        <tbody>
            {sortedArticles.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.title}</td>
                <td>{value.upvotes}</td>
                <td>{value.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;

```