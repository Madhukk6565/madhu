import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Homepage from "./Homepage";
import "../components/Recom";

export function Meal() {

    const [list, setList] = useState([]);
    const [Recom, setRecom] = useState(" ");

    // const getRecom = async () => {
    //     axios.get("http://localhost:8085/all")
    //         .then(response => { setList(response.data) });
    // }

    // useEffect(() => { getRecom(); },[]);

    return (
        <div>
            <div>
                <Homepage />
            </div>
            <table style={{ width: "80%" }} className="table" />
            <thead className="table-dark">
                <tr>
                    {/* <th scope="col" class="re">YOUR MEALS</th> */}
                    <button type="button" class="btn btn-success button" onClick={  async ()=>{
                      axios.get("http://localhost:8085/all")
                          .then(response => { setList(response.data) });

                    }}>YOUR MEALS </button>
                </tr>
                <br></br>

            </thead>
            <div class="mealtable">
            <table class="table me">
                <thead>
                    <tr>
                        <th scope="col" class="th">MEALID</th>
                        <th scope="col" class="th">MEAL</th>
                        <th scope="col" class="th">TOTAL NUTRIENTS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((value) => {
                            return (
                                <tr key={value.mealid}>
                                    <th scope="row">{value.mealid}</th>
                                    <td>{value.meal}</td>
                                    <td>{value.totalnutrients}</td>
                                </tr>

                            )
                        })}
                </tbody>
                
            </table>
            </div>
        </div>
    )
}

export default Meal;