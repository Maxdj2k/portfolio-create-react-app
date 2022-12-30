import { App } from '@carbon/icons-react';
import React, { useState, use Effect, useEffect } from 'react';
import Pages from './pages';

function app() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // NOTE: Use your username below
    fetch('https://gitconnnected.com/v1/portfolio/maxdj2k')
    .then(res => res.json())
    .then(user => {
      setUser(user);
    });
  }, []);

  if (!user) {
    return <div />;
  }

  return <Pages user={user} />;
  }

export default App;


