import React, { useState } from "react";

//useState to actually bring out the changes in the variable

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

import Card from "../UI/Card.js";

const ExpenseItem = (props) => {
  //props make the component reusable
  // const expenseDate = new Date(2022, 3, 2);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 290.67;
  //props arestorere used to pass data from component a to b(forward)
  //useState actually returns an array thus we can do array destructuring
  //title- current status value, setTitle- function for updating the value

  const [title, setTitle] = useState(props.title);

  // console.log("this will get printed");

  const clickHandler = () => {
    setTitle("updated!!");
    // console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item">{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
