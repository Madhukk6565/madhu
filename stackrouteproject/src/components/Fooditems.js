import React from 'react';
import"../App.css";

  export function Fooditems(){
    return(
      <div>
      <h1>hi</h1>
      
        <div>
            <head>
             <title>Bootstrap Example</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="./rec_food.css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </head> 
    <div class="container">
            <h2>food items</h2>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
              {/* <!-- Indicators --> */}
             <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
          
             
              <div class="carousel-inner">
          
                <div class="item active">
                  <img class="biri"src="./images/Ambur-Chicken-B.jpg" alt="Nutrition" style="width:100%;"/>
                  <div class="carousel-caption">
                    <h1>BIRIYANI</h1>
                   <h2> <p>Chicken is rich in a variety of important nutrients, including protein, niacin, selenium, and phosphorus.</p></h2>
                  </div>
                </div>
          
                <div class="item">
                  <img class="pa" src="./images/dry fruits/paneer.jpg" alt="Chicago" style="width:100%;" />
                  <div class="carousel-caption">
                    <h1>PANEER</h1>
                   <h2><p>Paneer contains more protein, calories, and fat by weight</p></h2> 
                  </div>
                </div>
              
                <div class="item">
                  <img class="mus" src="./images/dry fruits/mushroom.jpg" alt="New York" style="width:100%;"/>
                  <div class="carousel-caption">
                    <h1>MUSHROOM</h1>
                    <h2><p>Mushrooms are rich in the B vitamins: riboflavin, niacin, and pantothenic acid.</p></h2>
                  </div>
                </div>

                <div class="item">
                    <img class="mus" src="./images/dry fruits/mushroom.jpg" alt="New York" style="width:100%;"/>
                    <div class="carousel-caption">
                      <h1>MUSHROOM</h1>
                      <h2><p>Mushrooms are rich in the B vitamins: riboflavin, niacin, and pantothenic acid.</p></h2>
                    </div>
                  </div>
            
              </div>
          
             
              <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div> 
        </div>
)
}

export default Fooditems;

{/* <div>
                <h3 class="favline">FAVORITE FOOD ITEMS</h3>
            </div>
        <div class="container">
        <div class="row">
            <div class="col-3">
                <div class="card">
                    <img class="card-img-top" src="https://cdn.quizly.co/wp-content/uploads/2019/03/09185337/Pizza-10.jpg" alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title"> PIZZA</h5>
                        <p class="card-text">Pizza contains the minerals such as 201 mg of calcium, 2.65 mg of iron, 26 mg of magnesium, 231 mg of phosphorus</p>
                        <a href="#" class="card-link">Delete </a>
                    </div>
                </div>
            </div> */}