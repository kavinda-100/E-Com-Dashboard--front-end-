import { useEffect, useState } from "react";

export default function useGetData<T>(
  GenerateData: () => Promise<T[]>
): [T[], boolean, Error | undefined] {
    
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    GenerateData()
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return [data, loading, error];
}
