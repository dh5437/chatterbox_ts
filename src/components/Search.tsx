interface NavProps {
  getQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
  query: string;
  onSearch: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Search: React.FC<NavProps> = ({ getQuery, query, onSearch }) => {
  return (
    <form className="search-form" onSubmit={onSearch}>
      <input
        className="form-control"
        type="text"
        value={query}
        onChange={getQuery}
        placeholder="Search room"
      />
      <button className="searchButton" type="submit">
        SEARCH
      </button>
    </form>
  );
};

export default Search;
