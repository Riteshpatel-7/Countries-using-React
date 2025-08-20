import React, { useEffect, useState } from 'react'
import "./country-info.css";
import { Link, useNavigate } from 'react-router-dom';

export default function CreateCountry({ name, nativeName, population, region, subRegion, capital, languages, domain, currency, borders, image }) {
    const navigate = useNavigate();
    const [borderCountries, setBorderCountries] = useState([]);
    useEffect(() => {
        if(!borders)
            return
        
        Promise.all(borders.map((border) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                .then((res) => res.json())
                .then(([ele]) => {
                    return <a className="br-cn" href={`/${ele.name.common}`} key={ele.name.common}>
                        {ele.name.common}
                    </a>
                });
        })).then((bordersList) => setBorderCountries(bordersList))
    },[])


    return (
        <div className="container">
            <section className="more-info">
                <button className="back" onClick={() => navigate(-1)} >← Back</button>
                <div className="information">
                    <div className="image">
                        <img src={image} alt="Tunisia" />
                    </div>
                    <div className="data">
                        <h1>{name}</h1>
                        <div className="info-and-borders">
                            <div className="blocks">
                                <div className="first-block">
                                    <p>
                                        <strong>Native name: </strong>{nativeName}
                                    </p>
                                    <p>
                                        <strong>Population: </strong>{population}
                                    </p>
                                    <p>
                                        <strong>Region: </strong>{region}
                                    </p>
                                    <p>
                                        <strong>Sub Region: </strong>{subRegion}
                                    </p>
                                    <p>
                                        <strong>Capital: </strong>{capital}
                                    </p>
                                </div>
                                <div className="second-block">
                                    <p>
                                        <strong>Top level Domain: </strong>{domain}
                                    </p>
                                    <p>
                                        <strong>Currencies: </strong>{currency}
                                    </p>
                                    <p>
                                        <strong>Language: </strong>{languages}
                                    </p>
                                </div>
                            </div>

                            {/* to be correct */}
                            <div className="borders">
                                <strong>Border Countries :</strong>
                                {
                                    borderCountries
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
