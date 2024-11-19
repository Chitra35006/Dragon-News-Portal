import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNav from "../components/Layout-Component/LeftNav";
import RightNav from "../components/Layout-Component/RightNav";
import NavBar from "../components/NavBar";


const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>

            <nav className="w-11/12 mx-auto py-2">
                <NavBar></NavBar>
            </nav>

            <main className="w-11/12 mx-auto pt-2 grid md:grid-cols-12 gap-3">
            
            <aside className="col-span-3">
                <LeftNav></LeftNav>
            </aside>

            <section className="col-span-6">
                <Outlet></Outlet>
            </section>
            
            <aside className="col-span-3">
                <RightNav></RightNav>
            </aside>

            </main>
        </div>
    );
};

export default HomeLayout;