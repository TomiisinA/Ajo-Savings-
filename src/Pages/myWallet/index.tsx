import React from "react";
import { Icon } from "@iconify/react";

import { useState } from "react";

// eslint-disable-next-line react/prop-types
interface BalanceCardProps {
  title: string;
  amount: string;
  bg: string;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({
  title,
  amount,
  bg,
}) => {
  const [hideBalance, setHideBalance] = useState(false);
  return (
    <div className={`rounded-lg p-6 ${bg}`}>
      <p className="text-2xl font-bold flex items-center justify-between">
        {hideBalance ? "••••••" : amount}
        <button onClick={() => setHideBalance(!hideBalance)}>
          <Icon icon="clarity:eye-hide-line" width="22" />
        </button>
      </p>
      <p className="font-semibold mt-2">{title}</p>
    </div>
  );
};

export const MyWallet = () => {
  const [currency, setCurrency] = useState("NGN");
  const [search, setSearch] = useState("");
  const [isFundOpen, setIsFundOpen] = useState(false);

  return (
    <div className=" m-6  ">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-extrabold">Hello, Shina</h1>
        <div className="flex">
          <input
            type="text"
            placeholder="Search here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-md 3  bg-white p-2 text-sm border-none shadow-lg outline-none"
          />
          <p className="ml-2 border text-xl rounded-lg bg-white border-none p-1">
            <Icon icon="mdi:bell-outline" width="24" height="24" />
          </p>
          <p className="ml-2 border text-xl  font-bold border-none rounded-lg bg-primary-300 p-1">
            WS
          </p>
          <p className="ml-2 text-lg font-medium">Wasiu Shina </p>
        </div>
      </div>
      <div className="">
        <div className="flex justify-end items-center gap-4 mb-8 ">
          {["NGN", "USD"].map((cur) => (
            <label key={cur} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={currency === cur}
                onChange={() => setCurrency(cur)}
              />
              <span>{cur}</span>
            </label>
          ))}
        </div>

        <div className="border bg-primary-600 rounded-lg p-6 border-none w-auto">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4
 mb-6"
          >
            <BalanceCard
              title="Total Amount"
              amount={`N12,000,000.10`}
              bg="bg-primary-400 text-white"
            />
            <div className="border">
              

            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <button className="bg-white text-primary-200 px-6 py-3 rounded-lg font-semibold">
              Create New Wallet
            </button>
            <button
              className="bg-white text-primary-200 px-6 py-3 rounded-lg font-semibold"
              onClick={() => setIsFundOpen(true)}
            >
              Fund Wallet
            </button>

            <button className="bg-white text-primary-200 px-6 py-3 rounded-lg font-semibold">
              Withdraw
            </button>
          </div>

          <p className="text-sm text-primary-200 cursor-pointer mb-6">
            View Pending Approval
          </p>
        </div>
      </div>
    </div>
  );
};
