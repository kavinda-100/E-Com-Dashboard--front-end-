import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import { ReactNode } from "react";

const FilterAreaMobile = ({children}:{children: ReactNode}) => {
  return (
    <Sheet>
      <SheetTrigger><AlignRight /></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter Notifications</SheetTitle>
        </SheetHeader>
          {children}
      </SheetContent>
    </Sheet>
  );
};

export default FilterAreaMobile;
