import React, { useState } from 'react'
import './carroussel.css'

const Carroussel = () => {
  // eslint-disable-next-line no-unused-vars
  const [translateValue, setTranslateValue] = useState(-50)

  return (
    <section className="carrousselContainer">
      <div className="leftArrow">&#8592;</div>
      <div
        className="carroussel"
        style={{ transform: `translate(${translateValue}%)` }}
      >
        <div className="carroussel__item">
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="carroussel"
          />
        </div>
        <div className="carroussel__item">
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="carroussel"
          />
        </div>
        <div className="carroussel__item">
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="carroussel"
          />
        </div>
        <div className="carroussel__item">
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="carroussel"
          />
        </div>
      </div>
      <div className="rightArrow">&#8594;</div>
    </section>
  )
}

export default Carroussel
