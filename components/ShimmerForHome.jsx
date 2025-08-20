import React from 'react'
import ShimmerCard from './ShimmerForCountry'

export default function ShimmerForHome() {
  const shimmerStyle = {
  background: "linear-gradient(90deg, #cececeff 10%, #aeaeaeff 50%, #898989ff 75%)",
  backgroundSize: "200% 100%",
  animation: "shimmer 1.5s infinite",
  opacity: "40%",
};
  const shimmer = Array.from({length: 15}).fill(1).map((ele,i)=>{return (<div
      className='card'
      key={i}
      style={{
        borderRadius: "8px",
        height: "380px",
        background: "#d5d5d555",
      }}
    >
      <div style={{ height: "170px", borderRadius: "8px",  ...shimmerStyle }} />
      <div className='info'>
        <div style={{ height: "32px", margin: "16px 0", borderRadius: "6px", width: "60%", ...shimmerStyle }} />
        <div style={{ height: "20px", marginBottom: "16px", borderRadius: "6px", width: "100%", ...shimmerStyle }} />
        <div style={{ height: "20px", marginBottom: "16px", borderRadius: "6px", width: "100%", ...shimmerStyle }} />
        <div style={{ height: "20px", marginBottom: "16px", borderRadius: "6px", width: "80%", ...shimmerStyle }} />
      </div>
    </div>)})
  return (
    <>
        {shimmer}
    </>
  )
}