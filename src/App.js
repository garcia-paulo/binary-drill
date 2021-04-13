import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [number, setNumber] = useState("");
  const [binary, setBinary] = useState(["0", "0", "0", "0", "0", "0", "0", "0"])
  const [input, setInput] = useState("");

  const generateBinary = () => {
    setNumber((Math.floor(Math.random() * (255 - 0) + 0).toString(2)));
    setBinary([]);
  }

  const populate = () => {
    let array = [];
    let temp = number;
    let x = 8 - number.length;

    for (let i = 0; i < x; i++) {
      array.push("0");
    }

    while (temp.length > 1) {
      array.push(temp.slice(0, 1));
      temp = temp.slice(1);
    }
    array.push(temp.slice(0, 1));

    setBinary(array);
  }

  const checkValue = () => {
    if (parseInt(input).toString(2) === number) {
      setInput("");
      setNumber("");
      generateBinary();
    }
  }

  const handleChange = name => event => {
    setInput(event.target.value);
  }

  useEffect(() => { generateBinary() }, []);
  useEffect(() => { checkValue() }, [input]);
  useEffect(() => { populate() }, [number]);

  return (
    <div className="App">

      <table className="table">
        <tbody>
          {/* <tr>
            <th colSpan="8">{ }</th>
          </tr> */}
          <tr>
            <td>128</td>
            <td>64</td>
            <td>32</td>
            <td>16</td>
            <td>8</td>
            <td>4</td>
            <td>2</td>
            <td>1</td>
          </tr>
          <tr>
            <th>{binary[0]}</th>
            <th>{binary[1]}</th>
            <th>{binary[2]}</th>
            <th>{binary[3]}</th>
            <th>{binary[4]}</th>
            <th>{binary[5]}</th>
            <th>{binary[6]}</th>
            <th>{binary[7]}</th>
          </tr>
          <tr>
            <td colSpan="8">
              <input type="text" onChange={handleChange("name")} value={input} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
