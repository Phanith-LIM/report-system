import {Authentication} from "./pages";

export class PagesRoute {
    static login: string = "/";

    static routeConfig = [
        {name: "Login", path: PagesRoute.login, element: <Authentication />},
    ];
}
