import React from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  console.log("In the expense filter");
  const dropdownChangeHandler = (event) => {
    //in javascript functions are just objects(i.e regular values) and hence you can pass them as
    // value through props
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
