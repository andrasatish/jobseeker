import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import './shared-styles.js'
import './global-styles.js';

class ProfileApp extends PolymerElement {

    static get template() {
      return html `
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" 
                integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" 
                crossorigin="anonymous"/>
        <style include="global-styles">
          .col-md-2{
            width:20%;
          }
          .col-md-3{
            width:25%;
          }
          .col-md-4{
            width:33%;
          }
          .col-md-5{
            width:41%;
          }
          .col-md-6{
            width:50%;
          }
          .col-md-10{
            width:80%;
          }
          .float-left{
            float: left;
          }
          .float-right{
            float: right;
          }
          .row{
            width:98%;
            box-sizing: border-box;
          }
          .clear-float{
            clear: both;
          }
          .img-rounded{
            border-radius:50%;
          }
          .container-bg{
            background:#eaffff;
            overflow:hidden;
            padding:10px 40px 10px 10px;
            margin:10px 40px 10px 10px;
            border-radius:5px;
          }
          .mx-10{
            margin:0 10px;
          }
          .my-10{
            margin:10 0;
          }
          .mx-5{
            margin:0 5px;
          }
          .my-5{
            margin:5 0;
          }
          .ml-5{
            margin-left:5px;
          }
          .mr-5{
            margin-right:5px;
          }
          .mt-5{
            margin-top:5px;
          }
          .mb-5{
            margin-bottom:5px;
          }
          .mb-10{
            margin-bottom:10px;
          }
          .ml-10{
            margin-left:10px;
          }
          .mr-10{
            margin-right:10px;
          }
          .mt-10{
            margin-top:10px;
          }
          .mb-10{
            margin-bottom:10px;
          }
          .pl-5{
            padding:5px;
            box-sizing: border-box;
          }
          p{
            margin:0;
            margin-bottom:10px; 
          }
          .profile-title{
            font-size:30px;
            margin-bottom:15px;
            color:#6781d3;
          }
          .file-upload{
            margin: 0 auto;
            display: block;
            background: royalblue;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            outline: none;
            border: none;
          }
          .icon-color{
            color:#6781d3
          } 
          .upload-title{
            font-size:20px;
            text-align:center;
          }
          .progress {
            display: flex;
            height: 1rem;
            overflow: hidden;
            font-size: .75rem;
            background-color: #e9ecef;
            border-radius: .25rem;
        }
          .progress-bar {
            display: flex;
            flex-direction: column;
            justify-content: center;
            overflow: hidden;
            color: #fff;
            text-align: center;
            white-space: nowrap;
            background-color: #4a89dc;
            transition: width .6s ease;
        }
        .bg-primary{
          background: royalblue;
        }
        .bg-success{
          background: #25db6e;
        }
          @media only screen and (max-width: 1000px) {
            .col-sm-12{
              width:100%;
            }
            .float-left{
              float:none;
              display:block;
            }
            .container{
              padding:50px;
              border:1px solid royalblue;
              border-radius:5px;
              width:100%;
            }
            .row{
              width:97%;
            }
          }
        </style>
        <section id="profile-wrapper">
        
        <!-- Work Experience -->
        <div class="row container-bg">
          <div class="col-md-12">
            <p class="profile-title">Work Experience</p>   
            <p>Hello! I’m Joyce Harrison. I am passionate about UI/UX design and Web Design. I am a skilled Front-end Developer and master of Graphic Design tools such as Photoshop and Sketch.</p> 
          </div>
        </div>

          <!-- Profile -->
          <div class="row container-bg clear-float">
            <div class="col-md-2 col-sm-12 float-left">
              <img src="../images/avatar.jpg" style="width:100%" class="img-rounded"/>
            </div>
            <div class="col-md-10 float-left pl-5">
              <div class="row">
                <div class="col-md-4 col-sm-12 float-left">
                    <p class="profile-title"> Satish</p>
                    <p><iron-icon icon="room" class="icon-color"></iron-icon> Hyderabad / Secundrabad</p>
                    <p><iron-icon icon="work" class="icon-color"></iron-icon> 4 Year(s) 2 Month(s) </p>
                    <p><iron-icon icon="folder" class="icon-color"></iron-icon> INR 5 Lakh(s) 5 Thousand</p>    
                </div>
                <div class="col-md-4 col-sm-12 float-left">
                    <p><iron-icon icon="perm-phone-msg" class="icon-color"></iron-icon> 9177267373</p>
                    <p><iron-icon icon="mail" class="icon-color"></iron-icon> andra.satish@gmail.com</p>
                </div>
                <div class="col-md-4 col-sm-12 float-left">
                  <div class="container">
                    <p class="profile-title upload-title">Upload your resume</p>
                    <input type="file" class="file-upload" style="display:none">
                    <input id="submitForValidation" type="submit" value="UPDATE RESUME" on-click="uploadFile" class="file-upload">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- About Profile -->
          <div class="row container-bg">
            <div class="col-md-12">
              <p class="profile-title">About Me</p>   
              <p>Hello! I’m Joyce Harrison. I am passionate about UI/UX design and Web Design. I am a skilled Front-end Developer and master of Graphic Design tools such as Photoshop and Sketch.</p> 
            </div>
          </div>

          <!-- Professional Skills -->
          <div class="row container-bg clear-float">
            <p class="profile-title">Professional Skills</p>   
            <div class="col-md-6 col-sm-12 float-left">
              <p>HTML</p>
              <div class="progress mb-10 col-md-10"> 
                <div class="progress-bar bg-primary aos-init" role="progressbar" data-aos="zoom-in-right" data-aos-delay="100" data-aos-anchor=".skills-section" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <p>CSS</p>
              <div class="progress mb-10 col-md-10"> 
                <div class="progress-bar bg-primary aos-init" role="progressbar" data-aos="zoom-in-right" data-aos-delay="200" data-aos-anchor=".skills-section" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <p>JavaScript</p>
              <div class="progress mb-10 col-md-10"> 
                <div class="progress-bar bg-primary aos-init aos-animate" role="progressbar" data-aos="zoom-in-right" data-aos-delay="300" data-aos-anchor=".skills-section" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 float-left">
              <p>POLYMER</p>
              <div class="progress mb-10 col-md-10"> 
                <div class="progress-bar bg-success aos-init aos-animate" role="progressbar" data-aos="zoom-in-right" data-aos-delay="500" data-aos-anchor=".skills-section" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <p>ANGULAR</p>
              <div class="progress mb-10 col-md-10"> 
                <div class="progress-bar bg-success aos-init aos-animate" role="progressbar" data-aos="zoom-in-right" data-aos-delay="600" data-aos-anchor=".skills-section" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <p>REACT</p>
              <div class="progress mb-10 col-md-10"> 
                <div class="progress-bar bg-success aos-init aos-animate" role="progressbar" data-aos="zoom-in-right" data-aos-delay="500" data-aos-anchor=".skills-section" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>

          <!-- Work Experience -->
          <div class="row container-bg">
            <div class="col-md-12">
              <p class="profile-title">Work Experience</p>   
              <p>Hello! I’m Joyce Harrison. I am passionate about UI/UX design and Web Design. I am a skilled Front-end Developer and master of Graphic Design tools such as Photoshop and Sketch.</p> 
            </div>
          </div>

          <!-- Education -->
          <div class="row container-bg">
            <div class="col-md-12">
              <p class="profile-title">Education</p>   
              <p>Hello! I’m Joyce Harrison. I am passionate about UI/UX design and Web Design. I am a skilled Front-end Developer and master of Graphic Design tools such as Photoshop and Sketch.</p> 
            </div>
          </div>
        </section>
    `;
    }

    uploadFile(){
      console.log('Hello')
    }
}


window.customElements.define('profile-app', ProfileApp);