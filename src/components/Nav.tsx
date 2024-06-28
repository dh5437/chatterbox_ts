import Search from "./Search";

interface NavProps {
  getQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
  query: string;
  onSearch: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Nav: React.FC<NavProps> = ({ getQuery, query, onSearch }) => {
  return (
    <nav className="navbar">
      <Search getQuery={getQuery} query={query} onSearch={onSearch} />
    </nav>
  );
};

export default Nav;
