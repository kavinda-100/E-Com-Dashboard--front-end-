import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { dashboardNavData } from "@/constants"
import { Button } from "./ui/button"
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "./Icon";

const MobileDashboardNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex flex-row w-full gap-4 mb-4">
          {dashboardNavData.map((item, index) => (
            <Button
              asChild
              size="sm"
              key={index}
              className="flex items-center justify-start cursor-pointer"
              onClick={() => navigate(item.path)}
              variant={location.pathname === item.path ? "default" : "ghost"}
            >
              <span className="flex gap-2">
                <Icon name={item.iconName} size={14} />
                <p>{item.pathName}</p>
              </span>
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal"/>
    </ScrollArea>
  )
}

export default MobileDashboardNav