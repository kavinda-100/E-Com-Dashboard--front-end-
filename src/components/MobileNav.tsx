import { useNavigate, useLocation } from 'react-router-dom'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import LogOutButton from '@/components/LogOutButton';
import { DrawerDialog } from "@/components/Dialog";
import { useContext } from 'react';
import { UserContext } from '@/context/UserProvider';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const MobileNav = () => {
   // get the context
   const { isAuthenticated, user } = useContext(UserContext);
   // get the location and navigate
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <>
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="flex flex-row items-center justify-between my-6">
            <SheetTitle>E-Com</SheetTitle>
            <div className='flex space-x-2'>
              <ModeToggle />
              {isAuthenticated && (
                <Avatar>
                  <AvatarImage src={user?.avatar} alt="avatar" sizes="sm" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              )}
            </div>
          </SheetHeader>
          <div className="flex flex-col items-start justify-start w-full gap-3">
            <Button
            onClick={() => navigate('/')}
              variant={location.pathname === '/' ? "default" : "ghost"}
              size="sm"
              className="w-full"
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
              className="w-full"
            >
              Dashboard
            </Button>
          )}
          {
            !isAuthenticated && (
              <DrawerDialog />
            )
          }
            <LogOutButton />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
