import { useState } from "react";

// eslint-disable-next-line react/prop-types
const FundWalletModal = ({ onClose, onFund }) => {
  const [amount, setAmount] = useState("");

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Fund Wallet</h2>

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded-md px-4 py-3 mb-4"
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 border rounded-md">
            Cancel
          </button>

          <button
            onClick={() => onFund(amount)}
            className="px-4 py-2 bg-primary-200 text-white rounded-md"
          >
            Fund
          </button>
        </div>
      </div>
    </div>
  );
};

export default FundWalletModal;
