import Input from "@/components/global/input/inputCustom";
import Password from "@/components/global/input/password";
import { Button } from "@/components/ui/button";
import { UserSetting } from "@/types/users";
import { useEffect } from "react";

interface Props {
  isSubmitting: boolean;
  setValues: any;
  userData: UserSetting;
  values: UserSetting;
}

const Settings: React.FC<Props> = ({
  isSubmitting,
  setValues,
  userData,
  values,
}) => {
  useEffect(() => {
    setValues(userData);
  }, [userData]);

  return (
    <div className="w-full lg:w-1/2 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Update Profile</h1>
      </div>
      <div className="mt-8 space-y-6">
        <div className="space-y-2">
          <Input
            name="username"
            label="Username"
            placeholder="jhondoe"
            primary
            disabled
          />
          <Input name="name" label="Nama" placeholder="John Doe" primary />
          <Password name="currentPassword" label="Password Sebelumnya" />
          <Password
            name="password"
            label="Password Baru"
            primary={values.currentPassword != ""}
          />
          <Password
            name="passwordConfirm"
            label="Konfirmasi Password"
            primary={values.currentPassword != ""}
          />
        </div>
        <Button type="submit" className="w-full mt-4" disabled={isSubmitting}>
          Update Profile
        </Button>
      </div>
    </div>
  );
};

export default Settings;
