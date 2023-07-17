import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";


interface LayoutProps {
  children: ReactNode;
  
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
    
        <Header isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        <main className="flex">
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
          <div className={`pt-2 w-full `} >
            {children}
          </div>
        </main>
        <Footer/>
    </>
  );
};

export default Layout;
