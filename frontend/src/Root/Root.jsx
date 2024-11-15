import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

function Root() {
  return (
    <>
       <div className="overflow-x-hidden text-stone-300 antialiased">
    <div className="fixed inset-0 -z-10"></div>
      <div class="relative h-full w-full bg-white">
        <div class="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      <Header />
      <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Root;
