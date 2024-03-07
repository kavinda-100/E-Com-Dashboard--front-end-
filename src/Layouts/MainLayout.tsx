import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import { Outlet } from "react-router-dom"
import { Toaster } from "@/components/ui/sonner"

const MainLayout = () => {
  return (
    <main className="relative min-h-screen bg-background">
      <NavBar />
      <main className="mt-[50px]">
      <Outlet /> 
      <Toaster />
      </main>
      <Footer />
    </main>
  )
}

export default MainLayout