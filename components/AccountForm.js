import React, { useState } from "react";
import axios from "axios";
function AccountForm() {
  const [password, setPassword] = useState("");
  const [wallet, setWallet] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(password);
    try {
      const response = await axios.post("http://localhost:5000/wallet/create", {
        body: {
          password: password,
        },
      });
      const newWallet = response.data.wallet;
      setWallet(newWallet);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Create New Wallet</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="mb-4">
          <label htmlFor="password" className="text-gray-700 font-bold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            className="block w-full border-gray-500 rounded-md py-2 px-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-800"
        >
          Generate New Wallet
        </button>
        
      </form>
      {wallet.address && (
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <p className="text-gray-700 mb-2">
              <span className="font-bold">Address:</span> {wallet.address}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-bold">Private Key:</span>{" "}
              {wallet.privateKey}
            </p>
          </div>
        )}
    </div>
  );
}

export default AccountForm;
