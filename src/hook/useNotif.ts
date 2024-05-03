import client from "@/utils/client";
import { useQuery } from "@tanstack/react-query";

export type InitialData = {
  show?: boolean;
  message?: string;
  title?: string;
  type?: "success" | "error" | "warning" | "info";
};

export const useNotif = (initialData?: InitialData) => {
  const data = useQuery({
    queryKey: ["notification"],
    queryFn: () => initialData,
    enabled: false,
    initialData,
  });
  const setData = (value?: InitialData) =>
    client.setQueryData(["notification"], value);
  return {
    ...data,
    setData,
  };
};
