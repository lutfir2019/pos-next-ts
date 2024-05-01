import LoadingPage from "@/components/global/modal/loadingPage";
import Sidebar from "@/components/global/sidebar/sidebar";

interface Children {
  children: React.ReactNode;
}
const Layout = ({ children }: Readonly<Children>) => {
  return (
    <Sidebar>
      {children}
      <LoadingPage />
    </Sidebar>
  );
};

export default Layout;
