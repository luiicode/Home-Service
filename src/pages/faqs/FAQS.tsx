import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "../../components/ui/accordion.tsx";
import {faqs} from "./data.ts";

export default function Faqs() {


    return (
        <section className="w-full bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div className="max-w-xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Preguntas frecuentes
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Resolvemos tus dudas antes de comenzar tu servicio
                    </h2>
                    <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                        Aquí encontrarás respuestas rápidas sobre cotizaciones, horarios,
                        cobertura y el tipo de trabajos que realizamos en el hogar.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border bg-card p-5 shadow-sm">
                            <p className="text-sm font-semibold text-foreground">Respuesta rápida</p>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Te orientamos para que sepas qué incluye el servicio antes de agendar.
                            </p>
                        </div>
                        <div className="rounded-2xl border bg-card p-5 shadow-sm">
                            <p className="text-sm font-semibold text-foreground">Atención flexible</p>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Adaptamos la cita según tu disponibilidad y el tipo de trabajo.
                            </p>
                        </div>
                    </div>
                </div>

                <Accordion
                    defaultValue={["services"]}
                    className="w-full rounded-2xl border bg-card px-4 py-2 shadow-sm sm:px-6"
                >
                    {faqs.map((faq) => (
                        <AccordionItem key={faq.value} value={faq.value}>
                            <AccordionTrigger className="text-left text-base sm:text-lg">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-sm leading-7 text-muted-foreground sm:text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}