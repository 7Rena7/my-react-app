import { useState } from "react";
import "./ExpenseList.css";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

export default function ExpenseList(props) {
  const { expenses } = props;

  const [filteredYear, setFilteredYear] = useState(getCurrentYear());

  const saveYearSelected = (year) => {
    setFilteredYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onYearSelection={saveYearSelected}
      />
      <ExpenseItem expense={expenses[0]} />
      <ExpenseItem expense={expenses[1]} />
      <ExpenseItem expense={expenses[2]} />
      <ExpenseItem expense={expenses[3]} />
    </Card>
  );
}
