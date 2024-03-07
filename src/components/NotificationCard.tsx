import { NotificationData } from "@/types"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"


const  NotificationCard = ({avatar, name, email} : Omit<NotificationData, "phone"| "date" | "paragraph">) => {
  return (
    <div className="flex flex-row w-full gap-3 p-2 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
        <Avatar>
          <AvatarImage src={avatar} alt="avatar"/>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2">
            <div className="text-sm font-semibold">{name}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{email}</div>
        </div>
    </div>
  )
}

export default NotificationCard