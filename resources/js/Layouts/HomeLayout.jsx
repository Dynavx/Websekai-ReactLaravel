import Sidebar from "@/Components/Sidebar";
import Topbar from "@/Components/Topbar";
import { useState } from "react";

const HomeLayout = ({ children }) => {
    const [sidebarOn, setSidebarOn] = useState(true);
    return (
        <>
            <section className="lg:flex bg-[#181A20]">
                <div className="lg:w-[15%]">
                    <Sidebar
                        sidebarOn={sidebarOn}
                        setSidebarOn={setSidebarOn}
                    />
                </div>

                <section className="lg:w-[85%] lg:px-10 pb-[2000px]">
                    <Topbar setSidebarOn={setSidebarOn} />
                    <div className="xl:w-3/4">
                        <main>{children}</main>
                    </div>
                </section>
            </section>
        </>
    );
};

export default HomeLayout;