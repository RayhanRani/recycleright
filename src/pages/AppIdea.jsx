import Hero from '../components/Hero';

function AppIdea() {
  return (
    <>
      <Hero 
        variant="secondary"
        title="How the Web App Works"
        subtitle="Definition, core features, and the typical user flow."
      />

      <main className="container">
        <section>
          <h2>Definition</h2>
          <p>
            The Recycle Right is a web-based learning tool that helps users identify
            which bin to use for common items. Users can <strong>scan</strong> an item
            with their camera or <strong>search</strong> by name and receive
            color-coded guidance based on local rules.
          </p>
        </section>

        <section>
          <h2>Web-App Features</h2>
          <ul>
            <li>Camera scanning (image input) for items</li>
            <li>Manual search with quick suggestions</li>
            <li>Color-coded results: Recycle (blue), Compost (green), Landfill (gray)</li>
            <li>"Learn More" explainer with tips and common mistakes</li>
            <li>Location-aware rules for different cities/campuses</li>
          </ul>
        </section>

        <section>
          <h2>Operation (User Flow)</h2>
          <ol>
            <li>User lands on Home and chooses <em>Scan</em> or <em>Search</em>.</li>
            <li>If scanning, the app captures an image and classifies item parts (cup, lid, straw).</li>
            <li>Results page highlights the proper bin for each part with colors and icons.</li>
            <li>User can tap <em>Learn More</em> for explanations and local rule links.</li>
          </ol>
          <div className="two-col">
            <figure>
              <img src="/images/wireframe_home.png" alt="Wireframe: Home screen with scan and search" />
              <figcaption>Low-fidelity Wireframe</figcaption>
            </figure>
            <figure>
              <img src="/images/wireframe_result.png" alt="Wireframe: Results screen with color-coded bins" />
              <figcaption>High-fidelity Wireframe</figcaption>
            </figure>
          </div>
        </section>

        <section className="note">
          <h3>Technical Notes</h3>
          <ul>
            <li>Front-end: HTML/CSS/JS</li>
            <li>Further classification using simple rules table or ML model</li>
            <li>Rules configuration stored as JSON per location</li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default AppIdea;

