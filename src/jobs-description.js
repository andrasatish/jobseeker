import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-form/iron-form.js';
import './style-element.js';

class JobDescription extends PolymerElement {

    static get template() {
            return html `
      <style include="style-element">
      
      </style>
      <h1>Job Description</h1>
    `;
        }
}


window.customElements.define('job-description', JobDescription);