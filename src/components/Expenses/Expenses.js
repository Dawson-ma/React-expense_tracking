import { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [year, setFilterYear] = useState("ALL");
  const selectFilterYearHandler = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    if (year === "ALL") {
      return true;
    } else {
      return expense.date.getFullYear().toString() === year;
    }
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={year}
        onSelectFilterYear={selectFilterYearHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
