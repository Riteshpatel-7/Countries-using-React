import React, { useEffect, useState } from 'react'
import CreateCountry from './CreateCountry';
import Spinner from './Spinner';
import Header from './Header';
import { useParams } from 'react-router';
import ShimmerForCountry from './ShimmerForCountry';

export default function Country() {
  // const urlParams = new URLSearchParams(window.location.search);
  // const countryName = urlParams.get("name");
  const Params = useParams();
  const countryName = Params.country;
  
  const [country, setCountry] = useState(<ShimmerForCountry/>)

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => res.json())
      .then((data) => {
        let index;
        for (index = 0; data[index].name.common != countryName; index++);
        data = data[index];
        setCountry(<CreateCountry 
          name={data.name.common}
          nativeName={Object.values(data.name.nativeName)[0].common}
          image={data.flags.png}
          capital={data.capital[0]}
          currency={Object.values(data.currencies)[0].name} 
          population={data.population}
          region={data.region}
          subRegion={data.subregion}
          borders={data.borders}
          domain={data.tld}
          languages={Object.values(data.languages).join(", ")}/>)
        }).catch((err)=>{console.log(err);})
  }, [])

  return <>
  <Header />
  {country}
  </>
}
