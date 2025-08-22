import React, { useState } from "react";

function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      date,
      category,
    };

    onAdd(newExpense);
    setTitle("");
    setAmount("");
    setDate("");
    setCategory("Food");
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Transport</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Other</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default ExpenseForm;
