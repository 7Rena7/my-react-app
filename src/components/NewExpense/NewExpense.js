import React from "react";
import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

const getRandomId = () => {
  const MAX_ID = 10000;
  return Math.floor(Math.random() * MAX_ID);
};

export default function NewExpense(props) {
  const [isEditting, setIsEditting] = useState(false);

  const handleBtnClick = () => {
    setIsEditting(true);
  };

  const stopEdittinHandler = () => {
    setIsEditting(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: getRandomId(),
    };

    setIsEditting(false);
    props.onAddExpense(expenseData);
  };

  if (!isEditting) {
    return (
      <Card className="new-expense">
        <button onClick={handleBtnClick}>Add new expense</button>
      </Card>
    );
  }

  return (
    <Card className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancelClick={stopEdittinHandler}
      />
    </Card>
  );
}
