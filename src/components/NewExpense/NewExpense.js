import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const getRandomId = () => {
  const MAX_ID = 10000;
  return Math.floor(Math.random() * MAX_ID);
};

export default function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: getRandomId(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
