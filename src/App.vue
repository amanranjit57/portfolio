<template>
  <v-app>
    <v-app-bar
        class="sticky px-10"
        :class="{ 'bg--personal': !view.topOfPage}"
        elevation="0"
        style="background: inherit; position: fixed !important; z-index:5 !important;"
    >
      <div class="d-flex align-center white--text">
        <v-img height="80" width="80" src="@/assets/ar.png"></v-img>
      </div>
    <v-spacer></v-spacer>

      <v-toolbar-items class="mx-10">
        <v-btn tile elevation="0" text class="white--text navigation-text">About Me</v-btn>
      </v-toolbar-items>

      <v-toolbar-items class="mx-10">
        <v-btn text class="white--text">Skills</v-btn>
      </v-toolbar-items>

      <v-toolbar-items class="mx-10">
        <v-btn text class="white--text">Portfolio</v-btn>
      </v-toolbar-items>

      <v-toolbar-items class="mx-10">
        <v-btn text class="white--text">Contact</v-btn>
      </v-toolbar-items>

    </v-app-bar>
    <v-main class="main px-14 pt-16" style="height: 500vh;">
      <v-row no-gutters class="my-15 pt-5">
        <span class="gradient radial-gradient-default" style="top: 100px; position: marker;"></span>
        <v-col cols="6" style="margin-top: 100px;">
          <div class="white--text" style="font-size: 40px;">HI, I'm <span class="px-3" style="font-size: 70px; font-weight: 700;">AMAN RANJIT</span></div>
          <v-row no-gutters>
            <v-col cols="12" class="justify-center white--text py-10">
              <div class="justify-md-center font-weight-regular" style="font-size: 25px; text-align: justify !important; text-justify: inter-word !important;">Full time UI/UX Designer with wide variation in design technique. Young and energetic, ready to learn and hunger for design. I’m an amateur designer with on field experience of 1.5 years and counting, versatile in UI/ UX along with some graphics design knowledge.</div>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col cols="12" class="text-center my-10 pa-3">
              <v-btn large rounded class="font-weight-bold black--text talk--btn"  style="width: 250px">
                Let's Talk</v-btn>
<!--              <a href="#" class="font-weight-bold"><span></span>Let's Talk</a>-->
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="6">
          <v-row no-gutters>
            <v-col cols="12" class="mx-auto">
              <v-img class="mx-auto"  src="@/assets/port.png"></v-img>
            </v-col>
          </v-row>
        </v-col>
        <span style="top: 100px; right: 30px;" class="gradient1 radial-gradient-default1"></span>
        <span style="top: 800px; left: 300px;" class="gradient2 radial-gradient-default2"></span>

        <v-col cols="12" class="text-center my-16">
          <div class="white--text">Scroll Down <v-img  height="20" width="20" src="@/assets/mouse.png" class="mx-auto"></v-img></div>
        </v-col>
      </v-row>

      <v-row no-gutters class="py-5">
        <v-col cols="6" class="justify-center">
          <h1 class="white--text my-10">About Me</h1>
          <div class="white--text justify-center" style="font-size: 25px;text-align: justify !important; text-justify: inter-word !important;">Talented UI UX Designer & Technical Lead adept at integrating resources into business operations and devel- oping innovative solutions to diverse issues. Strong history of managing highly effective teams to execute complex projects within stringment timeframes. Highly-skilled Graphics head well-versed in setting up hardware and software components for all users. Weighs curcial business and IT needs against computer system and procedural limitations, assessing roadmaps for optimal functions.</div>
        <v-row no-gutters>
          <v-col cols="12" class="text-center my-5">
            <v-btn large rounded class="font-weight-bold black--text talk--btn"  style="width: 250px">
              <v-icon>mdi-download</v-icon>Download CV</v-btn>
          </v-col>
        </v-row>
        </v-col>

        <v-col cols="6" class="mx-auto py-5">
          <v-img style="border-radius: 10px;" class="mx-auto" height="400" width="400" src="@/assets/aman.jpg"></v-img>
        </v-col>


        <v-col cols="12" class="my-16">
          <v-row no-gutters class="py-10">
            <v-col cols="5" class="text-right pr-5" style="border-right: 5px solid #3b2dd7;">
              <div class="white--text font-weight-bold" style="font-size: 55px;">1.5</div>
              <div class="white--text pr-6" style="font-size: 20px;">Yrs</div>
            </v-col>
            <v-col cols="2" class="text-center">
              <div class="white--text font-weight-bold" style="font-size: 55px;">03</div>
              <div class="white--text" style="font-size: 20px;">Projects</div>
            </v-col>
            <v-col cols="5" class="pl-5" style="border-left: 5px solid #3b2dd7;">
              <div class="white--text font-weight-bold" style="font-size: 55px;">1.5</div>
              <div class="white--text " style="font-size: 20px;">Companies</div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12">
          <h1 class="white--text">Skills</h1>
          <v-row no-gutters>
            <v-col cols="5">
              <div class="box">
                <ul>
                  <li>
                    <div class="lang">Figma</div>
                    <div class="bar" style="border-radius: 50px;">
                      <div class="progress" style="background-color: #3b2dd7 !important; width: 90%;border-radius: 50px;"></div>
                      <span class="percent">90%</span>
                    </div>
                  </li>

                  <li>
                    <div class="lang">Adobe XD</div>
                    <div class="bar" style="border-radius: 50px;">
                      <div class="progress" style="background-color: #3b2dd7 !important; width: 85%;border-radius: 50px;"></div>
                      <span class="percent">85%</span>
                    </div>
                  </li>

                  <li>
                    <div class="lang">Adobe Photoshop</div>
                    <div class="bar" style="border-radius: 50px;">
                      <div class="progress" style="background-color: #3b2dd7 !important; width: 80%;border-radius: 50px;"></div>
                      <span class="percent">80%</span>
                    </div>
                  </li>

                  <li>
                    <div class="lang">Adobe Illustrator</div>
                    <div class="bar" style="border-radius: 50px;">
                      <div class="progress" style="background-color: #3b2dd7 !important; width: 70%;border-radius: 50px;"></div>
                      <span class="percent">70%</span>
                    </div>
                  </li>

                  <li>
                    <div class="lang">Adobe Premere Pro</div>
                    <div class="bar" style="border-radius: 50px;">
                      <div class="progress" style="background-color: #3b2dd7 !important; width: 50%;border-radius: 50px;"></div>
                      <span class="percent">50%</span>
                    </div>
                  </li>

                  <li>
                    <div class="lang">Wondershare Filmora</div>
                    <div class="bar" style="border-radius: 50px;">
                      <div class="progress" style="background-color: #3b2dd7 !important; width: 50%;border-radius: 50px;"></div>
                      <span class="percent">50%</span>
                    </div>
                  </li>
                </ul>
              </div>
            </v-col>
            <v-col cols="2"></v-col>
            <v-col cols="5">
              <div class="box">
                <ul>
                  <li>
                    <div class="lang">UI/UX Design</div>
                    <div class="bar" style="border-radius: 50px;">
                      <div class="progress" style="background-color: #3b2dd7 !important; width: 85%;border-radius: 50px;"></div>
                      <span class="percent">85%</span>
                    </div>
                  </li>

                  <li>
                    <div class="lang">Logo Design</div>
                    <div class="bar" style="border-radius: 50px;">
                      <div class="progress" style="background-color: #3b2dd7 !important; width: 70%;border-radius: 50px;"></div>
                      <span class="percent">70%</span>
                    </div>
                  </li>

                  <li>
                    <div class="lang">Visual Design</div>
                    <div class="bar" style="border-radius: 50px;">
                      <div class="progress" style="background-color: #3b2dd7 !important; width: 80%;border-radius: 50px;"></div>
                      <span class="percent">80%</span>
                    </div>
                  </li>

                  <li>
                    <div class="lang">MS Office</div>
                    <div class="bar" style="border-radius: 50px;">
                      <div class="progress" style="background-color: #3b2dd7 !important; width: 75%;border-radius: 50px;"></div>
                      <span class="percent">75%</span>
                    </div>
                  </li>

                  <li>
                    <div class="lang">Supervision</div>
                    <div class="bar" style="border-radius: 50px;">
                      <div class="progress" style="background-color: #3b2dd7 !important; width: 60%;border-radius: 50px;"></div>
                      <span class="percent">60%</span>
                    </div>
                  </li>
                </ul>
              </div>
            </v-col>

          </v-row>
        </v-col>

        <v-col cols="12" class="my-10">
          <h1 class="white--text my-5">Portfolio</h1>
          <v-carousel  hide-delimiters hide-delimiter-background  touch>
            <template v-for="(item, index) in slider">
              <v-carousel-item v-if="(index + 1) % columns === 1 || columns === 1"
                               :key="index"
              >
                <v-row class="flex-nowrap portfolio--cara" style="height:100%; border-radius: 100px; !important;" >
                  <template v-for="(n,i) in columns">
                    <template v-if="(+index + i) < slider.length">
                      <v-col :key="i">
                        <v-sheet v-if="(+index + i) < slider.length"
                                 :color="slider[+index + i]"
                                 height="100%"
                        >
                          <v-row class="fill-height"
                                 align="center"
                                 justify="center"
                          >
                            <div class="display-3">{{+index + i + 1}}</div>
                          </v-row>
                        </v-sheet>
                      </v-col>
                    </template>
                  </template>
                </v-row>
              </v-carousel-item>
            </template>
          </v-carousel>

          <v-row no-gutters class="my-5 ">
            <v-col cols="12" class="white--text justify-center" style="font-size: 25px; text-align: justify !important; text-justify: inter-word !important;">
              Since 2019, I’ve started designing UI and learnt many methods and techniques. I have gained knowledge from various source, watched hours of youtube tutorials, reddit forums, instagarm design pages, read their strategy and thinking ways and applied to my design. I look forward to upgrade myself in this field, learn more from the experts, and share my knowledge among my teams and work accordingly so that i will be able to deliver 100% and make my clients, colleagues and myself happy and proud.
            </v-col>
          </v-row>
        </v-col>

      </v-row>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

data()  {
    return {
      view: {topOfPage: true},

      skills:[
        { lang:"Figma",      	percent:90,   color:"#ec407a"	},
        { lang:"Adobe XD", 			percent:76,   color:"#f4511e"	},
        { lang:"Adobe Photoshop", 	percent:84,   color:"#512da8"	},
        { lang:"Adboe Illustrator",	percent:94,   color:"#f57c00"	},
        { lang:"Adobe Premere Pro",		 	percent:93,   color:"#0288d1"	},
        { lang:"Wondershare Filmora", 		percent:87,   color:"#388e3c"	},
        { lang:"UI/UX Design", 		percent:87,   color:"#388e3c"	},
        { lang:"Logo Design", 		percent:87,   color:"#388e3c"	},
        { lang:"Visual Design", 		percent:87,   color:"#388e3c"	},
        { lang:"MS Office", 		percent:87,   color:"#388e3c"	},
        { lang:"Supervision", 		percent:87,   color:"#388e3c"	}
      ],

      slider: [
        "red",
        "green",
        "orange",
        "blue",
        "pink",
        "purple",
        "indigo",
        "cyan",
        "deep-purple",
        "light-green",
        "deep-orange",
        "blue-grey"
      ]

    }
},

  computed: {
    columns() {
      if (this.$vuetify.breakpoint.xl) {
        return 4;
      }

      if (this.$vuetify.breakpoint.lg) {
        return 3;
      }

      if (this.$vuetify.breakpoint.md) {
        return 2;
      }

      return 1;
    }
  },

  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(){
      if(window.pageYOffset>0){
        if(this.view.topOfPage) this.view.topOfPage = false
      } else {
        if(!this.view.topOfPage) this.view.topOfPage = true
      }
    }
  },
};
</script>

<style scoped lang="scss">
*{
  font-family: "Nunito", sans-serif;
}



.main {
  background: linear-gradient(-45deg, #001219, #e73c7e, #23a6d5, #001219);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}


.gradient  {
  height: 100px;
  width: 100px;
  //flex: 0 1 33%;
  //display: block;
  border-radius: 100px;
  position: absolute;
  filter:blur(20px);
  transform: translatey(0px);
  animation: float 10s ease-in-out infinite;
}

.gradient1  {
  height: 50px;
  width: 50px;
  //flex: 0 1 33%;
  //display: block;
  border-radius: 100px;
  position: absolute;
  filter:blur(10px);
  transform: translatey(0px);
  animation: float 10s ease-in-out infinite;
}

.gradient2  {
  height: 80px;
  width: 80px;
  //flex: 0 1 33%;
  //display: block;
  border-radius: 100px;
  position: absolute;
  filter:blur(10px);
  transform: translatey(0px);
  animation: float2 10s ease-in-out infinite;
}
@keyframes float {
  0% {
    box-shadow: 10px 10px 50px 10px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 10px 50px 10px 10px rgba(0,0,0,0.2);
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 10px 10px 25px 10px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
}

@keyframes float2 {
  0% {
    box-shadow: 10px 10px 50px 10px rgba(0,0,0,0.6);
    transform: translatey(10px);
  }
  50% {
    box-shadow: 10px 50px 10px 10px rgba(0,0,0,0.2);
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 10px 10px 25px 5px rgba(0,0,0,0.6);
    transform: translatey(50px);
  }
}


.radial-gradient-default {
  background-image: radial-gradient(
          circle,
          #6411ad,
          #3b2dd7);
}

.radial-gradient-default1 {
  background-image: radial-gradient(
          circle,
          #d99708,
          #a80820);
}

.radial-gradient-default2 {
  background-image: radial-gradient(
          circle,
          #14ec04,
          #f10381);
}


//.navigation-text {
//  color: #fff !important;
//  background-color: purple !important;
//}
//
//.navigation-text:hover {
//  color: #fff !important;
//  background: #001219 !important;
//  //background-color: #001219 !important;
//}



a
{
  position: absolute;
  //top: 50%;
  //left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 50px;
  background: rgba(255, 199, 169, 0.28);
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  line-height: 50px;
  color: #000;
  font-size: 20px;
  font-family: verdana;
  letter-spacing: 4px;
  border-radius: 25px;
  /*    border-radius: 20px; */
}

a:before,
a:after,
span:before,
span:after
{
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: #fff;
  transition: 1s;
  mix-blend-mode: hue;
  border-radius: 10px;
}

a:before
{
  top: -2px;
  left: -2px
}
a:after
{
  top: -2px;
  right: -2px;
}
span:before
{
  bottom: -2px;
  left: -2px
}
span:after
{
  bottom: -2px;
  right: -2px
}

a:hover:before,
a:hover:after,
a:hover span:before,
a:hover span:after
{
  width: calc( 180px/2 );
  height: calc( 50px/2 )
}

.talk--btn {
background-color: #BDE0FE !important;
  transition: 1s !important;
}

.talk--btn:hover {
  color: #BDE0FE !important;
  background: transparent !important;
  border: 1px solid #BDE0FE !important;
  transition: 1s !important;
}

.bg--personal {
  background-color: #001219 !important;
}

// skills
.box{
  //width: 800px;
  padding: 40px 0;
  //background:#f3f3f3;
  //box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.1);
}

ul li{
  list-style-type: none;
  padding:5px;
  margin: 20px 0;
}

.lang{
  margin:5px;
  font-size: 20px;
  color: #fff !important;
}

.bar{
  width: 100%;
  background:#dfdfdf;
  overflow: hidden;
  padding:2px;
}

.progress{
  float:left;
  padding:15px;
}

.percent{
  float: right;
  font-weight: 600;
  height: 30px;
  line-height: 30px;
}

.portfolio--cara {
  border-radius: 100px !important;
}
</style>

<!--https://codepen.io/ovoblur/pen/BazBpXN-->
