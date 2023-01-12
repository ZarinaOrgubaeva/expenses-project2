import { useState } from "react";
import { ExpensesForm } from "../expensesForm/ExpensesForm";
import Button from "../UI/button/Button";
import "./NewExpenses.css";
export const NewExpenses = ({onNewExpenseAdd}) => {

  //render => useState function
  const [
    showForm,
    setShowForm, //ассинхронный
  ] = useState(false); // false
  

  const newExpenseButtonClickHandler = () => {
    setShowForm((prevState) => !prevState); // тескери => true
  
  };

  return (
    <div className="container">
      {showForm ? 
        <ExpensesForm
          onShowForm={newExpenseButtonClickHandler}
          onNewExpenseAdd={onNewExpenseAdd}
        />
       : 
        <Button
          title="Добавить новый расход..."
          onClick={newExpenseButtonClickHandler}
        />
      }
    </div>
  );
};
