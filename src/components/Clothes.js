import React from "react";

function Clothes({ clothes, resetAvatar }) {
  return (
    <div className="list-section">
      <h2>Clothes</h2>
      <div className="list-clothes">
        {clothes.map((clothImage) => (
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

export default Clothes;
