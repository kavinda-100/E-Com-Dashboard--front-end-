import DashboardNav from "@/components/DashboardNav"
import MobileDashboardNav from "@/components/MobileDashboardNav"
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <main className="relative flex flex-col lg:flex-row">
      <section className="hidden w-1/6 p-3 lg:flex">
        <DashboardNav />
      </section>
      <section className="block w-full p-2 lg:hidden">
        <MobileDashboardNav />
      </section>
      <section className="w-full p-2 lg:w-5/6"><Outlet /></section>
    </main>
  )
}

export default DashboardLayout

