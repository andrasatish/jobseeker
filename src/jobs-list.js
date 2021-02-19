import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-form/iron-form.js';
import './style-element.js';

class JobsList extends PolymerElement {

    static get template() {
            return html `
      <style include="style-element">
      
      </style>
      <h1>Jobs-list</h1>
    `;
        }
}


window.customElements.define('jobs-list', JobsList);