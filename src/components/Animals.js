import React, { useState } from 'react';

const AnimalSounds = () => {
  const [currentSound, setCurrentSound] = useState(null);
  const [audioElement, setAudioElement] = useState(null);
  const [displayGif, setDisplayGif] = useState({});

  const playSound = (animal) => {
    if (currentSound === animal) {
      if (audioElement) {
        audioElement.pause();
        setCurrentSound(null);
        setDisplayGif((prevState) => ({ ...prevState, [animal]: false }));
      }
    } else {
      stopSound();
      const audio = new Audio(`./sound/${animal}.mp3`);
      audio.play();
      setCurrentSound(animal);
      setAudioElement(audio);

      // Toggle display of GIF image for the selected animal
      setDisplayGif((prevState) => ({ ...prevState, [animal]: true }));
    }
  };

  const stopSound = () => {
    if (audioElement) {
      audioElement.pause();
      setCurrentSound(null);
      setDisplayGif({});
    }
  };

  const toggleDisplay = (animal) => {
    if (displayGif[animal]) {
      stopSound();
    } else {
      playSound(animal);
    }
  };

  const animalImages = [
    'lion',
    'tiger',
    'cow',
    'dog',
    'cat',
    'elephant',
    'horse'
  ];

  const rows = [];
  for (let i = 0; i < animalImages.length; i += 4) {
    rows.push(animalImages.slice(i, i + 4));
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex', justifyContent: 'center' }}>
          {row.map((animal, index) => (
            <div key={index} style={{ margin: '10px' }}>
              {!displayGif[animal] ? (
                <img
                  src={`./images/${animal}.jpg`}
                  alt={animal}
                  onClick={() => toggleDisplay(animal)}
                  style={{ width: '200px', height: '200px', cursor: 'pointer' }}
                />
              ) : (
                <img
                  src={`./images/${animal}.gif`}
                  alt={`${animal} gif`}
                  onClick={() => toggleDisplay(animal)}
                  style={{ width: '200px', height: '200px', cursor: 'pointer' }}
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimalSounds;
