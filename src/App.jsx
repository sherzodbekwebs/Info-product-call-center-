import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Settings, Zap, Fuel, Gauge, Box, Weight,
  MapPin, CreditCard, Activity, TrendingDown, AlertTriangle, FileText,
  Maximize, Scale, ArrowRightLeft, Info, Filter 
} from 'lucide-react';
import './App.css';
import { TRUCKS_DATA } from './data.jsx';

// --- 1-САҲИФА: КАТАЛОГ ---
const CatalogPage = () => {
  const [activeCat, setActiveCat] = useState("All");
  const navigate = useNavigate();

  const filteredTrucks = TRUCKS_DATA.filter(t => {
    const idNum = parseInt(t.id);
    if (activeCat === "All") return true;
    if (activeCat === "Tyagach") return idNum >= 1 && idNum <= 4;
    if (activeCat === "Samosval") return idNum >= 5 && idNum <= 8;
    if (activeCat === "Furgon") return idNum >= 9 && idNum <= 14;
    if (activeCat === "Special") return idNum >= 15 && idNum <= 37;
    if (activeCat === "Pritsep") return idNum >= 38 && idNum <= 50;
    if (activeCat === "Jac") return idNum >= 51 && idNum <= 54;
    if (activeCat === "Shassi") return idNum >= 55 && idNum <= 58;
    return false;
  });

  const categories = [
    { uz: "Барчаси", ru: "Все", val: "All" },
    { uz: "Тягач", ru: "Тягач", val: "Tyagach" },
    { uz: "Самосвал", ru: "Самосвал", val: "Samosval" },
    { uz: "Фургонлар ва бортли автомобиллар", ru: "Фургоны", val: "Furgon" },
    { uz: "Махсус техника", ru: "Спецтехника", val: "Special" },
    { uz: "Тиркама техникаси", ru: "Прицепы", val: "Pritsep" },
    { uz: "ЖАК", ru: "JAC", val: "Jac" },
    { uz: "Шасси", ru: "Шасси", val: "Shassi" },
  ];

  return (
    <div className="app-container">
      <div className="filter-wrapper">
        <div className="filter-label"><Filter size={18} /> <span>Саралаш / Сортировка:</span></div>
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
                <span>{truck.formula}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 2-САҲИФА: TRUCK DETAILS ---
const TruckDetails = () => {
  const { id } = useParams();
  const truck = TRUCKS_DATA.find(t => t.id === id);
  if (!truck) return <div className="app-container">Техника топилмади!</div>;

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
            {truck.engine && truck.engine !== "x" && (
              <div className="spec-card">
                <Settings size={20} color="#64748b" />
                <b>ДВИГАТЕЛЬ</b>
                <small style={{ fontSize: '10px', color: '#64748b', display: 'block', marginTop: '-2px', marginBottom: '5px' }}>Двигател</small>
                <span>{truck.engine}</span>
              </div>
            )}
            {truck.power && truck.power !== "x" && (
              <div className="spec-card">
                <Zap size={20} color="#64748b" />
                <b>МОЩНОСТЬ</b>
                <small style={{ fontSize: '10px', color: '#64748b', display: 'block', marginTop: '-2px', marginBottom: '5px' }}>Қуввати</small>
                <span>{truck.power}</span>
              </div>
            )}
            {truck.fuel && truck.fuel !== "x" && (
              <div className="spec-card">
                <Fuel size={20} color="#64748b" />
                <b>ТОПЛИВО</b>
                <small style={{ fontSize: '10px', color: '#64748b', display: 'block', marginTop: '-2px', marginBottom: '5px' }}>Ёқилғи</small>
                <span>{truck.fuel}</span>
              </div>
            )}
            {truck.tank && (truck.tank !== "x" || truck.category === "7") && (
              <div className="spec-card">
                <Gauge size={20} color="#64748b" />
                <b>ОБЪЕМ БАКА</b>
                <small style={{ fontSize: '10px', color: '#64748b', display: 'block', marginTop: '-2px', marginBottom: '5px' }}>Бак ҳажми</small>
                <span>{truck.tank}</span>
              </div>
            )}
            {truck.Снаряженная_масса_тн && truck.Снаряженная_масса_тн !== "" && (
              <div className="spec-card">
                <Scale size={20} color="#64748b" />
                <b>МАССА</b>
                <small style={{ fontSize: '10px', color: '#64748b', display: 'block', marginTop: '-2px', marginBottom: '5px' }}>Вазни</small>
                <span>{truck.Снаряженная_масса_тн} тн</span>
              </div>
            )}
            <div className="spec-card">
              <Box size={20} color="#64748b" />
              <b>ФОРМУЛА</b>
              <small style={{ fontSize: '10px', color: '#64748b', display: 'block', marginTop: '-2px', marginBottom: '5px' }}>Формула</small>
              <span>{truck.formula}</span>
            </div>
            {truck.load && truck.load !== "x" && (
              <div className="spec-card">
                <Weight size={20} color="#64748b" />
                <b>ГРУЗОПОДЪЕМНОСТЬ</b>
                <small style={{ fontSize: '10px', color: '#64748b', display: 'block', marginTop: '-2px', marginBottom: '5px' }}>Юк кўтариши</small>
                <span>{truck.load} тн</span>
              </div>
            )}
          </div>

          {truck.Komplektatsiya && truck.Komplektatsiya !== "x" && (
            <div className="package-info-box">
              <h4>Комплектация</h4>
              <p>{truck.Komplektatsiya}</p>
            </div>
          )}

          <div className="extra-info-wrapper">
            <div className="info-section-item service-bg">
              <strong><MapPin size={20} color="#3b82f6" /> Сервис ва эҳтиёт қисмлар</strong>
              <p><b>Сервис мавжудлиги:</b> {truck.Rasmiy_servis_mavjudligi}</p>
              <p><b>Эҳтиёт қисмлар мавжудлиги:</b> {truck.Ehtiyot_qismlar_mavjudligi}</p>
            </div>
            <div className="info-section-item usage-bg">
              <strong><Info size={20} color="#1e40af" /> Соҳа ва вазифаси</strong>
              <p>{truck.Soha_va_vazifasi}</p>
            </div>
            <div className="info-section-item finance-bg">
              <strong><CreditCard size={20} color="#166534" /> Молиялаштириш</strong>
              <p>{truck.Moliyalashtirish}</p>
            </div>
            <div className="info-section-item properties-bg">
              <strong><Activity size={20} color="#6366f1" /> Эксплуатация хусусиятлари</strong>
              <p>{truck.Ekspluatatsiya_xususiyatlari}</p>
            </div>
            <div className="info-section-item cost-bg">
              <strong><TrendingDown size={20} color="#ea580c" /> Йиллик сақлаш харажатлари</strong>
              <p>{truck.Yillik_saqlash_xarajatlari}</p>
            </div>
            <div className="info-section-item weak-bg">
              <strong><AlertTriangle size={20} color="#e11d48" /> Кучсиз томонлари</strong>
              <p>{truck.Kuchsiz_tomonlari}</p>
            </div>
            <div className="info-section-item offers-bg">
              <strong><FileText size={20} color="#854d0e" /> Таклифлар</strong>
              <p>{truck.Takliflar}</p>
              {truck.img2 && <img src={truck.img2} alt="offer" className="offer-img" />}
            </div>

            {/* --- РАҚОБАТЧИЛАР ҚИСМИ --- */}
            {truck.competitors && truck.competitors.length > 0 && (
              <div className="competitors-section">
                <div className="section-title-flex">
                  <ArrowRightLeft size={28} color="#f59e0b" />
                  <h2>Рақобатчилар ва солиштириш</h2>
                </div>
                <div className="competitors-grid">
                  {truck.competitors.map((comp, index) => (
                    <div className="competitor-card" key={index}>
                      <div className="comp-img-container">
                        {comp.imgk ? <img src={comp.imgk} alt={comp.name} /> : <span>Расм йўқ</span>}
                      </div>
                      <div className="comp-body">
                        <h3 className="comp-name">{comp.name}</h3>
                        <div className="comp-price-tag">{comp.price}</div>
                        <div className="comp-specs-row">
                          <div className="mini-badge"><b>Формула:</b> {comp.formula}</div>
                          <div className="mini-badge"><b>Кучи:</b> {comp.power}</div>
                          <div className="mini-badge"><b>Юк:</b> {comp.load}</div>
                        </div>
                        <div className="comp-detailed-info">
                          <div className="comp-info-line"><strong>Комплектация:</strong> {comp.Komplektatsiya}</div>
                          <div className="comp-info-line"><strong>Сервис:</strong> {comp.Rasmiy_servis_mavjudligi}</div>
                          <div className="comp-info-line"><strong>Молия:</strong> {comp.Moliyalashtirish}</div>
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/truck/:id" element={<TruckDetails />} />
      </Routes>
    </BrowserRouter>
  );
}