import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/popular">Popular</Link>
      </nav>
    </div>
  );
};

export default Navigation;
