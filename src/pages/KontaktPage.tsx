import { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send, Check } from 'lucide-react';

const KontaktPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative">
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/19.jpg)' }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-3xl">
            <span className="inline-block font-lato text-xs font-semibold tracking-widest uppercase text-white/80 mb-4">Kontakt</span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Kontaktieren Sie uns</h1>
            <p className="font-lato text-lg md:text-xl text-white/90">Wir freuen uns auf Ihre Nachricht</p>
          </div>
        </div>
      </div>

      <section className="section-container section-padding bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-graphite mb-6">Besuchen Sie uns</h2>
              <p className="font-lato text-graphite/70 leading-relaxed">Ob für eine persönliche Beratung oder einen Einkauf – wir freuen uns auf Ihren Besuch.</p>
            </div>

            <div className="space-y-4">
              {[
                { icon: MapPin, title: 'Adresse', content: <><p>Gastro Fisch Brač</p><p>Zollergasse 19</p><p>1070 Wien</p></> },
                { icon: Clock, title: 'Öffnungszeiten', content: <><p>Montag – Freitag: 9:00 – 18:00 Uhr</p><p>Samstag: 9:00 – 14:00 Uhr</p><p className="text-xs opacity-50">Sonntag: Geschlossen</p></> },
                { icon: Phone, title: 'Telefon', content: <a href="tel:+4311234567" className="hover:text-adria transition-colors">+43 1 123 4567</a> },
                { icon: Mail, title: 'E-Mail', content: <a href="mailto:info@gastrofischbrac.at" className="hover:text-adria transition-colors">info@gastrofischbrac.at</a> },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 p-5 glass-card rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-adria/10 rounded-xl flex items-center justify-center flex-shrink-0"><item.icon className="w-6 h-6 text-adria" /></div>
                  <div>
                    <h3 className="font-playfair text-lg font-semibold text-graphite mb-1">{item.title}</h3>
                    <div className="font-lato text-graphite/70">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-100 rounded-xl overflow-hidden h-[250px] flex items-center justify-center">
              <div className="text-center"><MapPin className="w-12 h-12 text-adria/30 mx-auto mb-3" /><p className="font-lato text-graphite/50 text-sm">Google Maps Integration</p><p className="font-lato text-graphite/70">Zollergasse 19, 1070 Wien</p></div>
            </div>
          </div>

          <div>
            <div className="glass-card rounded-2xl p-8 md:p-10 shadow-3xl border-white/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-adria/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-graphite mb-2">Nachricht senden</h2>
              <p className="font-lato text-graphite/60 mb-8 font-light italic">Wir beraten Sie gerne individuell und unverbindlich.</p>

              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><Check className="w-8 h-8 text-green-600" /></div>
                  <h3 className="font-playfair text-xl font-semibold text-graphite mb-2">Nachricht gesendet!</h3>
                  <p className="font-lato text-graphite/60">Vielen Dank für Ihre Nachricht. Wir werden uns bald bei Ihnen melden.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-lato text-sm font-medium text-graphite mb-2">Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg font-lato text-graphite focus:outline-none focus:ring-2 focus:ring-adria/20 focus:border-adria transition-colors bg-white" placeholder="Ihr Name" required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-lato text-sm font-medium text-graphite mb-2">E-Mail *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg font-lato text-graphite focus:outline-none focus:ring-2 focus:ring-adria/20 focus:border-adria transition-colors bg-white" placeholder="email@beispiel.at" required />
                    </div>
                    <div>
                      <label className="block font-lato text-sm font-medium text-graphite mb-2">Telefon</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg font-lato text-graphite focus:outline-none focus:ring-2 focus:ring-adria/20 focus:border-adria transition-colors bg-white" placeholder="+43 1 123 4567" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-lato text-sm font-medium text-graphite mb-2">Betreff *</label>
                    <select name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg font-lato text-graphite focus:outline-none focus:ring-2 focus:ring-adria/20 focus:border-adria transition-colors bg-white" required>
                      <option value="">Bitte wählen</option>
                      <option value="einzelhandel">Einzelhandel-Anfrage</option>
                      <option value="grosshandel">Großhandel-Anfrage</option>
                      <option value="bistro">Bistro-Reservierung</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-lato text-sm font-medium text-graphite mb-2">Nachricht *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-lg font-lato text-graphite focus:outline-none focus:ring-2 focus:ring-adria/20 focus:border-adria transition-colors bg-white resize-none" placeholder="Ihre Nachricht an uns..." required />
                  </div>
                  <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2"><Send className="w-5 h-5" />Nachricht senden</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KontaktPage;
