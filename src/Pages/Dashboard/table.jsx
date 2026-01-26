// eslint-disable-next-line react/prop-types
export const Table = ({ search = "" }) => {
  const transactions = [
    {
      id: 1,
      name: "Wallet Funding",
      walletId: "MB-1023",
      status: "Successful",
      amount: 50000,
      date: "06 Dec 26",
    },
    {
      id: 2,
      name: "Withdrawal",
      walletId: "MB-1023",
      status: "Pending",
      amount: 20000,
      date: "06 Dec 26",
    },
    {
      id: 3,
      name: "Emergency Fund",
      walletId: "MB-1023",
      status: "Failed",
      amount: 10000,
      date: "06 Dec 26",
    },
  ];

  const filteredTransactions = transactions.filter(
    (tx) =>
      tx.name.toLowerCase().includes(search.toLowerCase()) ||
      tx.walletId.toLowerCase().includes(search.toLowerCase()) ||
      tx.status.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-white p-5">
      <p className="text-lg  font-extrabold mb-2">Transactions</p>

      <table className="w-full table-auto border-collapse bg-white rounded-lg  p-6">
        <thead>
          <tr className="text-left text-sm  ">
            <th className="p-3  ">Name</th>
            <th className="">Wallet ID</th>
            <th className="">Status</th>
            <th className="">Amount</th>
            <th className="">Date</th>
          </tr>
        </thead>

        <tbody className="border-none">
          {filteredTransactions.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-6 text-gray-400">
                No transactions found
              </td>
            </tr>
          ) : (
            filteredTransactions.map((tx) => (
              <tr key={tx.id} className=" text-sm">
                <td className="p-4 ">{tx.name}</td>
                <td className="">{tx.walletId}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium
                      ${
                        tx.status === "Successful"
                          ? "bg-green-100 text-green-700"
                          : tx.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                  >
                    {tx.status}
                  </span>
                </td>
                <td className="font-semibold">₦{tx.amount.toLocaleString()}</td>
                <td className="text-gray-500">{tx.date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
