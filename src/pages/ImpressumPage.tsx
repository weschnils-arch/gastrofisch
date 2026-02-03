import { useEffect } from 'react';

const ImpressumPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white">
            <div className="section-container max-w-4xl">
                <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-graphite mb-12 border-b border-gray-100 pb-8">Impressum</h1>

                <div className="prose prose-lg max-w-none font-lato text-graphite/80 leading-relaxed space-y-8">
                    <section>
                        <h2 className="font-playfair text-2xl font-semibold text-graphite mb-4">Centaurus GmbH</h2>
                        <p>Lindengasse 30/1-4<br />1070 Wien</p>
                    </section>

                    <section>
                        <h3 className="font-playfair text-xl font-semibold text-graphite mb-2">Geschäft: Gastro Fisch Brač</h3>
                        <p>Zollergasse 19<br />1070 Wien</p>
                    </section>

                    <section>
                        <p><strong>Firmenbuchnummer:</strong> FN 495118s</p>
                        <p><strong>E-Mail:</strong> <a href="mailto:office@centaurus-austria.at" className="text-adria hover:underline">office@centaurus-austria.at</a></p>
                    </section>

                    <section>
                        <p>Mitglied bei Wirtschaftskammer Wien, Sparte Lebensmittelhandel</p>
                    </section>

                    <section className="pt-8 border-t border-gray-100 italic text-sm">
                        <p>Hinweis: Die auf dieser Webseite bereitgestellten Informationen wurden sorgfältig geprüft. Dennoch kann keine Haftung für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernommen werden.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ImpressumPage;
