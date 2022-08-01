import React from "react";
import axios from "axios";
import "../components/Nutrition.css"
import { useEffect, useState } from 'react';
import Homepage from "./Homepage";


export function Nutrition() {

    let i=1;
    const [list, setList] = useState([]);
    const [Value, setValue] = useState("");

    const getRecom = async () => {
        axios.get("http://localhost:8075/all")
            .then(response => { setList(response.data) });
    }

    useEffect(() => { getRecom(); }, []);
    return (
        <div>
            <Homepage />      
            <input type="text" style={{ width: "20%" }} onChange={(e) => { setValue(e.target.value) }} className="form-control rounded" class="search"placeholder="search here" aria-label="Search" aria-describedby="search-addon" />
            <table style={{ width: "80%" }} className="table" />
            <thead className="table-dark">             
            </thead>
        <div class="tab">
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
                            if (e.ingredients.toLowerCase().includes(Value.toLowerCase())) {
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
                                        <td>{value.carbohydrates}</td>
                                        <td><button type="button" onClick={()=>{
                                                                                axios.post("http://localhost:8095/save",{
                                                                                    "favoriteId":value.nutritionid,
                                                                                    "foodname":value.foodname,
                                                                                    "imgurl":value.imageurl
                                                                                // }).then(res=>console.log(res.data))
                                                                                }).then(res=>alert(res.data))
                                        //  }) console.log();
                                                                                
                                        }}class="btn btn-primary"> Favorite</button></td>
                                        <td><button type="button" onClick={()=>{
                                                                                axios.post("http://localhost:8089/save",{
                                                                                    "recomondedfoodId":value.nutritionid,
                                                                                    "foodname":value.foodname,
                                                                                    "brand":value.brand
                                                                                // }).then(res=>console.log(res.data))
                                                                                }).then(res=>alert(res.data))
                                                                            }}class="btn btn-success"> Recomond</button></td>
                                        
                                    </tr>
                                )
                            })}
                </tbody>
            </table>
        </div>
        </div>

    )
}

export default Nutrition;

// const Postrec=()=>{
//     const base="http://localhost:8055";
//         axios.post(`${base}/all`),{

//         }).then(
//             (response) =>{
//                 console.log(response);
//                 console.log(response.data)
//             },
//             }
//         )
//     }

// }