import React, { useEffect, useState } from 'react'
import Header from "./components/Header";
import Filter from './components/Filter';
import Card from './components/Card';
import ShimmerForHome from './components/ShimmerForHome';

function onFilterClick() {
  document.querySelector(".menu").classList.toggle("visible");
}

export default function App() {
  const [allCountriesData, SetAllCountriesData]=useState([])
  const [cardsArray, setCardsArray] = useState(<ShimmerForHome/>);
  const [query, setQuery] = useState('')

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population")
      .then((res) => res.json())
      .then((data) => {
        SetAllCountriesData(data);
        document.querySelector(".filter>.text").innerText = "Filter by Region";
        setCardsArray((data.filter((country)=>country.name.common.toLowerCase().includes(query))).map((country) => {
          return (<Card name={country.name.common} key={country.name.common} image={country.flags.png} capital={country.capital[0]} region={country.region} population={country.population} />)
        }))
      })
  }, [query])

  return (
    <>
      <Header />
      <Filter handler={onFilterClick} search={setQuery} allCountries={allCountriesData} setCardsArray={setCardsArray}/>
      <div className='container'>
        <main>
          {/* coming-effect */}
          {
          cardsArray.length != 0 ? <div className="cards ">
            {cardsArray}</div>: <div
              className="not-found"
              style={{ color: "var(--text-color)", opacity: "0.8" }}
            >
              No countries found...
            </div>}
        </main>
      </div>
    </>
  )
}
