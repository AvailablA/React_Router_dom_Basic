import React, { useEffect } from 'react';

const Service = (props) => {
  useEffect(() => {
    document.addEventListener('click', handleClick);

    return function cleanup() {
      document.removeEventListener('click', handleClick);
    };
  });

  function handleClick() {
    console.log('Hii I am called again Service useEffect');
  }

  console.log('Hii I am called again Service local');
  return (
    <>
      <h1>Hello, I am a {props.name} page</h1>
    </>
  );
};

export default Service;
