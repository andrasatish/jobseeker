import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-form/iron-form.js';
import './style-element.js';
import './shared-styles.js';

class EditProfile extends PolymerElement {

  static get properties() {
    return {
        user: {
            type: Object,
            value: function() {
                // Get array data from Local Storage 
                var profile = JSON.parse(window.localStorage.getItem('profileDetails'));
                return {
                    profile
                };
            }
        }
    };
}

  static get template() {
    return html `
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
  </style>

  <div class="card">
    <h1>Edit Profile Details</h1>
  </div>

  <!-- Edit Form -->
  <div class="card">
    <iron-form>
      <form is = "iron-form" id = "empforms" method = "post" action = "/form/handler" name="empforms">
        <div class="mdl-grid">
  
        <div class="mdl-cell mdl-cell--12-col">
           <p class="profile-title">Personal Details </p>
        </div>

          <div class="mdl-cell mdl-cell--6-col">
            <paper-input label="Enter Name" value="[[user.profile.name]]" name="name" id="name" required auto-validate error-message="Name is mandatory"></paper-input>
          </div>

          <div class="mdl-cell mdl-cell--6-col" required>
          <!-- Simple Select -->
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
            <paper-input label="Enter phone number" value="[[user.profile.mobile]]" name="phone" id="phone" required  auto-validate pattern="[0-9]*" error-message="Phone number must be filled out" maxlength="10"></paper-input>
          </div>

          <div class="mdl-cell mdl-cell--6-col">
            <paper-input type="email" label="Enter email" value="[[user.profile.mail]]" name="email" id="email" required auto-validate error-message="Email must be filled out"></paper-input>
          </div>
  
        <!--<div class="mdl-cell mdl-cell--12-col">
            <paper-input type="email" label="Enter email" value="[[user.profile.mail]]" name="email" id="email" required auto-validate error-message="Email must be filled out"></paper-input>
          </div>-->
        </div>                    
      </form>
    </iron-form>
  </div>

  <div class="card">
  <iron-form>
    <form is = "iron-form" id = "empforms" method = "post" action = "/form/handler" name="empforms">
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--12-col">
          <p class="profile-title">About Me </p>
        </div> 
        <div class="mdl-cell mdl-cell--12-col">
          <textarea label="about-me" value="[[user.profile.aboutme]]" name="about-me" id="about-me" required auto-validate error-message="About Me is a mandatory field"></textarea>
        </div>
      </div>                    
    </form>
  </iron-form>
</div>



<div class="card">
<iron-form>
  <form is = "iron-form" id = "empforms" method = "post" action = "/form/handler" name="empforms">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <p class="profile-title">Work Experience </p>
      </div>
     
      <div class="mdl-cell mdl-cell--12-col">
        <textarea label="workexperience" value="[[user.profile.workexperience]]" name="workexperience" id="workexperience" required auto-validate error-message="Work Experience is a mandatory field"></textarea>
      </div>
    </div>                    
  </form>
</iron-form>
</div>

<div class="card">
<iron-form>
  <form is = "iron-form" id = "empforms" method = "post" action = "/form/handler" name="empforms">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <p class="profile-title">Professional Skills </p>
      </div>
     
      <div class="mdl-cell mdl-cell--6-col">
        <paper-input label="lang1" value="[[user.profile]]" name="lang1" id="lang1" required auto-validate error-message="Language is mandatory"></paper-input>
      </div>
      <div class="mdl-cell mdl-cell--6-col">
        <paper-input label="rating1" value="[[user.profile.professionalskills[0].rating]]" name="rating1" id="rating1" required auto-validate error-message="Rating is mandatory" pattern="[0-9]*"></paper-input>
      </div>
    </div>                    
  </form>
</iron-form>
</div>
`;
}  
}


window.customElements.define('edit-profile', EditProfile);