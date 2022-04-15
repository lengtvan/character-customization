import React from "react";

function Clothes3({ clothes3, resetAvatar }) {
  return (
    <div className="list-section">
      <h2>Cloth layer 3</h2>
      <div className="list-clothes-3">
        {clothes3.map((clothImage) => (
          <div className="clickable-square">
            <img
              src={clothImage.source}
              alt=""
              className={clothImage.class}
              onClick={() => {
                resetAvatar({
                  avatarClass: clothImage.class,
                  avatarSource: clothImage.source,
                });
              }}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clothes3;
