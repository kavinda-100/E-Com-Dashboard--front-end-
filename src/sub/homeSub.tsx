import Cards from "@/components/Cards"
import Icon from "@/components/Icon"
import { Button } from "@/components/ui/button"
import { cardData } from "@/constants"
import millify from "millify"
import { useNavigate } from "react-router-dom"


const Home = () => {
  const navigate = useNavigate()

  return (
    <section className="w-full max-w-[1440px] mx-auto mt-8 lg:mt-0 px-2">
      <div>
        <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-400 text-pretty">
            Modern E-commerce Dashboard <br/> for Everyone
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-center text-gray-600 dark:text-gray-400 text-pretty">
            With our modern e-commerce dashboard, you can easily manage your products, inventory, and orders. Stay organized and keep track of your business performance with intuitive charts and reports.
          </p>
          <div className="flex mt-8 flex-row gap-3">
            <Button size="default" onClick={() => navigate('/dashboard')}>
              Get Started
            </Button>
            <Button size="default" variant="outline">
              Register
            </Button>
          </div>
          {/* --cards--- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 lg:gap-8 xl:gap-10 mt-10">
          {
            cardData.map(({title, amount, iconName}, index) => (
              <Cards key={index} title={title} description={millify(amount)} icon={<Icon name={iconName} />} />
            ))
          }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home