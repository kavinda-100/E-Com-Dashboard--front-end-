// import { CarouselPlugin } from "@/components/CarouselPlugin";
import DashBoardHeaderBar from "@/components/DashBoardHeaderBar";
import DashboardCars from "@/components/DashboardCars";
import NotificationCard from "@/components/NotificationCard";
import { UserContext } from "@/context/UserProvider";
import useGetData from "@/customHooks/useGetData";
import { GenerateCardData, GenerateNotificationData } from "@/lib/utils";
import {Overview} from "@/sections";
import { generateCardData, NotificationData } from "@/types";
import { useContext } from "react";

const Dashboard = () => {
  const {user, loginCount} = useContext(UserContext)

  const [cardData, isCardDataLoading, isCardDataError] =
    useGetData<generateCardData>(() => GenerateCardData(10000, 100000));

  const [notificationData, isNotificationDataLoading, isNotificationDataError] =
    useGetData<NotificationData>(() => GenerateNotificationData());

    const DashboardNotificationData = notificationData.slice(0, 8)

  return (
    <section className="flex flex-col lg:flex-row gap-3 min-h-[calc(100vh-80px)]">
      {/* dashboard */}
      <section className="flex flex-col w-full gap-3 p-2 lg:w-9/12">
        {/* greeting */}
        <h1 className="font-bold text-gray-800 text-end text-pretty dark:text-gray-400">
          Welcome {loginCount > 0 ? "back,": null} {user?.name} 
        </h1>
        {/* Header */}
        <DashBoardHeaderBar label="Dashboard" IconName="layout-dashboard"/>
        {/* detail cards */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {isCardDataLoading && <p>Loading...</p>}
          {isCardDataError && <p>Error</p>}
          {!isCardDataLoading &&
            !isCardDataError &&
            cardData.map((data, index) => (
              <DashboardCars key={index} data={data} />
            ))}
        </div>
        {/* overview */}
        <Overview />
      </section>

      {/* notifications */}
      <section className="w-full p-2 lg:w-3/12 lg:border-l-2">
        <h1 className="my-4 font-bold text-gray-800 text-pretty dark:text-gray-400">Resent Notifications</h1>
        <div className="flex flex-col items-center gap-3 my-4 justify-evenly">
          {isNotificationDataLoading && <p>Loading...</p>}
          {isNotificationDataError && <p>Error</p>}
          {!isNotificationDataLoading &&
            !isNotificationDataError &&
            DashboardNotificationData.map(({ avatar, email, name }, index) => (
              <NotificationCard
                key={index}
                avatar={avatar}
                email={email}
                name={name}
              />
            ))}
        </div>
      </section>
    </section>
  );
};

export default Dashboard;
