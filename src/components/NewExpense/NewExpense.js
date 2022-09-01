import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [pageState, setPageState] = useState(true);

  const oageSwiichHandler = () => {
    setPageState(!pageState);
  };

  const saveExpenseHandler = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    setPageState(!pageState);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {pageState && (
        <button onClick={oageSwiichHandler}>Add New Expense</button>
      )}
      {!pageState && (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          onCancel={oageSwiichHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
