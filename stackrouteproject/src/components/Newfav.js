import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Newfav(){
    const Favorite = () => {
const [imgse, setImg] = useState([])
        const getParticular = () => {
         const base = "http://localhost:8055";
        axios.get(`${base}/all`).then(
        (response) => {
        console.log(response)
        console.log(response.data)
        setImg(response.data)
        },
     (error) => {
        console.log(error)
        }
        )
        }
        
        
        
        
        const DeleteFavoritetoserver= (id) => {
        const base = "http://localhost:8055";
         axios.delete(`${base}/del/`).then(
         (response) => {
         console.log(response)
        
    // console.log(response.data)
        
        // setImg(response.data)
         },
    (error) => {
        console.log(error)
        }
    )
         }
useEffect(() => {
    getParticular();
         }, []);
        
    
        

    return(
        <div>
            <div><h1>hii</h1></div>
            

<div className='container'>
    <div className='row' style={{margin:"30px"}}>
        <h2><center>Favorite Gif</center></h2>
            <br/>
            {
                imgse.map((value) => {
                    return (
                    <div className='col-4'>
                        <div class="card" style={{ width: "18rem" }}>
                             <img src={value.images} class="card-img-top" alt="..." />
                             <div className="card-body">
                                <h5 className="card-title">Gif For all</h5>
                                 {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                 {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                  <button color='danger ' outline onClick={ ()=>{
                                    DeleteFavoritetoserver(value.id); }}> Remove</button>
                                    </div>
                                </div>
                            </div>
                             )
                            })
                            }
                        </div>
                    </div>
                 </div >
                 );
    }


    

    
}

export default Newfav;