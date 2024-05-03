import "./App.css";
import React, { useState } from "react";
import TransactionForm from "./Components/TransactionForm";
import Transactions from "./Components/Transactions";
import TransactionsSearch from "./Components/TransactionsSearch";
function App() {
  const [transactions, setTransactions] = useState([
    {
      date: "2024-10-5",
      description: "Paycheck from Flation organization",
      category: "Income",
      amount: 2000000,
    },
    {
      date: "2024-10-10",
      description: "Payment of the tax",
      category: "Tax",
      amount: 38000,
    },
    {
      date: "2024-10-14",
      description: "Payment to Bob's burgers",
      category: "Food",
      amount: 11000,
    },
    {
      date: "2024-10-17",
      description: "Paycheck 0f Flatiron site",
      category: "Income",
      amount: 200000,
    },
    {
      date: "2024-10-18",
      description: "Payment of House",
      category: "House",
      amount: 5000000,
    },
    {
      date: "2024-10-20",
      description: "Payment to Flatiron Decorators",
      category: "Entertainment",
      amount: 45000,
    },
  ]);

  const [filteredTransactions, setFilteredTransactions] = useState([
    {
      date: "2024-10-5",
      description: "Paycheck from Flation organization",
      category: "Income",
      amount: 2000000,
    },
    {
      date: "2024-10-10",
      description: "Payment of the tax",
      category: "Tax",
      amount: 38000,
    },
    {
      date: "2024-10-14",
      description: "Payment to Bob's burgers",
      category: "Food",
      amount: 11000,
    },
    {
      date: "2024-10-17",
      description: "Paycheck 0f Flatiron site",
      category: "Income",
      amount: 200000,
    },
    {
      date: "2024-10-18",
      description: "Payment of House",
      category: "House",
      amount: 5000000,
    },
    {
      date: "2024-10-20",
      description: "Payment to Flatiron Decorators",
      category: "Entertainment",
      amount: 45000,
    },
  ]);

  const handleAddTransaction = (newTransaction) => {
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    setFilteredTransactions(updatedTransactions);
  };

  const handleSearchChange = (searchTerm) => {
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <h1>The Royal Bank of Flatiron</h1>
      <TransactionsSearch filterTransactions={handleSearchChange} />{" "}
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <Transactions transactions={filteredTransactions} />
    </div>
  );
}

export default App;
