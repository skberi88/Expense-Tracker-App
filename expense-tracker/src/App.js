import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  const [users, setUsers] = useState([{ id: 1, name: "Default User", expenses: [] }]);
  const [currentUser, setCurrentUser] = useState(1);
  const [newUserName, setNewUserName] = useState("");

  const addExpense = (expense) => {
    setUsers(users.map(user =>
      user.id === currentUser ? { ...user, expenses: [...user.expenses, expense] } : user
    ));
  };

  const deleteExpense = (id) => {
    setUsers(users.map(user =>
      user.id === currentUser
        ? { ...user, expenses: user.expenses.filter(exp => exp.id !== id) }
        : user
    ));
  };

  const clearExpenses = () => {
    setUsers(users.map(user =>
      user.id === currentUser ? { ...user, expenses: [] } : user
    ));
  };

  const addUser = () => {
    if (!newUserName.trim()) return;
    const newUser = { id: Date.now(), name: newUserName, expenses: [] };
    setUsers([...users, newUser]);
    setNewUserName("");
    setCurrentUser(newUser.id);
  };

  const deleteUser = () => {
    if (users.length === 1) {
      alert("You must have at least one user.");
      return;
    }
    const updatedUsers = users.filter(user => user.id !== currentUser);
    setUsers(updatedUsers);
    setCurrentUser(updatedUsers[0].id); // switch to first user left
  };

  const currentExpenses = users.find(u => u.id === currentUser)?.expenses || [];

  return (
    <div className="app">
      <h1>💰 Expense Tracker 💰</h1>

      {/* User Controls */}
      <div className="user-controls">
        <select value={currentUser} onChange={(e) => setCurrentUser(Number(e.target.value))}>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="New User Name"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <button className="add-user-btn" onClick={addUser}>Add User</button>
        <button className="delete-user-btn" onClick={deleteUser}>Delete User</button>
      </div>

      <ExpenseForm onAdd={addExpense} />
      <ExpenseList expenses={currentExpenses} onDelete={deleteExpense} onClear={clearExpenses} />
      <ExpenseChart expenses={currentExpenses} />
    </div>
  );
}

export default App;
