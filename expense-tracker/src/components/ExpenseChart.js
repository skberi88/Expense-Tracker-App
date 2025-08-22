import React from "react";
import {
  PieChart, Pie, Cell, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer
} from "recharts";

function ExpenseChart({ expenses }) {
  if (expenses.length === 0) return <p>No data to show chart.</p>;

  // Group by category
  const dataByCategory = expenses.reduce((acc, exp) => {
    const found = acc.find((item) => item.name === exp.category);
    if (found) {
      found.value += exp.amount;
    } else {
      acc.push({ name: exp.category, value: exp.amount });
    }
    return acc;
  }, []);

  // Group by month
  const dataByMonth = expenses.reduce((acc, exp) => {
    const month = new Date(exp.date).toLocaleString("default", { month: "short" });
    const found = acc.find((item) => item.name === month);
    if (found) {
      found.value += exp.amount;
    } else {
      acc.push({ name: month, value: exp.amount });
    }
    return acc;
  }, []);

  const COLORS = ["#1565c0", "#2e7d32", "#ef6c00", "#d32f2f", "#6a1b9a"];

  return (
    <div className="charts">
      <div className="chart">
        <h3 className="chart-title">Expenses by Category</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={dataByCategory}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {dataByCategory.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="chart">
        <h3 className="chart-title">Monthly Expense Tracking</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dataByMonth}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" label={{ value: "Month", position: "insideBottom", offset: -5 }} />
            <YAxis label={{ value: "Amount (₹)", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Bar dataKey="value" fill="#42a5f5" barSize={40} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ExpenseChart;
