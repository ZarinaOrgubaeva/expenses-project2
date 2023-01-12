import './ExpensesItem.css'
export const ExpensesItem = ({ title, date, price }) => {
  return (
    <div className='container2'>
      <p>{date.toString()}</p>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );};