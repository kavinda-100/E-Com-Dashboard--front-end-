import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./LoginForm";
import Register from "./Register";
import { cn } from "@/lib/utils";

const RegisterForm = ({ className }: React.ComponentProps<"form">) => {
  return (
    <Tabs defaultValue="login" className={cn("min-w-[300px]", className)}>
      <TabsList>
        <TabsTrigger value="login">Log In</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginForm />
      </TabsContent>
      <TabsContent value="register">
        <Register />
      </TabsContent>
    </Tabs>
  );
};

export default RegisterForm;
