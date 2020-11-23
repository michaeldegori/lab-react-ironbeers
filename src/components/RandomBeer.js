import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const RandomBeer = (props) => {

  const [beer, setBeer] = useState({});

  useEffect(() => {

    Axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then(res => {
        console.log(res.data)
        setBeer(res.data)
      })

  }, [])

  return (
    <div>
      <Link to="/">Home</Link>

      <h1>Random Beer</h1>

      <div>
        <li><img src={beer.image_url} /></li>
        <li><h2>{beer.name}</h2></li>
        <li><i>"{beer.tagline}"</i></li>
        <br />
        <li><small>First Brewed: {beer.first_brewed}</small></li>
        <li><small>Attenuation Level: {beer.attenuation_level}</small></li>
        <br />
        <li>{beer.description}</li>
        <br />
        <li><small>{beer.contributed_by}</small></li>
        <br />
      </div>
    </div>
  );
};

export default RandomBeer;