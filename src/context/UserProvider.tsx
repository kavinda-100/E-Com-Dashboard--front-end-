import { User, loginUser, registerUser } from "@/types";
import { faker } from "@faker-js/faker";
import { ReactNode, createContext, useEffect, useState } from "react";

type UserContextType = {
  user: User | undefined;
  loginUser: (user: loginUser) => boolean;
  registerUser: (user: registerUser) => boolean;
  logoutUser: () => boolean;
  deleteUser: () => boolean;
  editUser: (user: registerUser) => boolean;
  isAuthenticated: boolean;
  loginCount: number;
};

export const UserContext = createContext({} as UserContextType);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | undefined>();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loginCount, setLoginCount] = useState<number>(0);

  useEffect(() => {
    // get user details from local storage
    const userDetails: User = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(userDetails);
    // get user is authenticated from local storage
    setIsAuthenticated(
      JSON.parse(localStorage.getItem("isAuthenticated") || "false")
    );
    // get login count from local storage
    setLoginCount(JSON.parse(localStorage.getItem("loginCount") || "0"));
  }, []);

  // login user
  const loginUser = (user: loginUser) => {
    // get user details from local storage
    const userDetails: User = JSON.parse(localStorage.getItem("user") || "{}");
    // check if user exists
    if (userDetails) {
      // check if user email and password matches
      if (
        user.email === userDetails.email &&
        user.password === userDetails.password
      ) {
        // set user is authenticated
        setIsAuthenticated(true);
        localStorage.setItem(
          "isAuthenticated",
          JSON.stringify(true)
        );
        // increment login count
        setLoginCount(loginCount + 1);
        localStorage.setItem("loginCount", JSON.stringify(loginCount));
        return true;
      } else {
        return false;
      }
    } else {
      // set user is not authenticated
      setIsAuthenticated(false);
      localStorage.setItem("isAuthenticated", JSON.stringify(false));
      return false;
    }
  };

  // register user
  const registerUser = (user: registerUser) => {
    const newUser = {
      ...user,
      avatar: faker.image.avatar(),
    };
    // set user details to local storage
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    // set user is authenticated
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", JSON.stringify(true));
    // set login count to 0
    setLoginCount(0);
    localStorage.setItem("loginCount", JSON.stringify(loginCount));
    return true;
  };

  // logout user
  const logoutUser = () => {
    // set user is not authenticated
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", JSON.stringify(false));
    return true;
  };

  // delete user/account
  const deleteUser = () => {
    // remove user details from local storage
    localStorage.removeItem("user");
    setUser(undefined);
    // set user is not authenticated
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", JSON.stringify(false));
    // set login count to 0
    setLoginCount(0);
    localStorage.setItem("loginCount", JSON.stringify(loginCount));
    return true;
  };

  // edit user details
  const editUser = (user: registerUser) => {
    // remove user details from local storage
    localStorage.removeItem("user");
    const isSuccessful = registerUser(user);
    return isSuccessful;
  }

  const values = {
    user,
    loginUser,
    isAuthenticated,
    registerUser,
    logoutUser,
    loginCount,
    deleteUser,
    editUser,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserProvider;
