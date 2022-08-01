import Reccomondedfood from "./Reccomondedfood";
import "../components/Fav.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Homepage from "./Homepage";

export function Favorite() {

    const [list, setList] = useState([]);
    const [Nlist, setNList] = useState([]);

    const getNlist = async () => {
        axios.get("http://localhost:8075/all")
            .then(response => { setNList(response.data) });
    }
    const deletelist = async (favoriteId) => {
       await axios.delete(`http://localhost:8095/del/${favoriteId}`
        ).then(res => alert(res.data))
        getNlist()
        getRecom()
    }
    

    const getRecom = async () => {
        await axios.get("http://localhost:8095/all")
            .then(response => {
                setList(response.data)
            });
    }
    

    useEffect(() => { getRecom(); getNlist(); }, []);

    return (
       
        <div>
            <Homepage />
            <div>
            <h2 class="Fav">Favorites</h2>

            <div class="container favoritecard">
                <div class="row ">
                    <div className="cardsfav">
                    <div  class="row" style={ { marginInline:"10px",display:"inline-block"}}>
                        
                        {
                            list.map((e) => {
                                console.log(e.favoriteId);
                                    return (
                                        <div key={e.favoriteId } className="card  cardbody" >
                                            <img class="card-img-top" src={e.imgurl}/>
                                            <div class="card-body" >
                                                <h5 class="card-title">{e.foodname}</h5>
                                                <button type="button" onClick={()=>{deletelist(e.favoriteId)}} class="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
         )
     }

                    
export default Favorite;