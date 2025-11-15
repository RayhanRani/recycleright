import Hero from '../components/Hero';

function Info() {
  return (
    <>
      <Hero 
        title="Learn How to Sort Waste"
        subtitle="The Recycle Right app helps students and residents correctly sort items into recycle, compost, or landfill."
        image={{ src: '/images/bins.jpg', alt: 'Campus recycling, compost, and landfill bins' }}
      />

      <main className="container">
        <section>
          <h2>What you'll learn</h2>
          <p>
            This page focuses on solid waste sorting for common campus items (cups, lids,
            utensils, containers). Clear guidance reduces contamination in bins and supports
            campus sustainability goals.
          </p>
        </section>

        <section>
          <h2>Who is this for?</h2>
          <ul>
            <li>Primary: University students and staff</li>
            <li>Anyone learning local recycling/compost rules</li>
            <li>Language: English (expandable to other languages)</li>
          </ul>
        </section>

        <section>
          <h2>Resources</h2>
          <p>Use these to learn more and to source rules for your area:</p>
          <ul className="link-list">
            <li><a href="https://www.scu.edu/sustainability/playbooks/" target="_blank" rel="noopener">SCU Sustainability Playbooks</a></li>
            <li><a href="https://www.epa.gov/recycle" target="_blank" rel="noopener">EPA – Recycling Basics</a></li>
            <li><a href="https://recyclecoach.com/" target="_blank" rel="noopener">Recycle Coach</a></li>
            <li><a href="https://www.santaclaraca.gov/our-city/departments-g-z/public-works/environmental-programs/recycling-garbage" target="_blank" rel="noopener">Santa Clara County Recycling Guide</a></li>
          </ul>
        </section>

        <section className="note">
          <h3>Why it matters</h3>
          <p>Correct sorting diverts organic waste from landfills, lowers contamination fees, and increases the value of recyclables.</p>
        </section>
      </main>
    </>
  );
}

export default Info;

