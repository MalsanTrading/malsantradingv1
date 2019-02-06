<template>
  <div class="home">
     <section class="slider">
      <div class="container">
        <div class="ws-190"></div>
        <div class="row">
          <div class="col-md-7">
            <div class="slider-text-block">
              <h1>Heavy and hard, <br />mahinery parts</h1>
              <p>
                We offer excellent product knowledge, a good stock of
                fast-moving and critical spares, great suppliers,
                <router-link style="color: #fff" to="/about">....</router-link>
              </p>

              <div class="slider-btns">
                <router-link to="/products/sino" class="btn btn-style1"
                  >OUR PRODUCTS</router-link
                >
                <router-link to="/contact" class="btn btn-style2">CONTACT US</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="ws-190"></div>
      </div>
    </section>
    <div class="ws-40"></div>
    <section class="featured-project-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title">
              <h1>Our Products</h1>
            </div>
          </div>
        </div>

        <div class="ws-70"></div>

        <div class="featured-slider">
          <carousel 
          :loop="true"
          :margin="10"
          :nav="true"
          :center="true"
          :navText="[`
          <i class='glyphicon glyphicon-chevron-left'></i>`, 
          `<i class='glyphicon glyphicon-chevron-right'></i>`
          ]"
		      :theme="'industri-slider-theme1'"
          :responsive="{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
          }"
          >
            <div class="item sf-project">
              <img src="~static/sino/1.png" alt="Feature image" />
              <div class="overlay">
                <h4>Sino truck parts</h4>
                <router-link to="/products/sino" class="btn btn-style1"
                  >View More</router-link
                >
              </div>
            </div>
            <!-- item -->
            <div class="item sf-project">
              <img src="~static/xcmg/xcmg2.jpg" alt="Feature image" />
              <div class="overlay">
                <h4>xcmg parts</h4>
                <router-link to="/products/xcmg" class="btn btn-style1">View More</router-link>
              </div>
            </div>
            <!-- item -->
            <div class="item sf-project">
              <img src="~static/weichai/weichai.jpg" alt="Feature image" />
              <div class="overlay">
                <h4>weichai power parts</h4>
                <router-link to="/products/weichai" class="btn btn-style1"
                  >View More</router-link
                >
              </div>
            </div>
            <!-- item -->
            <div class="item sf-project">
              <img src="~static/glass/02.jpg" alt="Feature image" />
              <div class="overlay">
                <h4>Glasses</h4>
                <router-link to="/products/glass" class="btn btn-style1"
                  >View More</router-link
                >
              </div>
            </div>
            <!-- item -->
          </carousel>
        </div>
        <!-- / featured slider -->
      </div>
    </section>

    <div class="ws-120"></div>
    <section class="clients-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title">
              <h1>Partners</h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="client-slider">
            <carousel 
            :loop="true"
            :margin="10"
            :nav="false"
            :autoplay="true"		    
            :autoplayTimeout="2000"
             :responsive="{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items: 5
                }
            }"
            >
              <div class="item">
                <img
                  src="./slider/1.png"
                  alt="Client &amp; Partner"
                />
              </div>
              <!-- / item -->
              <div class="item">
                <img
                  src="./slider/2.png"
                  alt="Client &amp; Partner"
                />
              </div>
              <!-- / item -->
              <div class="item">
                <img
                  src="./slider/3.png"
                  alt="Client &amp; Partner"
                />
              </div>
              <!-- / item -->
              <div class="item">
                <img
                  src="./slider/4.png"
                  alt="Client &amp; Partner"
                />
              </div>
              <!-- / item -->
              <div class="item">
                <img
                  src="./slider/2.png"
                  alt="Client &amp; Partner"
                />
              </div>
              <!-- / item -->
              <div class="item">
                <img
                  src="./slider/3.png"
                  alt="Client &amp; Partner"
                />
              </div>
              <!-- / item -->
              <div class="item">
                <img
                  src="./slider/4.png"
                  alt="Client &amp; Partner"
                />
              </div>
              <!-- / item -->
              <div class="item">
                <img
                  src="./slider/2.png"
                  alt="Client &amp; Partner"
                />
              </div>
              <!-- / item -->
              <div class="item">
                <img
                  src="./slider/1.png"
                  alt="Client &amp; Partner"
                />
              </div>
              <!-- / item -->
              <div class="item">
                <img
                  src="./slider/2.png"
                  alt="Client &amp; Partner"
                />
              </div>
              <!-- / item -->
              <div class="item">
                <img
                  src="./slider/4.png"
                  alt="Client &amp; Partner"
                />
              </div>
              <!-- / item -->
              <div class="item">
                <img
                  src="./slider/2.png"
                  alt="Client &amp; Partner"
                />
              </div>
              <!-- / item -->
              <div class="item">
                <img
                  src="./slider/3.png"
                  alt="Client &amp; Partner"
                />
              </div>
              <!-- / item -->
            </carousel>
          </div>
        </div>
      </div>
    </section>
    <div class="ws-120"></div>
    <section class="call-to-action">
      <div class="inner-overlay overlay-80"></div>
      <div class="container">
        <div class="ws-80"></div>
        <div class="row">
          <div class="col-md-8">
            <div class="section-title">
              <h1>
                Looking for quality and affordable products ? please get in
                touch with us
              </h1>
            </div>
          </div>
          <div class="col-md-4">
            <router-link to="/contact" class="btn btn-style1 btn-lg"
              >Get In Touch</router-link
            >
          </div>
        </div>
        <div class="ws-40"></div>
      </div>
    </section>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'


export default {
  name: 'home',
  components: { carousel },

}
</script>

<style lang="css">
  .owl-theme .owl-nav [class*='owl-']{
    background: #42474c !important;
  }
  .owl-theme .owl-nav {
    text-align: right !important;
    }
</style>
