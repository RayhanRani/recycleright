function Hero({ variant = 'default', title, subtitle, image }) {
  const heroClass = variant === 'secondary' ? 'hero hero-secondary' : 'hero';

  return (
    <header className={heroClass}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
      {image && <img src={image.src} alt={image.alt || ''} />}
    </header>
  );
}

export default Hero;

