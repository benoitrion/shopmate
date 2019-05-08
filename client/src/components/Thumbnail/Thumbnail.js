import React from 'react';

function Thumbnail(props) {
  return (
    <div className={props.classes}>
      <img src={props.src} alt={props.alt} title={props.title} />
    </div>
  );
}

export default Thumbnail;
