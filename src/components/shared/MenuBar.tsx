import {useState} from "react";
import {Button} from "../ui/button.tsx";
import {Link} from "react-router-dom";
import {Menu} from "lucide-react";

export function MenuBar() {

    const [open, setOpen] = useState(false);

    const ScrollTo = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({behavior: 'smooth', block: "start"});
    }

    return (
        <nav className={'' +
            'w-full grid grid-cols-2 items-center py-3 px-5 ' +
            'md:flex md:flex-row md:items-center md:justify-between'}>
            <div>
                <img src="/logo.svg" alt="logo" className={'w-60 h-auto grid col-span-1'}/>
            </div>
            <section className={'justify-items-end grid col-span-1 md:hidden'}>
                <Button onClick={() => setOpen(!open)} className={'bg-transparent text-accent2 p-0'}>
                    <Menu className={'size-8'}/>
                </Button>
            </section>
            {
                open && (
                    <div className={'grid col-span-2 pt-5 md:hidden'}>
                        <ul className={'flex flex-col gap-3 items-center justify-center text-color1 font-public font-semibold'}>
                            <Link to={'/'}>
                                Inicio
                            </Link>
                            <a onClick={() => ScrollTo('servicios')}>
                                Servicios
                            </a>
                            <a onClick={() => ScrollTo('team')}>
                                Nuestro Equipo
                            </a>
                            <a onClick={() => ScrollTo('about')}>
                                Sobre Nosotros
                            </a>
                            <Link to={'/faqs'}>
                                FAQ's
                            </Link>
                            <Link to={'/contact'} className={'bg-Btheme px-5 py-2 rounded-2xl text-white'}>
                                Contactanos
                            </Link>
                        </ul>
                    </div>
                )
            }
            <section className={'hidden md:flex flex-row'}>
                <ul className={'flex flex-row gap-3 items-center'}>
                    <ul className={'flex flex-row gap-3 items-center justify-center text-color1 font-public font-semibold md:gap-3 lg:gap-6'}>
                        <Link to={'/'} className={'cursor-pointer hover:border-b-2 border-accent2'}>
                            Inicio
                        </Link>
                        <a onClick={() => ScrollTo('servicios')}
                           className={'cursor-pointer hover:border-b-2 border-accent2'}>
                            Servicios
                        </a>
                        <a onClick={() => ScrollTo('team')}
                           className={'cursor-pointer hover:border-b-2 border-accent2'}>
                            Nuestro Equipo
                        </a>
                        <a onClick={() => ScrollTo('about')}
                           className={'cursor-pointer hover:border-b-2 border-accent2'}>
                            Sobre Nosotros
                        </a>
                        <Link to={'/faqs'} className={'cursor-pointer hover:border-b-2 border-accent2'}>
                            FAQ's
                        </Link>
                        <Link to={'/contact'} className={'bg-Btheme px-3 py-2 rounded-2xl text-white'}>
                            Contactanos
                        </Link>
                    </ul>
                </ul>
            </section>
        </nav>
    );
}