import { useState } from "react";
import "./NoticeCard.css";

function NoticeCard({ notice, onToggleFeatured }) {

  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);
  const [mostrarExcluir, setMostrarExcluir] = useState(false);

  return (
      <article className={`notice-card ${notice.featured && "featured"}`}>
      <p>{notice.category}</p>
      <h3>{notice.title}</h3>
      <p>{notice.description}</p>

  <div className="notice-meta">
        <span>Por: {notice.author}</span>
        
        <span>Data: {notice.date}</span>
      </div>
      <div className="notice-actions">
         {/* Exibir uma descrição completa do evento. 
         Se ativo, texto do botão = "Fechar Detalhes". */}
            {mostrarDetalhes && (
      <p>Exibir uma descrição completa do evento.</p>
    )}
         <button className="details"
          onClick={() => setMostrarDetalhes(!mostrarDetalhes)}>
            {mostrarDetalhes ? "Fechar Detalhes" : "Mostrar Detalhes"}
        </button>
        <button onClick={() => onToggleFeatured(notice.id)}>
          {notice.featured ? "Remover destaque" : "Destacar"}
        </button>
          {/* Excluir o evento da lista */}
         <button 
         onClick={() => setMostrarExcluir(!mostrarExcluir)}>
          Excluir
        </button>
        {mostrarExcluir && (
      <p>Excluir evento da lista.</p>
    )}
      </div>
    </article>
  );
}

export default NoticeCard;
