import { DatePickerWithRange } from "@/components/DatePickerWithRange";
import { Button } from "@/components/ui/button";
import Icon, { IconProps } from "./Icon";

const DashBoardHeaderBar = ({label, IconName}:{label: string, IconName?: IconProps["name"]}) => {
  return (
    <div className="flex flex-col gap-2 py-3 lg:items-center lg:justify-between lg:flex-row">
      <h1 className="flex items-center justify-start text-xl font-bold text-gray-800 lg:text-2xl text-pretty dark:text-gray-400">
        <Icon name={IconName ? IconName : "award"} className="mr-2" color="#facc15" />
        {label}
      </h1>
      <div className="flex flex-col gap-2 lg:items-center lg:justify-between lg:flex-row">
        <DatePickerWithRange />
        <Button variant="default">Export</Button>
      </div>
    </div>
  );
};

export default DashBoardHeaderBar;
