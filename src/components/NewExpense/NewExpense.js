import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuid(),
    };
    console.log("In the NewExpense.js");
    //lifting the data up
    props.onAddExpense(expenseData);
    setIsEditing(false);            //to close the form after submission
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  //  A reference (to the parent component's function)
  // is passed into the child component (from the parent component), i.e saveExpenseDataHandler
  // When the function is invoked (inside the child component),
  // that function's argument is passed back into
  // that function's declaration (body),  as a parameter. i.e into  const saveExpenseDataHandler = (enteredExpenseData)
  //we are passing the pointer edit through the onSaveExpenseData prop

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
