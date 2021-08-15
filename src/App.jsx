import React, { useState } from "react";
const darkModeToggle = () => {
  const root = window.document.documentElement;
  root.classList.toggle("dark");
};
function App() {
  const [result, setResult] = useState("");
  const clickHandler = (e) => {
    setResult(result.concat(e.target.name));
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  const reset = () => {
    setResult("");
  };
  const calc = () => {
    try {
      setResult(Number(eval(result).toString()).toFixed(2));
    } catch (error) {
      setResult("invalid format");
    }
  };
  return (
    <main className="bg-light-background dark:bg-dark-background min-h-screen font-mont grid place-content-center">
      <section className="max-w-sm p-6">
        <div className="flex justify-end mb-12 text-gray-600 dark:text-white">
          <button onClick={darkModeToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>
        </div>
        <input
          type="text"
          value={result}
          readOnly
          className="border p-4 w-full rounded-md shadow-sm text-3xl dark:text-white bg-screen-bg dark:bg-dark-screen-bg"
        />
        <div className="mt-4 p-4 rounded-md bg-light-keypad-bg dark:bg-dark-keypad-bg grid grid-cols-4 grid-rows-4 gap-4">
          <button onClick={clickHandler} name="7" className="btn btn-white">
            7
          </button>
          <button onClick={clickHandler} name="8" className="btn btn-white">
            8
          </button>
          <button onClick={clickHandler} name="9" className="btn btn-white">
            9
          </button>
          <button
            onClick={backspace}
            className=" btn  text-sm text-white bg-key-blue border-b-4 border-key-blue-shadow"
          >
            DEL
          </button>
          <button onClick={clickHandler} name="4" className="btn btn-white">
            4
          </button>
          <button onClick={clickHandler} name="5" className="btn btn-white">
            5
          </button>
          <button onClick={clickHandler} name="6" className="btn btn-white">
            6
          </button>
          <button onClick={clickHandler} className="btn btn-white" name="+">
            +
          </button>
          <button onClick={clickHandler} name="1" className="btn btn-white">
            1
          </button>
          <button onClick={clickHandler} name="2" className="btn btn-white">
            2
          </button>
          <button onClick={clickHandler} name="3" className="btn btn-white">
            3
          </button>
          <button onClick={clickHandler} name="-" className="btn btn-white">
            -
          </button>
          <button onClick={clickHandler} name="." className="btn btn-white">
            .
          </button>
          <button onClick={clickHandler} name="0" className="btn btn-white">
            0
          </button>
          <button onClick={clickHandler} name="/" className="btn btn-white">
            /
          </button>
          <button onClick={clickHandler} name="*" className="btn btn-white">
            x
          </button>
          <button
            onClick={reset}
            className="col-span-2 btn text-sm text-white bg-key-blue border-b-4 border-key-blue-shadow"
          >
            RESET
          </button>
          <button
            onClick={calc}
            className="col-span-2 btn text-white bg-key-red border-b-4 border-key-red-shadow"
          >
            =
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
