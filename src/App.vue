<template>
  <div>
  <v-app style="scroll-behavior: smooth !important;">
<!--  Top Navigation Bar  -->
    <v-app-bar
        class="sticky px-10"
        :class="{ 'bg--personal': !view.topOfPage}"
        elevation="0"
        style="background: inherit; position: fixed !important; z-index:5 !important;"
    >
      <div class="d-flex align-center white--text">
        <a href="#top">
        <v-img height="80" width="80" src="@/assets/ar.png"></v-img>
        </a>
      </div>
    <v-spacer></v-spacer>

<!--      <v-toolbar-items class="mx-10">-->
<!--        <v-btn x-small @click="toggleTheme()">Toggle light</v-btn>-->
<!--      </v-toolbar-items>-->

      <v-toolbar-items class="mx-10">
        <a href="#about" style="text-decoration: none" class="white--text nav--link ma-auto">About Me</a>
      </v-toolbar-items>

      <v-toolbar-items class="mx-10">
        <a href="#skills" style="text-decoration: none" class="white--text nav--link ma-auto">Skills</a>
      </v-toolbar-items>

      <v-toolbar-items class="mx-10">
       <a href="#portfolio" style="text-decoration: none" class="white--text nav--link ma-auto">Portfolio</a>
      </v-toolbar-items>

      <v-toolbar-items class="mx-10">
        <a href="#contact" style="text-decoration: none" class="white--text nav--link ma-auto">Contact</a>
      </v-toolbar-items>

    </v-app-bar>
<!--  End Top Naigation Bar  -->

    <v-main id="top" class="main px-14 pt-16 pb-16" style="scroll-behavior: smooth !important;">

<!--   Landing View   -->
      <v-row no-gutters class="my-15">
<!--        <span class="gradient radial-gradient-default" style="top: 100px; position: marker;"></span>-->
        <v-col cols="6" style="margin-top: 30px;">
          <div class="white--text" style="font-size: 40px;">HI, I'm <span class="px-3" style="font-size: 70px; font-weight: 700;">AMAN RANJIT</span></div>
          <v-row no-gutters>
            <v-col cols="12" class="justify-center white--text py-10">
              <div class="justify-md-center font-weight-regular" style="font-size: 25px; text-align: justify !important; text-justify: inter-word !important;">Full time UI/UX Designer with wide variation in design technique. Young and energetic, ready to learn and hunger for design. I’m an intermediate designer with on field experience of 1.5 years and counting, versatile in UI/ UX along with some graphics design knowledge.</div>
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
<!--        <span style="top: 100px; right: 30px;" class="gradient1 radial-gradient-default1"></span>-->
<!--        <span style="top: 800px; left: 300px;" class="gradient2 radial-gradient-default2"></span>-->

        <v-col cols="12" class="text-center my-16">
          <div class="white--text">Scroll Down <v-img  height="20" width="20" src="@/assets/mouse.png" class="mx-auto"></v-img></div>
        </v-col>
      </v-row>
<!--   End landing View   -->

<!--   About Me   -->
      <v-row id="about" no-gutters class="py-10">
        <v-col cols="6" class="justify-center">
          <h1  class="white--text my-10">About Me</h1>
          <div class="white--text justify-center" style="font-size: 25px;text-align: justify !important; text-justify: inter-word !important;">Talented UI UX Designer & Technical Lead adept at integrating resources into business operations and devel- oping innovative solutions to diverse issues. Strong history of managing highly effective teams to execute complex projects within stringment timeframes. Highly-skilled Graphics head well-versed in setting up hardware and software components for all users. Weighs curcial business and IT needs against computer system and procedural limitations, assessing roadmaps for optimal functions.</div>
          <v-row no-gutters class="mt-5">
            <v-col cols="12" class="text-center my-16">
              <v-btn large rounded class="font-weight-bold black--text talk--btn"  style="width: 250px">
                <v-icon>mdi-download</v-icon>Download CV</v-btn>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="6" class="mx-auto my-auto">
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
      </v-row>
<!--End About me-->


      <v-row no-gutters class="py-5">

<!--   Skills     -->
        <v-col id="skills" cols="12" class="py-16 mt-4">
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
<!--    End Skills    -->

<!--   Portfolio     -->
        <v-col id="portfolio" cols="12" class="my-10 pt-16">
          <h1 class="white--text my-5">Portfolio</h1>
          <v-carousel  hide-delimiters hide-delimiter-background>
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
<!-- End Portfolio -->
      </v-row>


    </v-main>
<!--  Footer  -->
    <v-row no-gutters id="contact" class="footer pa-5 px-13">
      <v-col cols="6">
        <h2>Let's Work Together</h2>

        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>

        <v-row no-gutters class="my-5">
          <v-col cols="8" >
            <div class="form">
              <form name="contactForm" ref="form" @submit.prevent="submitForm()">
                <div class="flex-rev">
                  <input type="text" placeholder="Enter Full Name" name="name" id="name" />
                </div>
                <div class="flex-rev">
                  <input type="email" placeholder="example@gmail.com" name="email" id="email" />
                </div>

                <div class="flex-rev">
                  <textarea cols="2" placeholder="I have an idea for a project...." name="message" id="message" />
                </div>
                <v-btn :loading="loading" color="primary" type="submit">Submit</v-btn>
<!--                  <button style="background-color: #3b2dd7; color: white; padding:10px 20px; border-radius: 8px" type="submit">Submit</button>-->
              </form>
            </div>
            <v-row no-gutters>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="2"></v-col>
      <v-col cols="4">
        <v-img src="@/assets/footer.png"></v-img>
        <v-row no-gutters>
          <v-col cols="12" class="my-10">
            <v-btn class="mx-3" icon><v-icon size="40">mdi-facebook</v-icon></v-btn>
            <v-btn class="mx-3" icon><v-icon size="40">mdi-instagram</v-icon></v-btn>
            <v-btn class="mx-3" icon><v-icon size="40">mdi-linkedin</v-icon></v-btn>
            <v-btn class="mx-3" icon><v-icon size="40">mdi-twitter</v-icon></v-btn>
            <v-btn class="mx-3" icon><v-icon size="40">mdi-youtube</v-icon></v-btn>
          </v-col>


        </v-row>

      </v-col>
      <v-divider style="border: 1px solid rgba(0,0,0,0.27)"></v-divider>
      <v-col cols="12" class="text-center pt-3">
        Designed By <a style="text-decoration: none" href="https://amanranjit.com.np/">Aman Ranjit</a>, Developed by <a style="text-decoration: none" href="https://umesthapa.com.np/">Umesh Thapa</a>
      </v-col>
    </v-row>

    <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        top right
        color="green"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
            text
            v-bind="attrs"
            @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
<!--  End Footer  -->
  </v-app>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'App',

  components: {
  },

data()  {
    return {
      snackbar: false,
      text: 'Send Successfully!',
      timeout: 2000,


      view: {topOfPage: true},

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
      ],

      name:'',
      nameRules:[
        v => !!v || 'This Field is required.'
      ],
      email: '',
      emailRules:[
        v => !!v || 'This Field is required.'
      ],
      message: '',
      messageRules: [
        v => !!v || 'This Field is required.'
      ],

      loading: false

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
    // Toggle Dark theme
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },

    // Top navigation bar color set unset condition
    handleScroll(){
      if(window.pageYOffset>0){
        if(this.view.topOfPage) this.view.topOfPage = false
      } else {
        if(!this.view.topOfPage) this.view.topOfPage = true
      }
    },

    // Send email
    submitForm() {
      this.loading = true;

      emailjs.sendForm('service_3pik8yv', 'template_bma6y7t', this.$refs.form, 'user_d4P7rFWRsX2QI7lwaCNcR')
          .then(() => {
            // console.log('Successfully message send!', result.text);
            console.log('Successfully message send!');
            this.snackbar = true;
            this.loading = false;
          }, (error) => {
            console.log('FAILED...', error.text);
            this.loading = false;
          });

    }
  },
};
</script>

<style scoped lang="scss">
*{
  font-family: "Nunito", sans-serif;
  scroll-behavior: smooth !important;
}

html {
  scroll-behavior: smooth !important;
}

.main {
  background: linear-gradient(-60deg, #ff75c3, #ffa647, #70e2ff, #cd93ff, #4ac7fa, #5753c9, #2980b9, #96e6a1, #d93221 );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
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

.bg--personal{
  position: relative !important;
  background: rgb(0, 11, 14, .50) !important;
  border-radius: 2px !important;
  overflow: hidden !important;
  z-index: 10 !important;
  //box-shadow: inset 0 0 0 200px rgba(255,255,255,0.05) !important;
  //filter: blur(20px) !important;

}


// skills
.box{
  padding: 40px 0;
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
  padding:1px;
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

.nav--link {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  display: block;
  width: 100%;
  padding: 1px;
  position: relative;
  z-index: 2;
  text-decoration: none;
  color: #2C3E50;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}

.nav--link:after {
  content: "";
  height: 2px;
  left: 0;
  width: 1px;
  position: absolute;
  -webkit-transition: width 1s ease, background-color 1s ease;
  -moz-transition: width 1s ease, background-color 1s ease;;
  -ms-transition: width 1s ease, background-color 1s ease;;
  -o-transition: width 1s ease, background-color 1s ease;;
  transition: width 1s ease, background-color 1s ease;;
  right: 0;
  margin: 0 auto;
}

.nav--link:hover {
  -webkit-transition: color 1s ease;
  -moz-transition: color 1s ease;
  -ms-transition: color 1s ease;
  -o-transition: color 1s ease;
  transition: color 1s ease;
  cursor: pointer;
}

.nav--link:hover:after,
.nav--link:focus:after{
  width: 100%;
  background-color: #fff;
}


// footer section
.footer {
  background-image: linear-gradient(to bottom right, darken(powderblue, 20%), powderblue);
}
// contact Form

.form{
  width: 100%;
  //background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

}
.form h1{
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
}
.form form{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.flex-rev {
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 10px;
  width: 100%;
}

.flex-rev input, .flex-rev textarea {
  border: none;
  background-color: #e6e6e6;
  padding: 12px 10px;
  font-size: 16px;
  resize: none;
  margin-top: 7px;
  margin-bottom: 16px;
  border-radius: 5px;
  color: #243342;
  outline-color: #243342;
  outline-width: thin;
  -webkit-appearance: none;
}

</style>

<!--https://codepen.io/ovoblur/pen/BazBpXN-->
