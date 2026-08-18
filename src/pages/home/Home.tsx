import {Link} from "react-router-dom";
import {Button} from "../../components/ui/button";
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "../../components/ui/card";
import {Hammer, Wrench, Paintbrush, User} from "lucide-react";

export default function Home() {
    return (
        <main className={"mx-auto w-full max-w-7xl px-6 py-12 space-y-16"}>
            {/* Hero */}
            <section className={"grid gap-8 lg:grid-cols-2 items-center"}>
                <div className={"space-y-6"}>
                    <p className={"text-sm font-semibold uppercase tracking-[0.2em] text-accent2"}>Soluciones para el hogar</p>
                    <h1 className={"text-4xl font-bold leading-tight text-color1 md:text-5xl"}>
                        Construcción, remodelación y mantenimiento con confianza
                    </h1>
                    <p className={"text-base text-muted-foreground max-w-xl leading-7"}>
                        Transformamos espacios con acabados de alta calidad y un equipo comprometido. Pide una cotización
                        o contáctanos para recibir asesoría personalizada.
                    </p>

                    <div className={"flex flex-col gap-3 sm:flex-row"}>
                        <Link to={'/contact'}>
                            <Button className={"bg-Btheme px-4 py-2 text-white"}>
                                Solicitar cotización
                            </Button>
                        </Link>

                        <a href={"/contact"} className={"inline-flex items-center text-sm font-semibold text-accent2"}>
                            Conócenos más
                        </a>
                    </div>
                </div>

                <div className={"order-first lg:order-last"}>
                    <img src={'/hero.jpeg'} alt={'Hero image - proyectos de construcción'} className={"w-full h-72 rounded-xl object-cover shadow-lg md:h-96"} />
                </div>
            </section>

            {/* Services */}
            <section id={"servicios"} className={"space-y-6"}>
                <div className={"flex items-center justify-between"}>
                    <div>
                        <h2 className={"text-2xl font-bold text-color1"}>Nuestros servicios</h2>
                        <p className={"text-sm text-muted-foreground max-w-2xl"}>
                            Ofrecemos servicios integrales desde obra nueva hasta remodelaciones y acabados.
                        </p>
                    </div>
                </div>

                <div className={"grid gap-6 md:grid-cols-3"}>
                    <Card>
                        <CardHeader>
                            <CardTitle className={"flex items-center gap-3"}>
                                <Hammer className={"size-5 text-Btheme"} /> Construcción residencial
                            </CardTitle>
                            <CardDescription>
                                Proyectos llave en mano, diseño y ejecución con altos estándares de seguridad y calidad.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className={"text-sm text-muted-foreground"}>Coordinación completa desde cimentación hasta acabados.</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className={"flex items-center gap-3"}>
                                <Wrench className={"size-5 text-Btheme"} /> Remodelaciones
                            </CardTitle>
                            <CardDescription>
                                Remodelamos espacios para mejorar funcionalidad y estética según tus necesidades.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className={"text-sm text-muted-foreground"}>Renovación de cocinas, baños, y más con soluciones prácticas.</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className={"flex items-center gap-3"}>
                                <Paintbrush className={"size-5 text-Btheme"} /> Acabados y mejoras
                            </CardTitle>
                            <CardDescription>
                                Detalles y acabados que marcan la diferencia en durabilidad y estilo.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className={"text-sm text-muted-foreground"}>Pintura, recubrimientos y soluciones de carpintería y herrería.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* About */}
            <section id={"about"} className={"grid gap-6 lg:grid-cols-2 items-center"}>
                <div className={"space-y-4"}>
                    <h2 className={"text-2xl font-bold text-color1"}>Sobre nosotros</h2>
                    <p className={"text-sm text-muted-foreground max-w-xl leading-7"}>
                        Somos un equipo de profesionales dedicados a ofrecer soluciones integrales para el hogar. Nuestra
                        experiencia y atención al detalle garantizan proyectos bien planeados y ejecutados.
                    </p>

                    <ul className={"mt-4 space-y-2 text-sm text-muted-foreground"}>
                        <li>• Planificación y gestión de obra</li>
                        <li>• Garantía en materiales y mano de obra</li>
                        <li>• Entregas a tiempo y comunicación constante</li>
                    </ul>

                    <div className={"mt-6"}>
                        <Link to={'/contact'}>
                            <Button className={"px-4 py-2"}>Contáctanos</Button>
                        </Link>
                    </div>
                </div>

                <div>
                    <img src={'/hero.jpeg'} alt={'Sobre nosotros'} className={"w-full h-64 rounded-xl object-cover shadow-md"} />
                </div>
            </section>

            {/* Team */}
            <section id={"team"} className={"space-y-6"}>
                <div>
                    <h2 className={"text-2xl font-bold text-color1"}>Nuestro equipo</h2>
                    <p className={"text-sm text-muted-foreground max-w-2xl"}>
                        Profesionales con experiencia en obra, diseño y dirección de proyectos.
                    </p>
                </div>

                <div className={"grid gap-6 sm:grid-cols-2 md:grid-cols-3"}>
                    {[
                        {name: 'Carlos Pérez', role: 'Director de obra'},
                        {name: 'Ana Gómez', role: 'Diseño y acabados'},
                        {name: 'Luis Martínez', role: 'Coordinador de proyectos'},
                    ].map((member) => (
                        <Card key={member.name}>
                            <CardContent className={"flex flex-col items-center gap-4 text-center"}>
                                <div className={"grid h-20 w-20 place-items-center rounded-full bg-muted text-color1"}>
                                    <User className={"size-6"} />
                                </div>
                                <div>
                                    <h3 className={"font-medium text-color1"}>{member.name}</h3>
                                    <p className={"text-sm text-muted-foreground"}>{member.role}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </main>
    );
}
