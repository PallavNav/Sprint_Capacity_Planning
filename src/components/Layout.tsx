import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout() {
  const [isSidebarAvl, setIsSidebarAvl] = useState(false);
  const handleSidebar = () => {
    setIsSidebarAvl((prev) => !prev);
  };
  return (
    <div>
      <Header handleSidebar={handleSidebar} />
      {isSidebarAvl && <Sidebar handleSidebar={handleSidebar}/>}
    </div>
  );
}

export default Layout;
