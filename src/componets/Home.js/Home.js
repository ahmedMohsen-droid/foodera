import { Fragment } from "react";
import Header from "./Header";
import './Home.css';
import pride from './../../assets/1.png';
import ingredients from './../../assets/2.png'
import Data from "../../Data";
import ahmed from './../../assets/ahmed.jpg'
import { Carousel  } from "react-bootstrap";
import Footer from "./Footer";


const Home =()=>{
    const d =Data.map((item)=>{
        return(
            <div className="col-md-4">
                <div className="box">
                    <img src={item.img} />
                    <div>{item.title}</div>
                    <span>{item.price}</span>
                    <h6>{item.time}</h6>
                </div>
                <button>Order now</button>
            </div>
        )
    })
    return(
       <Fragment>
          <Header />
          <section className="numbers">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h2>1287+</h2>
                        <h6>SAVINGS</h6>

                    </div>
                    <div className="col-md-3">
                        <h2>5786+</h2>
                        <h6>PHOTOS</h6>

                    </div>
                    <div className="col-md-3">
                        <h2>1440+</h2>
                        <h6>ROCKETS</h6>

                    </div>
                    <div className="col-md-3">
                        <h2>7110+</h2>
                        <h6>GLOBES</h6>

                    </div>

                </div>
    
            </div>
          </section>
          <section id="About-Us" className="pride">
              <div className="container">
                <div  className="row">
                      <div className="col-md-6">
                         <img src={pride} title="pride"/>
                      </div>
                      <div className="col-md-6">
                           <h1>We pride ourselves on making real food from the best ingredients.</h1>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                           <button>Learn More</button>
                      </div>
                </div>

              </div>
          </section>
          <section className="ingredients">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                      <h1>We make everything by hand with the best possible ingredients.</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains
                        , far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <ul>
                            <li>Etiam sed dolor ac diam volutpat.</li>
                            <li>Etiam sed dolor ac diam volutpat.</li>
                            <li>Etiam sed dolor ac diam volutpat.</li>
                       </ul>
                       <button>Learn More</button>
                    </div>
                    <div className="col-md-6">
                        <img src={ingredients}/>
                    </div>
                    
                </div>
            </div>
          </section>
          <section className="stomach">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>When a man's stomach is full it makes no <br/>difference whether he is rich or poor.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <a href="">Watch Our Story</a>
                    </div>
                </div>
            </div>
          </section>
          <section id="exp" className="blogs">
            <div className="container">
                <div className="row">
                       <div className="col-lg-12 col-md-12">
                            <h2>Explore Our Foods</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                            
                       </div>
                </div>
                <div className="row">
                   {d}
                </div>

            </div>

          </section>
          <section id="reviewes" className="slider">
            <div className="container">
              <div className="row">
                   <div className="col-lg-12 col-md-12">
                        <h2>Testimonials</h2>
                   </div>
              </div>
            </div>
            <div className="container">
             <div className="row">
                <Carousel className="Carousel">
                    <Carousel.Item>
                    <img src={ahmed} />
                        <Carousel.Caption>
                        <h3>Ahmed mohsen - UX Designer</h3>
                        <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={ahmed} />
                        <Carousel.Caption>
                        <h3>Ahmed mohsen - Front end Developer</h3>
                        <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={ahmed} />
                        <Carousel.Caption>
                        <h3>Ahmed mohsen - Web Designer</h3>
                        <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                    </div>
                </div>
          </section>
          <section id="faq" className="Asked">
            <div className="container">
               <diV className="row">
                 <div className="col-lg-12 col-md-12">
                   <h2>Frequently Asked Questions</h2>
                 </div>
               </diV>
               <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <h3>~ Is Foodera Bread really baked fresh each day?</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h3>~ Do you bake breads containing animal fats or products?</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h3>~ Can I order your products online?</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h3>~ When are you opening a shop near me?</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
               </div>
            </div>

          </section>
          <section className="Hurry">
                <div  className="container"> 
                     <div className="row">
                        <div>
                            <h2>Hurry up! Subscribe our newsletter<br/> and get 25% Off</h2>
                            <p>Limited time offer for this month. No credit card required.</p>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-lg-12">
                         <input   type="Email" placeholder="Email Address here"/>
                         <button>Subscribe</button>
                        </div>
                        
                     </div>
                </div>
          </section>
          <Footer/>
        </Fragment>
        
    )
}
export default Home;