import { useEffect } from 'react';
import { Shield, Eye } from 'lucide-react';

const DatenschutzPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-20 px-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-adria/10 rounded-xl flex items-center justify-center text-adria">
                    <Shield size={24} />
                </div>
                <div>
                    <h1 className="font-playfair text-3xl md:text-4xl font-bold text-graphite mb-1">Datenschutzerklärung</h1>
                    <p className="font-lato text-sm text-graphite/60">Fassung vom 09.11.2022</p>
                </div>
            </div>

            <div className="prose prose-slate prose-headings:font-playfair prose-headings:font-semibold prose-p:font-lato prose-p:text-graphite/80 max-w-none space-y-12">

                <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h2 className="text-2xl text-adria mb-6 flex items-center gap-2">
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
                    <div className="grid grid-cols-1 gap-3">
                        {[
                            'Auskunftsrecht (Art. 15)',
                            'Recht auf Berichtigung (Art. 16)',
                            'Recht auf Löschung (Art. 17)',
                            'Recht auf Einschränkung der Verarbeitung (Art. 18)',
                            'Recht auf Datenübertragbarkeit (Art. 20)',
                            'Widerspruchsrecht (Art. 21)',
                            'Beschwerderecht bei der Aufsichtsbehörde (Art. 77)'
                        ].map((right, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
                                <div className="w-2 h-2 rounded-full bg-adria" />
                                <span className="font-lato text-sm font-medium">{right}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl text-adria border-b border-adria/10 pb-2">Sicherheit der Datenverarbeitung</h2>
                    <p>
                        Um personenbezogene Daten zu schützen, haben wir sowohl technische als auch organisatorische Maßnahmen umgesetzt. Wir verwenden HTTPS (TLS-Verschlüsselung), um Daten abhörsicher im Internet zu übertragen.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl text-adria border-b border-adria/10 pb-2">Webhosting & Web Analytics</h2>
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-playfair text-xl font-bold mb-4">World4You</h3>
                            <p className="text-sm text-graphite/70 mb-4">
                                Wir nutzen World4You Internet Services GmbH (Linz, Österreich) als Hosting-Provider. Dabei werden Server-Logfiles (IP-Adresse, Browser, Zeitstempel) für ca. 2 Wochen gespeichert.
                            </p>
                            <p className="text-xs text-graphite/50 italic">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-playfair text-xl font-bold mb-4">Google Analytics</h3>
                            <p className="text-sm text-graphite/70 mb-4">
                                Wir verwenden Google Analytics von Google Ireland Limited. Das Tool hilft uns, das Nutzerverhalten auf der Website zu analysieren, um unser Angebot zu optimieren. Daten werden anonymisiert verarbeitet.
                            </p>
                            <p className="text-xs text-graphite/50 italic">Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung via Cookie-Banner)</p>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl text-adria border-b border-adria/10 pb-2">Google Maps & Fonts</h2>
                    <div className="space-y-4">
                        <p>
                            Zur optimalen Darstellung von Karten (Google Maps) und Schriftarten (Google Fonts) werden Anfragen an Google-Server gesendet. Dabei werden technische Daten wie Ihre IP-Adresse übertragen.
                        </p>
                        <p className="text-sm text-graphite/70">
                            Sie können die Verwendung von Cookies direkt in Ihren Browser-Einstellungen verwalten oder deaktivieren.
                        </p>
                    </div>
                </section>

                <footer className="pt-10 border-t border-adria/10 text-center">
                    <p className="text-xs text-graphite/40">
                        Erstellt mit Unterstützung von Centaurus GmbH Datenschutz-Vorlagen.<br />
                        &copy; {new Date().getFullYear()} Gastro Fisch Brač. Alle Rechte vorbehalten.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default DatenschutzPage;
