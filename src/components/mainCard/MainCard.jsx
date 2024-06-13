import React from "react";
import "./mainCard.css";
function MainCard() {
  return (
    <div>
      <div className="container">
        <div className="col">
          <div className="card">
            <div className="card__side card__side--front card__side--front-1" style={{backgroundImage: "url(/images/nike10.png)"}}>
              <div className="frame">
                <p>Jordhan</p>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1" style={{backgroundImage: "url(/images/nike13.png)"}}>
              <div className="frame">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  illo tempore ipsam ea est fugit dicta exercitationem eos
                  voluptatem dolore quisquam officiis quam modi.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card__side card__side--front card__side--front-2" style={{backgroundImage: "url(/images/nike5.png)"}}>
              <div className="frame">
                <p>Sneakers</p>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2" style={{backgroundImage: "url(/images/nike9.png)"}}>
              <div className="frame">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores amet hic sunt error labore, ullam eligendi deleniti
                  quisquam similique ex quae saepe suscipit nesciunt cum
                  molestias velit magnam? Libero, at.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card__side card__side--front card__side--front-3" style={{backgroundImage: "url(/images/nike12.png)"}} >
              <div className="frame">
                <p>Food</p>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3" style={{backgroundImage: "url(/images/nike11.png)"}}>
              <div className="frame">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores amet hic sunt error labore, ullam eligendi deleniti
                  quisquam similique ex quae saepe suscipit nesciunt cum
                  molestias velit magnam? Libero, at. Adipisicing elit.
                  Asperiores amet hic sunt error labore, ullam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
