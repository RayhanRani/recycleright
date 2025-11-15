import Hero from '../components/Hero';

function HelpGettingStarted() {
  return (
    <>
      <Hero 
        variant="secondary"
        title="Getting Started with Recycle Right"
        subtitle="Learn how to use the app to sort items correctly and reduce contamination."
      />

      <main className="container">
        <section>
          <h2>Quick Start</h2>
          <ol>
            <li>Open the <strong>Web App</strong> and choose <em>Scan</em> or <em>Search</em>.</li>
            <li>Scan or type an item (e.g., "coffee cup").</li>
            <li>View the results to see the proper bin for each part (cup, lid, sleeve).</li>
          </ol>

          <div className="two-col">
            <figure>
              <img src="/images/wireframe_home.png" alt="Wireframe of home page showing Scan and Search buttons" />
              <figcaption>Home screen: choose how to identify your item.</figcaption>
            </figure>
            <figure>
              <img src="/images/wireframe_result.png" alt="Wireframe of results page showing recycle, compost, landfill bins" />
              <figcaption>Results: shows which bin each part belongs in.</figcaption>
            </figure>
          </div>
        </section>

        <section>
          <h2>Common Questions</h2>
          <details>
            <summary>What if my item has multiple parts?</summary>
            <p>The app gives sorting info for each piece — like lid, cup, and straw — so you can recycle correctly.</p>
          </details>
          <details>
            <summary>What if rules are different in another city?</summary>
            <p>Future versions will detect your city automatically and adjust recycling rules for local standards.</p>
          </details>
        </section>
      </main>
    </>
  );
}

export default HelpGettingStarted;