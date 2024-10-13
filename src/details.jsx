import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import YouTube from 'react-youtube';

const Details = () => {
  let location=useLocation()
  console.log(location);
 
   let specific=location.state.x


  let [trailer,setTrailer]=useState("");

  async function getTrailer(id){
    fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=245a20d1fc2994487a595b92153393b1`).then(x=>x.json()).then(x=>setTrailer(x.results[0].key))

  }
  return (
    
    <section className="movie-detail-container">
    <div className="movie-info">
      <Image
        src={`https://image.tmdb.org/t/p/original/${specific.backdrop_path}`}
        alt="imgdetail"
        className="movie-poster"
      />
      <div className="movie-text">
        <h2>{specific.title}</h2>
        <p className="movie-overview">{specific.overview}</p>
        <p className="movie-rating">Rating: {specific.vote_average}</p>
        <button className="play-button" onClick={() => getTrailer(specific.id)}>
          Play Now
        </button>
      </div>
    </div>
    <div className="trailer-container">
      {trailer && <YouTube videoId={trailer} className="trailer-video" />}
    </div>
  </section>
  
  );
}

export default Details;