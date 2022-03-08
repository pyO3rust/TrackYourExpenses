import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //destructuring and storing the inputs
  //useState storing our inputs
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  //event listener(has elements and value property)
  //console.log(event)
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput, //using spread operator
    //   enteredTitle: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountEventHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput, //using spread operator
    //   enteredAmount: event.target.value,
    // });
  };

  const dateEventHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput, //using spread operator
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    //avoid pagereload
    event.preventDefault();

    //package data into a single object
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    console.log("In the ExpenseForm.js");

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountEventHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateEventHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
