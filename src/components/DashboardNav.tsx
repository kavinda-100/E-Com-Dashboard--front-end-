import { dashboardNavData } from "@/constants";
import { Button } from "@/components/ui/button";
import Icon from "@/components/Icon";
import { useNavigate, useLocation } from "react-router-dom";
import LogOutButton from "@/components/LogOutButton";

const DashboardNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex flex-col justify-between w-full">
      <div className="min-h-[calc(100vh-130px)]">
        <div className="flex flex-col w-full gap-5 mt-6">
          {dashboardNavData.map((item, index) => (
            <Button
              asChild
              size="default"
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
      </div>

      <LogOutButton />
    </div>
  );
};

export default DashboardNav;


