import Homepage from "./Homepage";
import Reccomondedfood from "./Reccomondedfood";
import "../components/Carousel";

export function Carousel(){
    return(
        <div>
            <div>
                <Homepage/>
            </div>
    <div class="carous">
        <div class="slidee">
            <div class="slides"> 
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    
                    <div class="slides">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://www.thespruceeats.com/thmb/Dbe-nSiZnjnfHTxsxzvJTlyKTuc=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fruit-salad-98841227-5848619a5f9b5851e5f87d5c.jpg   " class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                     {/* <h2>BIRIYANI</h2>
                                   <h3><p>Chicken is rich in a variety of important nutrients, including protein, niacin, selenium, and phosphorus</p></h3> */}
                                </div>
                            </div>
                        <div class="carousel-item" id="sl">
                            <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/3/21/0/fnd_pasta-istock.jpg.rend.hgtvcom.616.462.suffix/1490188710731.jpeg" class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    {/* <h5>PANNIR</h5>
                                    <p>Paneer contains more protein, calories, and fat by weight</p> */}
                                </div>
                        </div>
                        <div class="carousel-item" id="sl2">
                            <img src="https://www.hungryforever.com/wp-content/uploads/2014/09/samosas-for-the-offcie.jpg" class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                {/* <h5>MUSHROOM</h5>
                                <p>Mushrooms are rich in the B vitamins: riboflavin, niacin, and pantothenic acid</p> */}
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
        </div>
    </div>
        
    )
}
export default Carousel;