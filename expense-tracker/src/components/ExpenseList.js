import React from "react";

function ExpenseList({ expenses, onDelete, onClear }) {
  return (
    <div className="expense-list">
      <h2>Expense History</h2>
      {expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        <>
          <ul>
            {expenses.map((exp) => (
              <li key={exp.id}>
                <span>
                  {exp.date} - {exp.title} ({exp.category}) : ₹{exp.amount}
                </span>
                <button className="delete-btn" onClick={() => onDelete(exp.id)}>❌</button>
              </li>
            ))}
          </ul>
          <button className="clear-btn" onClick={onClear}>Clear All</button>
        </>
      )}
    </div>
  );
}

export default ExpenseList;
