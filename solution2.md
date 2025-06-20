# solution 2 dynamically render with data, no hard-coding
> render buttons dynamically with every key in the items

> use handlerfunctions dynamically from `sortHandlers`

```JS
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { data } from "./data";

function App() {  
  // Local state to manage sorted articles
  const [sortedData, setSortedData] = useState(
    [...data].sort((a, b) => b.upvotes - a.upvotes) // Default: most upvoted
  );

  const handleMostUpvoted = () => {
    setSortedData([...data].sort((a, b) => b.upvotes - a.upvotes));
  };

  const handleMostRecent = () => {
    setSortedData(
      [...data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    );
  };
  
  console.log(...data);

  const handleSortByTitle = () => {
    setSortedData([...data].sort((a, b) => a.title.localeCompare(b.title)));
  };

  
  function handleSortByOption(option: string) {
    const sortHandlers = {
      title: handleSortByTitle,
      upvotes: handleMostUpvoted,
      date: handleMostRecent,
    };
    const handler = sortHandlers[option as keyof typeof sortHandlers];
    if (handler) {
      handler();
    }
  };
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
        {
          Object.keys(data[0]).map((value, index) => {
            return <button key={index} data-sort-option={value} onClick={() => handleSortByOption(value)}>{value}</button>;
          })
        }
      </div>

      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((value, index) => {
              return <th key={index}
              data-sort-option={value}
              onClick={() => handleSortByOption(value)}
              >{value}</th>;
            })}
          </tr>
        </thead>
        <tbody>
            {sortedData.map((value, index) => {
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