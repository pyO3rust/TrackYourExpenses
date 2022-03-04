import React from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

import Card from "../UI/Card.js";

const ExpenseItem = (props) => {
  //props make the component reusable
  // const expenseDate = new Date(2022, 3, 2);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 290.67;
  //props arestorere used to pass data from component a to b(forward)

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item h2">{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
