import React from "react";

const TransactionTable = ({ data }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4"> Transactions</h2>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">From</th>
            <th className="px-4 py-2 text-left">To</th>
            <th className="px-4 py-2 text-left">Amount</th>
            <th className="px-4 py-2 text-left">Gas</th>

          </tr>
        </thead>
        <tbody>
          {data.map((transaction, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="border px-1 py-2">0x{transaction.from.substring(0, 32)}</td>
              <td className="border px-1 py-2">0x{transaction.to.substring(0, 32)}</td>
              <td className="border px-1 py-2">{transaction.amount}</td>
              <td className="border px-1 py-2">{transaction.gas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
