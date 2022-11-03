import "./App.css";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const removeObjectWithId = (arr, id) => {
  const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
  arr.splice(objWithIdIndex, 1);
  return arr;
};

const DUMMY_EXPENSES = [
  {
    id: "1111",
    date: new Date(2022, 3, 28),
    title: "Toilet Paper",
    amount: 19.99,
  },
  {
    id: "2222",
    date: new Date(2021, 4, 31),
    title: "Car Insurance",
    amount: 100.0,
  },
  {
    id: "3333",
    date: new Date(2020, 5, 4),
    title: "Meat",
    amount: 25.0,
  },
  {
    id: "4444",
    date: new Date(2022, 5, 4),
    title: "Keyboard",
    amount: 99.99,
  },
  {
    id: "5555",
    date: new Date(2022, 5, 4),
    title: "Mouse",
    amount: 50.99,
  },
];

export default function App() {
  const [activeExpenses, setActiveExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setActiveExpenses((prevActiveExpenses) => {
      return [expense, ...prevActiveExpenses];
    });
  };

  const deleteExpenseHandler = (id) => {
    setActiveExpenses((prevActiveExpenses) => {
      return [...removeObjectWithId(prevActiveExpenses, id)];
    });
  };

  return (
    <div className="App-header">
      <h2>Expense Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={activeExpenses} onDeleteClick={deleteExpenseHandler} />
    </div>
  );
}
