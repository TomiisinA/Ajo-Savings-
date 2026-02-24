import { useState } from "react";

// eslint-disable-next-line react/prop-types
const FundWalletModal = ({ onClose, onFund }) => {
  const [amount, setAmount] = useState("");

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 w-full">
      <div className="bg-white w-full max-w-md rounded-lg p-6">
        <h2 className="text-2xl font-extrabold text-primary-200 mb-4 border-b border-gray-500">
          Fund Account
        </h2>
        <label htmlFor="" className="text-black-200 mb-2">
          Select Wallet
        </label>
        <input
          type="number"
          placeholder="NGN Wallet"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border border-gray-500 rounded-md px-4 py-3 mb-4"
        />
        <label htmlFor="" className="text-black-200 mb-2">
          Enter Amount
        </label>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border  border-gray-500  rounded-md px-4 py-3 mb-4"
        />

        <div className="flex justify-start gap-3 mb-5">
          <button
            onClick={() => onFund(amount)}
            className="px-4 py-2 bg-primary-100 text-white rounded-md"
          >
            Fund
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-primary-100 text-primary-100 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default FundWalletModal;
