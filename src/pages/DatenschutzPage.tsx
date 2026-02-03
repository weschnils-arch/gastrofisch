import { useEffect } from 'react';
import { Shield, Eye } from 'lucide-react';

const DatenschutzPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <img
                    src="/images/datenschutz_sea_urchin.webp"
                    alt="Datenschutz"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-graphite/40 backdrop-blur-[2px]" />
                <div className="absolute inset-0 flex items-center justify-center pt-20">
                    <div className="text-center text-white px-4">
                        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Datenschutzerklärung</h1>
                        <p className="font-lato text-white/80 tracking-widest uppercase text-sm md:text-base">Gastro Fisch Brač</p>
                    </div>
                </div>
            </div>

            <div className="py-20 px-4 max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 bg-adria/10 rounded-xl flex items-center justify-center text-adria">
                        <Shield size={24} />
                    </div>
                    <div>
                        <p className="font-lato text-sm text-graphite/60 italic">Fassung vom 09.11.2022</p>
                    </div>
                </div>

                <div className="prose prose-slate prose-headings:font-playfair prose-headings:font-semibold prose-p:font-lato prose-p:text-graphite/80 max-w-none space-y-12">

                    <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl text-adria mb-6 flex items-center gap-2 border-none">
                            <Eye className="w-6 h-6" /> Einleitung und Überblick
                        </h2>
                        <div className="space-y-4 text-sm md:text-base leading-relaxed">
                            <p>
                                Wir haben diese Datenschutzerklärung verfasst, um Ihnen gemäß der Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten (kurz Daten) wir als Verantwortliche – und die von uns beauftragten Auftragsverarbeiter (z. B. Provider) – verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie haben.
                            </p>
                            <p>
                                Diese Datenschutzerklärung gilt für alle von uns im Unternehmen verarbeiteten personenbezogenen Daten und für alle personenbezogenen Daten, die von uns beauftragte Firmen (Auftragsverarbeiter) verarbeiten.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl text-adria border-b border-adria/10 pb-2">Rechtsgrundlagen</h2>
                        <p>
                            In der folgenden Datenschutzerklärung geben wir Ihnen transparente Informationen zu den rechtlichen Grundsätzen und Vorschriften der DSGVO. Wir verarbeiten Ihre Daten nur, wenn mindestens eine der folgenden Bedingungen zutrifft:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                            {[
                                { title: 'Einwilligung', art: 'Art. 6 Abs. 1 lit. a', desc: 'Sie haben uns Ihre Einwilligung gegeben.' },
                                { title: 'Vertrag', art: 'Art. 6 Abs. 1 lit. b', desc: 'Zur Erfüllung eines Vertrags notwendig.' },
                                { title: 'Rechtliche Verpflichtung', art: 'Art. 6 Abs. 1 lit. c', desc: 'Gesetzliche Pflicht zur Speicherung.' },
                                { title: 'Berechtigte Interessen', art: 'Art. 6 Abs. 1 lit. f', desc: 'Sicherheit und wirtschaftlicher Betrieb.' }
                            ].map((item, i) => (
                                <li key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <span className="block font-bold text-adria text-sm mb-1">{item.art}</span>
                                    <h4 className="font-playfair font-semibold mb-1">{item.title}</h4>
                                    <p className="text-sm text-graphite/60">{item.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl text-adria border-b border-adria/10 pb-2">Kontaktdaten des Verantwortlichen</h2>
                        <div className="bg-adria/5 p-6 rounded-2xl border border-adria/10">
                            <h3 className="font-playfair text-xl font-bold text-graphite mb-2">Centaurus GmbH</h3>
                            <p className="font-lato text-graphite/80">
                                Lindengasse 30/1-4<br />
                                1070 Wien, Österreich<br /><br />
                                <strong>E-Mail:</strong> info@gastrofisch.at<br />
                                <strong>Telefon:</strong> +43 676 5404906
                            </p>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl text-adria border-b border-adria/10 pb-2">Rechte laut DSGVO</h2>
                        <p>Ihnen stehen gemäß Artikel 13, 14 DSGVO folgende Rechte zu:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                                'Auskunftsrecht (Art. 15)',
                                'Recht auf Berichtigung (Art. 16)',
                                'Recht auf Löschung (Art. 17)',
                                'Recht auf Einschränkung (Art. 18)',
                                'Datenübertragbarkeit (Art. 20)',
                                'Widerspruchsrecht (Art. 21)',
                                'Beschwerderecht (Art. 77)'
                            ].map((right, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-adria" />
                                    <span className="font-lato text-xs font-medium">{right}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl text-adria border-b border-adria/10 pb-2">Sicherheit</h2>
                        <p>
                            Wir verwenden HTTPS (TLS-Verschlüsselung), um Daten abhörsicher im Internet zu übertragen.
                        </p>
                    </section>

                    <footer className="pt-10 border-t border-adria/10 text-center">
                        <p className="text-xs text-graphite/40 font-lato">
                            Erstellt mit Unterstützung von Centaurus GmbH.<br />
                            &copy; {new Date().getFullYear()} Gastro Fisch Brač.
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default DatenschutzPage;
