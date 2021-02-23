import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-form/iron-form.js';
import './style-element.js';

class JobsList extends PolymerElement {

  static get properties(){
    return {
      jobs: {
        type : Array,
        value : [
          {
            jobId : 101,
            jobProfile : "Sr. Software Engineer - JavaFS Developer",
            company : "OpenText",
            experience : "5-7 Yrs",
            location : "Hyderabad",
            technologies : "JavaCloud, DevOps, Angularjs, Node.js, CSS, Javascript",
            salary : "Not disclosed",
            posted : "3 days ago"
          },
          {
            jobId : 102,
            jobProfile : "Lead - Senior Developer",
            company : "Skill 2 Source Consulting LLP",
            experience : "5-7 Yrs",
            location : "Hyderabad(Gachibowli)",
            technologies : "Angularjs, CSSNode, JsHTMLMern, StackCommunication",
            salary : "9,00,000 - 14,00,000 PA.",
            posted : "1 days ago"
          },
          {
            jobId : 103,
            jobProfile : "Senior Front End Developer - AngularJS/2",
            company : "Hungry Bird Consulting Services",
            experience : "5-10 Yrs",
            location : "Hyderabad",
            technologies : "Javascript, RESTful API, AngularJS, CSS, jQueryEmber, jsJavascript",
            salary : "Not disclosed",
            posted : "5 days ago"
          },
          {
            jobId : 104,
            jobProfile : "Lead UI Developer - HTML5/CSS3/Angular 7+",
            company : "Intileo Technologies",
            experience : "3-6 Yrs",
            location : "Bengaluru, Hyderabad",
            technologies : "Javascript, Angular, 8TypeScript, AngularJS, Angular 7, jQueryUI",
            salary : "Not disclosed",
            posted : "Today"
          },
          {
            jobId : 105,
            jobProfile : "React JS Developer",
            company : "SCreatives Software Services Private Limited",
            experience : "4-8 Yrs",
            location : "Hyderabad",
            technologies : "Testing, React js, Node js, CSS, angular, CSS, jQuery",
            salary : "Not disclosed",
            posted : "Just now"
          },
          {
            jobId : 106,
            jobProfile : "Polymer Developer",
            company : "Arck IT Services",
            experience : "5-9 Yrs",
            location : "Hyderabad(Gachibowli)",
            technologies : "Cloud, HTML, CSS, Javascript, AWSAzure, Polymer",
            salary : "Not disclosed",
            posted : "Today"
          },
          {
            jobId : 107,
            jobProfile : "Node.js Developer - Express.js/javascript",
            company : "TrueView HR Consulting Pvt. Ltd",
            experience : "4-9 Yrs",
            location : "Bangaluru",
            technologies : "Javascript, rest, node js",
            salary : "9L",
            posted : "1 days ago"
          },
          {
            jobId : 108,
            jobProfile : "Lead UI Developer",
            company : "Intileo Technologies",
            experience : "3-6 Yrs",
            location : "Bengaluru, Hyderabad",
            technologies : "Javascript, Angular, 8TypeScript, AngularJS, Angular 7, jQueryUI",
            salary : "Not disclosed",
            posted : "Today"
          }
        ]
      }
    }
  }
  static get template() {
    return html `
    <link rel="stylesheet" href="/node_modules/material-design-lite/material.min.css">
    <script src="/node_modules/material-design-lite/material.min.js"></script>
      <style include="shared-styles">
        .cards-container {
          margin:5px;
        }
        .mdl-card{
          margin:5px!important;
          width:95%!important;
          border-radius:10px;
        }
        .iron-icon-size{
          width: 30px;
          height: 20px;
        }
        .iron-icon-size-custom{
          width:20px;
          height:18px;
        }
        .pointing-cursor{
          cursor: pointer;
        }
      </style>

      <!-- Professional Skills -->
      <div class="row cards-container clear-float">   
        <template is="dom-repeat" items="{{jobs}}" id="jobs" > 
          <div class="item">
            <div class="col-md-6 col-sm-12 pointing-cursor float-left" on-click="selectedJob">
              <div class="demo-card-wide mdl-card">
              <div class="mdl-card__title">
                <h2 class="mdl-card__title-text">{{item.jobProfile}}</h2>
              </div>
              <div class="mdl-card__supporting-text">
                <p>{{item.company}}</p> 
                <ul class="ul-styles clear-float">
                  <li class="li-item float-left"><iron-icon icon="work" class="icon-color iron-icon-size"></iron-icon> {{item.experience}}</li>
                  <li class="li-item"><iron-icon icon="room" class="icon-color iron-icon-size"></iron-icon> {{item.location}}</li>
                </ul> 
                <p><iron-icon icon="assignment" class="icon-color iron-icon-size"></iron-icon> {{item.technologies}}</p>
                <div class="clear-float">
                  <p class="float-left"><iron-icon icon="folder" class="icon-color iron-icon-size"></iron-icon> {{item.salary}}</p>
                  <p class="float-right"><iron-icon icon="query-builder" class="icon-color iron-icon-size-custom"></iron-icon> {{item.posted}}</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </template>
      </div>
    `;
   }

   selectedJob(e) {
      var item = e.model.__data.item;
      console.log(item.jobId);
      window.localStorage.setItem('jobsList',JSON.stringify(this.jobs));
      window.location.href = "/jobs-description";
   }
}


window.customElements.define('jobs-list', JobsList);