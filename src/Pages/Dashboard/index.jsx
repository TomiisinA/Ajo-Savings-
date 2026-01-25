import { Icon } from "@iconify/react";

const Dashboard = () => {
  return (
    <div className=" m-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-extrabold">Hello, Shina</h1>
        <div className="flex">
          <input type="text" value="Search" />
          <p className="ml-2 border text-xl rounded-lg bg-white border-none p-1">
            <Icon icon="mdi:bell-outline" width="24" height="24" />
          </p>
          <p className="ml-2 border text-xl  font-bold border-none rounded-lg bg-primary-300 p-1">
            WS
          </p>
          <p className="ml-2">Wasiu Shina </p>
        </div>
      </div>
      <div className="">
        <div className="flex mb-8 justify-end items-center ">
          <input type="radio" name="NGN" id="" />
          <label className="mx-2">NGN</label>
          <input type="radio" name="NGN" id="" />
          <label className="mx-2">USD</label>
        </div>

        <div className="flex">
          <div className="border border-none bg-primary-400 text-white  rounded-lg p-6 m-2">
            <p className="text-2xl font-bold flex gap-4">
              N 12,000,000. 10
              <Icon icon="clarity:eye-hide-line" width="34" height="34" />{" "}
            </p>
            <p className="font-extrabold">Wallet Ballance</p>
          </div>
          <div className="border border-none bg-yellow text-gray-300 rounded-lg p-6 m-2">
            <p className="text-2xl font-bold flex gap-4">
              N 12,000,000. 10
              <Icon icon="clarity:eye-hide-line" width="34" height="34" />{" "}
            </p>
            <p className="font-extrabold text-gray-400">Wallet Balance</p>
          </div>
          <div className="border border-none bg-red text-gray-300 rounded-lg p-6 m-2">
            <p className="text-2xl font-bold flex gap-4">
              N 12,000,000. 10
              <Icon icon="clarity:eye-hide-line" width="34" height="34" />{" "}
            </p>
            <p className="font-extrabold text-gray-400">Wallet Ballance</p>
          </div>
          <div className="border border-none bg-green  text-gray-300  rounded-lg p-6 m-2">
            <p className="text-2xl font-bold flex gap-4">
              N 12,000,000. 10
              <Icon icon="clarity:eye-hide-line" width="34" height="34" />{" "}
            </p>
            <p className="font-extrabold text-gray-400">Wallet Ballance</p>
          </div>
        </div>
        <div className="flex gap-4 mt-3 ">
          <div className="border border-none bg-white text-primary-200 rounded-lg p-6 ">
            <p className="text-xl">Fund Wallet</p>
          </div>
          <div className="border border-none bg-white text-primary-200 rounded-lg p-6 ">
            <p className="text-xl"> Withdraw Funds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
