import { RxDashboard } from "react-icons/rx";
import SidebarItem from "./customLink";
import { Icon } from "@iconify/react";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-white flex flex-col px-6 py-8">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-10">
        <img src="logo.png" alt="MoneyBag" className="h-20" />
      </div>

      {/* Navigation */}
      <nav className="space-y-4 text-base font-primary text-black-100">
        <SidebarItem
          icon={<RxDashboard size={24} />}
          label="Dashboard"
          path="/dashboard"
        />
        <SidebarItem
          icon={
            <Icon icon="teenyicons:wallet-outline" width="24" height="24" />
          }
          label="My Wallet"
          path="/my-wallet"
        />
        <SidebarItem
          icon={
            <Icon
              icon="eos-icons:product-subscriptions-outlined"
              width="24"
              height="24"
            />
          }
          label="MoneyBag Plans"
          path="/moneybag-plans"
        />
        <SidebarItem
          icon={
            <Icon
              icon="heroicons-outline:document-report"
              width="24"
              height="24"
            />
          }
          label="Transactions"
          path="/transactions"
        />
        <SidebarItem
          icon={
            <Icon icon="fluent:settings-16-regular" width="24" height="24" />
          }
          label="Settings"
          path="/settings"
        />
      </nav>

      {/* Push content down */}
      <div className="grow" />

      {/* Help Center Card */}
      <div className="bg-purple-700 text-white rounded-xl p-4 mb-6 text-sm">
        <p className="font-semibold mb-1">Help Center</p>
        <p className="text-xs opacity-90">
          To ensure timely and efficient support services.
        </p>

        <p className="mt-3 text-xs">
          Call: <span className="font-medium">0800000000</span>
        </p>
      </div>

      {/* Logout */}
      <button className="flex items-center gap-3 text-sm text-gray-500 hover:text-red-500">
        <Icon icon="mdi-light:logout" width="24" height="24" />
        Log Out
      </button>
    </aside>
  );
};

export default Sidebar;
