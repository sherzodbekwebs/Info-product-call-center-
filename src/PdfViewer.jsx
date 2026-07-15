import React from 'react';
import { X, FileDown } from 'lucide-react';

const PdfViewer = ({ isOpen, onClose, pdfUrl, title, lang, uiText }) => {
  if (!isOpen) return null;

  const t = uiText[lang].pdf;

  return (
    <div className="calc-modal-overlay" style={{ zIndex: 100002 }}>
      <div className="calc-modal-content" style={{ maxWidth: '1000px', height: '95vh', display: 'flex', flexDirection: 'column', background: '#fff' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', padding: '10px', borderBottom: '1px solid #eee' }}>
          <div>
            <h2 style={{ margin: 0, fontSize: '18px' }}>{title}</h2>
          </div>
          
          <div style={{ display: 'flex', gap: '10px' }}>
            {/* YUKLAB OLISH TUGMASI - MAJBURIY PDF FORMATIDA */}
            <a 
              href={pdfUrl} 
              download={`${title}.pdf`} 
              style={{ 
                textDecoration: 'none', 
                background: '#16a34a', 
                color: 'white', 
                padding: '8px 15px', 
                borderRadius: '8px', 
                fontSize: '14px', 
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <FileDown size={18} /> {t.download}
            </a>
            
            <button className="calc-close-x" onClick={onClose} style={{ position: 'static' }}>
              <X size={20} />
            </button>
          </div>
        </div>

        <div style={{ flex: 1, width: '100%', background: '#eee', borderRadius: '8px', overflow: 'hidden' }}>
          {pdfUrl ? (
            <iframe
              src={pdfUrl} // Brauzerda ishlagan manzil shu yerga tushadi
              title="PDF"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            />
          ) : (
            <div style={{ padding: '50px', textAlign: 'center' }}>{t.noFile}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;