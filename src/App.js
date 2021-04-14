import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [number, setNumber] = useState("");
  const [binary, setBinary] = useState(["0", "0", "0", "0", "0", "0", "0", "0"])
  const [input, setInput] = useState("");
  const [acertos, setAcertos] = useState(0);
  const [mode, setMode] = useState(1);

  const generateNumber = () => {
    if ((mode === 1)) {
      setNumber((Math.floor(Math.random() * (255 - 0) + 0)).toString(2));
    } else {
      setNumber(Math.floor(Math.random() * (255 - 0) + 0));
    }
  }

  const populate = () => {
    setBinary([]);
    if (mode === 1) {
      let array = [];
      let temp = number;
      let x = 8 - number.length;
      console.log(temp, number);

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
  }

  const checkValue = () => {
    if (mode === 1 && parseInt(input).toString(2) === number) {
      setInput("");
      setNumber("");
      generateNumber();
      setAcertos(acertos + 1);
    } else if (mode === 2) {
      if (input === number.toString(2)) {
        setInput("");
        setNumber("");
        generateNumber();
        setAcertos(acertos + 1);
      }
    }
  }

  const handleChange = name => event => {
    setInput(event.target.value);
  }

  const changeMode = () => {
    if (mode < 2) {
      setMode(mode + 1);
    } else {
      setMode(1);
    }
  }

  useEffect(() => { generateNumber() }, [mode]);
  useEffect(() => { checkValue() }, [input]);
  useEffect(() => { populate() }, [number]);

  return (
    <div className="App">
      <p>
        Acertos: {acertos}
      </p>
      <table className="table">
        <tbody>
          <tr>
            <th colSpan="8">{(mode === 2) && (number)}</th>
          </tr>
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
      <p>
        <button onClick={() => changeMode()}>{(mode === 1 && (<>BINÁRIO</>))
          || (mode === 2 && (<>DECIMAL</>))
          || (mode === 0 && (<>AMBOS</>))}</button>
      </p>
    </div>
  );
}

export default App;
