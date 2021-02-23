import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './shared-styles.js';
import './my-icons.js';

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);


class LandingPage extends PolymerElement {
    static get template() {
        return html `
      <style include="shared-styles">
        :host {
          --app-primary-color: #673AB7;
          --app-secondary-color: black;
          display: block;
        }
      </style>

      <!--- Applocation component start -->
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <!--- Applocation component end -->

      <!--- Approute component start -->
      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
      <!--- Applocation component end -->

      <!--- Appdrawer Layout component start -->
      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
         
          <!-- Naviigation Start -->
          <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
            
              <app-toolbar><div class="logo"><img src="images/logo.jpg" width="200" alt="Job Seeker" loading="lazy"></div>
              </app-toolbar>

              <!-- Iron Selecctor Start -->
              <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation" role="Navigation" tabindex="0">
                <a name="profile" role="Profile" href="[[rootPath]]profile"> Profile</a>
                <a name="jobs-list" role="Jobs List" href="[[rootPath]]jobs-list"> Jobs List</a>
                <a name="job-description" role="Job Description" href="[[rootPath]]job-description"> Job Description</a>
                <a name="edit-profile" role="Edit Profile" href="[[rootPath]]edit-profile"> Edit Profile</a>
                <a name="login" href="[[rootPath]]login" role="Logout">Logout</a>
              </iron-selector>
              <!-- Iron Selecctor End -->

          </app-drawer>
          <!-- Nvaigation End -->

          <!-- Main content Start -->
          <app-header-layout has-scrolling-region="">
          
                <!-- App Header Start -->
                <app-header id="appheader" slot="header" condenses="" reveals="" effects="waterfall">
                  <app-toolbar>
                    <paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
                    <div main-title="" class="mobile-logo" role="Mobile Logo"><img src="images/logo.jpg" width="150" alt="JobSeeker" loading="lazy"></div>
                  </app-toolbar>
                </app-header>
                <!-- App Header End -->

                <!-- Iron Pages Start -->
                <iron-pages selected="[[page]]" attr-for-selected="name" role="main page">
                  <login-app name="login"></login-app>
                  <profile-app name="profile"></profile-app>
                  <jobs-list name="jobs-list"></jobs-list>
                  <job-description name="job-description"></job-description>
                  <edit-profile name="edit-profile"></edit-profile>
                  <not-found404 name="not-found404"></not-found404>
                </iron-pages>
                <!-- Iron Pages End -->
          </app-header-layout>
          <!-- Main content End -->
      </app-drawer-layout>
    `;
    }

    static get properties() {
        return {
            page: {
                type: String,
                reflectToAttribute: true,
                observer: '_pageChanged' // _pageChanged to import the page.
            },
            routeData: Object,
            subroute: Object
        };
    }

    static get observers() {
        return [
            '_routePageChanged(routeData.page)' //_routePageChanged to check the route data changes
        ];
    }

    _routePageChanged(page) {
        // Show the corresponding page according to the route.
        //
        // If no page was found in the route data, page will be an empty string.
        // Show 'login' in that case. And if the page doesn't exist, show 'view404'.

        if (!page) {
            this.page = 'login';
        } else if (['login', 'profile', 'jobs-list', 'job-description', 'edit-profile', 'logout'].indexOf(page) !== -1) {
            this.page = page;
        } else {
            this.page = 'not-found404';
        }

        if (!this.$.drawer.persistent) {
            this.$.drawer.close();
        }

        if (page = 'login') {} else {
            this.$.drawer.style.display = "block";
        }
    }

    _pageChanged(page) {
        // Import the page component on demand.
        //
        // Note: `polymer build` doesn't like string concatenation in the import
        // statement, so break it up.
        switch (page) {

            case 'login':
                import ('./login-app.js');
                this.$.drawer.style.display = "none";
                this.$.appheader.style.display = "none";
                break;

            case 'profile':
                import ('./profile-app.js');
                break;

            case 'jobs-list':
                import ('./jobs-list.js');
                break;

            case 'job-description':
                import ('./jobs-description.js');
                break;

            case 'edit-profile':
                import ('./edit-profile.js');
                break;
        }
    }

}

window.customElements.define('landing-page', LandingPage);