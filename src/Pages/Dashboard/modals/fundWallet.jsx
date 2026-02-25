import { Icon } from "@iconify/react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const FundWalletModal = ({ onClose, onFund }) => {
  const [amount, setAmount] = useState("");

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 w-full">
      <div className="bg-white w-full max-w-md rounded-lg p-6">
        <div className="flex justify-between border-b border-gray-500 mb-6 ">
          <h2 className="text-2xl font-extrabold text-primary-200 pb-2  ">
            Fund Account
          </h2>
          <div
            className="  text-grey-930 text-sm rounded-full pt-3"
            onClick={onClose}
            role="button"
          >
            <Icon icon="akar-icons:cross" />
          </div>
        </div>
        <label htmlFor="" className="text-black-200 pb-4">
          Select Wallet
        </label>
        <select className="w-full border border-gray-500 rounded-md px-4 py-3 mb-4">
          <option value="NGN Wallet">NGN Wallet</option>
          <option value="USD Wallet">USD Wallet</option>
        </select>

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
            className="px-4 py-2 bg-primary-100 text-white rounded-sm"
          >
            Proceed
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-primary-100 text-primary-100 rounded-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default FundWalletModal;
