import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout () {
    return(
    // Background diubah menjadi abu-abu sangat muda (mirip referensi)
    <div className="bg-[#F8F9FA] min-h-screen flex font-inter">
      <div className="flex flex-row flex-1">
        <Sidebar />
        <div className="flex-1 flex flex-col p-6 overflow-y-auto">
          <Header />
          <Outlet/>
        </div>
      </div>
    </div>
    );
}