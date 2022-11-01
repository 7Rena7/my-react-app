import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  const date = props.expense.date;
  // const title = props.expense.title;
  const amount = props.expense.amount;

  const [title, setTitle] = useState(props.expense.title);

  const btnClickHandler = () => {
    setTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      {/* <button onClick={btnClickHandler}>Change Title</button> */}
    </Card>
  );
}
