import {App} from "./App.tsx";
import Home from "./pages/home/Home.tsx"
import Contact from "./pages/contact/Contact.tsx";
import Faqs from "./pages/faqs/FAQS.tsx";

import {Route, Routes} from "react-router-dom";

export function Router() {
    return (
        <Routes>
            <Route path={'/'} element={<App/>}>
                <Route index element={<Home/>}/>
                <Route path={'contact'} element={<Contact/>}/>
                <Route path={'faqs'} element={<Faqs/>}/>
            </Route>
        </Routes>
    );
}