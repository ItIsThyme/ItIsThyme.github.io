import { Outlet } from "react-router";
import CustomAppBar from "./components/CustomAppBar";

export default function Layout() {
    return (
        <div>
            <CustomAppBar />
            <Outlet />
        </div>
    )
}