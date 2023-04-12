import React from 'react';
import './_loading.scss';

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="loading">
      <div className="loading__spinner" />
      <p className="loading__message">{message}</p>
    </div>
  );
};

export default Loading;
