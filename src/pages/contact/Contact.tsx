import type {ChangeEvent, FormEvent} from "react";
import {useState} from "react";
import {MessageCircle, PhoneCall, Send} from "lucide-react";

import {Button} from "../../components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../../components/ui/card";
import {Input} from "../../components/ui/input";

const whatsappNumber = "5570581012";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const text = encodeURIComponent([
            `Hola, soy ${formData.name || "un cliente"}.`,
            formData.email ? `Correo: ${formData.email}` : null,
            formData.phone ? `Teléfono: ${formData.phone}` : null,
            formData.message ? `Mensaje: ${formData.message}` : null,
        ]
            .filter(Boolean)
            .join("\n"));

        window.open(`${whatsappUrl}?text=${text}`, "_blank", "noopener,noreferrer");
    };

    return (
        <section className={"mx-auto w-full max-w-6xl px-6 py-12"}>
            <div className={"mb-10 max-w-2xl space-y-3"}>
                <p className={"text-sm font-semibold uppercase tracking-[0.2em] text-accent2"}>
                    Contáctanos
                </p>
                <h1 className={"text-3xl font-bold text-color1 md:text-4xl"}>
                    Cuéntanos tu proyecto y te ayudamos a hacerlo realidad
                </h1>
                <p className={"text-base leading-7 text-muted-foreground"}>
                    Completa el formulario o escríbenos directo por WhatsApp para recibir atención más rápida.
                </p>
            </div>

            <div className={"grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"}>
                <Card>
                    <CardHeader>
                        <CardTitle>Formulario de contacto</CardTitle>
                        <CardDescription>
                            Déjanos tus datos y te respondemos con una propuesta clara.
                        </CardDescription>
                    </CardHeader>

                    <form onSubmit={handleSubmit}>
                        <CardContent>
                            <div className={"grid gap-4"}>
                                <div className={"grid gap-4 md:grid-cols-2"}>
                                    <label className={"grid gap-2"}>
                                        <span className={"text-sm font-medium text-color1"}>Nombre</span>
                                        <Input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Tu nombre"
                                            autoComplete="name"
                                            required
                                        />
                                    </label>

                                    <label className={"grid gap-2"}>
                                        <span className={"text-sm font-medium text-color1"}>Correo</span>
                                        <Input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="tu@email.com"
                                            autoComplete="email"
                                            required
                                        />
                                    </label>
                                </div>

                                <div className={"grid gap-4 md:grid-cols-2"}>
                                    <label className={"grid gap-2"}>
                                        <span className={"text-sm font-medium text-color1"}>Teléfono</span>
                                        <Input
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="55 0000 0000"
                                            autoComplete="tel"
                                        />
                                    </label>

                                    <div className={"grid gap-2"}>
                                        <span className={"text-sm font-medium text-color1"}>Mensaje</span>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Cuéntanos qué necesitas"
                                            rows={5}
                                            className={"min-h-32 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-base outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm"}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>

                        <CardFooter className={"flex flex-col gap-3 sm:flex-row sm:justify-end"}>
                            <Button type="submit" className={"w-full sm:w-auto"}>
                                <Send className={"size-4"} />
                                Enviar por WhatsApp
                            </Button>
                        </CardFooter>
                    </form>
                </Card>

                <Card className={"h-fit"}>
                    <CardHeader>
                        <CardTitle>Contacto directo</CardTitle>
                        <CardDescription>
                            Escríbenos por WhatsApp y recibe atención inmediata.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className={"space-y-4"}>
                        <p className={"text-sm leading-6 text-muted-foreground"}>
                            Si prefieres una respuesta más rápida, usa el botón directo para iniciar la conversación
                            sin llenar el formulario.
                        </p>

                        <Button
                            type="button"
                            className={"w-full"}
                            onClick={() => window.open(whatsappUrl, "_blank", "noopener,noreferrer")}
                        >
                            <MessageCircle className={"size-4"} />
                            Abrir WhatsApp
                        </Button>
                    </CardContent>

                    <CardFooter className={"justify-start"}>
                        <div className={"flex items-center gap-2 text-sm text-muted-foreground"}>
                            <PhoneCall className={"size-4"} />
                            <span>55 7058 1012</span>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </section>
    );
}