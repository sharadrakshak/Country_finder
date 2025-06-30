export default function SearchBar({setdata}) { 
  return (
    <div className="search-container"> 
      <i className="fa-solid fa-magnifying-glass" />
      <input onChange={(e)=>{setdata(e.target.value)}} type="text" placeholder="Search for a country..." />
    </div>
  );
}
