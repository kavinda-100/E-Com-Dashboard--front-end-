import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type AlertProps = {
  title: string;
  description: string;
  triggerText: string;
  triggerVariant?:
    | "destructive"
    | "default"
    | "link"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  variant?:
    | "destructive"
    | "default"
    | "link"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  size?: "sm" | "lg" | "default" | "icon" | null | undefined;
  ActionFunction: () => void;
  ActionText: string;
};

const Alert = ({
  title,
  description,
  triggerText,
  variant,
  triggerVariant,
  size,
  ActionFunction,
  ActionText,
}: AlertProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          type="submit"
          variant={triggerVariant ? triggerVariant : "default"}
          size={size ? size : "default"}
          className="w-full"
        >
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className=" min-w-[280px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          <div className="w-full my-5">
            <Button
              variant={variant ? variant : "default"}
              size={size ? size : "default"}
              onClick={ActionFunction}
              className="my-5"
            >
              {ActionText}
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Alert;
