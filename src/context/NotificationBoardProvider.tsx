import { GenerateNotificationData } from "@/lib/utils";
import { NotificationData } from "@/types";
import { ReactNode, createContext, useEffect, useState } from "react";

type NotificationBoardContextType = {
  status: "Read" | "unRead";
  filterStatus: boolean;
  setStatusValue: () => void;
  filteredData: () => void;
  data: NotificationData[];
  loading: boolean;
  error: Error | undefined;
};

export const NotificationBoardContext =
  createContext<NotificationBoardContextType>({} as NotificationBoardContextType);

const NotificationBoardProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<NotificationData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [status, setStatus] = useState<"Read" | "unRead">("unRead");
  const [filterStatus, setFilterStatus] = useState<boolean>(false);

  const GettingData = () => {
    setLoading(true);
    GenerateNotificationData()
    .then((res: NotificationData[]) => setData(res))
    .catch((err) => setError(err))
    .finally(() => setLoading(false));
  };

  useEffect(() => {
    GettingData();
  }, []);

  // filter data based on status
  const filteredData = () => {
    setFilterStatus(!filterStatus);
    GettingData();
  };

  // set status
  const setStatusValue = () => {
    setStatus(status === "Read" ? "unRead" : "Read");
    GettingData();
  };

  const values = {
    status,
    filterStatus,
    setStatusValue,
    filteredData,
    data,
    loading,
    error,
  };

  return (
    <NotificationBoardContext.Provider value={values}>
      {children}
    </NotificationBoardContext.Provider>
  );
};

export default NotificationBoardProvider;
