import AuthRoutes from "./AuthRoutes";
import DrawerRoutes from "./DrawerRoutes";

export default function AppRoutes() {
    const isAuthentcated = true;
    return isAuthentcated ? <DrawerRoutes/> : <AuthRoutes/>;
}