import React, { useState } from "react";

const UserFunction = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(2);

  return (
    <div>
      <h1>Name: {name}</h1>
      <h3>Count: {count}</h3>
      <h3>Count2: {count2}</h3>
    </div>
  );
};
export default UserFunction;
