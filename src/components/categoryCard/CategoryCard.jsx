import React from 'react'

const CategoryCard = ({category}) => {
  return (
    <div className="col">
    <div className="card">
      <div
        className="card__side card__side--front card__side--front-1"
        style={{ backgroundImage: `url(${category.image})`}}
      >
        <div className="frame">
          <p>{category.title}</p>
        </div>
      </div>
      <div
        className="card__side card__side--back card__side--back-1"
        style={{ backgroundImage: "url(/images/nike13.png)" }}
      >
        <div className="frame">
          <p>{category.desc}
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CategoryCard;