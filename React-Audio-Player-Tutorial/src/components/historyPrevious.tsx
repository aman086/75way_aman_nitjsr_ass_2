
// AnotherComponent.tsx
import React, { useState } from 'react';
import playlist from '../playlist/playlist';
import { playbackHistory } from '../audioplayer/audioplayer';

const AnotherComponent: React.FC = () => {
  const [showPlaybackHistory, setShowPlaybackHistory] = useState(false);

  const getTitleByIndex = (index: number): string => {
    if (index >= 0 && index < playlist.length) {
      return playlist[index].metadata.title;
    }
    return '';
  };

  const handleButtonClick = () => {
    // Toggle the state to show or hide playback history
    setShowPlaybackHistory((prev) => !prev);
  };

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={handleButtonClick}>
        {showPlaybackHistory ? 'Hide Playback History' : 'Show Playback History'}
      </button>
      <br></br>
      <br></br>
      <br></br>

      {showPlaybackHistory && (
        <div>
          <ul>
            {playbackHistory.map((index, historyIndex) => (
              <li key={historyIndex}>{getTitleByIndex(index)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AnotherComponent;

