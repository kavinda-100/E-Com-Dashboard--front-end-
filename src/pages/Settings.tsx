import Alert from "@/components/Alert";
import LogOutButton from "@/components/LogOutButton";
import EditForm from "@/components/form/EditForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserContext } from "@/context/UserProvider";
import { UserRoundCog } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Settings = () => {
  // get the user details
  const { user, deleteUser } = useContext(UserContext);
  // navigation
  const navigate = useNavigate();
  // handle delete user
  const handleDeleteUser = () => {
    const isSuccess = deleteUser();
    if (isSuccess) {
      toast.success("User account deleted successfully.");
      setTimeout(() => {}, 3000);
      navigate("/");
    } else {
      toast.error("Failed to delete user account. Please try again.");
    }
  };

  return (
    <section className="w-full min-h-[calc(100vh-80px)] p-3">
      <h1 className="flex items-center justify-start text-xl font-bold text-gray-800 lg:text-2xl text-start dark:text-gray-400 text-pretty">
        <UserRoundCog className="mr-2" color="#facc15" />
        Settings
      </h1>

      <section className="flex flex-col gap-4 lg:flex-row">
        <div className="w-full p-5 lg:w-1/2">
          <h1 className="my-5 font-bold text-gray-500 text-md text-start dark:text-gray-400 text-pretty">
            Profile Details
          </h1>
          {/* details */}
          <div className="w-full space-y-4">
            <div className="w-20 h-20 lg:w-40 lg:h-40">
              <Avatar className="w-20 h-20 lg:w-40 lg:h-40">
                <AvatarImage src={user?.avatar} alt="avatar" sizes="lg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col space-y-2">
              <h2 className="font-bold leading-normal text-gray-800 text-md text-start dark:text-gray-100 text-pretty">
                {user?.name}
              </h2>
              <h2 className="font-bold leading-normal text-gray-800 text-md text-start dark:text-gray-100 text-pretty">
                {user?.email}
              </h2>
            </div>
          </div>
          {/* action buttons */}
          <div className="flex flex-col gap-4 py-3 lg:flex-row">
            <div className="w-1/2 lg:w-full">
              <LogOutButton />
            </div>
            <div className="w-full">
              <Alert
                title="Do you want delete this account?"
                description="This action cannot be undone."
                triggerText="Delete Account"
                triggerVariant="destructive"
                variant="destructive"
                size="default"
                ActionFunction={handleDeleteUser}
                ActionText="Delete"
              />
            </div>
          </div>
        </div>
        <div className="w-full p-5 lg:w-1/2">
          <h1 className="my-5 font-bold text-gray-500 text-md text-start dark:text-gray-400 text-pretty">
            Edit Profile Details
          </h1>
          <div className="w-full">
            <EditForm />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Settings;
