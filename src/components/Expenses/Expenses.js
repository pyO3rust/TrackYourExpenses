import React from "react";
import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFIlter";
import Card from "../UI/Card.js";
import ExpensesList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  console.log("In the Expenses");
  //useState receives an option initial state values as an argument
  // It returns an array with exactly two elements
  //the second element is always a funtion which you can call
  //to set a new value for your state, calling that function will reevaluate the component
  //calling the state again will bring the newState
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log("In the Expenses.js");
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
    // console.log(filteredYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    //filtering through year and converting into the string
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //we gonna chart the shit out of filteredExpenses
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
