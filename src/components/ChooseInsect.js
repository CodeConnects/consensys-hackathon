import React, { useState } from 'react';

const insects = [
  {
    name: 'Mosquito',
    img: 'https://pngimg.com/uploads/mosquito/small/mosquito_PNG18158.png',
    alt: 'mosquito'
  },
  {
    name: 'Spider',
    img: 'https://pngimg.com/uploads/spider/spider_PNG20.png',
    alt: 'spider'
  },
  {
    name: 'Fly',
    img: 'https://pngimg.com/uploads/fly/fly_PNG3946.png',
    alt: 'fly'
  },
  {
    name: 'Roach',
    img: 'https://pngimg.com/uploads/roach/roach_PNG12163.png',
    alt: 'roach'
  }
];

function ChooseInsect() {

  const [activeInsect, setActiveInsect] = useState(null);

  return (
    <div className="choose-insect">
      <h2>Who You Swattin?</h2>
      <ul>
        {insects.map(insect => (
          <li
            key={insect.name}
            className={`insect ${insect.name === activeInsect ? 'active' : ''}`}
            onClick={() => setActiveInsect(insect.name)}
          >
            <p>{insect.name}</p>
            <img src={insect.img} alt={insect.alt} className="insect-img" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChooseInsect;
