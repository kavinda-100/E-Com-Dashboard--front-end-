import { useEffect, useState } from "react";

export default function useLocalStorage<T>(
  key: string,
  previousData: T[] = []
): [T[]] {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    const Data: T[] = JSON.parse(localStorage.getItem(key) || "[]");
    if (Data.length > 0) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(previousData));
      const newData: T[] = JSON.parse(localStorage.getItem(key) || "[]");
      setData(newData);
    }
  }, [key, previousData]);

  return [data];
}
