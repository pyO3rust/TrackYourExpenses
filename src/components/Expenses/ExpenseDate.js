import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.getFullYear();
  //we pass data i.e date from app.js to expenseDate and we passed
  //it on through expenseItem i.e date={props.date} so here we get props.date too to get that data from expenseItem date = {props.date}
  return (
    <div className="expense-date">
      <div className="expense-date_month">{month}</div>
      <div className="expense-date_year">{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
