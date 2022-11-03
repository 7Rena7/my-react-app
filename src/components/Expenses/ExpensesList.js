import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

export default function ExpensesList(props) {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        No expenses found for the selected year
      </h2>
    );
  }

  const handleDeleteExpense = (id) => {
    props.onDeleteClick(id);
  };

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDeleteClick={handleDeleteExpense}
        />
      ))}
    </ul>
  );
}
