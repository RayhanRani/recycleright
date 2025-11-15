import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="container">
      <section style={{ textAlign: 'center', padding: '48px 16px' }}>
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <p>
          <Link to="/info">Return to Information page</Link>
        </p>
      </section>
    </main>
  );
}

export default NotFound;

