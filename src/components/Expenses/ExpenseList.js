import { useState } from "react";
import "./ExpenseList.css";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

export default function ExpenseList(props) {
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

  let expensesContent = <p>No expenses found for the selected filter.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem key={expense.id} expense={expense} />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onYearSelection={saveYearSelected}
      />
      {expensesContent}
    </Card>
  );
}
