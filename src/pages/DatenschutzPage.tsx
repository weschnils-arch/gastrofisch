import { useEffect } from 'react';

const DatenschutzPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white text-graphite">
            <div className="section-container max-w-4xl">
                <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-12 border-b border-gray-100 pb-8">Datenschutzerklärung</h1>

                <div className="prose prose-lg max-w-none font-lato text-graphite/80 leading-relaxed space-y-12">
                    <section>
                        <h2 className="font-playfair text-2xl font-semibold mb-4">Einleitung und Überblick</h2>
                        <p>Wir haben diese Datenschutzerklärung verfasst, um Ihnen gemäß der Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten (kurz Daten) wir als Verantwortliche – und die von uns beauftragten Auftragsverarbeiter (z. B. Provider) – verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie haben.</p>
                    </section>

                    <section>
                        <h2 className="font-playfair text-2xl font-semibold mb-4">Anwendungsbereich</h2>
                        <p>Diese Datenschutzerklärung gilt für alle von uns im Unternehmen verarbeiteten personenbezogenen Daten und für alle personenbezogenen Daten, die von uns beauftragte Firmen (Auftragsverarbeiter) verarbeiten. Mit personenbezogenen Daten meinen wir Informationen im Sinne des Art. 4 Nr. 1 DSGVO wie zum Beispiel Name, E-Mail-Adresse und postalische Anschrift einer Person.</p>
                    </section>

                    <section>
                        <h2 className="font-playfair text-2xl font-semibold mb-4">Rechtsgrundlagen</h2>
                        <p>In der folgenden Datenschutzerklärung geben wir Ihnen transparente Informationen zu den rechtlichen Grundsätzen und Vorschriften, also den Rechtsgrundlagen der Datenschutz-Grundverordnung, die uns ermöglichen, personenbezogene Daten zu verarbeiten.</p>
                        <p>Was das EU-Recht betrifft, beziehen wir uns auf die VERORDNUNG (EU) 2016/679 DES EUROPÄISCHEN PARLAMENTS UND DES RATES vom 27. April 2016.</p>
                    </section>

                    <section>
                        <h2 className="font-playfair text-2xl font-semibold mb-4">Übermittlung von Daten an Dritte</h2>
                        <p>Wir geben Ihre Daten nur dann an Dritte weiter, wenn dies zur Vertragserfüllung notwendig ist, wir gesetzlich dazu verpflichtet sind oder wenn Sie uns Ihre ausdrückliche Einwilligung dazu gegeben haben.</p>
                    </section>

                    <section>
                        <h2 className="font-playfair text-2xl font-semibold mb-4">Dienste von Drittanbietern</h2>
                        <p>Auf unserer Website verwenden wir verschiedene Dienste, um Ihnen ein besseres Nutzererlebnis zu bieten (z.B. Google Maps, Analyse-Tools). Diese Dienste können Daten wie Ihre IP-Adresse oder Cookies erfassen.</p>
                    </section>

                    <section className="pt-8 border-t border-gray-100 text-sm italic">
                        <p>Für detailliertere Informationen zu den einzelnen Verarbeitungsschritten wenden Sie sich bitte an die im Impressum genannten Kontaktdaten.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default DatenschutzPage;
