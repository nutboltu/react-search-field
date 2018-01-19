import React from 'react';
import SearchField from '../../dist/SearchField';

const App = (props) => {
  const sfProps = {
    ...props,
  };
  return (
    <SearchField
      {...sfProps}
    />
  );
};

export default App;
