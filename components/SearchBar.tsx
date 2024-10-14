const SearchBar = () => {
    return (
      <div className="search-bar">
        <input type="text" placeholder="Pesquisar carros" />
        <button>
          <img src="/icons/search.png" alt="Buscar" />
        </button>
      </div>
    );
  };
  
  export default SearchBar;
  