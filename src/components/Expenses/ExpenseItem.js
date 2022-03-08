import React from "react";

//useState to actually bring out the changes in the variable

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

import Card from "../UI/Card.js";

const ExpenseItem = (props) => {
  //props make the component reusable
  // const expenseDate = new Date(2022, 3, 2);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 290.67;
  //props are used to pass data from component a to b(forward)
  //useState actually returns an array thus we can do array destructuring
  //title- current status value, setTitle- function for updating the value
  console.log("In the Expense Item");

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2 className="expense-item">{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
