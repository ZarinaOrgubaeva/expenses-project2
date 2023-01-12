import { ExpensesItem } from "../expensesItem/ExpensesItem";
export const Expenses = (props) => {
  return (
    <ul>
      {props.expenses.map((element,index) => {
        return (
          <ExpensesItem
          key={index}
            title={element.title}
            price={element.price}
            date={element.date}
          />
        );
      })}
    </ul>
  );
};
