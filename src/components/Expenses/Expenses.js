import { useState } from "react";
import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const expenses = props.items;

  const [filteredYear, setFilteredYear] = useState();

  const saveYearSelected = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return (
      expense.date.getFullYear().toString() === filteredYear ||
      filteredYear === "All"
    );
  });

  const handleDeleteExpense = (id) => {
    props.onDeleteClick(id);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onYearSelection={saveYearSelected}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList
        items={filteredExpenses}
        onDeleteClick={handleDeleteExpense}
      />
    </Card>
  );
}
