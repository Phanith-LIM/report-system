import './App.css';
import {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PagesRoute, Loading} from "./xcore.tsx";

function App() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])
    if (loading) {
        return <Loading/>
    }
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    {PagesRoute.routeConfig.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element}>
                            {route.routes &&
                                route.routes.map((subRoute, subIndex) => (
                                    <Route
                                        key={subIndex}
                                        path={subRoute.path}
                                        element={subRoute.element}
                                    />
                                ))}
                        </Route>
                    ))}
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App
