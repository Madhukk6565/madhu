import React, {Component, component ,useEffect,useState} from 'react'
import Reccomondedfood from './Reccomondedfood';
import axios from 'axios';
import "../components/Recom.css";



 function Recom(){

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
        export default Recom;
//     const [list, setList] = useState([]);

    

//     const getRecom = async () => {
//         axios.get("http://localhost:8075/all")
//             .then(response => { setList(response.data) });
//     }
//     const [Search, setSearch] = useState(" ");

//     const getSearch = async () => {
//         axios.get(`http://localhost:8075/`+Search)
//         .then((res) => {
//             console.log(res)});
//             // .then((res) => {setList(res.data);
//             //     console.log(list)});
//     }
    
// useEffect(()=>{getRecom()},[])

    
//     return(
//         <div  >
//         <input  type="text" class="search" onChange={(a) => setSearch(a.target.value)} placeholder="search here"></input>
//         <button onClick={getSearch}>Search</button>
//         </div>
//     )
 


{/* <div classname="App">
    <input type="text" onChange={(event)=>setSearchTeam(event.target.value)} placeholder="input"</div>></input>
    {
        deptList.filter(val => {
            if(searchTerm==""){
                return val
            }
            if((val.deptName.toLowerCase().includes(searchTerm.toLowerCase()))) || (val.deptName.toLowerCase().includes(searchTerm.toLowerCase())))
            return val
        }

    }

</div> */}

// useEffect(() => { getRecom(); }, []);
// const call=axios.search({
//     baseURL:`http://localhost:8088/all`
//     }) 

// class Recom extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             list:[]
//         }
//     }
//     getall=()=>{
//         let newList= [];
//         axios.get("http://localhost:8075/").then((res) =>{newList = res.data});
//     // call.get('/all').then(recom=>{
//     //     console.log(recom);
//         this.setState
//         {
//             list:
//         }
//     }

// // Mymessage(){
// //         this.setstate({
// //             message: 'She is working in Emids'
// //         })

// //         }
// //     }

//     render(){
//         return(
//             <div>
//                 <button onclick={this.getall}> click here to fetch</button>{

//                 this.state.recomonded.map(recom => <li>{recom.recomondedId}:{recom.foodname}:{recom.brand}</li>)
//     }
//             </div>
//         )
//     }
// }
//  export default Recom;