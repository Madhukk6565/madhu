import React from 'react';
import { Link } from 'react-router-dom';
import "../components/Recom.css";
// import Fooditems from './Fooditems';
import  { useEffect, useState } from 'react';
import axios from 'axios';
import Homepage from './Homepage';
import { findAllByAltText } from '@testing-library/react';
// import Food from './Food';



 function Reccomondedfood(){

     const[list,setList]=useState([]);
        const[Recom,setRecom]=useState(" ");
    
        const getRecom=async() =>{
            axios.get("http://localhost:8089/all")
             .then(response=>{setList(response.data)});
        }
    
         useEffect(()=>{getRecom();},[]);
         getRecom()
        
                       


    return(
    <div>
        <div>
            <Homepage/>
        </div>
        <div>
            
            {/* <a>fetch all Reccomondedfood</a> */}
        </div>
    <div class="name">
        <table style={{width:"80%"}} className=""/>
            <thead className="table-dark">
                <tr>
                    <th scope="col" class="re">RECOMONDED  FOOD  ITEMS</th>
                  
                </tr>

            </thead>
            <div class=" ">
                <table class="table ">
                    <thead class="head">
                        <tr>
                            <th scope="col" class="head">RECOMONDEDFOODID</th>
                            <th scope="col" class="head">FOODNAME</th>
                            <th scope="col" class="head">BRAND</th>
                            <th scope="col" class="head"> </th>
                            
                        </tr>
                    </thead>
                <tbody >
                    {
                    list.map((value)=>{
                    return(                     
                            <tr key={value.recomondedfoodId}>
                                <th scope="row">{value.recomondedfoodId}</th>
                                <td>{value.foodname}</td>
                                <td>{value.brand}</td>
                               <td> <button type="button" onClick={()=>{
                                                                    axios.delete("http://localhost:8089/del/"+value.recomondedfoodId
                                                                     ).then(res=>alert(res.data))
                                                                    }}class="btn btn-danger">Delete</button></td>
                                                                    
                            </tr>                           
                    )
                    })}
                </tbody>
        </table>
        </div>
        </div>
    </div>
    )
    }
    
 export default Reccomondedfood;

//  const [list, setList] = useState([]);
//  const [Nlist, setNList] = useState([]);

//  const getNlist = async () => {
//      axios.get("http://localhost:8075/all")
//          .then(response => { setNList(response.data) });
//  }
//  const deletelist = async (favoriteId) => {
//     await axios.delete(`http://localhost:8095/del/${favoriteId}`
//      ).then(res => alert(res.data))
//      getNlist()
//      getRecom()
//  }
 

//  const getRecom = async () => {
//      await axios.get("http://localhost:8095/all")
//          .then(response => {
//              setList(response.data)
//          });
//  }
 

//  useEffect(() => { getRecom(); getNlist(); }, []);

//  return (
    
    //  <div>
    //      <Homepage />
    //      <div>
    //      <h2 class="Fav">Favorites</h2>

    //      <div class="container favoritecard">
    //          <div class="row ">
    //              <div className="cardsfav">
    //              <div  class="row" style={ { marginInline:"10px",display:"inline-block"}}>
                     
    //                  {
    //                      list.map((e) => {
    //                          console.log(e.favoriteId);
    //                              return (
    //                                  <div key={e.favoriteId } className="card  cardbody" >
    //                                      <img class="card-img-top" src={e.imgurl}/>
    //                                      <div class="card-body" >
    //                                          <h5 class="card-title">{e.foodname}</h5>
    //                                          <button type="button" onClick={()=>{deletelist(e.favoriteId)}} class="btn btn-danger">Delete</button>
    //                                      </div>
    //                                  </div>
    //                              )
                             


    //                      })
    //                  }
    //                  </div>
    //              </div>
    //          </div>
    //      </div>
    //      </div>
    //      </div>
//       )
//   }
