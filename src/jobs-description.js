import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-button/paper-button.js';
import './style-element.js';

class JobDescritpion extends PolymerElement {
  static get properties(){
    return {
      selectedJob: {
        type: Object,
        value: function(){
          return JSON.parse(window.localStorage.getItem("selectedJob"));
        }
      }
    }
  }

  static get template() {
    return html `
    <link rel="stylesheet" href="/node_modules/material-design-lite/material.min.css">
    <script src="/node_modules/material-design-lite/material.min.js"></script>
    <style include="shared-styles">
      .job-card {
        width:100%;
        margin:10px;
      }
      .mdl-card{
        width:100%!important;
      }
      .bordered{
        border-top:1px solid black;
      }
      .btn-job{
        padding: 5px 25px;
        border: none;
        border-radius: 5px;
        margin: 5px;
        background: royalblue;
        color: white;
        width:100px!important;
      }
      .para-item{
        margin-bottom:0!important;
        margin:0 0 0 20px;
        font-size:15px!important;
      }
    </style>
    <div class="job-card">
          <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="demo-card-wide mdl-card">
              <div class="mdl-card__title">
                <h2 class="mdl-card__title-text">{{selectedJob.jobProfile}}</h2>
              </div>
              <div class="mdl-card__supporting-text">
                <p>{{selectedJob.company}}</p> 
                <ul class="ul-styles clear-float">
                  <li class="li-item float-left"><iron-icon icon="work" class="icon-color iron-icon-size"></iron-icon> {{selectedJob.experience}}</li>
                  <li class="li-item"><iron-icon icon="room" class="icon-color iron-icon-size"></iron-icon> {{selectedJob.location}}</li>
                </ul> 
                <p><iron-icon icon="assignment" class="icon-color iron-icon-size"></iron-icon> {{selectedJob.technologies}}</p>
                <div class="clear-float">
                  <p class="float-left"><iron-icon icon="folder" class="icon-color iron-icon-size"></iron-icon> {{selectedJob.salary}}</p>
                  <input id="saveJob" type="submit" value="SAVE" on-click="saveJob" class="btn-job float-right">
                  <input id="applyJob" type="submit" value="APPLY" on-click="applyJob" class="btn-job float-right">
                </div>
                <div class="card-footer clear-float bordered">
                  <p class="mt-5"><iron-icon icon="query-builder" class="icon-color iron-icon-size-custom"></iron-icon> Posted: <b>{{selectedJob.posted}}<b> &nbsp;
                   <span style="font-weight:normal">Job Applicants:</span> <b>{{selectedJob.jobApplicants}}<b></p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="job-card my-10">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <div class="demo-card-wide mdl-card">
            <div class="m-20">
                <p><strong>Job Highlights</strong></p>
                <template is="dom-repeat" items="{{selectedJob.description}}" id="desc"> 
                <div class="item"><p class="para-item">[[item]]</p></div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }

  applyJob() {
    window.alert('your selected job is applied successfully!')
  }
  saveJob() {
    window.alert('your selected job is saved successfully!')
  }
}


window.customElements.define('job-description', JobDescritpion);