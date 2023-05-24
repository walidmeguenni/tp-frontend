import React from "react";

const BlocksTrable = ({ data }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4"> Blocks</h2>
      <table className="w-full table-auto">
        <thead>
          <tr className=" bg-gray-200">
            <th className="px-1 py-2 text-left whitespace-nowrap">
              Block Number
            </th>
            <th className="px-1 py-2 text-left">PrevHash </th>
            <th className="px-1 py-2 text-left">Timestamp</th>
            <th className="px-1 py-2 text-left">Nonce</th>
            <th className="px-1 py-2 text-left whitespace-nowrap ">
              Number of Transactions
            </th>
            <th className="px-1 py-2 text-center">hash</th>
          </tr>
        </thead>
        <tbody>
          {data.map((block) => (
            <tr key={block.hash} className="bg-gray-100">
              <td className="border px-1 py-2">{block.index}</td>
              <td className="border px-1 py-2">{block.prevHash.substring(0,32)}</td>
              <td className="border px-1 py-2">{block.timestamp}</td>
              <td className="border px-1 py-2">{block.nonce}</td>
              <td className="border px-1 py-2">{block.transactions.length}</td>
              <td className="border px-1 py-2">{block.hash.substring(0,32)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlocksTrable;
