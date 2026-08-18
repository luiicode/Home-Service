import {Outlet} from 'react-router-dom'
import {MenuBar} from "./components/shared/MenuBar.tsx";
import {Footer} from "./components/shared/Footer.tsx";

export function App() {
    return (
        <div className={'flex flex-col w-full min-h-screen overflow-y-auto'}>
            <MenuBar/>
            <main className={'flex flex-1'}>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}