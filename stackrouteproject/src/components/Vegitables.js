import Reccomondedfood from "./Reccomondedfood"

export function vegitables(){
    return(
        <div>
        <Reccomondedfood/>
       <div> 
           <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
               <div class="carousel-indicators">
                   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
               </div>
               <div id="slid">
                   <div class="carousel-inner">
                       <div class="carousel-item active">
                           <img src="" class="d-block w-100" alt="..."/>
                           <div class="carousel-caption d-none d-md-block">
                               <h2>ALMOND</h2>
                              <h3><p>,</p></h3>
                           </div>
                       </div>
                   <div class="carousel-item" id="sl">
                       <img src="https://foodiewish.com/wp-content/uploads/2020/07/Achari-Paneer-Racipe.jpg" class="d-block w-100" alt="..."/>
                           <div class="carousel-caption d-none d-md-block">
                               <h5>PANNIR</h5>
                               <p>Paneer contains more protein, calories, and fat by weight</p>
                           </div>
                   </div>
                   <div class="carousel-item" id="sl1">
                       <img src="https://s1.1zoom.me/big3/793/383219-svetik.jpg" class="d-block w-100" alt="..."/>
                       <div class="carousel-caption d-none d-md-block">
                           <h5>MUSHROOM</h5>
                           <p>Mushrooms are rich in the B vitamins: riboflavin, niacin, and pantothenic acid</p>
                       </div>
                   </div>
              
                   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                       <span class="visually-hidden">Previous</span>
                   </button>
                   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                       <span class="carousel-control-next-icon" aria-hidden="true"></span>
                       <span class="visually-hidden">Next</span>
                   </button>
               </div>
           </div>
       </div>
   </div>
   </div>


    )
}
