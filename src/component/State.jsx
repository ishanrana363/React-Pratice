import { useState } from "react";
import "../css/style.css";

const State = () => {
  // Use the useState hook to initialize the count state to 1
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button className="increment" onClick={() => setCount(count + 1)}>+</button>
      <button disabled = { count ===0 ? true : false } className="decrement" onClick={() => setCount(count - 1) }>-</button>
      <button className="reset" onClick={()=>setCount(0)} >Reset</button>
    </div>
  );
};

export default State;
