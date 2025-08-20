import React from 'react'

export default function Card({name,image,population,region,capital,id}) {
  return (
    <div onClick={()=> location.href=`/${name}`} key={id} id={name} className="card" style={{ display: "block" }}>
      <img src={image} />
      <div className="info">
        <h2>{name}</h2>
        <p>
          <strong>Population : </strong>{population}{/*</p*/}
        </p>
        <p>
          <strong>Region : </strong>{region}{/*</p*/}
        </p>
        <p>
          <strong>Capital : </strong>{capital}{/*</p*/}
        </p>
      </div>
    </div>
  )
}
