import "./NoticeCard.css";

function NoticeCard({ notice, onToggleFeatured }) {
  return (
      <article className={`notice-card ${notice.featured && "featured"}`}>
      <p>{notice.category}</p>
      <h3>{notice.title}</h3>
      <p>{notice.description}</p>
  )
  <div className="notice-meta">
        <span>Por: {notice.author}</span>
        -
        <span>Data: {notice.date}</span>
      </div>
      <div className="notice-actions">
         {/* Exibir uma descrição completa do evento. 
         Se ativo, texto do botão = "Fechar Detalhes". */}
         {mostrardetalhes && (
      <p>Exibir ua descrição completa do evento.</p>
    )}
     {mostrarexcluir && (
      <p>Excluir evento da lista.</p>
    )}
         <button className="details"
          onClick={() => setMostrarDetalhes(!mostrardetalhes)}>
            {mostrardetalhes ? "Fechar Detalhes" : "Mostrar Detalhes"}
        </button>
        <button onClick={() => onToggleFeatured(notice.id)}>
          {notice.featured ? "Remover destaque" : "Destacar"}
        </button>
         {/* Excluir o evento da lista */}
         <button 
         onClick={() => setMostrarExcluir(!mostrarexcluir)}>
        </button>
      </div>
    </article>
  );
}

export default NoticeCard;
