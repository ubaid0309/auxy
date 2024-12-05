import InfoBar from "@/components/infobar";
import Sidebar from "@/components/sidebar/index";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">
        <InfoBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
