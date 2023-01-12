import { useState } from "react";
import Button from "../UI/button/Button";
import { FormInput } from "../UI/formInput/FormInput";

export const ExpensesForm = (props) => {
  console.log(props)
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(null);
  const [price, setPrice] = useState(200);

  ///
  const cancelHandler = (event) => {
    event.preventDefaulte();
    props.showForm();
  };
  const titleInputChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const priceInputChangeHandler = (event) => {
    const value = event.target.value;
    if (value.charAt(0) !== "-") {
      setPrice(value);
    }
  };
  const dateInputChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const saveHandler = (event) => {
    event.preventDefaulte();
    const expensesData = {
      title,
      date,
      price,
    };
    props.onNewExpenseAdd(expensesData)
  };

  return (
    <form>
      <FormInput
        id="name"
        labelName="Название"
        inputType="text"
        placeholder="Введите название..."
        value={title}
        onChange={titleInputChangeHandler}
      />
      <FormInput
        id="price"
        labelName="Количество денег"
        inputType="number"
        value={price}
        onChange={priceInputChangeHandler}
      />
      <FormInput
        id="date"
        labelName="Дата"
        inputType="date"
        placeholder="dd.mm.yyyy"
        value={date}
        onChange={dateInputChangeHandler}
      />
      <Button title="Отмена" onClick={cancelHandler} />
      <Button title="Сохранить" onClick={saveHandler} />
    </form>
  );
};
