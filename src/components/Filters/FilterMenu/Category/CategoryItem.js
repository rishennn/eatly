import React from "react";

function CategoryItem({ title, bg, Ico, isActive, onClick }) {
  const outlineColors = {
    '#FFDE8A': '#f7bf2f',
    '#F7C5BA': '#fa917a',
    '#EDB66B': '#faa025',
    '#5A85FF': '#0f4bf5',
  };

  const itemStyle = {
    background: bg,
    outline: isActive ? `5px solid ${outlineColors[bg]}` : 'none',
  };

  return (
    <div
      className="categoryItem"
      style={itemStyle}
      onClick={onClick}
    >
      <Ico />
      <p>{title}</p>
    </div>
  );
}

export default CategoryItem;