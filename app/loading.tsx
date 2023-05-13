import React from 'react';
import { Loader } from './components';

const Loading = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center">
      <Loader />
    </div>
  );
};

export default Loading;
