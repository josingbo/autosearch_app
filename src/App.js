import React, { Fragment, useState } from 'react';
import Iframe from './components/Iframe'
import isValidUrl from './helpers/isValidUrl'

import './App.css'

export default () => {
  const [query, setQuery] = useState('');
  const [color, setColor] = useState('green')

  const handleChange = e => {
    if(!isValidUrl(e.target.value)) {
      setColor('red')
    } else {
      setColor('green')
    }
    setQuery(e.target.value)
  }

  return (
    <Fragment>
      <div className="input">
        <input
          type="url"
          value={query}
          onChange={handleChange}
          placeholder='Enter a valid url. (Eg.: https://www.google.com)'
          style={{borderBottom: `2px solid ${color}`}}
        />
        <button className="clear-button" onClick={() => setQuery('')}>
          &times;
        </button>
      </div>
      {
        isValidUrl(query) && <Iframe src={query} />
      }
    </Fragment>
  );
}