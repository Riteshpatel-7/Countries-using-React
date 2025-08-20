import React from "react";

export default function Spinner({
  size = 80,
  color = "#0ea5e9",
  thickness = 8,
  speed = 1200,
  label = "Loading..."
}) {
  const px = typeof size === "number" ? `${size}px` : size;
  const border = typeof thickness === "number" ? `${thickness}px` : thickness;

  return (
    <div className="arc-wrapper" role="status" aria-label={label}>
      <div
        className="arc-loader"
        style={{
          width: px,
          height: px,
          borderWidth: border,
          borderTopColor: color
        }}
      />
      <style>{`
        .arc-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .arc-loader {
          border-style: solid;
          border-radius: 50%;
          border-color: transparent;
          border-top-color: currentColor;
          animation: spin ${speed}ms linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
