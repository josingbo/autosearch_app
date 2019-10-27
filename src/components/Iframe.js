import React from 'react';

export default ({src}) => {
  if (!src) {
    return <div>Loading...</div>;
}
    return (
      <div className='iframe-container'>
        <iframe src={src} allowFullScreen title={src}/>
      </div>
    )
}
