import React from "react";

function Clothes2({ clothes2, resetAvatar }) {
  return (
    <div className="list-section">
      <h2>Cloth layer 2</h2>
      <div className="list-clothes-2">
        {clothes2.map((clothImage) => (
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

export default Clothes2;
