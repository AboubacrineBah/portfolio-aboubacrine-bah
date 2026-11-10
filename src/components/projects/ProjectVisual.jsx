import publicAssetUrl from '../../utils/publicAssetUrl'

function ProjectVisual({ type, image }) {
  if (image) {
    return (
      <div className={`project-visual visual-${type}`} aria-hidden="true">
        <img src={publicAssetUrl(image, import.meta.env.BASE_URL)} alt="" />
      </div>
    )
  } else
    return (
      <div className={`project-visual visual-${type}`} aria-hidden="true">
        {type === 'vitrine' && <div className="vitrine-browser">
          <div className="visual-browserbar">
            <i /><i /><i />
            <span>atelier.local</span>
          </div>
          <div className="vitrine-nav">
            <b>ATELIER<span>.</span></b>
            <small>COLLECTION&nbsp;&nbsp;&nbsp; HISTOIRE&nbsp;&nbsp;&nbsp; CONTACT</small>
          </div>
          <div className="vitrine-body">
            <small>CRÉATIONS LOCALES · BAMAKO</small>
            <b>Le beau, fait<br /><em>avec intention.</em></b>
            <i className="vitrine-flower">✳</i>
            <span>EXPLORER LA COLLECTION ↗</span>
          </div>
          <div className="vitrine-shape" />
        </div>
        }
        {type === 'dashboard' &&
          <div className="dash-window">
            <div className="dash-side">
              <b>n.</b><i /><i /><i /><i />
            </div>
            <div className="dash-content">
              <div className="dash-top">
                <span>Vue d’ensemble</span>
                <span>Bonjour, A. <b>●</b></span>
              </div>
              <small>VOTRE ACTIVITÉ</small>
              <b className="dash-title">Tout en un coup d’œil.</b>
              <div className="dash-cards">
                <div>
                  <small>PROJETS ACTIFS</small><b>08</b><span>↗ +2 ce mois</span>
                </div>
                <div>
                  <small>À SUIVRE</small><b>03</b><span>Cette semaine</span>
                </div>
              </div>
              <div className="dash-chart">
                <span>Activité récente</span>
                <div className="chart-bars">
                  {[35, 57, 43, 70, 52, 88, 62, 76, 47, 94, 67, 82].map((height, i) =>
                    <i key={i} style={{ height: `${height}%` }} />)}
                </div>
              </div>
            </div>
          </div>
        }
        {type === 'store' &&
          <div className="store-window">
            <div className="store-top">
              <span>teranga<span>.</span></span>
              <small>COLLECTION&nbsp;&nbsp;&nbsp; NOTRE HISTOIRE&nbsp;&nbsp;&nbsp; ♡ </small>
            </div>
            <div className="store-hero">
              <small>OBJETS QUI ONT UNE ÂME</small>
              <b>Faits ici.<br />
                <em>Pour longtemps.</em></b>
              <span>Découvrir la collection&nbsp; ↗</span>
              <div className="store-product">
                <div className="product-sun" />
                <div className="product-vase" />
                <i>TERRE CUITE<br />
                  COLLECTION 01</i>
              </div>
            </div>
          </div>
        }
      </div>
    )
}

export default ProjectVisual
