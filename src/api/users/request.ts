import axios from "@/lib/axios";
import { SignUpType } from "@/types/users";

export const submitUser = async (params?: SignUpType) =>
  await axios.post("user", params);
