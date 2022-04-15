import React from "react";

function Avatar({ avatar, randomizeAvatar }) {
  return (
    <div className="avatar-group">
      <div className="avatar">
        <div className="avatar-wrapper">
          <div className="avatar-image">
            {avatar.map((image) => (
              <>
                <img src={image.source} alt="" className={image.class} />
              </>
            ))}
          </div>
          <div className="text-center">
            <button className="randomize-button" onClick={randomizeAvatar}>
              Randomize
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
