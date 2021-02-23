import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
    h1{
      font-size: 22px !important;
    }

    app-drawer-layout:not([narrow]) [drawer-toggle] {
      display: none;
    }

    app-header {
      color: #fff;
      background-color: var(--app-primary-color);
    }
    @media only screen and (min-width: 640px) {
        app-header{
            display: none;
        }
    }

    app-header paper-icon-button {
      --paper-icon-button-ink-color: white;
    }
    .drawer-list {
      margin: 0 20px;
    }

    .drawer-list a {
      display: block;
      text-decoration: none;
      color: var(--app-secondary-color);
      line-height: 40px;
      
    }

    .drawer-list a.iron-selected {
      color: #fff;
      font-weight: bold;
    }
    app-drawer {
        --app-drawer-scrim-background: rgba(0, 0, 100, 0.8);

        --app-drawer-content-container: {
          background-color: #673AB7;
        }
        
      }
      .logo img{
        margin-top:20px;
    }
    .mobile-logo img{
      margin-top:7px;
  }
    
    .drawer-list a.iron-selected {
      background: #8d5ce4;
  }
  .drawer-list a {
    color: #fff;
    padding: 11px 27px;
    border-bottom: 1px solid #5c30ab;
    font-size: 18px;
    font-weight: normal !important;
  }
    .drawer-list a:hover {
      background: #8d5ce4;
  }
  footer.card {
    margin: 0px 34px 0px;
    padding: 1px 28px;
    color: #757575;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }
  footer p a{
    text-decoration: none;

  }
    .clr1, .clr2, .clr3, .clr4{
      border-radius: 5px;
      color: #fff;
      display: flex;
      justify-content: space-between;
      padding: 15px;
      margin-bottom: 10px;
  }
  .clr1 p, .clr2 p, .clr3 p, .clr4 p{
    margin: 7px 0px 0px !important;
}
  .clr1 span, .clr2 span, .clr3 span, .clr4 span {
      font-size: 25px;
  }
  .clr1{
      background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%) !important
  }
  .clr2{
      background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%) !important;
  }
  .clr3{
      background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%) !important;
  }
  .clr4{
      background-image: linear-gradient(to right, #434343 0%, black 100%) !important;
  }
      .card {
        margin: 24px;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

      .circle {
        display: inline-block;
        width: 64px;
        height: 64px;
        text-align: center;
        color: #555;
        border-radius: 50%;
        background: #ddd;
        font-size: 30px;
        line-height: 64px;
      }

      h1 {
        margin: 16px 0 !important;
        color: #212121;
        line-height: 0 !important;
        font-weight: 400 !important;
        font-size: 22px !important;
      }
      .mdl-data-table td, .mdl-data-table th {
        padding: 12px 14px !important;
        border: 1px solid #ccc !important;
      }
      .mdl-data-table th {
        background: #343a40;
        color: #fff !important;
      }
      
      .table-responsive {
        min-height: .01%;
        overflow-x: auto;
        width: 100%;
        display: grid;
    }
    @media screen and (max-width: 767px) {
        .table-responsive {
            width: 100%;
            margin-bottom: 15px;
            overflow-y: hidden;
            -ms-overflow-style: -ms-autohiding-scrollbar;
            border: 1px solid #ddd;
        }
        .table-responsive > .table {
            margin-bottom: 0;
        }
        .table-responsive > .table > thead > tr > th,
        .table-responsive > .table > tbody > tr > th,
        .table-responsive > .table > tfoot > tr > th,
        .table-responsive > .table > thead > tr > td,
        .table-responsive > .table > tbody > tr > td,
        .table-responsive > .table > tfoot > tr > td {
            white-space: nowrap;
        }
        .table-responsive > .table-bordered {
            border: 0;
        }
        .table-responsive > .table-bordered > thead > tr > th:first-child,
        .table-responsive > .table-bordered > tbody > tr > th:first-child,
        .table-responsive > .table-bordered > tfoot > tr > th:first-child,
        .table-responsive > .table-bordered > thead > tr > td:first-child,
        .table-responsive > .table-bordered > tbody > tr > td:first-child,
        .table-responsive > .table-bordered > tfoot > tr > td:first-child {
            border-left: 0;
        }
        .table-responsive > .table-bordered > thead > tr > th:last-child,
        .table-responsive > .table-bordered > tbody > tr > th:last-child,
        .table-responsive > .table-bordered > tfoot > tr > th:last-child,
        .table-responsive > .table-bordered > thead > tr > td:last-child,
        .table-responsive > .table-bordered > tbody > tr > td:last-child,
        .table-responsive > .table-bordered > tfoot > tr > td:last-child {
            border-right: 0;
        }
        .table-responsive > .table-bordered > tbody > tr:last-child > th,
        .table-responsive > .table-bordered > tfoot > tr:last-child > th,
        .table-responsive > .table-bordered > tbody > tr:last-child > td,
        .table-responsive > .table-bordered > tfoot > tr:last-child > td {
            border-bottom: 0;
        }
    }
    input{
      padding: 11px 5px;
      border-radius: 5px;
      width: 95%;
      border: 1px solid #ccc;
      outline: none;
    }
    .btn {
      width: 200px;
    }
    .btn:hover {
      background: #673ab7;
      color: #fff;
      display: block;
      text-align: center;
    }
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
    .filled-btn{
      margin: 0 auto;
      display: block;
      background: royalblue;
      color: white;
      padding: 10px 15px;
      border-radius: 5px;
      outline: none;
      border: none;
    }
    .edit-btn{
      background: #b17e64;
      float: right;
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
  .ul-styles{
    padding:0;
    list-style:none;
  }
  .li-item{
    
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
      .file-upload-button {
        background-color: #ff5252;
        border-radius: 5px;
        height: 3rem;
        overflow: hidden;
        position: relative;
        width: 10rem;  
      }
      .file-info {
          color: #999;
          font-family: Lato;
          margin-left: 0.5rem;
      }
      input[type="file"] {
        font-size: 100px;
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
      }          
    }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);