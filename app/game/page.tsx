"use client"
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");

  function eventHandler() {
    // You can set the state based on the current value of the input field
    setName(name);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    // This will update the `name` state as the input value changes
    setName(event.target.value);
  }

  return (
    <>
      <div>
        <input value={name} onChange={handleChange} /> {/* Handle input changes */}
        <button onClick={eventHandler}>Click Me</button>
        <p>This is Data: {name}</p>
      </div>
    </>
  );
}
