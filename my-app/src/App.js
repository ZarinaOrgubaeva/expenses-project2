import { Expenses } from "./components/expenses/Expenses";
import { NewExpenses } from "./components/new-expenses/NewExpenses";
import "./App.css";
import { useState } from "react";
function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "Phone",
      price: 300,
      date: new Date(),
    },
    {
      title: "Handbag",
      price: 200,
      date: new Date(),
    },
  ]);
  const addNewExpenseHandler = (data) => {
      const updatedExpense = [...expenses];
      updatedExpense.push(data);
      setExpenses(updatedExpense);
   };
  return (
    <div>
      <NewExpenses onNewExpenseAdd={addNewExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
