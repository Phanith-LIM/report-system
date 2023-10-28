import {Authentication, SignIn, Forget} from "./pages";

export class PagesRoute {
    static authentication: string = "/";
    static sign_in: string = "sign_in";
    static forget: string = "forget";
    static all_report:string = "reports"

    static routeConfig = [
        {
            path: "/",
            element: <Authentication />,
            routes: [
                { path: "/", element: <SignIn /> },
                { path: "forget", element: <Forget /> },
            ],
        },
        {
            path: "/",
            element: <h1> HelloWorld </h1>,
        },
    ];
}
