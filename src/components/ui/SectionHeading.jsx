function SectionHeading({ label, title, children, dark = false }) {
  return <div className={`section-heading ${dark ? 'heading-light' : ''}`}>
    <div className="section-label">
      <span>{label}</span><i />
    </div>
    <div className="heading-row">
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  </div>
}

export default SectionHeading
