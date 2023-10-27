export class PagesRoute {
    static login: string = "/";

    static routeConfig = [
        {name: "Login", path: PagesRoute.login, element: <h1>HelloWorld</h1>},
    ];
}
