import Sidebar from "../components/Sidebar"


export const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="grow bg-primary-300">
        {/* Main content goes here */}
      </div>
    </div>
  )
}
