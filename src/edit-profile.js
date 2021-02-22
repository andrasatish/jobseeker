import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/paper-input/paper-input.js";
import "@polymer/iron-form/iron-form.js";
import "./style-element.js";
import "./shared-styles.js";

class EditProfile extends PolymerElement {
  static get properties() {
    return {
      user: {
        type: Object,
        value: function () {
          // Get array data from Local Storage
          var profile = JSON.parse(
            window.localStorage.getItem("profileDetails")
          );
          return {
            profile,
          };
        },
      },
      professionalskills: {
        type: Array,
        value: function () {
          return JSON.parse(window.localStorage.getItem("professionalskills"));
        },
      },
    };
  }

  static get template() {
    return html`
    <link rel="stylesheet" href="/node_modules/material-design-lite/material.min.css">
    <script src="/node_modules/material-design-lite/material.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <style include="shared-styles">
    :host {
      display: block;
      padding: 10px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .mdl-textfield__input{
      padding:20px 0;
    }
    .profile-title{
      font-size:30px;
      margin:0;
      color:#6781d3;
    }
    textarea{
      width: 100%;
      height: 100%;
      border-radius: 5px;
      padding: 5px;
    }
    .btn-middle{
      margin: 0 auto!important;
      display:block!important;
      background:#673ab7!important;
      color:#fff!important;
    }
  </style>

  <div class="card">
    <h1>Edit Profile Details</h1>
  </div>

  <!-- Edit Form -->
  <div class="card">
    <iron-form>
      <form is = "iron-form" id = "personalform" method = "post" action = "/form/handler" name="personalform">
        <div class="mdl-grid">
  
        <div class="mdl-cell mdl-cell--12-col">
           <p class="profile-title">Personal Details </p>
        </div>

        <!-- User Name -->
        <div class="mdl-cell mdl-cell--6-col">
          <paper-input label="Enter Name" value="[[user.profile.name]]" name="name" id="name" required auto-validate error-message="Name is mandatory"></paper-input>
        </div>

          <!-- Select Location -->
          <div class="mdl-cell mdl-cell--6-col" required>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <select class="mdl-textfield__input" id="location">
              <option>[[user.profile.location]]</option>
              <option value="Hyderabad / Secundrabad">Hyderabad / Secundrabad</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="Pune">Pune</option>
              <option value="Noida">Noida</option>
              <option value="Mumbai">Mumbai</option>
            </select>
            <label class="mdl-textfield__label floating-label" for="location">Select Location</label>
          </div>
          </div>

          <!-- Experience in years -->
          <div class="mdl-cell mdl-cell--3-col">
            <paper-input label="Experience in years" value="[[user.profile.experience.years]]" name="experienceInYears" id="expinyr" required auto-validate error-message="Please fill experience" pattern="[0-9]*"></paper-input>
          </div>
          <div class="mdl-cell mdl-cell--3-col">
            <paper-input label="Experience in months" value="[[user.profile.experience.months]]" name="experienceInMonths" id="expinmnth" required auto-validate error-message="Please fill experience" pattern="[0-9]*"></paper-input>
          </div>
          <div class="mdl-cell mdl-cell--3-col">
            <paper-input label="Salary in lakhs" value="[[user.profile.salary.lakhs]]" name="salaryinlakhs" id="slrylkh" required auto-validate error-message="Please fill salary field" pattern="[0-9]*"></paper-input>
          </div>          
          <div class="mdl-cell mdl-cell--3-col">
            <paper-input label="Salary in thousand" value="[[user.profile.salary.thousand]]" name="salaryinthousand" id="slrythsd" required auto-validate error-message="Please fill salary field" pattern="[0-9]*"></paper-input>
          </div>
          <div class="mdl-cell mdl-cell--6-col">
            <paper-input label="Enter phone number" value="[[user.profile.mobile]]" name="phone" id="phone" required  auto-validate pattern="[0-9]*" error-message="Please fill phone number" maxlength="10"></paper-input>
          </div>
          <div class="mdl-cell mdl-cell--6-col">
            <paper-input type="email" label="Enter email" value="[[user.profile.mail]]" name="email" id="email" required auto-validate error-message="Please fill email"></paper-input>
          </div>  
        </div>                    
      </form>
    </iron-form>
  </div>

  <!-- About Me Section -->
  <div class="card">
  <iron-form>
    <form is = "iron-form" id = "aboutform" method = "post" action = "/form/handler" name="aboutform">
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--12-col">
          <p class="profile-title">About Me </p>
        </div> 
        <div class="mdl-cell mdl-cell--12-col">
          <textarea label="aboutme" value="[[user.profile.aboutme]]" name="aboutme" id="aboutme" required auto-validate error-message="About Me is a mandatory field"></textarea>
        </div>
      </div>                    
    </form>
  </iron-form>
</div>

<!-- Languages Section -->
<div class="card">
<iron-form>
  <form is = "iron-form" id = "languageform" method = "post" action = "/form/handler" name="languageform">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <p class="profile-title">Professional Skills </p>
      </div>
    </div>
      <template is="dom-repeat" items="{{professionalskills}}" id="skills" > 
        <div class="item">
          <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--6-col">
              <paper-input label="Language" value="[[item.lang]]" name="languagename" id="lang-[[index]]" required auto-validate error-message="Language is mandatory"></paper-input>
            </div>
            <div class="mdl-cell mdl-cell--6-col">
              <paper-input label="Rating outof 100" value="[[item.rating]]" name="rating" id="rating-[[index]]" required auto-validate error-message="Rating is mandatory"></paper-input>
            </div>
          </div>
      </template>
    </div>                    
  </form>
</iron-form>
</div>


<!-- Work Experience -->
<div class="card">
<iron-form>
  <form is = "iron-form" id="workexp" method = "post" action = "/form/handler" name="workexp">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <p class="profile-title">Work Experience </p>
      </div>
     
      <div class="mdl-cell mdl-cell--12-col">
        <textarea label="work experience" value="[[user.profile.workexperience]]" name="work experience" id="workexperience" required auto-validate error-message="Work Experience is a mandatory field"></textarea>
      </div>
    </div>                    
  </form>
</iron-form>
</div>

<!-- Education -->
<!-- Languages Section -->
<div class="card">
<iron-form>
  <form is = "iron-form" id = "educationform" method = "post" action = "/form/handler" name="educationform">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <p class="profile-title">Education</p>
      </div>
    </div>
      <template is="dom-repeat" items="{{user.profile.education}}" id="educationlist" > 
        <div class="item">
          <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--3-col mdl-cell--3-col-phone">
              <paper-input label="Education" value="[[item.education]]" name="education" id="education-[[index]]" required auto-validate error-message="Edcuation is a mandatory"></paper-input>
            </div>
            <div class="mdl-cell mdl-cell--3-col mdl-cell--3-col-phone">
              <paper-input label="Year of Passing" value="[[item.yearofpassing]]" name="yrofpassing" id="yrofpassing-[[index]]" required auto-validate error-message="Year of passing is a mandatory"></paper-input>
            </div>
            <div class="mdl-cell mdl-cell--3-col mdl-cell--3-col-phone">
            <paper-input label="Medium" value="[[item.medium]]" name="medium" id="medium-[[index]]" required auto-validate error-message="Medium is a mandatory"></paper-input>
          </div>
          <div class="mdl-cell mdl-cell--3-col mdl-cell--3-col-phone">
            <paper-input label="Board" value="[[item.board]]" name="borad" id="borad-[[index]]" required auto-validate error-message="Board is a mandatory"></paper-input>
          </div>
          </div>
      </template>
    </div>  
    
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col center-align">
         <input type="submit" value="Update Profile" on-click="updateProfile" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect btn btn-middle">
      </div>
    </div>

  </form>
</iron-form>
</div>
`;
  }

  updateProfile(){
    var profile =  {
      "name": this.$.name.value,
      "location": this.$.location.value,
      "experience": {
          "years" : this.$.expinyr.value,
          "months": this.$.expinmnth.value
      },
      "salary":{
          "lakhs":this.$.slrylkh.value,
          "thousand":this.$.slrythsd.value
      },
      "mobile":this.$.phone.value,
      "mail":this.$.email.value,
      "aboutme": this.$.aboutme.value,
      "workexperience":this.$.workexperience.value,
    }

    //Education functionality
     var educations = [];
     for(var i=0;i<=2;i++) {
      var education = this.shadowRoot.querySelector('#education-'+i).value;
      var yrofpassing = this.shadowRoot.querySelector('#yrofpassing-'+i).value;
      var medium = this.shadowRoot.querySelector('#medium-'+i).value;
      var board = this.shadowRoot.querySelector('#borad-'+i).value;
      var obj = { education:education, yearofpassing: yrofpassing, medium: medium, board: board }
      educations.push(obj)
     }

     //Professionalskills functionality
     var professionalskills = [];
     for(var i=0;i<=5;i++) {
      var language = this.shadowRoot.querySelector('#lang-'+i).value;
      var rating = this.shadowRoot.querySelector('#rating-'+i).value;
      var obj = { lang:language, rating: rating }
      professionalskills.push(obj)
     }

     profile["education"] = educations;
     profile["professionalskills"] = professionalskills;
     console.log('Edit Profile : ', profile);
     window.localStorage.setItem('editProfile',JSON.stringify(profile));
     window.location.href = "/profile";
  }
}

window.customElements.define("edit-profile", EditProfile);
