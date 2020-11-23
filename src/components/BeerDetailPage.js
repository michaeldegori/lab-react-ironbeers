import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import App from '../App';
import { Link } from 'react-router-dom';

const BeerDetailPage = (props) => {
  console.log(props.match)

  const [beer, setBeer] = useState({});

  useEffect(() => {

    Axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.beerId}`)
      .then(res => {
        console.log(res.data)
        setBeer(res.data)
      })

  }, [])

  const showBeerDetails = () => {
    // let beer = beers.find(eachBeer => {
    //   return eachBeer._id === props.match.params.beerId
    // })

    console.log(beer)
    return (
      <div>
        <li><img src={beer?.image_url} /></li>
        <li><h2>{beer?.name}</h2></li>
        <li><i>"{beer?.tagline}"</i></li>
        <br />
        <li><small>First Brewed: {beer?.first_brewed}</small></li>
        <li><small>Attenuation Level: {beer?.attenuation_level}</small></li>
        <br />
        <li>{beer?.description}</li>
        <br />
        <li><small>{beer?.contributed_by}</small></li>
      </div>
    )
  }

  return (
    <div>
      <Link to="/">Home</Link>
      
      {showBeerDetails()}
    </div>
  );
};

export default BeerDetailPage;