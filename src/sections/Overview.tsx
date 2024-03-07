import BarCharts from "@/components/charts/BarCharts";
import useGetData from "@/customHooks/useGetData";
import {
  GenerateExchangeRate,
  GenerateRevenueStatistics,
  cn,
} from "@/lib/utils";
import { ExchangeRateType, RevenueStatisticProps } from "@/types";

const Overview = () => {
  const [revenue, isLoading, isError] = useGetData<RevenueStatisticProps>(() =>
    GenerateRevenueStatistics(true)
  );
  const [exchange, isExchangeLoading, isExchangeError] =
    useGetData<ExchangeRateType>(GenerateExchangeRate);

  return (
    <div className="flex items-center justify-between w-full gap-3 p-3">
      <div className="flex-col hidden w-8/12 lg:flex">
        <h1 className="font-bold text-gray-800 dark:text-gray-400 text-pretty">
          overview
        </h1>
        <div className="w-full p-2">
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error...</p>}
          {revenue && (
            <BarCharts
              chartData={revenue}
              dataKeyOne="revenue"
              labelOne="label"
              aspect={1.4}
              showCartesianGrid={false}
              showBar={true}
              color="#facc15"
            />
          )}
        </div>
      </div>
      <div className="w-full lg:w-4/12">
        <h1 className="font-bold text-gray-800 dark:text-gray-400 text-pretty">
          Exchange Rate
        </h1>
        <div className="w-full p-2">
          {isExchangeLoading && <p>Loading...</p>}
          {isExchangeError && <p>Error...</p>}
          {exchange &&
            exchange.map((data, index) => (
              <div
                className="flex flex-col p-2 transition duration-300 ease-in-out rounded-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                key={index}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-lg font-semibold ">{data.label}</h1>
                  </div>
                  <div>
                    <h1
                      className={cn(
                        "text-end font-light",
                        data.previousExchangeRate > data.exchangeRate &&
                          "text-[#E75757]",
                        data.previousExchangeRate < data.exchangeRate &&
                          "text-green-500"
                      )}
                    >
                      {data.exchangeRate > data.previousExchangeRate
                        ? "+ "
                        : "- "}
                      {data.exchangeRate}%
                    </h1>
                  </div>
                </div>
                <div className="items-center justify-between">
                  <h3 className="text-gray-500">{data.subLabel}</h3>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
