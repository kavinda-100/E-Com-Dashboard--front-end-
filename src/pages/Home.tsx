import Cards from "@/components/Cards"
import { Button } from "@/components/ui/button"
import { cardData } from "@/constants"
import { UserContext } from "@/context/UserProvider"
import millify from "millify"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import {DrawerDialog} from "@/components/Dialog"

const Home = () => {
  // get the context
  const { isAuthenticated } = useContext(UserContext)
  // navigation
  const navigate = useNavigate()

  const handleGetStarted = () => {
    if(isAuthenticated){
      navigate('/dashboard')
    }
    else{
      toast.warning("Please login to access the dashboard")
      return
    }
  }

  return (
    <section className="w-full max-w-[1440px] mx-auto mt-8 lg:mt-0 px-2">
      <div>
        <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
          <h1 className="text-4xl font-bold text-center text-transparent text-pretty bg-clip-text bg-gradient-to-r from-[#facc15] dark:to-white to-gray-600">
            Modern E-commerce Dashboard <br/> for Everyone
          </h1>
          <p className="max-w-3xl mt-4 text-lg text-center text-gray-600 dark:text-gray-400 text-pretty">
            With our modern e-commerce dashboard, you can easily manage your products, inventory, and orders. Stay organized and keep track of your business performance with intuitive charts and reports.
          </p>
          <div className="flex flex-row gap-3 mt-8">
            <Button size="default" onClick={handleGetStarted}>
              Get Started
            </Button>
            {
              !isAuthenticated && (
                <DrawerDialog Size="default" />
              )
            }
          </div>
          {/* --cards--- */}
          <div className="grid grid-cols-2 gap-3 mt-10 md:grid-cols-4 md:gap-5 lg:gap-8 xl:gap-10">
          {
            cardData.map(({title, amount, iconName}, index) => (
              <Cards key={index} title={title} description={millify(amount)} icon={iconName} />
            ))
          }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home