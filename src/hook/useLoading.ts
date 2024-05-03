import client from "@/utils/client";
import { useQuery } from "@tanstack/react-query";

export const useLoading = (initialData?: boolean) => {
  const data = useQuery({
    queryKey: ["loading"],
    queryFn: () => initialData,
    enabled: false,
    initialData
  });
  const setData = (value: boolean) => client.setQueryData(["loading"], value);
  return {
    ...data,
    setData,
  };
};