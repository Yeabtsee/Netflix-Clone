import React, { useEffect, useState } from 'react'
import axios from '../../utils/axios'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'

import './Row.css'

const Row = ({title,fetchUrl,isLargeRow}) => {
    const[movies,setMovie]=useState([]);
    const[trailerUrl, setTrailerUrl]=useState("");

    const base_url = "https://image.tmdb.org/t/p/original";


    useEffect(()=>{
       (async () =>{
          try{
            console.log(fetchUrl)
            const request = await axios.get(fetchUrl);
            console.log(request)
            setMovie(request.data.results);
          }catch(err){
            console.log("error",err)
          }
        })()
    },[fetchUrl]);

    const handleClick = (movie)=>{
      if(trailerUrl){
          setTrailerUrl('')
      } else {
         movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url)=>{
          const urlParams = new URLSearchParams(new URL(url).search)
          console.log(urlParams)
          console.log(urlParams.get('v'))
          setTrailerUrl(urlParams.get('v'));
        })

      }
    }

    const opts = {
      height:'600',
      width:'70%',
      playerVars:{
        autoplay:1,
      } 
    }

  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='row_posters'>
            {movies?.map((movie,index) =>(
              <img src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                onClick={()=>handleClick(movie)}
                key={index}  
                alt={movie.name} className={`row_poster ${isLargeRow && "row_posterLarge"}`}              />
                
            ))
            
            }
        </div>
        <div style={{padding:'40px',marginLeft:'20%'}}>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div> 
    </div>
    
  )
}

export default Row