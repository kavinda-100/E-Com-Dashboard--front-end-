import Icon from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { UserContext } from "@/context/UserProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner"

const LogOutButton = () => {
  // get the user context
  const { logoutUser } = useContext(UserContext);
  // navigation
  const navigate = useNavigate()

  const handleLogout = () => {
    // logout user
    const isLoggedOut = logoutUser();
    if (isLoggedOut) {
      // navigate to home
      navigate("/");
      // show success message
      toast.success("Logout successful");
    }
    else{
      // show error message
      toast.error("Logout failed");
    }
  };

  return (
    <div>
      <Button
        asChild
        variant="secondary"
        className="flex items-center justify-start cursor-pointer"
        onClick={handleLogout}
      >
        <span className="flex gap-2">
          <Icon name="log-out" size={14} />
          <p>Logout</p>
        </span>
      </Button>
    </div>
  );
};

export default LogOutButton;
