import axios from "@/lib/axios";
import { SignUpType, UserSetting } from "@/types/users";

export const submitUser = async (params?: SignUpType) =>
  await axios.post("user", params);

export const updateUser = async (payload: UserSetting) => {
  const res = await axios.put(`user/${payload?.username}/update-user`, payload);
  return res?.data;
};

export const getSelf = async () => await axios.get("user/get-user");
