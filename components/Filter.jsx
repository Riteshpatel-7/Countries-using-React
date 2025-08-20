import { useState } from "react";
import Card from "./Card";

const searchIcon = new URL("../assets/images/search.png", import.meta.url).href;
export default function Filter({handler, search, allCountries, setCardsArray}) {
  const [filterText, setFilterText] = useState("Filter by Region")

  function menuHandler(region){
    setFilterText(region === '' ? "Filter by Region" : region);
    setCardsArray(
      allCountries.filter((country)=>{
        return (country.region.includes(region))
      }).map((country)=> (<Card name={country.name.common} key={country.name.common} image={country.flags.png} capital={country.capital[0]} region={country.region} population={country.population} />))
    )
  }

  return (
    <div className="functionalities">
  <div className="search">
    <div className="icon">
      <img src={searchIcon} alt="icon" />
    </div>
    <input onChange={(e)=>search(e.target.value)} type="text" placeholder="Search for a country..." />
    <div className="clear" onClick={()=>{
      document.querySelector('input').value = '';
      search('');
    }}>×</div>
  </div>
  <div className="filter" onClick={handler}>
    <div className="text">{filterText}</div>
    <span className="sign">❮</span>
    <div className="menu">
      <p onClick={(e)=>menuHandler(e.target.id)} id="">All</p>
      <p onClick={(e)=>menuHandler(e.target.id)} id="Africa">Africa</p>
      <p onClick={(e)=>menuHandler(e.target.id)} id="Americas">America</p>
      <p onClick={(e)=>menuHandler(e.target.id)} id="Asia">Asia</p>
      <p onClick={(e)=>menuHandler(e.target.id)} id="Europe">Europe</p>
      <p onClick={(e)=>menuHandler(e.target.id)} id="Oceania">Oceania</p>
    </div>
  </div>
</div>
  )
}
