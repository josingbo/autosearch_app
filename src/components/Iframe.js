import React from 'react';

export default ({src}) => {
    return (
      <div className='iframe-container'>
        <iframe src={src} allowFullScreen title={src}/>
      </div>
    )
}
