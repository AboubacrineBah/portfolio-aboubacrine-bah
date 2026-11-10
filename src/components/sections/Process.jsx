import SectionHeading from '../ui/SectionHeading'

function Process() {
  const steps = [{ n: '01', title: 'Écouter', text: 'Comprendre votre activité, vos objectifs et les personnes que vous souhaitez aider.' }, { n: '02', title: 'Concevoir', text: 'Définir une direction claire, le contenu et les fonctionnalités qui comptent.' }, { n: '03', title: 'Construire', text: 'Réaliser une expérience accessible, responsive et soignée dans ses détails.' }, { n: '04', title: 'Accompagner', text: 'Vous guider jusqu’à la mise en ligne et rester disponible pour la suite.' }]
  return <section className="process-section section-pad"><div className="container"><SectionHeading label="DU PREMIER ÉCHANGE À LA MISE EN LIGNE" title={<>Clair à chaque <em>étape.</em></>} /><div className="process-grid">{steps.map((step) => <article key={step.n}><span>{step.n}</span><i /><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>
}

export default Process
