import "./App.css";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "1111",
      date: new Date(2022, 3, 28),
      title: "Toilet Paper",
      amount: 19.99,
    },
    {
      id: "2222",
      date: new Date(2022, 4, 31),
      title: "Car Insurance",
      amount: 100.0,
    },
    {
      id: "3333",
      date: new Date(2022, 5, 4),
      title: "Meat",
      amount: 25.0,
    },
    {
      id: "4444",
      date: new Date(2022, 5, 4),
      title: "Another purchase",
      amount: 99.99,
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div className="App-header">
      <h2>Expense Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
