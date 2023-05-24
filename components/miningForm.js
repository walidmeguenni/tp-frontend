import { useState } from "react";
import axios from "axios";
const MiningForm = () => {
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [password, setPassword] = useState("");
  const [miningStatus, setMiningStatus] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/mining/start", {
        walletAddress: publicKey,
        privateKey: privateKey,

        // password: password,
      });
      console.log(response.data.status);
      setMiningStatus(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStopMining = async () => {
    try {
      const response = await axios.post("http://localhost:5000/mining/stop");
      setMiningStatus(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-96">
      <h2 className="text-lg font-medium mb-4">Start Mining</h2>
      <form>
        <div className="mb-4">
          <label
            className="text-gray-700 font-medium mb-2 block"
            htmlFor="publicKey"
          >
            Public Key
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="publicKey"
            type="text"
            placeholder="Enter public key"
            value={publicKey}
            onChange={(e) => setPublicKey(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="text-gray-700 font-medium mb-2 block"
            htmlFor="privateKey"
          >
            Private Key
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="privateKey"
            type="text"
            placeholder="Enter private key"
            value={privateKey}
            onChange={(e) => setPrivateKey(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="text-gray-700 font-medium mb-2 block"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg mr-4"
          type="button"
          onClick={handleSubmit}
        >
          Start Mining
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg"
          type="button"
          onClick={handleStopMining}
        >
          Stop Mining
        </button>
      </form>

      <div className="mt-4">
        {miningStatus && (
          <p className="text-green-500 font-medium">Mining start...</p>
        )}
      </div>
    </div>
  );
};

export default MiningForm;
