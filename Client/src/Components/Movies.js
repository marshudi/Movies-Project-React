import React from "react";
import { useState, useEffect } from 'react';
import Axios from 'axios';
import YouTube from 'react-youtube';






const movie_table = [
    {
        mID:1,
        mName: "Hitman",
        info:
          "A gun-for-hire known only as Agent 47 hired by a group known only as 'The Organization'",
        image:
          "https://m.media-amazon.com/images/M/MV5BMDlmMmZhZjQtZDhlMi00MzU0LWIwYjMtNDRhOGE5YzczYjBmXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_.jpg",
          youtubeId: "alQlJDRnQkE",
        view: 0,
      },
      {
        mID:2,
        mName: "The Godfather",
        info:
          "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        image:
          "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
          youtubeId: "sY1S34973zA",
        view: 0,
      },
      {
        mID:3,
        mName:"The Dark Knight",
        info:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        image:"https://resizing.flixster.com/WAHXGKleT3QvhqHUlFGIRgcQAjU=/206x305/v2/https://flxt.tmsimg.com/assets/p173378_p_v8_au.jpg",
          youtubeId: "EXeTwQWrcwY",
        view: 0,
      },
      {
        mID:4,
        mName: "Forrest Gump",
        info:"The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
        image:"https://cdn.shopify.com/s/files/1/1057/4964/products/forrest-gump-vintage-movie-poster-original-1-sheet-27x41-1350.jpg?v=1600318970",
        youtubeId: "bLvqoHBptjg",
        view: 0,
      },
      {
        mID:5,
        mName: "PETER PAN & WENDY",
        info:" Peter Pan & Wendy's obligatory fidelity to the animated classic keeps it from achieving Neverland nirvana, but David Lowery's pensive direction gives this rendition some of its own magic.",
        image:"https://resizing.flixster.com/yUjbuHdhJI60p_rjKYe-h09vZyM=/fit-in/180x240/v2/https://resizing.flixster.com/VWUm7CchIbz-vWynjdE9q0l3OvU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U2OGI1M2FmLWYxZDctNDQxYS04N2ViLThmOTRiNzYwMWUzMC5qcGc=",
        youtubeId: "p-5sVX7MRj8",
        view: 0,
      },
      {
        mID:6,
        mName: "EVIL DEAD RISE",
        info:" Offering just about everything longtime fans could hope for while still managing to carry the franchise forward, Evil Dead Rise is all kinds of groovy.",
        image:"https://resizing.flixster.com/TWYzWG7xYYms3pGenxWgI3nyErw=/fit-in/180x240/v2/https://resizing.flixster.com/rWoHzijYNZv7RJb5P7BQQoGOo80=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U2YzliZDFjLWI2NTUtNDFmMi04OTUzLTUwNGFlOTRkOWIyNy5qcGc=",
        youtubeId: "BqQNO7BzN08",
        view: 0,
      },
      {
        mID:7,
        mName: "SISU",
        info:"Narratively lean as it is deliriously gory, Sisu is an inspired pastiche that gives bloody satisfaction to action aficionados..",
        image:"https://resizing.flixster.com/YVJ8IbGr48YrXZwFhXl9tgvZUpk=/fit-in/180x240/v2/https://resizing.flixster.com/LUMlPb01hdWx1gtuOyg1fs2kMyI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2M0NjVmNThhLTI3MDctNDkwOS1iZDA4LTE1YmQwODE3Yzc1Ni5wbmc=",
        youtubeId: "d2k4QAItiSA",
        view: 0,
      },
      {
        mID:8,
        mName: "BEAU IS AFRAID",
        info:"Beau Is Afraid is overstuffed to the point of erasing the line between self-flagellation and self-indulgence, but Ari Aster's bravura and Joaquin Phoenix's sheer commitment give this neurotic odyssey undeniable power.",
        image:"https://resizing.flixster.com/WyAf-x6RifmVU8SaqqqYHpW5N8w=/fit-in/180x240/v2/https://resizing.flixster.com/QdFUG32U5gyx2uVinx5asNZTgyQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzczMjQ1ZWQ3LTZhOGMtNDIyYi05NGU5LTk3ZGYyMTYzN2IxNS5qcGc=",
        youtubeId: "PuiWDn976Ek",
        view: 0,
      }

]





// function MovieCard({ movie }) {
//     const [views, setViews] = useState(0);
  
//     // function to handle incrementing views
//     const handleView = () => {
//       setViews(views + 1);
//       // call backend API to save views to MongoDB
//       axios.post('/api/movies/views', {
//         id: movie.id,
//         views: views + 1,
//       });
//     };
// }




function VideoPopup() {
    return (
        <>

        </>
    );
  }
  

  

  let embed="https://www.youtube.com/embed/";
  let movies="";


const titleStyle = {
    color : "blue",
    fontWeight: "bold"
}

function Items(){



  
const [listOfMovies, setlistOfMovies] = useState([]);
const [countRecords, setcountRecords] = useState(0);
const deleteMovie = async (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setlistOfMovies(
        listOfMovies.filter((val) => {
                return val._id != id;
            })
        );
        console.log(response);
        alert(response.data.msg);
        setcountRecords(response.data.count);
    });
};
useEffect(() => {
    Axios.get("http://localhost:3001/display")
        .then((response) => {
            setlistOfMovies(response.data.movies);
            setcountRecords(response.data.count);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);



    let n=0;

    
    const[views,setViews] = useState(1);

    return(
        <>
          
        {
            
            listOfMovies.map((s, index)=>{


                
                // for(let i=0;i=index;i++){
                    
                //     view=movie_table[index].view
                //     movies=movie_table[index].youtubeId


                // }
                
                

                // function updateViews(){
                    
                //     setViews(s.view=views+1)
                // }

                function openVideo(index) {
                    setViews(s.view=views+1)
                    console.log(s.view)
                    
                    console.log(index);
                    n=index;
                    movies=embed+s.youtube;
                    console.log(movies)
                    document.getElementById("videoPlayer").style.display = "block";
                }
                // Function to close the pop-up video player
                function closeVideo() {
                    document.getElementById("videoPlayer").style.display = "none";

                }

                return(<>
                
                <div class="movie-list-container bodys">
                    
                    <div class="movie-list-wrapper">
                        <div class="movie-list">
                        <div class="movie-list-item">
                            <img src={s.image} class="movie-list-item-img" />
                            <span class="movie-list-item-views">{s.view} views</span>
                            <span class="movie-list-item-title">{s.mName}</span>
                            
                            <p class="movie-list-item-desc">
                            {s.info}
                            </p>
                            <br/>
                        

               




                            <div className="row row-cols-3">
                            <span className="col-8"><button class="movie-list-item-button" onClick={()=>openVideo(index)} key={index}><a>Watch Now</a></button></span>
                            <span className="col-4"><button class="movie-list-item-button" style={{marginLeft:"210px",backgroundColor:"red"}} onClick={() => deleteMovie(s._id)}><a>🗑️</a></button></span>
                            </div>
                        </div>
                                    <div id="videoPlayer" class="video-player">
                                    
                                    <span class="close-btn" onClick={()=>{closeVideo();
                                    // updateViews();
                                    
                                    }} key={index}>&times;</span>
                                    
                                    <iframe width="560" height="315" src={movies} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                        </div>
                    </div>
                </div>
                </div>
                    
                
                
                </>)
            })

        }
        </>
    );

}

export default function Movies() {

  const [countRecords, setcountRecords] = useState(0);
    

  useEffect(() => {
    Axios.get("http://localhost:3001/display")
        .then((response) => {

            setcountRecords(response.data.count);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);






    return(
        <>
        <main className="container-fluid">
        <br/><br/><br/><br/><br/>
        <h3 style={{fontSize:"30px",textAlign:"center"}}> Movies Available : {countRecords}</h3>
            <div class="movie-list-container">
            <div class="row row-cols-3">
                <Items />
            </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </main>
        
        
        </>
    );
}

