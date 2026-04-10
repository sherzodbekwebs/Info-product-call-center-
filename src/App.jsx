import React, { useState, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  ArrowLeft, Settings, Zap, Fuel, Gauge, Box, Weight,
  MapPin, CreditCard, Activity, TrendingDown, AlertTriangle, FileText,
  Maximize, Scale, ArrowRightLeft, Info, Filter, Search, Check
} from 'lucide-react';
import './App.css';
import { TRUCKS_DATA } from './data.jsx';

// --- 0. SCROLLNI BOSHQARISH (Details sahifasiga kirganda tepaga chiqaradi) ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname !== "/") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
};

// --- LOTINDAN KIRILLGA O'GIRISH (Transliteratsiya) ---
const latinToCyrillic = (str) => {
  if (!str) return "";
  const mapping = {
    'sh': 'ш', 'ch': 'ч', 'yu': 'ю', 'ya': 'я', 'yo': 'ё', 'ts': 'ц',
    'c': 'ц', // Avtocisterna deb yozsa ham topishi uchun
    'a': 'а', 'b': 'б', 'v': 'в', 'g': 'г', 'd': 'д', 'e': 'е', 'j': 'ж',
    'z': 'з', 'i': 'и', 'y': 'й', 'k': 'к', 'l': 'л', 'm': 'м', 'n': 'н',
    'o': 'о', 'p': 'п', 'r': 'р', 's': 'с', 't': 'т', 'u': 'у', 'f': 'ф',
    'x': 'х', 'q': 'қ', "g'": 'ғ', "o'": 'ў', 'h': 'ҳ', ' ': ' '
  };

  let res = str.toLowerCase();
  // Birikmalarni birinchi almashtiramiz
  ['sh', 'ch', 'yu', 'ya', 'yo', 'ts'].forEach(char => {
    res = res.split(char).join(mapping[char]);
  });
  // Keyin alohida harflarni
  Object.keys(mapping).forEach(char => {
    if (char.length === 1) {
      res = res.split(char).join(mapping[char]);
    }
  });
  return res;
};

// --- KIRILLDAN LOTINGA O'GIRISH (Aqlli qidiruv uchun) ---
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

// --- QIDIRUVDA HARFLARNI BO'YASH ---
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

// --- 1-САҲИФА: КАТАЛОГ ---
const CatalogPage = () => {
  const navigate = useNavigate();

  // State-larni sessionStorage-dan tiklash
  const [activeCat, setActiveCat] = useState(sessionStorage.getItem('cat') || "All");
  const [activeFormula, setActiveFormula] = useState(sessionStorage.getItem('formula') || "All"); 
  const [searchTerm, setSearchTerm] = useState(sessionStorage.getItem('search') || "");
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    sessionStorage.setItem('cat', activeCat);
    sessionStorage.setItem('formula', activeFormula);
    sessionStorage.setItem('search', searchTerm);
  }, [activeCat, activeFormula, searchTerm]);

  // SCROLL JOYINI SAQLASH VA QAYTARISH
  useLayoutEffect(() => {
    const savedScrollPos = sessionStorage.getItem('scrollPos');
    if (savedScrollPos) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollPos));
      }, 50);
    }

    const handleScroll = () => {
      sessionStorage.setItem('scrollPos', window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cyrillicSearch = latinToCyrillic(searchTerm);
  const allFormulas = ["All", ...new Set(TRUCKS_DATA.map(t => t.formula).filter(Boolean))];

  const filteredTrucks = TRUCKS_DATA.filter(t => {
    const idNum = parseInt(t.id);
    const tNameCyr = (t.name || "").toLowerCase();
    const tNameLat = cyrillicToLatin(tNameCyr);
    const tFormula = (t.formula || "").toLowerCase();
    const sTerm = searchTerm.toLowerCase();
    
    let matchesCategory = false;
    if (activeCat === "All") matchesCategory = true;
    else if (activeCat === "Tyagach") matchesCategory = idNum >= 1 && idNum <= 4;
    else if (activeCat === "Samosval") matchesCategory = idNum >= 5 && idNum <= 8;
    else if (activeCat === "Furgon") matchesCategory = idNum >= 9 && idNum <= 14;
    else if (activeCat === "Special") matchesCategory = idNum >= 15 && idNum <= 37;
    else if (activeCat === "Pritsep") matchesCategory = idNum >= 38 && idNum <= 50;
    else if (activeCat === "Jac") matchesCategory = idNum >= 51 && idNum <= 54;
    else if (activeCat === "Shassi") matchesCategory = idNum >= 55 && idNum <= 58;

    const matchesFormula = activeFormula === "All" || t.formula === activeFormula;

    // "y" -> "ya", "c" -> "ts" kabi aqlli qidiruv
    const matchesSearch =
      tNameCyr.includes(sTerm) ||
      tNameCyr.includes(cyrillicSearch) ||
      tNameLat.includes(sTerm) ||
      tFormula.includes(sTerm);

    return matchesCategory && matchesFormula && matchesSearch;
  });

  const suggestions = searchTerm.length > 0
    ? TRUCKS_DATA.filter(t => {
        const nameCyr = (t.name || "").toLowerCase();
        const nameLat = cyrillicToLatin(nameCyr);
        return nameCyr.includes(searchTerm.toLowerCase()) || 
               nameCyr.includes(cyrillicSearch) ||
               nameLat.includes(searchTerm.toLowerCase());
      }).slice(0, 15) 
    : [];

  const categories = [
    { uz: "Барчаси", ru: "Все", val: "All" },
    { uz: "Тягач", ru: "Тягач", val: "Tyagach" },
    { uz: "Самосвал", ru: "Самосвал", val: "Samosval" },
    { uz: "Фургонлар", ru: "Фургоны", val: "Furgon" },
    { uz: "Махсус техника", ru: "Спецтехника", val: "Special" },
    { uz: "Тиркамалар", ru: "Прицепы", val: "Pritsep" },
    { uz: "ЖАК", ru: "JAC", val: "Jac" },
    { uz: "Шасси", ru: "Шасси", val: "Shassi" },
  ];

  return (
    <div className="app-container">
      {/* Qidiruv inputi */}
      <div className="search-section" style={{ marginBottom: '15px', position: 'relative' }}>
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          background: '#f1f5f9',
          borderRadius: '12px',
          padding: '10px 15px',
          border: '1px solid #e2e8f0'
        }}>
          <Search size={20} color="#64748b" style={{ marginRight: '10px' }} />
          <input
            type="text"
            placeholder="Texnika nomi (avtotsisterna yoki avcocisterna deb yozing)..."
            value={searchTerm}
            onFocus={() => setShowSuggestions(true)}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowSuggestions(true);
            }}
            style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '16px' }}
          />
          {searchTerm && <button onClick={() => { setSearchTerm(""); setShowSuggestions(false) }} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>✕</button>}
        </div>

        {showSuggestions && suggestions.length > 0 && (
          <div className="search-suggestions" style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'white',
            zIndex: 100,
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            marginTop: '5px',
            border: '1px solid #e2e8f0',
            maxHeight: '200px',
            overflowY: 'auto'
          }}>
            {suggestions.map(s => (
              <div
                key={s.id}
                onClick={() => {
                  setSearchTerm(s.name || "");
                  setShowSuggestions(false);
                }}
                style={{
                  padding: '12px 15px',
                  cursor: 'pointer',
                  borderBottom: '1px solid #f1f5f9',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#1e293b'
                }}
                onMouseEnter={(e) => e.target.style.background = '#f8fafc'}
                onMouseLeave={(e) => e.target.style.background = 'transparent'}
              >
                <Search size={14} color="#94a3b8" />
                <HighlightText text={s.name} highlight={searchTerm} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* FORMULA FILTRI */}
      <div className="formula-chips" style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '10px' }}>
        {allFormulas.map(f => (
          <button 
            key={f} 
            onClick={() => setActiveFormula(f)}
            style={{ 
              padding: '6px 14px', 
              borderRadius: '20px', 
              fontSize: '12px', 
              whiteSpace: 'nowrap',
              border: '1px solid',
              borderColor: activeFormula === f ? '#2563eb' : '#e2e8f0',
              background: activeFormula === f ? '#eff6ff' : 'white',
              color: activeFormula === f ? '#2563eb' : '#64748b',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            {activeFormula === f && <Check size={12} />}
            {f === "All" ? "Barcha formulalar" : f}
          </button>
        ))}
      </div>

      <div className="filter-wrapper">
        <div className="filter-buttons">
          {categories.map(cat => (
            <button key={cat.val} className={`filter-btn ${activeCat === cat.val ? 'active' : ''}`} onClick={() => setActiveCat(cat.val)}>
              <span className="btn-uz">{cat.uz}</span>
              <span className="btn-ru">{cat.ru}</span>
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
              <div className="truck-meta">
                <span style={{background: '#f1f5f9', padding: '2px 6px', borderRadius: '4px'}}>{truck.formula}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 2-САҲИФА: TRUCK DETAILS (O'zgarishsiz) ---
const TruckDetails = () => {
  const { id } = useParams();
  const truck = TRUCKS_DATA.find(t => t.id === id);
  if (!truck) return <div className="app-container">Техника топилмаdi!</div>;

  return (
    <div className="app-containerr">
      <div className="sticky-nav">
        <Link to="/" className="back-btn"><ArrowLeft size={18} /> Каталогга қайтиш</Link>
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
            <div className="spec-card"><Settings size={20} color="#64748b" /><b>ДВИГАТЕЛЬ</b><span>{truck.engine}</span></div>
            <div className="spec-card"><Zap size={20} color="#64748b" /><b>МОЩНОСТЬ</b><span>{truck.power}</span></div>
            <div className="spec-card"><Box size={20} color="#64748b" /><b>ФОРМУЛА</b><span>{truck.formula}</span></div>
          </div>
          <div className="extra-info-wrapper">
            <div className="info-section-item service-bg">
              <strong><MapPin size={20} color="#3b82f6" /> Сервис ва эҳтиёт қисмlar</strong>
              <p><b>Сервис:</b> {truck.Rasmiy_servis_mavjudligi}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/truck/:id" element={<TruckDetails />} />
      </Routes>
    </BrowserRouter>
  );
}