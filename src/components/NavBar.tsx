import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import MobileNav from "./MobileNav";
import { useLocation, useNavigate } from "react-router-dom";
import { DrawerDialog } from "@/components/Dialog";
import { useContext } from "react";
import { UserContext } from "@/context/UserProvider";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const NavBar = () => {
  // get the context
  const { isAuthenticated, user } = useContext(UserContext);
  // get the location and navigate
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="w-full h-[40px] lg:h-[50px] shadow-sm py-2 px-2 fixed top-0 left-0 z-50 bg-background">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center">
        {/* ----logo---- */}
        <div>
          <h1 className="font-sans font-bold text-md lg:text-2xl">E-Com</h1>
        </div>
        {/* ----navigation---- */}
        <div className="items-center justify-between hidden space-x-2 lg:flex">
          <Button
            onClick={() => navigate("/")}
            variant={location.pathname === "/" ? "default" : "ghost"}
            size="sm"
          >
            Home
          </Button>
          {isAuthenticated && (
            <Button
              onClick={() => navigate("/dashboard")}
              variant={
                location.pathname === "/dashboard" ? "default" : "ghost"
              }
              size="sm"
            >
              Dashboard
            </Button>
          )}
          {!isAuthenticated && <DrawerDialog />}
          {isAuthenticated && (
            <Avatar>
              <AvatarImage src={user?.avatar} alt="avatar" sizes="sm" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          )}
          <ModeToggle />
        </div>
        {/* --mobile navigation---- */}
        <div className="flex lg:hidden">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
