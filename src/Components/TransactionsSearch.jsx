import React, { useState } from "react";

function TransactionsSearch({ filterTransactions }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    filterTransactions(searchTerm);
  };
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search your Transactions"
      />

      <button id="transactionsearch" onClick={handleSearch}>
        search
      </button>
    </div>
  );
}

export default TransactionsSearch;
