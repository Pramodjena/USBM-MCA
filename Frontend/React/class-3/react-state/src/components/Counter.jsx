/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Counter = () => {
  //   let count = 0;
  const [counter, setCounter] = useState(0);

  const increment = () => {
    // alert("It's working");
    setCounter((prev) => prev + 1);
    // setCounter(counter++);
    // console.log(counter);
  };

  const decrement = () => {
    // alert("It's working");
    if (counter === 0) {
      alert("Counter is already at 0");
      return;
    }
    setCounter((prev) => prev - 1);
    // setCounter(counter++);
    // console.log(counter);
  };
  //   increment();
  //   increment();

  console.log(counter);

  return (
    <div>
      <h2 className="text-3xl">Count: {counter}</h2>
      <button
        onClick={increment}
        className="border-2 border-white bg-sky-500 p-2 mt-5 hover:bg-red-500"
      >
        Increment
      </button>
      <button
        onClick={decrement}
        className="border-2 border-white bg-sky-500 p-2 mt-5 hover:bg-red-500"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
