import { Icon } from "@iconify/react";
import { Table } from "./table";
import { useState } from "react";
import FundWalletModal from "./modals/fundWallet";

// eslint-disable-next-line react/prop-types
export const BalanceCard = ({ title, amount, bg }) => {
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

const Dashboard = () => {
  const { currency, setCurrency } = useState("NGN");
  const { search, setSearch } = useState("");
  const [isFundOpen, setIsFundOpen] = useState(false);
  // const [amount, setAmount] = useState("");

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

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4
 mb-6"
        >
          <BalanceCard
            title="Wallet Balance"
            amount={`N12,000,000.10`}
            bg="bg-primary-400 text-white"
          />

          <BalanceCard
            title="Emergency Balance"
            amount={`N 80,000.10`}
            bg="bg-yellow text-gray-700"
          />

          <BalanceCard
            title="Flex Balance"
            amount={`N20,000.10`}
            bg="bg-red text-gray-700"
          />

          <BalanceCard
            title="Target Balance"
            amount={`N 20,000.10`}
            bg="bg-green text-gray-700"
          />
        </div>

        <div className="flex gap-4 mb-4">
          <button
            className="bg-white text-primary-200 px-6 py-3 rounded-lg font-semibold"
            onClick={() => setIsFundOpen(true)}
          >
            Fund Wallet
          </button>

          <button className="bg-white text-primary-200 px-6 py-3 rounded-lg font-semibold">
            Withdraw Funds
          </button>
        </div>

        <p className="text-sm text-primary-200 cursor-pointer mb-6">
          View Pending Approval
        </p>
        <div>
          <Table />
        </div>
      </div>
      {isFundOpen && (
        <FundWalletModal
          onClose={() => setIsFundOpen(false)}
          onFund={(amount) => {
            // eslint-disable-next-line no-undef
            fundWallet(amount);
            setIsFundOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;
