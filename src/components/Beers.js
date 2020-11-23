import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import App from '../App';
import { Link } from 'react-router-dom';

const Beers = (props) => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {

    Axios
      .get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then(res => {
        // console.log(res.data)
        setBeers(res.data)
      })

  }, [])

  const showBeerDetails = () => {
    return beers.map(eachBeer => {
      return (
        <div>
          <li><img src={eachBeer.image_url} /></li>
          <li>
            <h2>
              <Link to={`/beers/${eachBeer._id}`}>{eachBeer.name}</Link>
            </h2>
          </li>
          <li>{eachBeer.tagline}</li>
          <li>{eachBeer.contributed_by}</li>
        </div>
      )
    })
  }
  
  return (
    <div>
      <Link to="/">Home</Link>

      <h1>All Beers</h1>

      {showBeerDetails()}
    </div>
  );
};

export default Beers;