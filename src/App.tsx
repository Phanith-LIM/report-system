import './App.css';
import {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { PagesRoute, Loading }  from "./xcore.tsx";

function App() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])
    if (loading) {
        return <Loading/>
    }
    return (
        <div className="container mx-auto max-w-7xl">
            <BrowserRouter>
                <main>
                    <Routes>
                        {PagesRoute.routeConfig.map((route, index) => (
                            <Route key={index} path={route.path} element={route.element} />
                        ))}
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App
