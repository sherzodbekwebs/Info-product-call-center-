import React, { useState, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  ArrowLeft, Settings, Zap, Fuel, Gauge, Box, Weight,
  MapPin, CreditCard, Activity, TrendingDown, AlertTriangle, FileText,
  Scale, ArrowRightLeft, Info, Filter, Search, Check, Globe
} from 'lucide-react';
import './App.css';
import { TRUCKS_DATA } from './data.jsx';

// --- TILLAR UCHUN LUG'AT (UI elementlari uchun) ---
const UI_TEXT = {
  uz: {
    back: "Katalogga qaytish",
    searchPlaceholder: "Texnika nomi yoki formula...",
    allFormulas: "Barcha formulalar",
    filterTitle: "Saralash:",
    specs: {
      engine: "DVIGATEL",
      power: "QUVVATI",
      fuel: "YOQILG'I",
      tank: "BAK HAJMI",
      weight: "VAZNI",
      formula: "FORMULA",
      load: "YUK KO'TARISHI"
    },
    sections: {
      service: "Servis va ehtiyot qismlar",
      usage: "Soha va vazifasi",
      finance: "Moliyalashtirish",
      features: "Ekspluatatsiya xususiyatlari",
      costs: "Yillik saqlash xarajatlari",
      weak: "Kuchsiz tomonlari",
      offers: "Takliflar",
      competitors: "Raqobatchilar va solishtirish"
    },
    noImage: "Rasm yo'q",
    notfound: "Texnika topilmadi!"
  },
  ru: {
    back: "Вернуться в каталог",
    searchPlaceholder: "Название техники или формула...",
    allFormulas: "Все формулы",
    filterTitle: "Сортировка:",
    specs: {
      engine: "ДВИГАТЕЛЬ",
      power: "МОЩНОСТЬ",
      fuel: "ТОПЛИВО",
      tank: "ОБЪЕМ БАКА",
      weight: "МАССА",
      formula: "ФОРМУЛА",
      load: "ГРУЗОПОДЪЕМНОСТЬ"
    },
    sections: {
      service: "Сервис и запчасти",
      usage: "Сфера и задачи",
      finance: "Финансирование",
      features: "Особенности эксплуатации",
      costs: "Ежегодные расходы",
      weak: "Слабые стороны",
      offers: "Предложения",
      competitors: "Конкуренты и сравнение"
    },
    noImage: "Нет фото",
    notfound: "Техника не найдена!"
  }
};

// --- SCROLLNI BOSHQARISH ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname !== "/") window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- TRANSLITERATSIYA ---
const latinToCyrillic = (str) => {
  if (!str) return "";
  const mapping = {
    'sh': 'ш', 'ch': 'ч', 'yu': 'ю', 'ya': 'я', 'yo': 'ё', 'ts': 'ц',
    'c': 'ц', 'a': 'а', 'b': 'б', 'v': 'в', 'g': 'г', 'd': 'д', 'e': 'е', 'j': 'ж',
    'z': 'з', 'i': 'и', 'y': 'й', 'k': 'к', 'l': 'л', 'm': 'м', 'n': 'н',
    'o': 'о', 'p': 'п', 'r': 'р', 's': 'с', 't': 'т', 'u': 'у', 'f': 'ф',
    'x': 'х', 'q': 'қ', "g'": 'ғ', "o'": 'ў', 'h': 'ҳ', ' ': ' '
  };
  let res = str.toLowerCase();
  ['sh', 'ch', 'yu', 'ya', 'yo', 'ts'].forEach(char => {
    res = res.split(char).join(mapping[char]);
  });
  Object.keys(mapping).forEach(char => {
    if (char.length === 1) res = res.split(char).join(mapping[char]);
  });
  return res;
};

const cyrillicToLatin = (str) => {
  if (!str) return "";
  const mapping = {
    'ш': 'sh', 'ч': 'ch', 'ю': 'yu', 'я': 'ya', 'ё': 'yo', 'ц': 'ts',
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'j',
    'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
    'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f',
    'х': 'x', 'қ': 'q', 'ғ': "g'", 'ў': "o'", 'ҳ': 'h'
  };
  return str.toLowerCase().split('').map(char => mapping[char] || char).join('');
};

// --- HIGHLIGHT ---
const HighlightText = ({ text, highlight }) => {
  if (!text || !highlight.trim()) return <span>{text}</span>;
  const cyrHighlight = latinToCyrillic(highlight);
  const regex = new RegExp(`(${highlight}|${cyrHighlight})`, 'gi');
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) => 
        regex.test(part) ? <b key={i} style={{ color: '#2563eb', fontWeight: '800' }}>{part}</b> : part
      )}
    </span>
  );
};

// --- TIL ALMASHTIRGICH KOMPONENTI ---
const LanguageSwitcher = ({ lang, setLang }) => (
  <div className="lang-switcher" style={{ display: 'flex', gap: '5px', marginBottom: '15px', justifyContent: 'flex-end' }}>
    <button 
      onClick={() => setLang('uz')} 
      className={`lang-btn ${lang === 'uz' ? 'active' : ''}`}
      style={{ padding: '5px 10px', borderRadius: '8px', cursor: 'pointer', border: '1px solid #e2e8f0', background: lang === 'uz' ? '#2563eb' : 'white', color: lang === 'uz' ? 'white' : '#64748b' }}
    >
      UZ
    </button>
    <button 
      onClick={() => setLang('ru')} 
      className={`lang-btn ${lang === 'ru' ? 'active' : ''}`}
      style={{ padding: '5px 10px', borderRadius: '8px', cursor: 'pointer', border: '1px solid #e2e8f0', background: lang === 'ru' ? '#2563eb' : 'white', color: lang === 'ru' ? 'white' : '#64748b' }}
    >
      RU
    </button>
  </div>
);

// --- 1-SAHIFA: KATALOG ---
const CatalogPage = ({ lang, setLang }) => {
  const navigate = useNavigate();
  const [activeCat, setActiveCat] = useState(sessionStorage.getItem('cat') || "All");
  const [activeFormula, setActiveFormula] = useState(sessionStorage.getItem('formula') || "All"); 
  const [searchTerm, setSearchTerm] = useState(sessionStorage.getItem('search') || "");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const t = UI_TEXT[lang];

  useEffect(() => {
    sessionStorage.setItem('cat', activeCat);
    sessionStorage.setItem('formula', activeFormula);
    sessionStorage.setItem('search', searchTerm);
  }, [activeCat, activeFormula, searchTerm]);

  useLayoutEffect(() => {
    const savedScrollPos = sessionStorage.getItem('scrollPos');
    if (savedScrollPos) {
      setTimeout(() => window.scrollTo(0, parseInt(savedScrollPos)), 50);
    }
    const handleScroll = () => sessionStorage.setItem('scrollPos', window.scrollY.toString());
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cyrillicSearch = latinToCyrillic(searchTerm);
  const allFormulas = ["All", ...new Set(TRUCKS_DATA.map(t => t.formula).filter(Boolean))];

  const filteredTrucks = TRUCKS_DATA.filter(truck => {
    const idNum = parseInt(truck.id);
    const tNameCyr = (truck.name || "").toLowerCase();
    const tNameLat = cyrillicToLatin(tNameCyr);
    
    let matchesCategory = false;
    if (activeCat === "All") matchesCategory = true;
    else if (activeCat === "Tyagach") matchesCategory = idNum >= 1 && idNum <= 4;
    else if (activeCat === "Samosval") matchesCategory = idNum >= 5 && idNum <= 8;
    else if (activeCat === "Furgon") matchesCategory = idNum >= 9 && idNum <= 14;
    else if (activeCat === "Special") matchesCategory = idNum >= 15 && idNum <= 37;
    else if (activeCat === "Pritsep") matchesCategory = idNum >= 38 && idNum <= 50;
    else if (activeCat === "Jac") matchesCategory = idNum >= 51 && idNum <= 54;
    else if (activeCat === "Shassi") matchesCategory = idNum >= 55 && idNum <= 58;

    const matchesFormula = activeFormula === "All" || truck.formula === activeFormula;
    const matchesSearch = tNameCyr.includes(searchTerm.toLowerCase()) || 
                          tNameCyr.includes(cyrillicSearch) || 
                          tNameLat.includes(searchTerm.toLowerCase());

    return matchesCategory && matchesFormula && matchesSearch;
  });

  const suggestions = searchTerm.length > 0
    ? TRUCKS_DATA.filter(truck => {
        const nameCyr = (truck.name || "").toLowerCase();
        return nameCyr.includes(searchTerm.toLowerCase()) || nameCyr.includes(cyrillicSearch);
      }).slice(0, 10) 
    : [];

  const categories = [
    { uz: "Barchasi", ru: "Все", val: "All" },
    { uz: "Tyagach", ru: "Тягач", val: "Tyagach" },
    { uz: "Samosval", ru: "Самосвал", val: "Samosval" },
    { uz: "Furgonlar", ru: "Фургоны", val: "Furgon" },
    { uz: "Maxsus texnika", ru: "Спецтехника", val: "Special" },
    { uz: "Pritseplar", ru: "Прицепы", val: "Pritsep" },
    { uz: "JAC", ru: "JAC", val: "Jac" },
    { uz: "Shassi", ru: "Шасси", val: "Shassi" },
  ];

  return (
    <div className="app-container">
      <LanguageSwitcher lang={lang} setLang={setLang} />

      <div className="search-section" style={{ marginBottom: '15px', position: 'relative' }}>
        <div className="search-box-inner" style={{ display: 'flex', alignItems: 'center', background: '#f1f5f9', borderRadius: '12px', padding: '10px 15px' }}>
          <Search size={20} color="#64748b" style={{ marginRight: '10px' }} />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchTerm}
            onFocus={() => setShowSuggestions(true)}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '16px' }}
          />
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div className="search-suggestions-dropdown">
            {suggestions.map(s => (
              <div key={s.id} onClick={() => { setSearchTerm(s.name); setShowSuggestions(false); }} className="suggestion-item">
                <HighlightText text={s.name} highlight={searchTerm} />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="formula-chips">
        {allFormulas.map(f => (
          <button key={f} onClick={() => setActiveFormula(f)} className={`chip ${activeFormula === f ? 'active' : ''}`}>
            {f === "All" ? t.allFormulas : f}
          </button>
        ))}
      </div>

      <div className="filter-wrapper">
        <div className="filter-label"><Filter size={18} /> <span>{t.filterTitle}</span></div>
        <div className="filter-buttons">
          {categories.map(cat => (
            <button key={cat.val} className={`filter-btn ${activeCat === cat.val ? 'active' : ''}`} onClick={() => setActiveCat(cat.val)}>
              {cat[lang]}
            </button>
          ))}
        </div>
      </div>

      <div className="truck-grid">
        {filteredTrucks.map(truck => (
          <div className="truck-card" key={truck.id} onClick={() => navigate(`/truck/${truck.id}`)}>
            <div className="card-image-box"><img src={truck.img} alt={truck.name} /></div>
            <div className="card-info-box">
              <h3 className="truck-title">{truck.name}</h3>
              <div className="truck-price">{truck.price}</div>
              <div className="truck-meta"><span>{truck.formula}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 2-SAHIFA: TRUCK DETAILS ---
const TruckDetails = ({ lang, setLang }) => {
  const { id } = useParams();
  const truck = TRUCKS_DATA.find(t => t.id === id);
  const ui = UI_TEXT[lang];

  if (!truck) return <div className="app-container">{ui.notfound}</div>;

  // Yordamchi funksiya: Agar ma'lumot obyekt bo'lsa tanlangan tilni qaytaradi, aks holda o'zini
  const getLangVal = (field) => {
    if (field && typeof field === 'object') return field[lang] || field['uz'];
    return field;
  };

  return (
    <div className="app-containerr">
      <div className="sticky-nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" className="back-btn"><ArrowLeft size={18} /> {ui.back}</Link>
        <LanguageSwitcher lang={lang} setLang={setLang} />
      </div>

      <div className="details-page">
        <div className="details-content">
          <div className="details-header-flex">
            <img src={truck.img} alt={truck.name} className="main-details-img" />
            <div className="main-title-box">
              <h1>{truck.name}</h1>
              <div className="details-price">{truck.price}</div>
            </div>
          </div>

          <div className="spec-grid">
            {truck.engine && truck.engine !== "x" && (
              <div className="spec-card">
                <Settings size={20} color="#64748b" />
                <b>{ui.specs.engine}</b>
                <span>{truck.engine}</span>
              </div>
            )}
            {truck.power && truck.power !== "x" && (
              <div className="spec-card">
                <Zap size={20} color="#64748b" />
                <b>{ui.specs.power}</b>
                <span>{truck.power}</span>
              </div>
            )}
            {truck.fuel && truck.fuel !== "x" && (
              <div className="spec-card">
                <Fuel size={20} color="#64748b" />
                <b>{ui.specs.fuel}</b>
                <span>{truck.fuel}</span>
              </div>
            )}
            {truck.tank && truck.tank !== "x" && (
              <div className="spec-card">
                <Gauge size={20} color="#64748b" />
                <b>{ui.specs.tank}</b>
                <span>{truck.tank}</span>
              </div>
            )}
            {truck.Снаряженная_масса_тн && (
              <div className="spec-card">
                <Scale size={20} color="#64748b" />
                <b>{ui.specs.weight}</b>
                <span>{truck.Снаряженная_масса_тн} tн</span>
              </div>
            )}
            <div className="spec-card">
              <Box size={20} color="#64748b" />
              <b>{ui.specs.formula}</b>
              <span>{truck.formula}</span>
            </div>
            {truck.load && truck.load !== "x" && (
              <div className="spec-card">
                <Weight size={20} color="#64748b" />
                <b>{ui.specs.load}</b>
                <span>{truck.load} тн</span>
              </div>
            )}
          </div>

          {truck.Komplektatsiya && truck.Komplektatsiya !== "x" && (
            <div className="package-info-box">
              <h4>Komplektatsiya</h4>
              <p>{getLangVal(truck.Komplektatsiya)}</p>
            </div>
          )}

          <div className="extra-info-wrapper">
            <div className="info-section-item service-bg">
              <strong><MapPin size={20} color="#3b82f6" /> {ui.sections.service}</strong>
              <p><b>Servis:</b> {getLangVal(truck.Rasmiy_servis_mavjudligi)}</p>
              <p><b>Ehtiyot qismlar:</b> {getLangVal(truck.Ehtiyot_qismlar_mavjudligi)}</p>
            </div>

            {truck.Soha_va_vazifasi && truck.Soha_va_vazifasi !== "x" && (
              <div className="info-section-item usage-bg">
                <strong><Info size={20} color="#1e40af" /> {ui.sections.usage}</strong>
                <p>{getLangVal(truck.Soha_va_vazifasi)}</p>
              </div>
            )}

            {truck.Moliyalashtirish && truck.Moliyalashtirish !== "x" && (
              <div className="info-section-item finance-bg">
                <strong><CreditCard size={20} color="#166534" /> {ui.sections.finance}</strong>
                <p>{getLangVal(truck.Moliyalashtirish)}</p>
              </div>
            )}

            {truck.Ekspluatatsiya_xususiyatlari && truck.Ekspluatatsiya_xususiyatlari !== "x" && (
              <div className="info-section-item properties-bg">
                <strong><Activity size={20} color="#6366f1" /> {ui.sections.features}</strong>
                <p>{getLangVal(truck.Ekspluatatsiya_xususiyatlari)}</p>
              </div>
            )}

            {truck.Yillik_saqlash_xarajatlari && truck.Yillik_saqlash_xarajatlari !== "x" && (
              <div className="info-section-item cost-bg">
                <strong><TrendingDown size={20} color="#ea580c" /> {ui.sections.costs}</strong>
                <p>{getLangVal(truck.Yillik_saqlash_xarajatlari)}</p>
              </div>
            )}

            {truck.Kuchsiz_tomonlari && truck.Kuchsiz_tomonlari !== "x" && (
              <div className="info-section-item weak-bg">
                <strong><AlertTriangle size={20} color="#e11d48" /> {ui.sections.weak}</strong>
                <p>{getLangVal(truck.Kuchsiz_tomonlari)}</p>
              </div>
            )}

            {truck.Takliflar && truck.Takliflar !== "x" && (
              <div className="info-section-item offers-bg">
                <strong><FileText size={20} color="#854d0e" /> {ui.sections.offers}</strong>
                <p>{getLangVal(truck.Takliflar)}</p>
                {truck.img2 && <img src={truck.img2} alt="offer" className="offer-img" />}
              </div>
            )}

            {truck.competitors && truck.competitors.length > 0 && (
              <div className="competitors-section">
                <div className="section-title-flex">
                  <ArrowRightLeft size={28} color="#f59e0b" />
                  <h2>{ui.sections.competitors}</h2>
                </div>
                <div className="competitors-grid">
                  {truck.competitors.map((comp, idx) => (
                    <div className="competitor-card" key={idx}>
                      <div className="comp-img-container">
                        {comp.imgk ? <img src={comp.imgk} alt={comp.name} /> : <span>{ui.noImage}</span>}
                      </div>
                      <div className="comp-body">
                        <h3 className="comp-name">{comp.name}</h3>
                        <div className="comp-price-tag">{comp.price}</div>
                        <div className="comp-detailed-info">
                          <div className="comp-info-line"><strong>Komplektatsiya:</strong> {getLangVal(comp.Komplektatsiya)}</div>
                          <div className="comp-info-line"><strong>Servis:</strong> {getLangVal(comp.Rasmiy_servis_mavjudligi)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- ASOSIY APP ---
export default function App() {
  // Til holatini localStorage'da saqlaymiz
  const [lang, setLang] = useState(localStorage.getItem('appLang') || 'uz');

  const handleSetLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('appLang', newLang);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<CatalogPage lang={lang} setLang={handleSetLang} />} />
        <Route path="/truck/:id" element={<TruckDetails lang={lang} setLang={handleSetLang} />} />
      </Routes>
    </BrowserRouter>
  );
}