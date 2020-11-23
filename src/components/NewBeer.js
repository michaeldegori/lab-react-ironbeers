import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const NewBeer = () => {

  const [name, setName] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')
  const [firstBrewed, setFirstBrewed] = useState('')
  const [brewersTips, setBrewersTips] = useState('')
  const [attenuationLevel, setAttenuationLevel] = useState()
  const [contributedBy, setContributedBy] = useState('')
  const [beers, setBeers] = useState([]);

  useEffect(() => {

    Axios
      .get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then(res => {
        console.log(res.data)
        setBeers(res.data)
      })

  }, [])

  const addNewBeer = () => {
    let newBeer = {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy
    };

    setBeers(...beers, newBeer)
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTaglineChange = (event) => {
    setTagline(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFirstBrewedChange = (event) => {
    setFirstBrewed(event.target.value);
  };

  const handleBrewersTipsChange = (event) => {
    setBrewersTips(event.target.value);
  };

  const handleAttenuationLevelChange = (event) => {
    setAttenuationLevel(event.target.value);
  };

  const handleContributedByChange = (event) => {
    setContributedBy(event.target.value);
  };

  return (
    <div>
      <Link to="/">Home</Link>

      <h1>Add New Beer</h1>

      <div>
        <input
          onChange={handleNameChange}
          type="text"
          placeholder="Name"
        />
        <input
          onChange={handleTaglineChange}
          type="text"
          placeholder="Tagline"
        />
        <input
          onChange={handleDescriptionChange}
          type="text"
          placeholder="Description"
        />
        <input
          onChange={handleFirstBrewedChange}
          type="text"
          placeholder="First Brewed (MM/YY)"
        />
        <input
          onChange={handleBrewersTipsChange}
          type="text"
          placeholder="Brewer's Tips"
        />
        <input
          onChange={handleAttenuationLevelChange}
          type="number"
          placeholder="Attenuation Level"
        />
        <input
          onChange={handleContributedByChange}
          type="text"
          placeholder="Contributed By"
        />
        <button>Submit</button>
      </div>

      {addNewBeer()}
    </div>      
  );
};

export default NewBeer;