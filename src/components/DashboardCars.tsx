import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { generateCardData } from "@/types";
import { ArrowDown, ArrowUp } from "lucide-react";
import Icon from "@/components/Icon";

type DashboardCarsProps = {
  data: generateCardData;
};

const DashboardCars = ({ data }: DashboardCarsProps) => {
  return (
    <Card className="flex flex-col justify-between cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <h1>{data.header}</h1>
          <Icon name={data.iconName} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h1
          className={cn(
            "text-xl font-light flex gap-1 items-center",
            data.newAmount > data.previousAmount
              ? "text-green-500"
              : " text-[#E75757]"
          )}
        >
          {data.newAmount}
          <span>
            {data.newAmount > data.previousAmount ? <ArrowUp /> : <ArrowDown />}
          </span>
        </h1>
      </CardContent>
    </Card>
  );
};

export default DashboardCars;
