import React from 'react';

interface PlayAgainButtonProps {
  x: string;
  y: string;
  url: string;
  text: string;
}

const PlayAgainButtonPlaceholder: React.FC<PlayAgainButtonProps> = ({ x, y, url, text }) => (
  <button
    className="bg-green-200 hover:bg-green-500 text-white font-bold py-2 px-4 rounded border border-solid border-green-700"
    style={{ position: 'absolute', top: y, left: x, transform: 'translate(-50%, -50%)' }}
    onClick={() => (window.location.href = url)}
  >
    {text}
  </button>
);

export default PlayAgainButtonPlaceholder;
