import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import './global-styles.js';
import './shared-styles.js'

class ProfileApp extends PolymerElement {

  static get properties() {
    return {
      fileInfo : {
        type: String,
        value: null
      },
      user: {
        type: Object,
        value: function () {
          // Get array data from Local Storage
          var profile = JSON.parse(window.localStorage.getItem("editProfile"));
          if (profile == null || undefined) {
            var obj = {
              "name": "Satish",
              "location": "Hyderabad / Secundrabad",
              "experience": {
                  "years" : 4,
                  "months": 2
              },
              "salary":{
                  "lakhs":5,
                  "thousand":50
              },
              "mobile":9177267370,
              "mail":"andra.satish@gmail.com",
              "aboutme": "Hello! I’m Joyce Harrison. I am passionate about UI/UX design and Web Design. I am a skilled Front-end Developer and master of Graphic Design tools such as Photoshop and Sketch.",
              "professionalskills":[
                {
                  "lang":"HTML",
                  "rating":90
                },
                {
                  "lang":"CSS",
                  "rating":80
                },
                {
                  "lang":"JavaScript",
                  "rating":86
                },
                {
                  "lang":"POLYMER",
                  "rating":80
                },
                {
                  "lang":"ANGULAR",
                  "rating":70
                },
                {
                  "lang":"REACT",
                  "rating":90
                }
              ],
              "workexperience":"Hello! I’m Joyce Harrison. I am passionate about UI/UX design and Web Design. I am a skilled Front-end Developer and master of Graphic Design tools such as Photoshop and Sketch.",
              "education":[
                  {
                      "education":10,
                      "yearofpassing":2006,
                      "board":"SSC",
                      "medium":"Telugu",
                      "percentage":80
                  },
                  {
                      "education":"Inter",
                      "yearofpassing":2008,
                      "board":"Board of Intermediate",
                      "medium":"English",
                      "percentage":70
                  },
                  {
                      "education":"B.Tech",
                      "yearofpassing":2012,
                      "board":"Andhra University",
                      "medium":"English",
                      "percentage":72
                  }
              ]
            };
            return obj;               
          }else{
            return profile;
          }
        },
      }
    };
 }

    static get template() {
      return html `
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" 
                integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" 
                crossorigin="anonymous"/>
      <link rel="stylesheet" href="/node_modules/material-design-lite/material.min.css">
      <script src="/node_modules/material-design-lite/material.min.js"></script>
        <style include="shared-styles">
          .file-upload{
            background:#673ab7;
            color:white;
            border-radius:10px;
            border:none
          }
        </style>
        <section id="profile-wrapper">        
        <!-- Action Button -->
        <div class="row container-bg">
          <div class="col-md-12">
            <p>{{data.profile.name}}</p>
            <button type="submit" value="Edit Profile" on-click="editDetails" class="filled-btn edit-btn">
              <iron-icon icon="create"></iron-icon>  Edit Profile
            </button>
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
                    <p class="profile-title"> {{user.name}}</p>
                    <p><iron-icon icon="room" class="icon-color"></iron-icon> {{user.location}}</p>
                    <p><iron-icon icon="work" class="icon-color"></iron-icon> {{user.experience.years}} Year(s) {{user.experience.months}} Month(s) </p>
                    <p><iron-icon icon="folder" class="icon-color"></iron-icon> INR {{user.salary.lakhs}} Lakh(s) {{user.salary.thousand}} Thousand</p>    
                </div>
                <div class="col-md-4 col-sm-12 float-left">
                    <p><iron-icon icon="perm-phone-msg" class="icon-color"></iron-icon> {{user.mobile}}</p>
                    <p><iron-icon icon="mail" class="icon-color"></iron-icon> {{user.mail}}</p>
                </div>
                <div class="col-md-4 col-sm-12 float-left">
                  <div class="container">
                    <p class="profile-title upload-title">Upload your resume</p>
                    <button type="button" class="file-upload">
                      <input #Image type="file" on-change="uploadFile()"/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- About Profile -->
          <div class="row container-bg">
            <div class="col-md-12">
              <p class="profile-title">About Me</p>   
              <p>{{user.aboutme}}</p>
            </div>
          </div>

          <!-- Professional Skills -->
          <div class="row container-bg clear-float">
            <p class="profile-title">Professional Skills</p>   
            <template is="dom-repeat" items="{{user.professionalskills}}" id="skills" > 
              <div class="item">
                <div class="col-md-6 col-sm-12 float-left">
                  <p>{{item.lang}}</p>
                  <div class="progress mb-10 col-md-10"> 
                    <div class="progress-bar bg-primary aos-init" role="progressbar" data-aos="zoom-in-right" data-aos-delay="100" data-aos-anchor=".skills-section" style="width: [[item.rating]]%" aria-valuenow="10" aria-valuemin="10" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </template>
          </div>

          <!-- Work Experience -->
          <div class="row container-bg">
            <div class="col-md-12">
              <p class="profile-title">Work Experience</p>   
              <p>{{user.workexperience}}</p>
            </div>
          </div>

          <!-- Education -->
          <div class="row container-bg">
            <div class="col-md-12">
              <p class="profile-title">Education</p>
              <div class="mdl-grid">
                <div class="table-responsive">
                <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                  <thead>
                    <tr>
                      <th scope="col" class="mdl-data-table__cell--non-numeric">Eduacation</th>
                      <th scope="col" class="mdl-data-table__cell--non-numeric">Board</th>
                      <th scope="col" class="mdl-data-table__cell--non-numeric">Meduium</th>
                      <th scope="col" class="mdl-data-table__cell--non-numeric">Year of Passing</th>
                    </tr>
                  </thead>
                  <!--- Dom Repeat started -->
                  <template is="dom-repeat" items="{{user.education}}" id="education" > 
                    <tbody>
                      <tr class="item">
                        <td class="mdl-data-table__cell--non-numeric">{{item.education}}</td>
                        <td class="mdl-data-table__cell--non-numeric">{{item.board}}</td>
                        <td class="mdl-data-table__cell--non-numeric">{{item.medium}}</td>
                        <td class="mdl-data-table__cell--non-numeric">{{item.yearofpassing}}</td>
                      </tr>
                    </tbody>
                  </template>
                </table>
              </div>
              </div>   
            </div>
          </div>
        </section>
    `;
    }
    
    uploadFile(event){
      const file = event.target.files
      const filename = file.length ? file[0].name : ''
      if(filename)
        alert(`Your Resume Successfully Updated (${filename})`)
    }

    editDetails(){
      window.localStorage.setItem('profileDetails',JSON.stringify(this.user));
      window.localStorage.setItem('professionalskills',JSON.stringify(this.user.professionalskills));
      window.location.href = "/edit-profile";
    }
}


window.customElements.define('profile-app', ProfileApp);