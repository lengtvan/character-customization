import React from "react";

function Body({ body, resetAvatar }) {
  return (
    <div className="list-section ">
      <h2>Body</h2>
      <div className="list-body">
        {body.map((bodyImage) => (
          <div className="clickable-square">
            <img
              src={bodyImage.source}
              alt=""
              className={bodyImage.class}
              onClick={() => {
                resetAvatar({
                  avatarClass: bodyImage.class,
                  avatarSource: bodyImage.source,
                });
              }}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
