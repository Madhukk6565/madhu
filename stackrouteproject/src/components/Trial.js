import React from "react";
import axios from "axios";
import "../components/Nutrition.css"
import { useEffect, useState } from 'react';
import Homepage from "./Homepage";



export function Trial() {

    const [list, setList] = useState([]);
    const [Value, setValue] = useState("");
    let fav = { nutritionid: "" };
    const [Fav, setFav] = useState(fav);
    const addFavo = () =>{
        axios.post("http://localhost:8095/save",Fav)
        console.log(Fav);
    }

    const getRecom = async () => {
        axios.get("http://localhost:8075/all")
            .then(response => { setList(response.data) });
    }

    useEffect(() => { getRecom(); }, []);
    return (
        <div>
            <Homepage />
            {/* <h2 class="he">Nutrition present in food item</h2> */}
            <input type="text" style={{ width: "20%" }} onChange={(e) => { setValue(e.target.value) }} className="form-control rounded" placeholder="search here" aria-label="Search" aria-describedby="search-addon" />

            <table style={{ width: "80%" }} className="table" />
            <thead className="table-dark">
                <tr>
                    <th scope="col"> </th>
                </tr>

            </thead>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">NUTRITIONID</th>
                        <th scope="col">FOODNAME</th>
                        <th scope="col">INGREDIENTS</th>
                        <th scope="col">PROTEIN</th>
                        <th scope="col">CALCIUM</th>
                        <th scope="col">FIBER</th>
                        <th scope="col">VITAMIN_A</th>
                        <th scope="col">VITAMIN_C</th>
                        <th scope="col">FAT</th>
                        <th scope="col">CARBOHYDRATS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.filter(e => {
                            if (Value == "") {
                                console.log(e);
                                return e;
                            }
                            if (e.foodname.toLowerCase().includes(Value.toLowerCase())) {
                                console.log(e);
                                return e;
                            }
                        })
                            .map((value) => {
                                return (
                                    <tr key={value.nutritionid}>
                                        <th scope="row">{value.nutritionid}</th>
                                        <td>{value.foodname}</td>
                                        <td>{value.ingredients}</td>
                                        <td>{value.protien}</td>
                                        <td>{value.calcium}</td>
                                        <td>{value.fiber}</td>
                                        <td>{value.vitamin_A}</td>
                                        <td>{value.vitamin_C}</td>
                                        <td>{value.fat}</td>
                                        <td>{value.carbohydrates}</td>
                                        <td><button onClick={ fav={foodname:value.foodname}}>Add to Favorite</button></td>
                                    </tr>
                                )
                            })}
                </tbody>
            </table>
        </div>

    )
}

export default Trial;


// import React from "react";
// import axios from "axios";
// import "../App.css";
// import  { useEffect, useState } from 'react';
// import "../components/tral.css";
{/* <div>
    <h1>hi</h1>
<img class="card-img-top" onClick={Trial()} src="https://cdn.quizly.co/wp-content/uploads/2019/03/09185337/Pizza-10.jpg" alt="Card image cap"/>
</div> */}

// function Trial(){
//     return(
//         <div>
// <h1>hi</h1>
//         </div>
//     )
// }
// export default Trial;
// export function Trial()
// {
//     const[list,setList]=useState([]);
//     const[Recom,setRecom]=useState(" ");

//     const getRecom=async() =>{
//         axios.get("http://localhost:8089/all")
//          .then(response=>{setList(response.data)});
//     }

//      useEffect(()=>{getRecom();},[]);
//     return(
//     <div className="flex">
//         <div class="container"/>
//             <div class="row">
//                 <div class="col-3">
//                     <div>{
//                     list.map((value)=>{
//                         if(value.recomondedfoodId=="0")
//                     return(
//                         <div>
//                        <div class="Card-body">
                           
//                             <h5 className="det">RECOMONDEDFOODID: {value.recomondedfoodId}</h5>
//                             <h5 className="det">FOODNAME: {value.foodname}</h5>
//                             <h5 className="det">BRAND: {value.brand}</h5>
                             
//                             </div>
//                             </div>
//                         ) })}
//                     </div>
                          
//                 </div>
//             <div/>
//         </div>


//         <div class="container"/>
//             <div class="row">
//                 <div class="col-3">
//                     <div>{
//                     list.map((value)=>{
//                         if(value.recomondedfoodId=="1")
//                     return(
//                         <div>
//                        <div class="Card-body">
//                             <img class="card-img-top" src="https://cdn.quizly.co/wp-content/uploads/2019/03/09185337/Pizza-10.jpg" alt="Card image cap"/>
//                             <h5 className="det">RECOMONDEDFOODID: {value.recomondedfoodId}</h5>
//                             <h5 className="det">FOODNAME: {value.foodname}</h5>
//                             <h5 className="det">BRAND: {value.brand}</h5>
                            
//                             </div>
//                             </div>
//                         ) })}
//                     </div>        
//                 </div>
//             <div/>
//         </div>



//         <div class="container"/>
//             <div class="row">
//                 <div class="col-3">
//                     <div>{
//                     list.map((value)=>{
//                         if(value.recomondedfoodId=="2")
//                     return(
//                         <div>
//                        <div class="Card-body">
//                             <img class="card-img-top" src="https://cdn.quizly.co/wp-content/uploads/2019/03/09185337/Pizza-10.jpg" alt="Card image cap"/>
//                             <h5 className="det">RECOMONDEDFOODID: {value.recomondedfoodId}</h5>
//                             <h5 className="det">FOODNAME: {value.foodname}</h5>
//                             <h5 className="det">BRAND: {value.brand}</h5>
                            
//                             </div>
//                             </div>
//                         ) })}
//                     </div>
                            
//                 </div>
//             <div/>
//         </div>
//     </div>

//     )


// }

