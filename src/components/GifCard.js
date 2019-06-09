import React from 'react';

const GifCard = props => {
  const gifs = props.gifs;


    const displayGifs = gifs.map(gif => {
      return <Gif gif={gif.images.fixed_height.url} key={gif.id} alt={gif.slug} />
    });
  return(
    <ul>
      { displayGifs }
    </ul>
  )
};

const Gif = props => (
  <li>
    <img src={props.gif} alt={props.alt} />
  </li>
);

export default GifCard;


