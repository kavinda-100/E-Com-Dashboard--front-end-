import FilterArea from "@/components/FilterArea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GenerateNotificationData } from "@/lib/utils";
import { FilterAreaMobile } from "@/sections";
import { NotificationData } from "@/types";
import { BellRing, SendHorizontal } from "lucide-react";
import { useEffect, useState } from "react";

const Notification = () => {
  const [data, setData] = useState<NotificationData[]>([]);
  const [filterData, setFilterData] = useState<NotificationData[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [status, setStatus] = useState<"Read" | "unRead" | "all">("all");
  const [filterStatus, setFilterStatus] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    GenerateNotificationData()
      .then((res: NotificationData[]) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [status, filterStatus]);

  // filter notification data
  useEffect(() => {
    if (search) {
      setFilterData(
        data.filter((notification) => {
          return (
            notification.name.toLowerCase().includes(search.toLowerCase()) ||
            notification.email.toLowerCase().includes(search.toLowerCase())
          );
        })
      );
    } else {
      setFilterData(data);
    }
  }, [search, data]);

  return (
    <section className="w-full h-[calc(100vh-80px)]">
      <h1 className="flex items-center justify-start p-2 font-bold text-gray-800 text-md lg:text-lg text-start dark:text-gray-400 text-pretty lg:hidden">
        <BellRing className="mr-2" color="#facc15" />
        Notification
      </h1>

      {/* notification board */}
      <div className="flex w-full gap-3">
        {/* notification area */}
        <section className="w-full p-2 lg:w-9/12">
          {/* search bar and mobile menu */}
          <div className="flex items-center justify-between w-full gap-3 mb-5">
            <Input
              type="text"
              placeholder="search notifications"
              className=" max-w-96"
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="flex lg:hidden">
              <FilterAreaMobile>
                <FilterArea
                  setStatus={setStatus}
                  setFilterStatus={setFilterStatus}
                  filterStatus={filterStatus}
                />
              </FilterAreaMobile>
            </div>
            <h1 className="items-center justify-center hidden p-2 font-bold text-gray-800 text-md lg:text-lg text-start dark:text-gray-400 text-pretty lg:flex">
              <BellRing className="mr-2" color="#facc15" />
              Notification
            </h1>
          </div>
          <p className="my-3 font-semibold text-md text-pretty text-start">
            {status == "Read" ? "Read" : status == "all" ? "All" : "Un-Read"}{" "}
            Messages
          </p>
          {/* notification list */}
          <div className="w-full">
            <ScrollArea className="w-full h-[580px]">
              {loading && <p>Loading...</p>}
              {error && <p>Error: {error.message}</p>}
              {filterData?.map((notification, index) => (
                <div
                  key={index}
                  className="p-2 mb-3 border-2 border-gray-100 rounded cursor-pointer dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {/* avatar, name and email of the notification */}
                  <div className="flex gap-3">
                    <Avatar>
                      <AvatarImage
                        src={notification.avatar}
                        alt={`avatar-${notification.name}`}
                        sizes="sm"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1">
                      <div className="text-sm font-semibold">
                        {notification.name}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {notification.email}
                      </div>
                    </div>
                  </div>
                  {/* notification message */}
                  <div className="mt-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-pretty">
                      {notification.paragraph}
                    </p>
                  </div>
                  {/* reply section */}
                  <div className="flex justify-center items-center gap-3 max-w-[400px] mt-2">
                    <Input type="text" placeholder="reply..." />
                    <SendHorizontal />
                  </div>
                </div>
              ))}
              {filterData.length === 0 && (
                <p className="font-semibold text-center text-gray-500 text-md dark:text-gray-400 text-pretty">
                  No Result
                </p>
              )}
            </ScrollArea>
          </div>
        </section>
        {/* filer area */}
        <div className="hidden p-2 lg:flex lg:flex-1 max-w-[400px]">
          <FilterArea
            setStatus={setStatus}
            setFilterStatus={setFilterStatus}
            filterStatus={filterStatus}
          />
        </div>
      </div>
    </section>
  );
};

export default Notification;
