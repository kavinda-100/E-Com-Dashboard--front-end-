import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon, { IconProps } from "@/components/Icon";

type CardsProps = {
  icon: IconProps['name']
  title: string
  description: string
};

const Cards = ({icon, title, description}: CardsProps) => {
  return (
    <Card className="w-full flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="text-gray-500 dark:text-gray-400 flex flex-row justify-between items-center gap-3">
          {title}
        <Icon name={icon} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h1>{description}<span className=" text-green-500 text-xl font-bold"> +</span></h1>
      </CardContent>
    </Card>
  );
};

export default Cards;
