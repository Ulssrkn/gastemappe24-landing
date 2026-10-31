import React, { useState } from 'react';
import { translations } from './data/translations';
import { 
  QrCode, 
  Sparkles, 
  Check, 
  Play, 
  Building2, 
  Wifi, 
  Car, 
  Info, 
  Globe, 
  Globe2, 
  Star, 
  Navigation, 
  Eye, 
  Settings, 
  Printer, 
  Palette, 
  Plus, 
  ChevronRight, 
  ChevronDown,
  Copy, 
  Utensils, 
  ShieldCheck,
  ExternalLink,
  Download,
  CheckCircle2,
  BookOpen,
  Leaf,
  Smartphone
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('de');
  const [demoMode, setDemoMode] = useState('guest');
  const [customHotelName, setCustomHotelName] = useState('Mein Hotel');
  const [customWifiPass, setCustomWifiPass] = useState('pass2026');
  const [selectedTheme, setSelectedTheme] = useState('Navy');
  const [customCategory, setCustomCategory] = useState('Fahrradverleih & SPA');
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  
  const t = translations[lang] || translations.de;
  const LIVE_APP_URL = "https://gastemappe24-pro.vercel.app";

  const themeColors = {
    Navy: { primary: 'bg-slate-900', text: 'text-slate-900', accent: 'bg-indigo-600' },
    Wellness: { primary: 'bg-emerald-900', text: 'text-emerald-900', accent: 'bg-emerald-600' },
    Modern: { primary: 'bg-purple-900', text: 'text-purple-900', accent: 'bg-purple-600' }
  };

  const currentTheme = themeColors[selectedTheme] || themeColors.Navy;

  const handleCopyWifi = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: t.faq1q, a: t.faq1a },
    { q: t.faq2q, a: t.faq2a },
    { q: t.faq3q, a: t.faq3a },
    { q: t.faq4q, a: t.faq4a },
    { q: t.faq5q, a: t.faq5a }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased selection:bg-indigo-600 selection:text-white overflow-x-hidden relative">
      
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-bounce">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
          <span className="text-xs font-semibold">Live Synchronisiert!</span>
        </div>
      )}

      {/* NAVBAR (Şeffaf ve Genişletilmiş Logo) */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center shrink-0">
            <a href="#" className="flex items-center">
              <img 
                src="/logo.jfif" 
                alt="Gastemappe24 Logo" 
                className="h-14 sm:h-16 w-auto object-contain bg-transparent mix-blend-multiply"
              />
            </a>
          </div>

          <div className="hidden xl:flex items-center gap-6 text-xs font-semibold tracking-wider uppercase text-slate-600">
            <a href="#demo" className="hover:text-indigo-600 transition flex items-center gap-1 font-bold text-indigo-600">
              <Play size={11} fill="currentColor" /> {t.navDemo}
            </a>
            <a href="#vorteile" className="hover:text-indigo-600 transition">{t.navBenefits}</a>
            <a href="#ablauf" className="hover:text-indigo-600 transition">{t.navSteps}</a>
            <a href="#preise" className="hover:text-indigo-600 transition">{t.navPricing}</a>
            <a href="#faq" className="hover:text-indigo-600 transition">{t.navFaq}</a>
          </div>

          <div className="flex items-center gap-3">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-slate-100 font-bold text-xs text-slate-800 px-3 py-2 rounded-xl border border-slate-200 outline-none cursor-pointer uppercase hover:bg-slate-200 transition"
            >
              <option value="de">🇩🇪 DE</option>
              <option value="en">🇬🇧 EN</option>
              <option value="tr">🇹🇷 TR</option>
              <option value="it">🇮🇹 IT</option>
              <option value="fr">🇫🇷 FR</option>
              <option value="es">🇪🇸 ES</option>
              <option value="sv">🇸🇪 SV</option>
              <option value="no">🇳🇴 NO</option>
              <option value="hr">🇭🇷 HR</option>
              <option value="sq">🇦🇱 SQ</option>
            </select>

            <a href="#preise" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition">
              {t.navTestBtn}
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-24 bg-gradient-to-b from-white via-[#f8fafc] to-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 text-[11px] font-bold uppercase px-3.5 py-1.5 rounded-full">
                <Sparkles size={14} className="text-indigo-600" />
                <span>{t.heroBadge}</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                {t.heroTitle1} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-800">
                  {t.heroTitle2}
                </span> {t.heroTitle3}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                {t.heroDesc}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a 
                  href={LIVE_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm px-7 py-4 rounded-xl shadow-lg shadow-indigo-500/20 transition"
                >
                  <Play size={16} fill="currentColor" />
                  {t.btnDemo}
                  <ExternalLink size={14} className="opacity-80" />
                </a>

                <a href="#preise" className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-semibold text-sm px-7 py-4 rounded-xl transition">
                  <Building2 size={16} className="text-slate-500" />
                  {t.btnPricing}
                </a>
              </div>

              <div className="flex items-center gap-6 pt-4 text-xs font-semibold text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Check size={16} className="text-indigo-600 font-bold" />
                  {t.noCard}
                </div>
                <div className="flex items-center gap-1.5">
                  <Check size={16} className="text-indigo-600 font-bold" />
                  {t.liveIn5}
                </div>
              </div>
            </div>

            {/* HERO PHONE MOCKUP */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-[310px] bg-slate-900 rounded-[48px] p-3 shadow-2xl border-[5px] border-slate-800 text-left relative">
                <div className="bg-white rounded-[38px] overflow-hidden pt-7 pb-3 px-3 text-slate-900 relative z-10 min-h-[480px] flex flex-col justify-between border border-slate-200">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 text-white rounded-lg flex items-center justify-center font-bold text-xs ${currentTheme.primary}`}>M</div>
                        <div>
                          <span className="text-[8px] font-bold text-slate-400 uppercase block leading-none">WILLKOMMEN BEI</span>
                          <span className="text-xs font-black text-slate-900">{customHotelName}</span>
                        </div>
                      </div>
                      <span className="text-[9px] font-bold bg-slate-100 px-2 py-0.5 rounded-lg border border-slate-200 uppercase">{lang} ▾</span>
                    </div>

                    <div className="mt-3 relative rounded-2xl overflow-hidden h-32 border border-slate-200 shadow-2xs">
                      <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" alt="Resort" className="w-full h-full object-cover" />
                    </div>

                    <div className="mt-3">
                      <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase block mb-1.5">SCHNELLZUGRIFF</span>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-slate-50 p-2 rounded-xl border border-slate-200/80">
                          <div className="flex items-center gap-1.5 font-bold text-[10px] text-slate-900">
                            <Wifi size={12} className={currentTheme.text} /> WLAN
                          </div>
                          <div className="text-[8px] text-slate-500 font-mono mt-1 bg-white p-1 rounded border border-slate-200">
                            Pass: {customWifiPass}
                          </div>
                        </div>

                        <div className="bg-slate-50 p-2 rounded-xl border border-slate-200/80">
                          <div className="flex items-center gap-1.5 font-bold text-[10px] text-slate-900">
                            <Car size={12} className={currentTheme.text} /> Parkplatz
                          </div>
                          <div className="text-[8px] text-slate-500 mt-1 leading-tight">Kostenfrei am Haus</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-around text-slate-400">
                    <div className={`flex flex-col items-center font-bold ${currentTheme.text}`}><Info size={14} /><span className="text-[7px] mt-0.5">Home</span></div>
                    <div className="flex flex-col items-center"><Globe size={14} /><span className="text-[7px] font-medium mt-0.5">Mappe</span></div>
                    <div className="flex flex-col items-center"><Star size={14} /><span className="text-[7px] font-medium mt-0.5">Rate</span></div>
                  </div>
                </div>
              </div>

              <a 
                href={LIVE_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs px-6 py-3 rounded-xl shadow-lg transition"
              >
                <Play size={14} fill="currentColor" />
                <span>{t.btnDemo}</span>
                <ExternalLink size={12} className="opacity-80" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT IS A DIGITAL GUIDEBOOK? */}
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 text-[11px] font-bold uppercase px-3.5 py-1.5 rounded-full">
                <BookOpen size={14} className="text-indigo-600" />
                <span>Gastemappe24 Pro</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {t.whatIsTitle}
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t.whatIsDesc1}
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t.whatIsDesc2}
              </p>

              <div className="pt-2 flex items-center gap-4">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <CheckCircle2 size={18} className="text-indigo-600" /> 10 Weltsprachen
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <CheckCircle2 size={18} className="text-indigo-600" /> 0% Papierkram
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-800 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-black uppercase tracking-widest text-indigo-400">{t.cardBadge}</span>
                  <Sparkles size={20} className="text-indigo-400" />
                </div>
                <h3 className="text-xl font-black mb-3">{t.cardTitle}</h3>
                <p className="text-xs text-indigo-200 leading-relaxed mb-6">
                  {t.cardDesc}
                </p>
                <div className="bg-white/10 border border-white/15 p-4 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-white">QR</div>
                    <div>
                      <div className="text-xs font-bold">{t.cardRoom}</div>
                      <div className="text-[10px] text-indigo-200">{t.cardReady}</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30">{t.cardActive}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE PREVIEW SECTION */}
      <section id="demo" className="py-20 bg-[#f8fafc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              {t.demoBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
              {t.demoTitle}
            </h2>
            <p className="text-slate-600 mt-2 text-sm">
              {t.demoDesc}
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="bg-white p-1.5 rounded-2xl border border-slate-200/80 inline-flex gap-2 shadow-sm">
              <button 
                onClick={() => setDemoMode('guest')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition ${demoMode === 'guest' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
              >
                <Eye size={16} />
                {t.tabGuest}
              </button>
              <button 
                onClick={() => setDemoMode('admin')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition ${demoMode === 'admin' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
              >
                <Settings size={16} />
                {t.tabAdmin}
              </button>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl">
            {demoMode === 'guest' ? (
              
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-5 space-y-4 text-left">
                  <h3 className="text-2xl font-bold text-slate-900">{t.guestTitle}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{t.guestDesc}</p>
                  
                  <div className="space-y-2.5 pt-1">
                    <div className="bg-[#f8fafc] p-3 rounded-2xl border border-slate-200/80 shadow-2xs">
                      <div className="font-bold text-xs text-indigo-600 flex items-center gap-2">
                        <Wifi size={15} /> {t.f1Title}
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">{t.f1Desc}</p>
                    </div>

                    <div className="bg-[#f8fafc] p-3 rounded-2xl border border-slate-200/80 shadow-2xs">
                      <div className="font-bold text-xs text-indigo-600 flex items-center gap-2">
                        <Printer size={15} /> {t.f2Title}
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">{t.f2Desc}</p>
                    </div>

                    <div className="bg-[#f8fafc] p-3 rounded-2xl border border-slate-200/80 shadow-2xs">
                      <div className="font-bold text-xs text-indigo-600 flex items-center gap-2">
                        <Palette size={15} /> {t.f3Title}
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">{t.f3Desc}</p>
                    </div>

                    <div className="bg-[#f8fafc] p-3 rounded-2xl border border-slate-200/80 shadow-2xs">
                      <div className="font-bold text-xs text-indigo-600 flex items-center gap-2">
                        <Plus size={15} /> {t.f4Title}
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">{t.f4Desc}</p>
                    </div>

                    <div className="bg-[#f8fafc] p-3 rounded-2xl border border-slate-200/80 shadow-2xs">
                      <div className="font-bold text-xs text-indigo-600 flex items-center gap-2">
                        <Globe2 size={15} /> {t.f5Title}
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">{t.f5Desc}</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 flex justify-center">
                  <div className="w-full max-w-[340px] bg-slate-950 rounded-[44px] p-3.5 shadow-2xl border-[5px] border-slate-900 text-left relative">
                    <div className="bg-white rounded-[34px] overflow-hidden pt-7 pb-3 px-4 text-slate-900 relative z-10 min-h-[540px] flex flex-col justify-between border border-slate-200">
                      
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                          <div className="flex items-center gap-2.5">
                            <div className={`w-8 h-8 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-sm ${currentTheme.primary}`}>
                              M
                            </div>
                            <div>
                              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block leading-none">WILLKOMMEN BEI</span>
                              <span className="text-sm font-black text-slate-900">{customHotelName}</span>
                            </div>
                          </div>
                          
                          <select 
                            value={lang}
                            onChange={(e) => setLang(e.target.value)}
                            className="bg-slate-100 font-bold text-[10px] text-slate-800 px-2 py-1 rounded-lg border border-slate-200 outline-none uppercase"
                          >
                            <option value="de">DE</option>
                            <option value="en">EN</option>
                            <option value="tr">TR</option>
                            <option value="it">IT</option>
                            <option value="fr">FR</option>
                            <option value="es">ES</option>
                            <option value="sv">SV</option>
                            <option value="no">NO</option>
                            <option value="hr">HR</option>
                            <option value="sq">SQ</option>
                          </select>
                        </div>

                        <div className="mt-3 relative rounded-2xl overflow-hidden h-36 border border-slate-200 shadow-2xs">
                          <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" alt="Resort" className="w-full h-full object-cover" />
                        </div>

                        <div className="mt-4">
                          <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase block mb-2">SCHNELLZUGRIFF</span>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-slate-50/80 p-2.5 rounded-2xl border border-slate-200/80">
                              <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
                                <Wifi size={14} className={currentTheme.text} /> WLAN
                              </div>
                              <div className="text-[9px] text-slate-500 font-mono mt-1.5 bg-white p-1.5 rounded-xl border border-slate-200 flex items-center justify-between">
                                <span>Pass: {customWifiPass}</span>
                                <button onClick={handleCopyWifi} className="text-indigo-600 hover:text-indigo-800">
                                  <Copy size={11} />
                                </button>
                              </div>
                              {copied && <span className="text-[8px] text-emerald-600 font-bold block mt-1">Kopiert!</span>}
                            </div>

                            <div className="bg-slate-50/80 p-2.5 rounded-2xl border border-slate-200/80">
                              <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
                                <Car size={14} className={currentTheme.text} /> Parkplatz
                              </div>
                              <p className="text-[9px] text-slate-500 mt-1 leading-tight">Kostenfreie Parkplätze am Haus.</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 space-y-2">
                          <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase block mb-1">GÄSTEMAPPE</span>
                          <div className="bg-slate-50 p-2.5 rounded-2xl border border-slate-200 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <div className={`p-2 text-white rounded-xl ${currentTheme.primary}`}><Utensils size={14} /></div>
                              <div>
                                <div className="font-bold text-xs text-slate-900">{customCategory}</div>
                                <div className="text-[9px] text-slate-500">Live aktualisiert</div>
                              </div>
                            </div>
                            <ChevronRight size={14} className="text-slate-400" />
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-around text-slate-400">
                        <div className={`flex flex-col items-center font-bold ${currentTheme.text}`}><Info size={15} /><span className="text-[8px] mt-0.5">Home</span></div>
                        <div className="flex flex-col items-center"><Globe size={15} /><span className="text-[8px] mt-0.5">Gästemappe</span></div>
                        <div className="flex flex-col items-center"><Star size={15} /><span className="text-[8px] mt-0.5">Bewerten</span></div>
                        <div className="flex flex-col items-center"><Navigation size={15} /><span className="text-[8px] mt-0.5">Anfahrt</span></div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            ) : (
              
              /* MANAGEMENT STUDIO */
              <div className="max-w-4xl mx-auto text-left space-y-6">
                
                <div className="bg-[#f8fafc] p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xl space-y-6">
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-200/60 pb-5 gap-4">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">Live Studio</span>
                      <h4 className="font-black text-xl text-slate-900 mt-1 flex items-center gap-2">
                        {t.adminTitle}
                      </h4>
                      <p className="text-slate-500 text-xs mt-0.5">{t.adminSubtitle}</p>
                    </div>
                    <button 
                      onClick={() => setDemoMode('guest')} 
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition shadow-sm flex items-center gap-2 shrink-0"
                    >
                      <Eye size={14} /> {t.viewBtn}
                    </button>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-8 items-center">
                    
                    <div className="lg:col-span-7 space-y-4">
                      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-4 shadow-2xs">
                        <h5 className="font-extrabold text-xs text-slate-800 uppercase tracking-wider flex items-center gap-2">
                          <Building2 size={16} className="text-indigo-600" /> {t.brandingTitle}
                        </h5>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">{t.hotelNameLabel}</label>
                            <input 
                              type="text" 
                              value={customHotelName}
                              onChange={(e) => {
                                setCustomHotelName(e.target.value);
                                triggerToast();
                              }}
                              className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:border-indigo-600 transition shadow-2xs"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">{t.wifiPassLabel}</label>
                            <input 
                              type="text" 
                              value={customWifiPass}
                              onChange={(e) => {
                                setCustomWifiPass(e.target.value);
                                triggerToast();
                              }}
                              className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:border-indigo-600 transition shadow-2xs"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-4 shadow-2xs">
                        <h5 className="font-extrabold text-xs text-slate-800 uppercase tracking-wider flex items-center gap-2">
                          <Palette size={16} className="text-indigo-600" /> {t.themeTitle}
                        </h5>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Theme Palette</label>
                            <select 
                              value={selectedTheme}
                              onChange={(e) => {
                                setSelectedTheme(e.target.value);
                                triggerToast();
                              }}
                              className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:border-indigo-600 transition cursor-pointer shadow-2xs"
                            >
                              <option value="Navy">Navy Classic (Elegantes Blau)</option>
                              <option value="Wellness">Wellness Green (Naturgrün)</option>
                              <option value="Modern">Modern Indigo (Purpur)</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Hauptkategorie</label>
                            <input 
                              type="text" 
                              value={customCategory}
                              onChange={(e) => {
                                setCustomCategory(e.target.value);
                                triggerToast();
                              }}
                              className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:border-indigo-600 transition shadow-2xs"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 rounded-3xl text-white text-center shadow-xl border border-slate-800 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>

                      <div className="w-36 h-36 bg-white p-3 rounded-2xl shadow-2xl flex items-center justify-center border-4 border-white/10 mb-4 relative group">
                        <QrCode size={110} className="text-slate-900" />
                        <div className="absolute inset-0 bg-slate-900/90 rounded-xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 p-2">
                          <CheckCircle2 size={24} className="text-emerald-400 mb-1" />
                          <span className="text-[10px] font-bold text-white">Vektor-Qualität 300 DPI</span>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <span className="font-black text-sm tracking-wide block">{customHotelName}</span>
                        <span className="text-[10px] text-indigo-200 block">{t.qrBoxDesc}</span>
                      </div>

                      <button 
                        onClick={triggerToast}
                        className="mt-5 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[11px] py-3 px-4 rounded-xl transition shadow-md flex items-center justify-center gap-2"
                      >
                        <Download size={14} /> {t.downloadQr}
                      </button>
                    </div>

                  </div>

                </div>

              </div>

            )}
          </div>

        </div>
      </section>

      {/* BENTO GRID (AVANTAJLAR) */}
      <section id="vorteile" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.bentoTitle}
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              {t.bentoSub}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f8fafc] p-8 rounded-3xl border border-slate-200/85 hover:border-indigo-300 transition shadow-2xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                  <Leaf size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{t.b1Title}</h3>
                <p className="text-slate-600 text-xs mt-3 leading-relaxed">
                  {t.b1Desc}
                </p>
              </div>
            </div>

            <div className="bg-[#f8fafc] p-8 rounded-3xl border border-slate-200/85 hover:border-indigo-300 transition shadow-2xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{t.b2Title}</h3>
                <p className="text-slate-600 text-xs mt-3 leading-relaxed">
                  {t.b2Desc}
                </p>
              </div>
            </div>

            <div className="bg-[#f8fafc] p-8 rounded-3xl border border-slate-200/85 hover:border-indigo-300 transition shadow-2xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                  <Globe2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{t.b3Title}</h3>
                <p className="text-slate-600 text-xs mt-3 leading-relaxed">
                  {t.b3Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SO FUNKTIONIERT'S */}
      <section id="ablauf" className="py-24 bg-[#f8fafc] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{t.stepsTitle}</h2>
            <p className="text-slate-600 mt-2 text-sm">{t.stepsSub}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-sm mb-6 shadow-sm">1</div>
              <h3 className="text-lg font-bold text-slate-900">{t.s1Title}</h3>
              <p className="text-slate-600 text-xs mt-2 leading-relaxed">{t.s1Desc}</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-sm mb-6 shadow-sm">2</div>
              <h3 className="text-lg font-bold text-slate-900">{t.s2Title}</h3>
              <p className="text-slate-600 text-xs mt-2 leading-relaxed">{t.s2Desc}</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-sm mb-6 shadow-sm">3</div>
              <h3 className="text-lg font-bold text-slate-900">{t.s3Title}</h3>
              <p className="text-slate-600 text-xs mt-2 leading-relaxed">{t.s3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="preise" className="py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{t.pricingTitle}</h2>
            <p className="text-slate-600 mt-2 text-sm">{t.pricingSub}</p>
          </div>

          <div className="bg-[#f8fafc] rounded-3xl border border-slate-200 p-8 sm:p-12 relative shadow-sm">
            <div className="absolute -top-3.5 right-8 bg-indigo-600 text-white font-black text-[10px] px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
              {t.pricingBadge}
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Gastemappe24 Pro</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-5xl font-black text-slate-900 tracking-tight">149 €</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{t.pricingOnce}</span>
                </div>
                <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                  {t.pricingNote}
                </p>
              </div>

              <div className="space-y-4 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-10">
                <ul className="space-y-3.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-3"><ShieldCheck size={18} className="text-indigo-600 shrink-0" /> {t.pricingFeat1}</li>
                  <li className="flex items-center gap-3"><ShieldCheck size={18} className="text-indigo-600 shrink-0" /> {t.pricingFeat2}</li>
                  <li className="flex items-center gap-3"><ShieldCheck size={18} className="text-indigo-600 shrink-0" /> {t.pricingFeat3}</li>
                  <li className="flex items-center gap-3"><ShieldCheck size={18} className="text-indigo-600 shrink-0" /> {t.pricingFeat4}</li>
                </ul>

                <a 
                  href={LIVE_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm py-4 rounded-xl transition shadow-md shadow-indigo-500/10"
                >
                  {t.pricingBtn}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 bg-[#f8fafc] border-t border-slate-200/80">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{t.faqTitle}</h2>
            <p className="text-slate-600 mt-2 text-sm">{t.faqSub}</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-sm text-slate-900 hover:bg-slate-50 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className={`text-slate-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p>© 2026 Gastemappe24. {t.footerCopy}</p>
          <div className="flex items-center gap-6 font-semibold">
            <button className="hover:text-white transition">{t.footerImprint}</button>
            <button className="hover:text-white transition">{t.footerTandc}</button>
            <button className="hover:text-white transition">{t.footerPrivacy}</button>
          </div>
        </div>
      </footer>

    </div>
  );
}