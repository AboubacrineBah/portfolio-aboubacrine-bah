function Footer() {
  return <footer className="site-footer">
    <div className="container footer-inner">
      <a className="brand footer-brand" href="#accueil">
        <span className="brand-mark">A<span>.</span></span>
        <span className="brand-name">Aboubacrine <b>BAH</b>
          <small>Développeur web · Bamako</small>
        </span>
      </a>
      <span className="footer-signature">Le digital malien,<br />
        <em>pensé pour le monde.</em></span>
      <span className="copyright">
        <i className="bi bi-c-circle" /> {new Date().getFullYear()} Aboubacrine BAH<br />
        Fait avec soin à Bamako
        <span>✳</span>
      </span>
    </div>
  </footer>
}

export default Footer
