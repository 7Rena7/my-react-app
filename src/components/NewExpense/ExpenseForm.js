import React, { useState } from "react";
import Button from "../UI/Button";

import "./ExpenseForm.css";

const manageDate = (dateString) => {
  let date = new Date(dateString);
  date.setDate(date.getDate() + 1);
  return date;
};

export default function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    enteredAmount: "",
    enteredTitle: "",
    enteredDate: "",
  });

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
  };

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      amount: +userInput.enteredAmount,
      title: userInput.enteredTitle,
      date: manageDate(userInput.enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    // Set default values
    setUserInput(() => {
      return {
        enteredAmount: "",
        enteredTitle: "",
        enteredDate: "",
      };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <input
            type="number"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
            placeholder="$ 0,00"
            min="0.01"
            step="0.01"
            required
          />
        </div>
        <div className="new-expense__control">
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
            placeholder="Title"
            required
          />
        </div>
        <div className="new-expense__control">
          <input
            type="date"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
            min="2020-01-01"
            max="2023-12-31"
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelClick}>
          Cancel
        </button>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
