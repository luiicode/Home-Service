import {Link} from "react-router-dom";
import {ArrowRight, PhoneCall, Wrench, Hammer, Paintbrush, Home} from "lucide-react";

export function Footer() {
    return (
        <footer className={'w-full bg-theme2 text-white'}>
            <div className={'mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-4'}>
                <section className={'space-y-4'}>
                    <img src="/logo.svg" alt="logo" className={'w-48 h-auto'} />
                    <p className={'max-w-sm text-sm leading-6 text-white/85'}>
                        Construcción, remodelación y mantenimiento para transformar tu hogar con acabados
                        funcionales, modernos y de confianza.
                    </p>
                </section>

                <section className={'space-y-4'}>
                    <h3 className={'text-lg font-semibold'}>Servicios</h3>
                    <ul className={'space-y-3 text-sm text-white/85'}>
                        <li className={'flex items-center gap-2'}>
                            <Hammer className={'size-4'} />
                            Construcción residencial
                        </li>
                        <li className={'flex items-center gap-2'}>
                            <Wrench className={'size-4'} />
                            Remodelación de espacios
                        </li>
                        <li className={'flex items-center gap-2'}>
                            <Paintbrush className={'size-4'} />
                            Acabados y mejoras
                        </li>
                    </ul>
                </section>

                <section className={'space-y-4'}>
                    <h3 className={'text-lg font-semibold'}>Navegación</h3>
                    <ul className={'space-y-3 text-sm text-white/85'}>
                        <li>
                            <Link to={'/'} className={'flex items-center gap-2 hover:text-white'}>
                                <Home className={'size-4'} />
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to={'/faqs'} className={'flex items-center gap-2 hover:text-white'}>
                                <ArrowRight className={'size-4'} />
                                Preguntas frecuentes
                            </Link>
                        </li>
                        <li>
                            <Link to={'/contact'} className={'flex items-center gap-2 hover:text-white'}>
                                <ArrowRight className={'size-4'} />
                                Cotiza tu proyecto
                            </Link>
                        </li>
                    </ul>
                </section>

                <section className={'space-y-4'}>
                    <h3 className={'text-lg font-semibold'}>Asesoría</h3>
                    <p className={'text-sm leading-6 text-white/85'}>
                        Cuéntanos tu idea y te ayudamos a convertirla en un proyecto sólido, seguro y bien
                        terminado.
                    </p>
                    <Link
                        to={'/contact'}
                        className={'inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-theme2 transition hover:bg-white/90'}
                    >
                        <PhoneCall className={'size-4'} />
                        Solicitar información
                    </Link>
                </section>
            </div>

            <div className={'border-t border-white/20'}>
                <div className={'mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-4 text-sm text-white/75 md:flex-row md:items-center md:justify-between'}>
                    <p>© 2026 Home Service. Todos los derechos reservados.</p>
                    <p>Construcción y remodelación para el hogar.</p>
                </div>
            </div>
        </footer>
    );
}