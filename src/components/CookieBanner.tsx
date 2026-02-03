import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, X } from 'lucide-react';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('gastrofish_cookie_consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('gastrofish_cookie_consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('gastrofish_cookie_consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[100] animate-in fade-in slide-in-from-bottom-5 duration-500">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="p-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-adria/10 rounded-full flex items-center justify-center shrink-0">
                            <Shield className="w-5 h-5 text-adria" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-playfair text-lg font-bold text-graphite">Privatsphäre & Cookies</h3>
                                <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-gray-600">
                                    <X size={18} />
                                </button>
                            </div>
                            <p className="font-lato text-sm text-graphite/70 leading-relaxed mb-6">
                                Wir nutzen Cookies, um unsere Website für Sie optimal zu gestalten und fortlaufend zu verbessern. Durch die weitere Nutzung der Website stimmen Sie der Verwendung von Cookies zu.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={handleAccept}
                                    className="btn-primary py-2.5 text-xs flex-1"
                                >
                                    Alle akzeptieren
                                </button>
                                <button
                                    onClick={handleDecline}
                                    className="bg-gray-100 hover:bg-gray-200 text-graphite px-6 py-2.5 rounded-lg font-lato text-xs font-bold uppercase tracking-wider transition-all flex-1"
                                >
                                    Ablehnen
                                </button>
                            </div>
                            <p className="mt-4 font-lato text-[10px] text-graphite/40 text-center uppercase tracking-widest font-bold">
                                Mehr erfahren in der <Link to="/datenschutz" className="underline hover:text-adria">Datenschutzerklärung</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
