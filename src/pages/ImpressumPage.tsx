import { useEffect } from 'react';

const ImpressumPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <img
                    src="/images/impressum_hero_v2.webp"
                    alt="Impressum"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-graphite/40 backdrop-blur-[2px]" />
                <div className="absolute inset-0 flex items-center justify-center pt-20">
                    <div className="text-center text-white px-4">
                        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Impressum</h1>
                        <p className="font-lato text-white/80 tracking-widest uppercase text-sm md:text-base">Gastro Fisch Brač</p>
                    </div>
                </div>
            </div>

            <div className="py-20 px-4 max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none font-lato text-graphite/80 leading-relaxed space-y-12">
                    <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h2 className="font-playfair text-2xl font-semibold text-adria mb-6 border-none">Firmeninformationen</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-graphite/40 mb-1">Eigentümer</h3>
                                <p className="text-lg font-bold text-graphite">Centaurus GmbH</p>
                                <p>Lindengasse 30/1-4<br />1070 Wien, Österreich</p>
                            </div>

                            <hr className="border-gray-200" />

                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-graphite/40 mb-1">Geschäft</h3>
                                <p className="text-lg font-bold text-adria">Gastro Fisch Brač</p>
                                <p>Zollergasse 19<br />1070 Wien, Österreich</p>
                            </div>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-playfair text-xl font-semibold text-graphite mb-4">Kontakt</h3>
                            <p><strong>E-Mail:</strong> <a href="mailto:office@centaurus-austria.at" className="text-adria hover:underline">office@centaurus-austria.at</a></p>
                            <p><strong>Telefon:</strong> +43 676 5404906</p>
                        </div>
                        <div>
                            <h3 className="font-playfair text-xl font-semibold text-graphite mb-4">Registerdaten</h3>
                            <p><strong>Firmenbuchnummer:</strong> FN 495118s</p>
                            <p><strong>UID-Nummer:</strong> ATU73523537</p>
                        </div>
                    </section>

                    <section>
                        <h3 className="font-playfair text-xl font-semibold text-graphite mb-4">Zugehörigkeiten</h3>
                        <p>Mitglied bei Wirtschaftskammer Wien, Sparte Lebensmittelhandel</p>
                    </section>

                    <section className="pt-12 border-t border-gray-100 italic text-sm text-graphite/50">
                        <p>Hinweis: Die auf dieser Webseite bereitgestellten Informationen wurden sorgfältig geprüft. Dennoch kann keine Haftung für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernommen werden.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ImpressumPage;
