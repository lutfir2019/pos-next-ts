import Sidebar from "@/components/global/sidebar/sidebar";

interface Children {
  children: React.ReactNode;
}
const Layout = ({ children }: Readonly<Children>) => {
  return (
    <Sidebar>
      {children}
    </Sidebar>
  );
};

export default Layout;
