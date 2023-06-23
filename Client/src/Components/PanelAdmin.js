import React from "react";
import { useState ,useEffect} from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

export default function PanelAdmin(){


  const [mID, setmID] = useState("");
  const [mName, setmName] = useState("");
  const [info, setinfo] = useState("");
  const [image, setimage] = useState("");
  const [youtube, setyoutube] = useState("");
  const [view, setView] = useState(0);
  const [responseMsg, setresponseMsg] = useState("");

  const addMovies = () => {

      Axios.post("http://localhost:3001/addMovies", {
        mID: mID,
        mName: mName,
        info: info,
        image: image,
        youtube: youtube,
        view:view
      })
          .then((res) => {
              setresponseMsg(res.data);
          })
          .catch((err) => {
              console.log(err);
          });
  };








   
    let { id } = useParams();
    const updateMovies = () => {
   
      Axios.put("http://localhost:3001/update", {
        mID: mID,
        mName: mName,
        info: info,
        image: image,
        youtube: youtube,
        view:view
      })
        .then((res) => {
          setresponseMsg(res.data.msg);
        })
        .catch((err) => {
          console.log(err);
        });
    };



    
    useEffect(() => {
      Axios.get(`http://localhost:3001/getMovies/${id}`)
        .then((response) => {
          setmID(response.data.result.mID);
          setmName(response.data.result.mName);
          setinfo(response.data.result.info);
          setimage(response.data.result.image);
          setyoutube(response.data.result.youtube);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);



    
    

  
    

 




    return(
        <>
        <main class="p-4 flex-grow">
       <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      
      <section class="h-screen bg-gray-100 bg-opacity-0">
        <form class="container max-w-2xl mx-auto shadow-md md:w-3/4">
            <div class="p-4 bg-pink-500 border-t-2 border-indigo-400 rounded-lg bg-opacity-50">
                <div class="max-w-sm mx-auto md:w-full md:mx-0">
                    <div class="inline-flex items-center space-x-4">
                       
                        <h1 class="text-white-600 text-2xl">
                            Register Movies 
                        </h1>
                        
                    </div>
                    <h1 class="text-white-600 ">
                      Delete/Update by using the <b>Movie ID</b>
                  </h1>
                </div>
            </div>
            <div class="space-y-6 bg-white">
                <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                    <h2 class="max-w-sm mx-auto md:w-1/3">
                    Movie ID
                    </h2>
                    <div class="max-w-sm mx-auto md:w-2/3">
                        <div class=" relative ">
                            <input type="text" onChange={(e) => {
                                    setmID(e.target.value);
                                }}
                                 class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Movie ID" name="movieID"/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 class="max-w-sm mx-auto md:w-1/3">
                        Movie info
                        </h2>
                        <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
                            <div>
                            <div class="flex justify-center">
                                        <div class="mb-3 w-96">
                                          
                                          <input onChange={(e) => {
                                    setmName(e.target.value);
                                }}
                                class="form-control
                                          block
                                          w-full
                                          px-3
                                          py-1.5
                                          text-base
                                          font-normal
                                          text-gray-700
                                          bg-white bg-clip-padding
                                          border border-solid border-gray-300
                                          rounded
                                          transition
                                          ease-in-out
                                          placeholder-gray-400
                                          m-0
                                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" id="formFile" placeholder="Movie Name" name="movieName"></input>
                                        
                                        </div>
                                      </div>
                                </div>
                                
                                    <div>
                                    <div class="flex justify-center">
                                        <div class="mb-3 w-96">
                                          
                                          <textarea onChange={(e) => {
                                    setinfo(e.target.value);
                                }}
                                class="form-control
                                          block
                                          w-full
                                          px-3
                                          py-1.5
                                          text-base
                                          font-normal
                                          text-gray-700
                                          bg-white bg-clip-padding
                                          border border-solid border-gray-300
                                          rounded
                                          transition
                                          ease-in-out
                                          placeholder-gray-400
                                          m-0
                                          focus:text-gray-700 focus:bg-white
                                           focus:border-blue-600 focus:outline-none" 
                                           type="text" id="formFile" placeholder="Movie Info" name="movieInfo"></textarea>
                                        </div>
                                      </div>
                                      </div>

                                      <div class="flex justify-center">
                                        <div class="mb-3 w-96">
                                          
                                          <input 
                                          onChange={(e) => {
                                            setimage(e.target.value);
                                        }}
                                          class="form-control
                                          block
                                          w-full
                                          px-3
                                          py-1.5
                                          text-base
                                          font-normal
                                          text-gray-700
                                          bg-white bg-clip-padding
                                          border border-solid border-gray-300
                                          rounded
                                          transition
                                          ease-in-out
                                          placeholder-gray-400
                                          m-0
                                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" id="formFile" placeholder="Movie Image URL"></input>
                                        </div>
                                      </div>



                                      <div class="flex justify-center">
                                        <div class="mb-3 w-96">
                                          
                                          <input 
                                          onChange={(e) => {
                                            setyoutube(e.target.value);
                                        }}
                                          class="form-control
                                          block
                                          w-full
                                          px-3
                                          py-1.5
                                          text-base
                                          font-normal
                                          text-gray-700
                                          bg-white bg-clip-padding
                                          border border-solid border-gray-300
                                          rounded
                                          transition
                                          ease-in-out
                                          placeholder-gray-400
                                          m-0
                                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" id="formFile" placeholder="Movie Youtube ID" name="youtube"></input>
                                        </div>
                                      </div>
                                     
                                      
                                </div>
                            </div>
                            <hr/>
                           
      
                                <hr/>
      
                                
                                <h1 style={{color:"black", textAlign:"center",fontSize:"25px"}}>{responseMsg}</h1>
      
                                <hr/>
      
                                
      
      
      
      
                                     
                                  <hr/>
                                <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/1 flex justify-center">
                                  
                                    
      
                                    <button onClick={addMovies} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 
                                    mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">
                                      Add</button>
                                    
                                      <button onClick={updateMovies} type="button" class="focus:outline-none text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 
                                    mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 ">
                                      Update</button>
      

                             </div>
                                
                            </div>
                        </form>
                    </section>
                      
      
                    <br/>
                    <br/>
                    <br/>
                    
                    <br/>
                    <br/>
                    
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                   
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
      
            </main>
        
        </>
    );
}