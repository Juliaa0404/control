import AuthRoutes from "./AuthRoutes";
import DrawerRoutes from "./DrawerRoutes";

export default function AppRoutes() {
    const isAuthentcated = false;
    return isAuthentcated ? <DrawerRoutes/> : <AuthRoutes/>;
}