import "./App.css";
import ExpenseList from "./components/ExpenseList";

function App() {
  const expenses = [
    {
      date: new Date(2022, 3, 28),
      title: "Car Insurance",
      amount: 19.99,
    },
    {
      date: new Date(2022, 3, 28),
      title: "Car Insurance",
      amount: 100.0,
    },
    {
      date: new Date(2022, 3, 28),
      title: "Car Insurance",
      amount: 25.0,
    },
  ];

  return (
    <div className="App-header">
      <h2>Let's get started</h2>
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
