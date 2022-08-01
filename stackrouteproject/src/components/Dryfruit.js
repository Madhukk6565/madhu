import Reccomondedfood from "./Reccomondedfood"

export function Dryfruit(){
    return(
        <div>
             <Reccomondedfood/>
            <div class="slides"> 
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div id="badam">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/08/secret-effects-eating-almonds.jpg?quality=82&strip=1&w=970" class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h2>ALMOND</h2>
                                   <h3><p>Almonds contain calcium, magnesium, manganese, copper, vitamin K, protein, and zinc</p></h3>
                                </div>
                            </div>
                        <div class="carousel-item" id="sl">
                            <img src="https://i.pinimg.com/originals/f3/ea/1e/f3ea1eff3aeef7eaaf2980ec538e0b2a.jpg" class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>CASHEWNUT</h5>
                                    <p>Cashew nuts are abundant sources of essential minerals. Manganese, potassium, copper, iron, magnesium, zinc, and selenium </p>
                                </div>
                        </div>
                        <div class="carousel-item" id="sl1">
                            <img src="https://th.bing.com/th/id/OIP.bXsUbKwq0L8d4Fm1xW7WrAHaHa?pid=ImgDet&w=2338&h=2338&rs=1" class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>PISTA</h5>
                                <p>Pistas are also high in beta-carotene and the compound oleanolic acid</p>
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