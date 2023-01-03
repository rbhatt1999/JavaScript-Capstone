"use strict";
(self["webpackChunkjavascript_capstone"] = self["webpackChunkjavascript_capstone"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Rubik:wght@500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  vertical-align: baseline;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nblockquote,\r\nq {\r\n  quotes: none;\r\n}\r\n\r\nblockquote::before,\r\nblockquote::after,\r\nq::before,\r\nq::after {\r\n  content: \"\";\r\n  content: none;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  -webkit-box-sizing: border-box !important;\r\n  -moz-box-sizing: border-box !important;\r\n  -ms-box-sizing: border-box !important;\r\n  box-sizing: border-box !important;\r\n}\r\n\r\nbody {\r\n  background-color: #fdf2e9;\r\n  font-family: \"Rubik\", sans-serif;\r\n  font-weight: bolder;\r\n  letter-spacing: 0.2em;\r\n  color: #6c757d;\r\n  line-height: 1;\r\n}\r\n\r\n.nav {\r\n  margin-top: 1.5rem;\r\n}\r\n\r\n.nav-items {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.nav-items li {\r\n  list-style: none;\r\n  margin-left: 5%;\r\n  transition: all 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-items li:hover {\r\n  color: #e67e22;\r\n}\r\n\r\n.logo {\r\n  border-radius: 50%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.logo-title {\r\n  font-size: 20px;\r\n}\r\n\r\n.popup-food img {\r\n  width: 70%;\r\n  height: 300px;\r\n  margin-left: 15%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.meal-title {\r\n  text-align: center;\r\n  margin: 1rem;\r\n}\r\n\r\n.description {\r\n  letter-spacing: 0.2em;\r\n}\r\n\r\n.comment-title {\r\n  text-align: center;\r\n  margin: 0.8rem;\r\n}\r\n\r\n.display-comments {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.add-comm {\r\n  text-align: center;\r\n  margin: 1rem;\r\n}\r\n\r\n.form {\r\n  width: 300px;\r\n  margin-left: 10%;\r\n}\r\n\r\n.form .name {\r\n  padding: 0.5rem;\r\n  width: 70%;\r\n  margin: 1rem 0;\r\n  border: 2px solid black;\r\n  font-weight: bolder;\r\n}\r\n\r\n.form .insights {\r\n  padding-bottom: 20%;\r\n  padding-top: 0.8rem;\r\n  padding-left: 0.5rem;\r\n  margin-bottom: 1rem;\r\n  border: 2px solid black;\r\n  font-weight: bolder;\r\n}\r\n\r\n.cards {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 30px;\r\n  margin: 200px;\r\n}\r\n\r\n.social-links {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: center;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.icon {\r\n  border-radius: 50%;\r\n  margin-left: 2rem;\r\n}\r\n\r\n.footer {\r\n  bottom: 1rem;\r\n  width: 100%;\r\n  margin: 1rem auto;\r\n  border-top: 1px solid rgba(0, 0, 0, 0.5);\r\n  box-shadow: inset 0 7px 3px -3px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.licence {\r\n  text-align: center;\r\n  padding: 1rem;\r\n  color: rgba(0, 0, 0, 0.5);\r\n  font-weight: bolder;\r\n}\r\n\r\n.spinner {\r\n  padding: 20px;\r\n  background-color: white;\r\n  color: black;\r\n  border-radius: 10px;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n.popup-container {\r\n  position: fixed;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  margin-top: -23px;\r\n  backdrop-filter: blur(10px);\r\n  z-index: 999;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.popup {\r\n  height: 80%;\r\n  width: 90%;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n  background-color: #f4f4f4;\r\n}\r\n\r\n.popup-header {\r\n  --stripe: #cfd8dc;\r\n  --bg: #e1e1e1;\r\n\r\n  background: linear-gradient(135deg, #e1e1e1 25%, transparent 25%) -50px 0,\r\n    linear-gradient(225deg, #e1e1e1 25%, transparent 25%) -50px 0,\r\n    linear-gradient(315deg, #e1e1e1 25%, transparent 25%),\r\n    linear-gradient(45deg, #e1e1e1 25%, transparent 25%);\r\n  background-color: var(--stripe);\r\n  display: flex;\r\n  background-size: cover;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n  height: 300px;\r\n  background-repeat: no-repeat;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.popup-header > .img-poppop {\r\n  position: absolute;\r\n  bottom: 0;\r\n  top: 0;\r\n  box-shadow: inset 0 0 10px 20px white;\r\n}\r\n\r\n.card {\r\n  margin: 10px;\r\n  background-color: #fff;\r\n  border-radius: 10px;\r\n  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);\r\n  overflow: hidden;\r\n  width: 300px;\r\n  transition: all 0.4s;\r\n}\r\n.card:hover {\r\n  transform: translateY(-1.2rem);\r\n  box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.06);\r\n  background-color: #e67e22;\r\n  color: #e6e6e6;\r\n}\r\n.meal-description {\r\n  font-size: 13px;\r\n  font-weight: 500;\r\n}\r\n.liked {\r\n  color: red;\r\n}\r\n\r\n.img-popcontainer {\r\n  height: 230px;\r\n  width: 200px;\r\n  overflow: hidden;\r\n  border-radius: 0 0 20px 20px;\r\n  display: inline-block;\r\n}\r\n\r\n.single-comment {\r\n  margin: 10px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 6px;\r\n  align-items: center;\r\n}\r\n\r\n.comment-list {\r\n  height: 100%;\r\n}\r\n\r\nb {\r\n  font-size: 12px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.single-product-example {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.example-products {\r\n  height: 100px;\r\n  width: 100px;\r\n}\r\n\r\n.user {\r\n  height: 50px;\r\n  width: 50px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.img-popcontainer img {\r\n  transform: skew(0deg, -13deg);\r\n  height: 250px;\r\n  margin: -35px 0 0 -70px;\r\n}\r\n\r\n.imgex {\r\n  display: inline-block;\r\n  border-radius: 20px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  font-size: 0;\r\n  margin: 30px 0 0 0;\r\n  background: #c8c2c2;\r\n  height: 150px;\r\n  width: 200px;\r\n}\r\n\r\n.title-example {\r\n  font-size: 12px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.img-container {\r\n  transition: transform 0.5s ease;\r\n  height: 230px;\r\n  width: 200px;\r\n  /* overflow: hidden; */\r\n  border-radius: 0 0 20px 20px;\r\n  display: inline-block;\r\n}\r\n.card-header img {\r\n  width: 100%;\r\n  height: 200px;\r\n  object-fit: cover;\r\n}\r\n\r\n/* ` */\r\n\r\n.img {\r\n  width: 100%;\r\n  height: 200px;\r\n  object-fit: cover;\r\n}\r\n\r\n.img-container img:hover {\r\n  transform: scale(0.8);\r\n}\r\n.tag {\r\n  background: #e67e22;\r\n  border-radius: 50px;\r\n  font-size: 12px;\r\n  margin: 0;\r\n  color: #fff;\r\n  padding: 2px 10px;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n}\r\n\r\n.title-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 20px;\r\n  min-height: 250px;\r\n}\r\n\r\n.title-container h3 {\r\n  margin: 20px 0 10px 0;\r\n  color: #fff;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n}\r\n\r\n.fa-heart:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-comment:hover {\r\n  color: rgb(0, 89, 232);\r\n  cursor: pointer;\r\n}\r\n\r\n.comment {\r\n  padding: 10px;\r\n  margin: 20px;\r\n  background-color: #b1a9a3;\r\n  border: 0;\r\n  border-radius: 5%;\r\n  font-size: 15px;\r\n  color: #fff;\r\n}\r\n\r\n.interactions {\r\n  margin: 20px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n}\r\n\r\n.popup-details {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n}\r\n\r\n.details {\r\n  display: flex;\r\n  max-width: 70%;\r\n  flex-direction: column;\r\n}\r\n\r\n.closeBtn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 15px;\r\n  width: 80px;\r\n  margin-right: 70px;\r\n  margin-bottom: 40px;\r\n  align-self: flex-end;\r\n  background-color: rgba(255, 255, 255, 0.45);\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.details-text {\r\n  padding: 20px;\r\n  background-color: #cfcccc4f;\r\n  border-radius: 20px;\r\n  margin: 40px;\r\n}\r\n\r\n.images {\r\n  margin: 10px;\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.popup-comments {\r\n  width: 30%;\r\n}\r\n\r\n.container-comments {\r\n  width: 100%;\r\n  background-color: rgba(221, 218, 218, 0.453);\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nform {\r\n  margin: 10px;\r\n  display: flex;\r\n  gap: 5px;\r\n  flex-direction: column;\r\n}\r\n\r\n#name {\r\n  max-width: 50%;\r\n  padding: 12px 20px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#comment {\r\n  max-width: 80%;\r\n  padding: 12px 20px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  resize: none;\r\n}\r\n\r\n.submit {\r\n  width: 100px;\r\n  background-color: #4caf50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.submit:hover {\r\n  background-color: #45a049;\r\n}\r\n\r\n/* Sroll Bar */\r\n::-webkit-scrollbar {\r\n  width: 3px;\r\n  background: #b9b9b9;\r\n}\r\n\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 3px #c8c8c8;\r\n}\r\n\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  background: black;\r\n  border-radius: 3px;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.img-popholdpop > .imgex > img {\r\n  max-height: 200px;\r\n  max-width: 200px;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n  .popup {\r\n    max-height: 80%;\r\n    max-width: 100%;\r\n    overflow-y: scroll;\r\n    background-color: #f4f4f4;\r\n  }\r\n\r\n  .popup-details {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: column;\r\n    width: 100%;\r\n  }\r\n\r\n  .details {\r\n    display: flex;\r\n    max-width: 100%;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .images {\r\n    display: none;\r\n  }\r\n\r\n  .popup-comments {\r\n    width: 100%;\r\n  }\r\n\r\n  .closeBtn {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 15px;\r\n    width: 80px;\r\n    margin-right: 10px;\r\n    margin-bottom: 20px;\r\n    align-self: flex-end;\r\n    background-color: rgba(255, 255, 255, 0.45);\r\n    border-radius: 5px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Rubik:wght@500;600;700&display=swap\");\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  vertical-align: baseline;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nblockquote,\r\nq {\r\n  quotes: none;\r\n}\r\n\r\nblockquote::before,\r\nblockquote::after,\r\nq::before,\r\nq::after {\r\n  content: \"\";\r\n  content: none;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  -webkit-box-sizing: border-box !important;\r\n  -moz-box-sizing: border-box !important;\r\n  -ms-box-sizing: border-box !important;\r\n  box-sizing: border-box !important;\r\n}\r\n\r\nbody {\r\n  background-color: #fdf2e9;\r\n  font-family: \"Rubik\", sans-serif;\r\n  font-weight: bolder;\r\n  letter-spacing: 0.2em;\r\n  color: #6c757d;\r\n  line-height: 1;\r\n}\r\n\r\n.nav {\r\n  margin-top: 1.5rem;\r\n}\r\n\r\n.nav-items {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.nav-items li {\r\n  list-style: none;\r\n  margin-left: 5%;\r\n  transition: all 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-items li:hover {\r\n  color: #e67e22;\r\n}\r\n\r\n.logo {\r\n  border-radius: 50%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.logo-title {\r\n  font-size: 20px;\r\n}\r\n\r\n.popup-food img {\r\n  width: 70%;\r\n  height: 300px;\r\n  margin-left: 15%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.meal-title {\r\n  text-align: center;\r\n  margin: 1rem;\r\n}\r\n\r\n.description {\r\n  letter-spacing: 0.2em;\r\n}\r\n\r\n.comment-title {\r\n  text-align: center;\r\n  margin: 0.8rem;\r\n}\r\n\r\n.display-comments {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.add-comm {\r\n  text-align: center;\r\n  margin: 1rem;\r\n}\r\n\r\n.form {\r\n  width: 300px;\r\n  margin-left: 10%;\r\n}\r\n\r\n.form .name {\r\n  padding: 0.5rem;\r\n  width: 70%;\r\n  margin: 1rem 0;\r\n  border: 2px solid black;\r\n  font-weight: bolder;\r\n}\r\n\r\n.form .insights {\r\n  padding-bottom: 20%;\r\n  padding-top: 0.8rem;\r\n  padding-left: 0.5rem;\r\n  margin-bottom: 1rem;\r\n  border: 2px solid black;\r\n  font-weight: bolder;\r\n}\r\n\r\n.cards {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 30px;\r\n  margin: 200px;\r\n}\r\n\r\n.social-links {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: center;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.icon {\r\n  border-radius: 50%;\r\n  margin-left: 2rem;\r\n}\r\n\r\n.footer {\r\n  bottom: 1rem;\r\n  width: 100%;\r\n  margin: 1rem auto;\r\n  border-top: 1px solid rgba(0, 0, 0, 0.5);\r\n  box-shadow: inset 0 7px 3px -3px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.licence {\r\n  text-align: center;\r\n  padding: 1rem;\r\n  color: rgba(0, 0, 0, 0.5);\r\n  font-weight: bolder;\r\n}\r\n\r\n.spinner {\r\n  padding: 20px;\r\n  background-color: white;\r\n  color: black;\r\n  border-radius: 10px;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n.popup-container {\r\n  position: fixed;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  margin-top: -23px;\r\n  backdrop-filter: blur(10px);\r\n  z-index: 999;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.popup {\r\n  height: 80%;\r\n  width: 90%;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n  background-color: #f4f4f4;\r\n}\r\n\r\n.popup-header {\r\n  --stripe: #cfd8dc;\r\n  --bg: #e1e1e1;\r\n\r\n  background: linear-gradient(135deg, #e1e1e1 25%, transparent 25%) -50px 0,\r\n    linear-gradient(225deg, #e1e1e1 25%, transparent 25%) -50px 0,\r\n    linear-gradient(315deg, #e1e1e1 25%, transparent 25%),\r\n    linear-gradient(45deg, #e1e1e1 25%, transparent 25%);\r\n  background-color: var(--stripe);\r\n  display: flex;\r\n  background-size: cover;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n  height: 300px;\r\n  background-repeat: no-repeat;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.popup-header > .img-poppop {\r\n  position: absolute;\r\n  bottom: 0;\r\n  top: 0;\r\n  box-shadow: inset 0 0 10px 20px white;\r\n}\r\n\r\n.card {\r\n  margin: 10px;\r\n  background-color: #fff;\r\n  border-radius: 10px;\r\n  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);\r\n  overflow: hidden;\r\n  width: 300px;\r\n  transition: all 0.4s;\r\n}\r\n.card:hover {\r\n  transform: translateY(-1.2rem);\r\n  box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.06);\r\n  background-color: #e67e22;\r\n  color: #e6e6e6;\r\n}\r\n.meal-description {\r\n  font-size: 13px;\r\n  font-weight: 500;\r\n}\r\n.liked {\r\n  color: red;\r\n}\r\n\r\n.img-popcontainer {\r\n  height: 230px;\r\n  width: 200px;\r\n  overflow: hidden;\r\n  border-radius: 0 0 20px 20px;\r\n  display: inline-block;\r\n}\r\n\r\n.single-comment {\r\n  margin: 10px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 6px;\r\n  align-items: center;\r\n}\r\n\r\n.comment-list {\r\n  height: 100%;\r\n}\r\n\r\nb {\r\n  font-size: 12px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.single-product-example {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.example-products {\r\n  height: 100px;\r\n  width: 100px;\r\n}\r\n\r\n.user {\r\n  height: 50px;\r\n  width: 50px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.img-popcontainer img {\r\n  transform: skew(0deg, -13deg);\r\n  height: 250px;\r\n  margin: -35px 0 0 -70px;\r\n}\r\n\r\n.imgex {\r\n  display: inline-block;\r\n  border-radius: 20px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  font-size: 0;\r\n  margin: 30px 0 0 0;\r\n  background: #c8c2c2;\r\n  height: 150px;\r\n  width: 200px;\r\n}\r\n\r\n.title-example {\r\n  font-size: 12px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.img-container {\r\n  transition: transform 0.5s ease;\r\n  height: 230px;\r\n  width: 200px;\r\n  /* overflow: hidden; */\r\n  border-radius: 0 0 20px 20px;\r\n  display: inline-block;\r\n}\r\n.card-header img {\r\n  width: 100%;\r\n  height: 200px;\r\n  object-fit: cover;\r\n}\r\n\r\n/* ` */\r\n\r\n.img {\r\n  width: 100%;\r\n  height: 200px;\r\n  object-fit: cover;\r\n}\r\n\r\n.img-container img:hover {\r\n  transform: scale(0.8);\r\n}\r\n.tag {\r\n  background: #e67e22;\r\n  border-radius: 50px;\r\n  font-size: 12px;\r\n  margin: 0;\r\n  color: #fff;\r\n  padding: 2px 10px;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n}\r\n\r\n.title-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 20px;\r\n  min-height: 250px;\r\n}\r\n\r\n.title-container h3 {\r\n  margin: 20px 0 10px 0;\r\n  color: #fff;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n}\r\n\r\n.fa-heart:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-comment:hover {\r\n  color: rgb(0, 89, 232);\r\n  cursor: pointer;\r\n}\r\n\r\n.comment {\r\n  padding: 10px;\r\n  margin: 20px;\r\n  background-color: #b1a9a3;\r\n  border: 0;\r\n  border-radius: 5%;\r\n  font-size: 15px;\r\n  color: #fff;\r\n}\r\n\r\n.interactions {\r\n  margin: 20px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n}\r\n\r\n.popup-details {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n}\r\n\r\n.details {\r\n  display: flex;\r\n  max-width: 70%;\r\n  flex-direction: column;\r\n}\r\n\r\n.closeBtn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 15px;\r\n  width: 80px;\r\n  margin-right: 70px;\r\n  margin-bottom: 40px;\r\n  align-self: flex-end;\r\n  background-color: rgba(255, 255, 255, 0.45);\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.details-text {\r\n  padding: 20px;\r\n  background-color: #cfcccc4f;\r\n  border-radius: 20px;\r\n  margin: 40px;\r\n}\r\n\r\n.images {\r\n  margin: 10px;\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.popup-comments {\r\n  width: 30%;\r\n}\r\n\r\n.container-comments {\r\n  width: 100%;\r\n  background-color: rgba(221, 218, 218, 0.453);\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nform {\r\n  margin: 10px;\r\n  display: flex;\r\n  gap: 5px;\r\n  flex-direction: column;\r\n}\r\n\r\n#name {\r\n  max-width: 50%;\r\n  padding: 12px 20px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#comment {\r\n  max-width: 80%;\r\n  padding: 12px 20px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  resize: none;\r\n}\r\n\r\n.submit {\r\n  width: 100px;\r\n  background-color: #4caf50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.submit:hover {\r\n  background-color: #45a049;\r\n}\r\n\r\n/* Sroll Bar */\r\n::-webkit-scrollbar {\r\n  width: 3px;\r\n  background: #b9b9b9;\r\n}\r\n\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 3px #c8c8c8;\r\n}\r\n\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  background: black;\r\n  border-radius: 3px;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.img-popholdpop > .imgex > img {\r\n  max-height: 200px;\r\n  max-width: 200px;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n  .popup {\r\n    max-height: 80%;\r\n    max-width: 100%;\r\n    overflow-y: scroll;\r\n    background-color: #f4f4f4;\r\n  }\r\n\r\n  .popup-details {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: column;\r\n    width: 100%;\r\n  }\r\n\r\n  .details {\r\n    display: flex;\r\n    max-width: 100%;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .images {\r\n    display: none;\r\n  }\r\n\r\n  .popup-comments {\r\n    width: 100%;\r\n  }\r\n\r\n  .closeBtn {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 15px;\r\n    width: 80px;\r\n    margin-right: 10px;\r\n    margin-bottom: 20px;\r\n    align-self: flex-end;\r\n    background-color: rgba(255, 255, 255, 0.45);\r\n    border-radius: 5px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_Api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Api.js */ "./src/modules/Api.js");



const ApiCalls = new _modules_Api_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
ApiCalls.GetMeals();


/***/ }),

/***/ "./src/modules/Api.js":
/*!****************************!*\
  !*** ./src/modules/Api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
/* harmony import */ var _Functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Functions.js */ "./src/modules/Functions.js");
/* harmony import */ var _Dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dom.js */ "./src/modules/Dom.js");



class Api {
  constructor() {
    this.InvolvementApiEP = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
    this.InvolvementAppID = 'uTgQekk1pvknjJNgid02';
    this.FreeMealEP = 'https://www.themealdb.com/api/json/v1/';
  }

  GetMealInfos = async (id) => {
    await fetch(`${this.FreeMealEP}/1/categories.php`)
      .then((response) => response.json())
      .then((json) => {
        json.categories.forEach((item) => {
          if (item.idCategory === id) {
            this.GetExamples(item, id);
          }
        });
      });
  };

  GetExamples = async (item) => {
    const modal = document.querySelector('.popup-container');
    modal.innerHTML = ' <div class="spinner" ><i class="fas fa-spinner fa-spin fa-5x"></i></div>';
    await fetch(`${this.FreeMealEP}/1/filter.php?c=${item.strCategory}`)
      .then((response) => response.json())
      .then((json) => {
        (0,_Functions_js__WEBPACK_IMPORTED_MODULE_0__.DisplayPopup)(item, json);
        this.CountComments(item.idCategory);
        this.DisplayComm(item.idCategory);

        const form = document.querySelector('.form');
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const username = document.getElementById('name').value;

          const comment = document.querySelector('#comment').value;
          const button = document.querySelector('.submit').id;
          if (username && comment) {
            const newComment = {
              username,
              comment,
              item_id: button,
            };
            this.AddComment(newComment);
          }
        });
      });
  };

  GetStats = async (products) => {
    (0,_Functions_js__WEBPACK_IMPORTED_MODULE_0__.Counter)(products);
    this.CountLikes();
  };

  GetMeals = async () => {
    document.querySelector('.cards').innerHTML = ' <div class="spinner" ><i class="fas fa-spinner fa-spin fa-5x"></i></div>';
    await fetch(`${this.FreeMealEP}/1/categories.php`)
      .then((response) => response.json())
      .then((json) => {
        (0,_Functions_js__WEBPACK_IMPORTED_MODULE_0__.DisplayCards)(json.categories);
        this.GetStats(json.categories);
        const likeBtn = document.querySelectorAll('.fa-heart');
        const likeCount = document.querySelectorAll('.likes-counter');
        likeBtn.forEach((btn) => {
          btn.addEventListener('click', () => {
            if (!btn.classList.contains('liked')) {
              btn.classList.add('liked');
              likeCount.forEach((count) => {
                if (count.id === btn.id) {
                  this.AddLike(count.id);
                  count.innerHTML = Number(count.innerText) + 1;
                }
              });
            }
          });
        });
        const comment = document.querySelectorAll('.comment');
        comment.forEach((item) => {
          item.addEventListener('click', () => {
            _Dom_js__WEBPACK_IMPORTED_MODULE_1__.modal.classList.toggle('hide');
            this.GetMealInfos(item.id);
          });
        });
      });
  };

  AddComment = async (data) => {
    document.getElementById('name').setAttribute('disabled', '');
    document.querySelector('#comment').setAttribute('disabled', '');
    document.querySelector('.submit').innerHTML = ' <i class="fas fa-spinner fa-spin fa-1x"></i>';
    await fetch(
      `${this.InvolvementApiEP}apps/${this.InvolvementAppID}/comments`,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    ).then(() => {
      document.getElementById('name').removeAttribute('disabled');
      document.querySelector('#comment').removeAttribute('disabled');
      document.querySelector('.submit').innerHTML = 'submit';
    });
    this.DisplayComm(data.item_id);
  };

  DisplayComm = async (data) => {
    const CommentList = document.querySelector('.comments');
    CommentList.innerHTML = ' <i class="fas fa-spinner fa-spin fa-2x"></i>';
    await fetch(
      `${this.InvolvementApiEP}apps/${this.InvolvementAppID}/comments?item_id=${data}`,
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.constructor === Array) {
          (0,_Functions_js__WEBPACK_IMPORTED_MODULE_0__.DisplayComments)(json);
        } else {
          CommentList.innerHTML = '';
        }
      });
  };

  AddLike = async (id) => {
    await fetch(
      `${this.InvolvementApiEP}apps/${this.InvolvementAppID}/likes/`,
      {
        method: 'POST',
        body: JSON.stringify({
          item_id: id,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
  };

   CountLikes = async () => {
     await fetch(
       `${this.InvolvementApiEP}apps/${this.InvolvementAppID}/likes/`,
     ).then((response) => response.json())
       .then((json) => {
         if (json.constructor === Array) {
           (0,_Functions_js__WEBPACK_IMPORTED_MODULE_0__.CounterLikes)(json);
         }
       });
   };

  CountComments = async (data) => {
    await fetch(
      `${this.InvolvementApiEP}apps/${this.InvolvementAppID}/comments?item_id=${data}`,
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.constructor === Array) {
          (0,_Functions_js__WEBPACK_IMPORTED_MODULE_0__.CountComment)(json);
        }
      });
  };
}


/***/ }),

/***/ "./src/modules/Dom.js":
/*!****************************!*\
  !*** ./src/modules/Dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cards": () => (/* binding */ Cards),
/* harmony export */   "ProductsCounter": () => (/* binding */ ProductsCounter),
/* harmony export */   "comment": () => (/* binding */ comment),
/* harmony export */   "modal": () => (/* binding */ modal)
/* harmony export */ });
const modal = document.querySelector('.popup-container');
const comment = document.querySelectorAll('.comment');
const Cards = document.querySelector('.cards');
const ProductsCounter = document.querySelector('.product-counter');



/***/ }),

/***/ "./src/modules/Functions.js":
/*!**********************************!*\
  !*** ./src/modules/Functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountComment": () => (/* binding */ CountComment),
/* harmony export */   "Counter": () => (/* binding */ Counter),
/* harmony export */   "CounterLikes": () => (/* binding */ CounterLikes),
/* harmony export */   "DisplayCards": () => (/* binding */ DisplayCards),
/* harmony export */   "DisplayComments": () => (/* binding */ DisplayComments),
/* harmony export */   "DisplayPopup": () => (/* binding */ DisplayPopup),
/* harmony export */   "calculateComments": () => (/* binding */ calculateComments),
/* harmony export */   "countProducts": () => (/* binding */ countProducts)
/* harmony export */ });
/* harmony import */ var _Dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dom.js */ "./src/modules/Dom.js");


function DisplayPopup(data, examples) {
  _Dom_js__WEBPACK_IMPORTED_MODULE_0__.modal.innerHTML = ` <div class="closeBtn">X</div>
  <div class="popup">
            <div class="popup-header" >
                
                    <div class="img-popcontainer">
                        <div class="img-pophold">
                            <div class="img">
                                <img src="${data.strCategoryThumb}">
                            </div>
                        </div>
                    </div>
                <div class="popup-title">${data.strCategory}</div>
            </div>

            <div class="popup-details">
              
                <div class="details">
                    <div class="images">
                    </div>
                    <hr />
                   <div class="details-text">
                   ${data.strCategoryDescription}
                    </div>
                </div>
                <div class="popup-comments">
                    <div class="container-comments">
                        <form class="form">
                    
                    <textarea id="comment" type="text" placeholder="Comment" required/></textarea>
                    <div class="form-header"><input required id="name" type="text" placeholder="Name" /> <button class="submit" id="${data.idCategory}">submit</button></div>
                        </form>
                        <div class="Comment-counter">
                        Total Comments(0)
                        </div>
                     <hr/>
                     
                    <div class="comment-list">
                        
                        <ul class="comments">
                                        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
   </div>`;
  const images = document.querySelector(".images");
  examples.meals.slice(0, 3).forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("single-product-example");
    div.innerHTML = ` 
    <div class="img-popholdpop">
        <div class="imgex">
            <img src=${element.strMealThumb}>

        </div>
    </div>
    <p class="title-example">${element.strMeal.substr(0, 15)}</p>
`;
    images.appendChild(div);
  });

  const closeBtn = document.querySelector(".closeBtn");

  closeBtn.addEventListener("click", () => {
    _Dom_js__WEBPACK_IMPORTED_MODULE_0__.modal.classList.toggle("hide");
  });
}

function DisplayCards(data) {
  document.querySelector(".cards").innerHTML = "";
  data.forEach((element) => {
    _Dom_js__WEBPACK_IMPORTED_MODULE_0__.Cards.innerHTML += `
          <div class="card">
          <div>
              <div class="card-header">
                  <div class="img">
                      <img src="${element.strCategoryThumb}">
                  </div>
              </div>
          </div>
        
          <div class="title-container">
              <h3 class = 'tag'>${element.strCategory}</h3>
              <div class="interactions">
              <div></div>       <div><i id="${
                element.idCategory
              }" class="fa-solid fa-heart fa-lg"></i> <b id="${
      element.idCategory
    }" class="likes-counter"></b> </div>
              </div>
              <div class ="meal-description">
              ${element.strCategoryDescription.substr(0, 50)}...
              </div>
              
          <button id="${
            element.idCategory
          }" class="button comment"><i class="fa-solid fa-comments"></i> Comments</button>
          </div>
 
      </div>
          `;
  });
}

function calculateComments(data) {
  const msg = `Total Comments(${data.length})`;
  return msg;
}

function CountComment(data) {
  const CommentCounter = document.querySelector(".Comment-counter");
  CommentCounter.innerHTML = calculateComments(data);
}

function DisplayComments(data) {
  const commentSection = document.querySelector(".comments");
  let comment = "";
  data.forEach((item) => {
    comment += `<li class="single-comment">
      <img class="user" src="https://www.w3schools.com/howto/img_avatar.png" alt="user" >
      <b class="user-comment">${item.username}: ${item.comment}</b>
      </li>`;
  });
  commentSection.innerHTML = comment;
  CountComment(data);
}

function countProducts(data) {
  return data.length;
}

function Counter(data) {
  _Dom_js__WEBPACK_IMPORTED_MODULE_0__.ProductsCounter.innerHTML = countProducts(data);
}

function CounterLikes(data) {
  const likeCount = document.querySelectorAll(".likes-counter");
  likeCount.forEach((item) => {
    data.forEach((likes) => {
      if (item.id === likes.item_id) {
        item.innerHTML = likes.likes;
      }
    });
  });
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw2R0FBNkcsSUFBSSwwQkFBMEIsSUFBSSxrQkFBa0I7QUFDaks7QUFDQSxzM0JBQXMzQixnQkFBZ0IsaUJBQWlCLGdCQUFnQixzQkFBc0IsK0JBQStCLEtBQUssb0xBQW9MLHFCQUFxQixLQUFLLG1CQUFtQix1QkFBdUIsS0FBSywwQkFBMEIsbUJBQW1CLEtBQUssNkVBQTZFLG9CQUFvQixvQkFBb0IsS0FBSyxlQUFlLGdDQUFnQyx3QkFBd0IsS0FBSyxzQ0FBc0MsZ0JBQWdCLGlCQUFpQixnREFBZ0QsNkNBQTZDLDRDQUE0Qyx3Q0FBd0MsS0FBSyxjQUFjLGdDQUFnQyx5Q0FBeUMsMEJBQTBCLDRCQUE0QixxQkFBcUIscUJBQXFCLEtBQUssY0FBYyx5QkFBeUIsS0FBSyxvQkFBb0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsS0FBSyx1QkFBdUIsdUJBQXVCLHNCQUFzQiwyQkFBMkIsc0JBQXNCLEtBQUssNkJBQTZCLHFCQUFxQixLQUFLLGVBQWUseUJBQXlCLG9CQUFvQiwwQkFBMEIsOEJBQThCLDBCQUEwQixLQUFLLHFCQUFxQixzQkFBc0IsS0FBSyx5QkFBeUIsaUJBQWlCLG9CQUFvQix1QkFBdUIseUJBQXlCLEtBQUsscUJBQXFCLHlCQUF5QixtQkFBbUIsS0FBSyxzQkFBc0IsNEJBQTRCLEtBQUssd0JBQXdCLHlCQUF5QixxQkFBcUIsS0FBSywyQkFBMkIsb0JBQW9CLDhCQUE4QixLQUFLLG1CQUFtQix5QkFBeUIsbUJBQW1CLEtBQUssZUFBZSxtQkFBbUIsdUJBQXVCLEtBQUsscUJBQXFCLHNCQUFzQixpQkFBaUIscUJBQXFCLDhCQUE4QiwwQkFBMEIsS0FBSyx5QkFBeUIsMEJBQTBCLDBCQUEwQiwyQkFBMkIsMEJBQTBCLDhCQUE4QiwwQkFBMEIsS0FBSyxnQkFBZ0Isb0JBQW9CLHNCQUFzQiw4QkFBOEIsMEJBQTBCLGdCQUFnQixvQkFBb0IsS0FBSyx1QkFBdUIsb0JBQW9CLGtCQUFrQiw4QkFBOEIsdUJBQXVCLEtBQUssZUFBZSx5QkFBeUIsd0JBQXdCLEtBQUssaUJBQWlCLG1CQUFtQixrQkFBa0Isd0JBQXdCLCtDQUErQywwREFBMEQsS0FBSyxrQkFBa0IseUJBQXlCLG9CQUFvQixnQ0FBZ0MsMEJBQTBCLEtBQUssa0JBQWtCLG9CQUFvQiw4QkFBOEIsbUJBQW1CLDBCQUEwQixLQUFLLGdCQUFnQixzQkFBc0IsS0FBSywwQkFBMEIsc0JBQXNCLG9CQUFvQixtQkFBbUIsd0JBQXdCLGtDQUFrQyxtQkFBbUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLEtBQUssZ0JBQWdCLGtCQUFrQixpQkFBaUIseUJBQXlCLHlCQUF5QixnQ0FBZ0MsS0FBSyx1QkFBdUIsd0JBQXdCLG9CQUFvQixxUkFBcVIsc0NBQXNDLG9CQUFvQiw2QkFBNkIsNkJBQTZCLGdCQUFnQixvQkFBb0IsbUNBQW1DLDhCQUE4QiwwQkFBMEIsS0FBSyxxQ0FBcUMseUJBQXlCLGdCQUFnQixhQUFhLDRDQUE0QyxLQUFLLGVBQWUsbUJBQW1CLDZCQUE2QiwwQkFBMEIsdURBQXVELHVCQUF1QixtQkFBbUIsMkJBQTJCLEtBQUssaUJBQWlCLHFDQUFxQyxzREFBc0QsZ0NBQWdDLHFCQUFxQixLQUFLLHVCQUF1QixzQkFBc0IsdUJBQXVCLEtBQUssWUFBWSxpQkFBaUIsS0FBSywyQkFBMkIsb0JBQW9CLG1CQUFtQix1QkFBdUIsbUNBQW1DLDRCQUE0QixLQUFLLHlCQUF5QixtQkFBbUIsb0JBQW9CLDBCQUEwQixlQUFlLDBCQUEwQixLQUFLLHVCQUF1QixtQkFBbUIsS0FBSyxXQUFXLHNCQUFzQiwwQkFBMEIsS0FBSyxpQ0FBaUMsb0JBQW9CLDZCQUE2QiwwQkFBMEIsS0FBSywyQkFBMkIsb0JBQW9CLG1CQUFtQixLQUFLLGVBQWUsbUJBQW1CLGtCQUFrQix5QkFBeUIsS0FBSywrQkFBK0Isb0NBQW9DLG9CQUFvQiw4QkFBOEIsS0FBSyxnQkFBZ0IsNEJBQTRCLDBCQUEwQix1QkFBdUIsaUJBQWlCLG1CQUFtQix5QkFBeUIsMEJBQTBCLG9CQUFvQixtQkFBbUIsS0FBSyx3QkFBd0Isc0JBQXNCLDBCQUEwQixLQUFLLHdCQUF3QixzQ0FBc0Msb0JBQW9CLG1CQUFtQiwyQkFBMkIscUNBQXFDLDRCQUE0QixLQUFLLHNCQUFzQixrQkFBa0Isb0JBQW9CLHdCQUF3QixLQUFLLDZCQUE2QixrQkFBa0Isb0JBQW9CLHdCQUF3QixLQUFLLGtDQUFrQyw0QkFBNEIsS0FBSyxVQUFVLDBCQUEwQiwwQkFBMEIsc0JBQXNCLGdCQUFnQixrQkFBa0Isd0JBQXdCLGdDQUFnQyxzQkFBc0IsS0FBSywwQkFBMEIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLG9CQUFvQix3QkFBd0IsS0FBSyw2QkFBNkIsNEJBQTRCLGtCQUFrQixzQkFBc0IsdUJBQXVCLEtBQUsseUJBQXlCLHNCQUFzQixLQUFLLDJCQUEyQiw2QkFBNkIsc0JBQXNCLEtBQUssa0JBQWtCLG9CQUFvQixtQkFBbUIsZ0NBQWdDLGdCQUFnQix3QkFBd0Isc0JBQXNCLGtCQUFrQixLQUFLLHVCQUF1QixtQkFBbUIsb0JBQW9CLHNCQUFzQiwwQkFBMEIsOEJBQThCLGdCQUFnQixLQUFLLHdCQUF3QixvQkFBb0Isc0JBQXNCLGtCQUFrQixxQ0FBcUMsS0FBSyxrQkFBa0Isb0JBQW9CLHFCQUFxQiw2QkFBNkIsS0FBSyxtQkFBbUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsb0JBQW9CLGtCQUFrQix5QkFBeUIsMEJBQTBCLDJCQUEyQixrREFBa0QseUJBQXlCLHNCQUFzQixLQUFLLHVCQUF1QixvQkFBb0Isa0NBQWtDLDBCQUEwQixtQkFBbUIsS0FBSyxpQkFBaUIsbUJBQW1CLG9CQUFvQixnQkFBZ0IsS0FBSyx5QkFBeUIsaUJBQWlCLEtBQUssNkJBQTZCLGtCQUFrQixtREFBbUQsbUJBQW1CLG9CQUFvQiw2QkFBNkIsS0FBSyxjQUFjLG1CQUFtQixvQkFBb0IsZUFBZSw2QkFBNkIsS0FBSyxlQUFlLHFCQUFxQix5QkFBeUIsNEJBQTRCLDZCQUE2Qix5QkFBeUIsNkJBQTZCLEtBQUssa0JBQWtCLHFCQUFxQix5QkFBeUIsNEJBQTRCLDZCQUE2Qix5QkFBeUIsNkJBQTZCLG1CQUFtQixLQUFLLGlCQUFpQixtQkFBbUIsZ0NBQWdDLG1CQUFtQix5QkFBeUIsb0JBQW9CLG1CQUFtQix5QkFBeUIsc0JBQXNCLEtBQUssdUJBQXVCLGdDQUFnQyxLQUFLLGdEQUFnRCxpQkFBaUIsMEJBQTBCLEtBQUssa0RBQWtELHdDQUF3QyxLQUFLLG1EQUFtRCx3QkFBd0IseUJBQXlCLEtBQUssZUFBZSxvQkFBb0IsS0FBSyx3Q0FBd0Msd0JBQXdCLHVCQUF1QixLQUFLLG1EQUFtRCxjQUFjLHdCQUF3Qix3QkFBd0IsMkJBQTJCLGtDQUFrQyxPQUFPLDBCQUEwQixzQkFBc0Isd0JBQXdCLCtCQUErQixvQkFBb0IsT0FBTyxvQkFBb0Isc0JBQXNCLHdCQUF3QiwrQkFBK0IsT0FBTyxtQkFBbUIsc0JBQXNCLE9BQU8sMkJBQTJCLG9CQUFvQixPQUFPLHFCQUFxQixzQkFBc0IsZ0NBQWdDLDRCQUE0QixzQkFBc0Isb0JBQW9CLDJCQUEyQiw0QkFBNEIsNkJBQTZCLG9EQUFvRCwyQkFBMkIsT0FBTyxLQUFLLFdBQVcsbUZBQW1GLEtBQUsscUZBQXFGLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksZ0JBQWdCLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxRQUFRLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLE9BQU8sT0FBTyxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxV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YWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL0FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvRG9tLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9GdW5jdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRAMzAwOzQwMDs3MDAmZmFtaWx5PVJ1YmlrOndnaHRANTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiovXFxyXFxuaHRtbCxcXHJcXG5ib2R5LFxcclxcbmRpdixcXHJcXG5zcGFuLFxcclxcbmFwcGxldCxcXHJcXG5vYmplY3QsXFxyXFxuaWZyYW1lLFxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2LFxcclxcbnAsXFxyXFxuYmxvY2txdW90ZSxcXHJcXG5wcmUsXFxyXFxuYSxcXHJcXG5hYmJyLFxcclxcbmFjcm9ueW0sXFxyXFxuYWRkcmVzcyxcXHJcXG5iaWcsXFxyXFxuY2l0ZSxcXHJcXG5jb2RlLFxcclxcbmRlbCxcXHJcXG5kZm4sXFxyXFxuZW0sXFxyXFxuaW1nLFxcclxcbmlucyxcXHJcXG5rYmQsXFxyXFxucSxcXHJcXG5zLFxcclxcbnNhbXAsXFxyXFxuc21hbGwsXFxyXFxuc3RyaWtlLFxcclxcbnN0cm9uZyxcXHJcXG5zdWIsXFxyXFxuc3VwLFxcclxcbnR0LFxcclxcbnZhcixcXHJcXG5iLFxcclxcbnUsXFxyXFxuaSxcXHJcXG5jZW50ZXIsXFxyXFxuZGwsXFxyXFxuZHQsXFxyXFxuZGQsXFxyXFxub2wsXFxyXFxudWwsXFxyXFxubGksXFxyXFxuZmllbGRzZXQsXFxyXFxuZm9ybSxcXHJcXG5sYWJlbCxcXHJcXG5sZWdlbmQsXFxyXFxudGFibGUsXFxyXFxuY2FwdGlvbixcXHJcXG50Ym9keSxcXHJcXG50Zm9vdCxcXHJcXG50aGVhZCxcXHJcXG50cixcXHJcXG50aCxcXHJcXG50ZCxcXHJcXG5hcnRpY2xlLFxcclxcbmFzaWRlLFxcclxcbmNhbnZhcyxcXHJcXG5kZXRhaWxzLFxcclxcbmVtYmVkLFxcclxcbmZpZ3VyZSxcXHJcXG5maWdjYXB0aW9uLFxcclxcbmZvb3RlcixcXHJcXG5oZWFkZXIsXFxyXFxuaGdyb3VwLFxcclxcbm1lbnUsXFxyXFxubmF2LFxcclxcbm91dHB1dCxcXHJcXG5ydWJ5LFxcclxcbnNlY3Rpb24sXFxyXFxuc3VtbWFyeSxcXHJcXG50aW1lLFxcclxcbm1hcmssXFxyXFxuYXVkaW8sXFxyXFxudmlkZW8ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsXFxyXFxuYXNpZGUsXFxyXFxuZGV0YWlscyxcXHJcXG5maWdjYXB0aW9uLFxcclxcbmZpZ3VyZSxcXHJcXG5mb290ZXIsXFxyXFxuaGVhZGVyLFxcclxcbmhncm91cCxcXHJcXG5tZW51LFxcclxcbm5hdixcXHJcXG5zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5vbCxcXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlLFxcclxcbnEge1xcclxcbiAgcXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlOjpiZWZvcmUsXFxyXFxuYmxvY2txdW90ZTo6YWZ0ZXIsXFxyXFxucTo6YmVmb3JlLFxcclxcbnE6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgY29udGVudDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XFxyXFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudDtcXHJcXG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjJlOTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUnViaWtcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcXHJcXG4gIGNvbG9yOiAjNmM3NTdkO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW1zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbXMgbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW1zIGxpOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZTY3ZTIyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtZm9vZCBpbWcge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMTUlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC10aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXRpdGxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheS1jb21tZW50cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIC5uYW1lIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gLmluc2lnaHRzIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyMCU7XFxyXFxuICBwYWRkaW5nLXRvcDogMC44cmVtO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG4gIG1hcmdpbjogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbGlua3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBib3R0b206IDFyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgN3B4IDNweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpY2VuY2Uge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3Bpbm5lciB7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBtYXJnaW4tdG9wOiAtMjNweDtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAge1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhlYWRlciB7XFxyXFxuICAtLXN0cmlwZTogI2NmZDhkYztcXHJcXG4gIC0tYmc6ICNlMWUxZTE7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFlMWUxIDI1JSwgdHJhbnNwYXJlbnQgMjUlKSAtNTBweCAwLFxcclxcbiAgICBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjZTFlMWUxIDI1JSwgdHJhbnNwYXJlbnQgMjUlKSAtNTBweCAwLFxcclxcbiAgICBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZTFlMWUxIDI1JSwgdHJhbnNwYXJlbnQgMjUlKSxcXHJcXG4gICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZTFlMWUxIDI1JSwgdHJhbnNwYXJlbnQgMjUlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0cmlwZSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhlYWRlciA+IC5pbWctcG9wcG9wIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IDIwcHggd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAyLjRyZW0gNC44cmVtIHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcclxcbn1cXHJcXG4uY2FyZDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMnJlbSk7XFxyXFxuICBib3gtc2hhZG93OiAwIDMuMnJlbSA2LjRyZW0gcmdiYSgwLCAwLCAwLCAwLjA2KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjdlMjI7XFxyXFxuICBjb2xvcjogI2U2ZTZlNjtcXHJcXG59XFxyXFxuLm1lYWwtZGVzY3JpcHRpb24ge1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuLmxpa2VkIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5pbWctcG9wY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogMjMwcHg7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnNpbmdsZS1jb21tZW50IHtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZ2FwOiA2cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYiB7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2luZ2xlLXByb2R1Y3QtZXhhbXBsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5leGFtcGxlLXByb2R1Y3RzIHtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi51c2VyIHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLXBvcGNvbnRhaW5lciBpbWcge1xcclxcbiAgdHJhbnNmb3JtOiBza2V3KDBkZWcsIC0xM2RlZyk7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgbWFyZ2luOiAtMzVweCAwIDAgLTcwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbWdleCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LXNpemU6IDA7XFxyXFxuICBtYXJnaW46IDMwcHggMCAwIDA7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYzhjMmMyO1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWV4YW1wbGUge1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1jb250YWluZXIge1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcXHJcXG4gIGhlaWdodDogMjMwcHg7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuLmNhcmQtaGVhZGVyIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogYCAqL1xcclxcblxcclxcbi5pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbWctY29udGFpbmVyIGltZzpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxyXFxufVxcclxcbi50YWcge1xcclxcbiAgYmFja2dyb3VuZDogI2U2N2UyMjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDJweCAxMHB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBtaW4taGVpZ2h0OiAyNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWNvbnRhaW5lciBoMyB7XFxyXFxuICBtYXJnaW46IDIwcHggMCAxMHB4IDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydDpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mYS1jb21tZW50OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoMCwgODksIDIzMik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjFhOWEzO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNSU7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmludGVyYWN0aW9ucyB7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXgtd2lkdGg6IDcwJTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jbG9zZUJ0biB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtdGV4dCB7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmY2NjYzRmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIG1hcmdpbjogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlcyB7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudHMge1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1jb21tZW50cyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIxLCAyMTgsIDIxOCwgMC40NTMpO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuI25hbWUge1xcclxcbiAgbWF4LXdpZHRoOiA1MCU7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQge1xcclxcbiAgbWF4LXdpZHRoOiA4MCU7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdCB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMTRweCAyMHB4O1xcclxcbiAgbWFyZ2luOiA4cHggMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTcm9sbCBCYXIgKi9cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAzcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYjliOWI5O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUcmFjayAqL1xcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCAjYzhjOGM4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIYW5kbGUgKi9cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLXBvcGhvbGRwb3AgPiAuaW1nZXggPiBpbWcge1xcclxcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAucG9wdXAge1xcclxcbiAgICBtYXgtaGVpZ2h0OiA4MCU7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLWRldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaW1hZ2VzIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1jb21tZW50cyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNsb3NlQnRuIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLHdCQUF3QjtBQUMxQjs7QUFFQSxn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Oi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xcclxcbiAgIHYyLjAgfCAyMDExMDEyNlxcclxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxyXFxuKi9cXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRAMzAwOzQwMDs3MDAmZmFtaWx5PVJ1YmlrOndnaHRANTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuaHRtbCxcXHJcXG5ib2R5LFxcclxcbmRpdixcXHJcXG5zcGFuLFxcclxcbmFwcGxldCxcXHJcXG5vYmplY3QsXFxyXFxuaWZyYW1lLFxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2LFxcclxcbnAsXFxyXFxuYmxvY2txdW90ZSxcXHJcXG5wcmUsXFxyXFxuYSxcXHJcXG5hYmJyLFxcclxcbmFjcm9ueW0sXFxyXFxuYWRkcmVzcyxcXHJcXG5iaWcsXFxyXFxuY2l0ZSxcXHJcXG5jb2RlLFxcclxcbmRlbCxcXHJcXG5kZm4sXFxyXFxuZW0sXFxyXFxuaW1nLFxcclxcbmlucyxcXHJcXG5rYmQsXFxyXFxucSxcXHJcXG5zLFxcclxcbnNhbXAsXFxyXFxuc21hbGwsXFxyXFxuc3RyaWtlLFxcclxcbnN0cm9uZyxcXHJcXG5zdWIsXFxyXFxuc3VwLFxcclxcbnR0LFxcclxcbnZhcixcXHJcXG5iLFxcclxcbnUsXFxyXFxuaSxcXHJcXG5jZW50ZXIsXFxyXFxuZGwsXFxyXFxuZHQsXFxyXFxuZGQsXFxyXFxub2wsXFxyXFxudWwsXFxyXFxubGksXFxyXFxuZmllbGRzZXQsXFxyXFxuZm9ybSxcXHJcXG5sYWJlbCxcXHJcXG5sZWdlbmQsXFxyXFxudGFibGUsXFxyXFxuY2FwdGlvbixcXHJcXG50Ym9keSxcXHJcXG50Zm9vdCxcXHJcXG50aGVhZCxcXHJcXG50cixcXHJcXG50aCxcXHJcXG50ZCxcXHJcXG5hcnRpY2xlLFxcclxcbmFzaWRlLFxcclxcbmNhbnZhcyxcXHJcXG5kZXRhaWxzLFxcclxcbmVtYmVkLFxcclxcbmZpZ3VyZSxcXHJcXG5maWdjYXB0aW9uLFxcclxcbmZvb3RlcixcXHJcXG5oZWFkZXIsXFxyXFxuaGdyb3VwLFxcclxcbm1lbnUsXFxyXFxubmF2LFxcclxcbm91dHB1dCxcXHJcXG5ydWJ5LFxcclxcbnNlY3Rpb24sXFxyXFxuc3VtbWFyeSxcXHJcXG50aW1lLFxcclxcbm1hcmssXFxyXFxuYXVkaW8sXFxyXFxudmlkZW8ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsXFxyXFxuYXNpZGUsXFxyXFxuZGV0YWlscyxcXHJcXG5maWdjYXB0aW9uLFxcclxcbmZpZ3VyZSxcXHJcXG5mb290ZXIsXFxyXFxuaGVhZGVyLFxcclxcbmhncm91cCxcXHJcXG5tZW51LFxcclxcbm5hdixcXHJcXG5zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5vbCxcXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlLFxcclxcbnEge1xcclxcbiAgcXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlOjpiZWZvcmUsXFxyXFxuYmxvY2txdW90ZTo6YWZ0ZXIsXFxyXFxucTo6YmVmb3JlLFxcclxcbnE6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgY29udGVudDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XFxyXFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudDtcXHJcXG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjJlOTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUnViaWtcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcXHJcXG4gIGNvbG9yOiAjNmM3NTdkO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW1zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbXMgbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW1zIGxpOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZTY3ZTIyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtZm9vZCBpbWcge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMTUlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC10aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXRpdGxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheS1jb21tZW50cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIC5uYW1lIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gLmluc2lnaHRzIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyMCU7XFxyXFxuICBwYWRkaW5nLXRvcDogMC44cmVtO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG4gIG1hcmdpbjogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbGlua3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBib3R0b206IDFyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgN3B4IDNweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpY2VuY2Uge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3Bpbm5lciB7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBtYXJnaW4tdG9wOiAtMjNweDtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAge1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhlYWRlciB7XFxyXFxuICAtLXN0cmlwZTogI2NmZDhkYztcXHJcXG4gIC0tYmc6ICNlMWUxZTE7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFlMWUxIDI1JSwgdHJhbnNwYXJlbnQgMjUlKSAtNTBweCAwLFxcclxcbiAgICBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjZTFlMWUxIDI1JSwgdHJhbnNwYXJlbnQgMjUlKSAtNTBweCAwLFxcclxcbiAgICBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZTFlMWUxIDI1JSwgdHJhbnNwYXJlbnQgMjUlKSxcXHJcXG4gICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZTFlMWUxIDI1JSwgdHJhbnNwYXJlbnQgMjUlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0cmlwZSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhlYWRlciA+IC5pbWctcG9wcG9wIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IDIwcHggd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAyLjRyZW0gNC44cmVtIHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcclxcbn1cXHJcXG4uY2FyZDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMnJlbSk7XFxyXFxuICBib3gtc2hhZG93OiAwIDMuMnJlbSA2LjRyZW0gcmdiYSgwLCAwLCAwLCAwLjA2KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjdlMjI7XFxyXFxuICBjb2xvcjogI2U2ZTZlNjtcXHJcXG59XFxyXFxuLm1lYWwtZGVzY3JpcHRpb24ge1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuLmxpa2VkIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5pbWctcG9wY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogMjMwcHg7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnNpbmdsZS1jb21tZW50IHtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZ2FwOiA2cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYiB7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2luZ2xlLXByb2R1Y3QtZXhhbXBsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5leGFtcGxlLXByb2R1Y3RzIHtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi51c2VyIHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLXBvcGNvbnRhaW5lciBpbWcge1xcclxcbiAgdHJhbnNmb3JtOiBza2V3KDBkZWcsIC0xM2RlZyk7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgbWFyZ2luOiAtMzVweCAwIDAgLTcwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbWdleCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LXNpemU6IDA7XFxyXFxuICBtYXJnaW46IDMwcHggMCAwIDA7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYzhjMmMyO1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWV4YW1wbGUge1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1jb250YWluZXIge1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcXHJcXG4gIGhlaWdodDogMjMwcHg7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuLmNhcmQtaGVhZGVyIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogYCAqL1xcclxcblxcclxcbi5pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbWctY29udGFpbmVyIGltZzpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxyXFxufVxcclxcbi50YWcge1xcclxcbiAgYmFja2dyb3VuZDogI2U2N2UyMjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDJweCAxMHB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBtaW4taGVpZ2h0OiAyNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWNvbnRhaW5lciBoMyB7XFxyXFxuICBtYXJnaW46IDIwcHggMCAxMHB4IDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydDpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mYS1jb21tZW50OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoMCwgODksIDIzMik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjFhOWEzO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNSU7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmludGVyYWN0aW9ucyB7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXgtd2lkdGg6IDcwJTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jbG9zZUJ0biB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtdGV4dCB7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmY2NjYzRmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIG1hcmdpbjogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlcyB7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudHMge1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1jb21tZW50cyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIxLCAyMTgsIDIxOCwgMC40NTMpO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuI25hbWUge1xcclxcbiAgbWF4LXdpZHRoOiA1MCU7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQge1xcclxcbiAgbWF4LXdpZHRoOiA4MCU7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdCB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMTRweCAyMHB4O1xcclxcbiAgbWFyZ2luOiA4cHggMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTcm9sbCBCYXIgKi9cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAzcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYjliOWI5O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUcmFjayAqL1xcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCAjYzhjOGM4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIYW5kbGUgKi9cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLXBvcGhvbGRwb3AgPiAuaW1nZXggPiBpbWcge1xcclxcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAucG9wdXAge1xcclxcbiAgICBtYXgtaGVpZ2h0OiA4MCU7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLWRldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaW1hZ2VzIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1jb21tZW50cyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNsb3NlQnRuIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgQXBpIGZyb20gJy4vbW9kdWxlcy9BcGkuanMnO1xyXG5cclxuY29uc3QgQXBpQ2FsbHMgPSBuZXcgQXBpKCk7XHJcbkFwaUNhbGxzLkdldE1lYWxzKCk7XHJcbiIsImltcG9ydCB7XHJcbiAgRGlzcGxheVBvcHVwLFxyXG4gIERpc3BsYXlDYXJkcyxcclxuICBDb3VudGVyLFxyXG4gIENvdW50Q29tbWVudCxcclxuICBEaXNwbGF5Q29tbWVudHMsXHJcbiAgQ291bnRlckxpa2VzLFxyXG59IGZyb20gJy4vRnVuY3Rpb25zLmpzJztcclxuaW1wb3J0IHsgbW9kYWwgfSBmcm9tICcuL0RvbS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5JbnZvbHZlbWVudEFwaUVQID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS8nO1xyXG4gICAgdGhpcy5JbnZvbHZlbWVudEFwcElEID0gJ3VUZ1Fla2sxcHZrbmpKTmdpZDAyJztcclxuICAgIHRoaXMuRnJlZU1lYWxFUCA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLyc7XHJcbiAgfVxyXG5cclxuICBHZXRNZWFsSW5mb3MgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGF3YWl0IGZldGNoKGAke3RoaXMuRnJlZU1lYWxFUH0vMS9jYXRlZ29yaWVzLnBocGApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgIGpzb24uY2F0ZWdvcmllcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaXRlbS5pZENhdGVnb3J5ID09PSBpZCkge1xyXG4gICAgICAgICAgICB0aGlzLkdldEV4YW1wbGVzKGl0ZW0sIGlkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgR2V0RXhhbXBsZXMgPSBhc3luYyAoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtY29udGFpbmVyJyk7XHJcbiAgICBtb2RhbC5pbm5lckhUTUwgPSAnIDxkaXYgY2xhc3M9XCJzcGlubmVyXCIgPjxpIGNsYXNzPVwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpbiBmYS01eFwiPjwvaT48L2Rpdj4nO1xyXG4gICAgYXdhaXQgZmV0Y2goYCR7dGhpcy5GcmVlTWVhbEVQfS8xL2ZpbHRlci5waHA/Yz0ke2l0ZW0uc3RyQ2F0ZWdvcnl9YClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgRGlzcGxheVBvcHVwKGl0ZW0sIGpzb24pO1xyXG4gICAgICAgIHRoaXMuQ291bnRDb21tZW50cyhpdGVtLmlkQ2F0ZWdvcnkpO1xyXG4gICAgICAgIHRoaXMuRGlzcGxheUNvbW0oaXRlbS5pZENhdGVnb3J5KTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XHJcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudCcpLnZhbHVlO1xyXG4gICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpLmlkO1xyXG4gICAgICAgICAgaWYgKHVzZXJuYW1lICYmIGNvbW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3Q29tbWVudCA9IHtcclxuICAgICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgICBjb21tZW50LFxyXG4gICAgICAgICAgICAgIGl0ZW1faWQ6IGJ1dHRvbixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5BZGRDb21tZW50KG5ld0NvbW1lbnQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBHZXRTdGF0cyA9IGFzeW5jIChwcm9kdWN0cykgPT4ge1xyXG4gICAgQ291bnRlcihwcm9kdWN0cyk7XHJcbiAgICB0aGlzLkNvdW50TGlrZXMoKTtcclxuICB9O1xyXG5cclxuICBHZXRNZWFscyA9IGFzeW5jICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcycpLmlubmVySFRNTCA9ICcgPGRpdiBjbGFzcz1cInNwaW5uZXJcIiA+PGkgY2xhc3M9XCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluIGZhLTV4XCI+PC9pPjwvZGl2Pic7XHJcbiAgICBhd2FpdCBmZXRjaChgJHt0aGlzLkZyZWVNZWFsRVB9LzEvY2F0ZWdvcmllcy5waHBgKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICBEaXNwbGF5Q2FyZHMoanNvbi5jYXRlZ29yaWVzKTtcclxuICAgICAgICB0aGlzLkdldFN0YXRzKGpzb24uY2F0ZWdvcmllcyk7XHJcbiAgICAgICAgY29uc3QgbGlrZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS1oZWFydCcpO1xyXG4gICAgICAgIGNvbnN0IGxpa2VDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlcy1jb3VudGVyJyk7XHJcbiAgICAgICAgbGlrZUJ0bi5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdsaWtlZCcpKSB7XHJcbiAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2xpa2VkJyk7XHJcbiAgICAgICAgICAgICAgbGlrZUNvdW50LmZvckVhY2goKGNvdW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQuaWQgPT09IGJ0bi5pZCkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLkFkZExpa2UoY291bnQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICBjb3VudC5pbm5lckhUTUwgPSBOdW1iZXIoY291bnQuaW5uZXJUZXh0KSArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudCcpO1xyXG4gICAgICAgIGNvbW1lbnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG4gICAgICAgICAgICB0aGlzLkdldE1lYWxJbmZvcyhpdGVtLmlkKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBBZGRDb21tZW50ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50Jykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKS5pbm5lckhUTUwgPSAnIDxpIGNsYXNzPVwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpbiBmYS0xeFwiPjwvaT4nO1xyXG4gICAgYXdhaXQgZmV0Y2goXHJcbiAgICAgIGAke3RoaXMuSW52b2x2ZW1lbnRBcGlFUH1hcHBzLyR7dGhpcy5JbnZvbHZlbWVudEFwcElEfS9jb21tZW50c2AsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICApLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnQnKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKS5pbm5lckhUTUwgPSAnc3VibWl0JztcclxuICAgIH0pO1xyXG4gICAgdGhpcy5EaXNwbGF5Q29tbShkYXRhLml0ZW1faWQpO1xyXG4gIH07XHJcblxyXG4gIERpc3BsYXlDb21tID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IENvbW1lbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzJyk7XHJcbiAgICBDb21tZW50TGlzdC5pbm5lckhUTUwgPSAnIDxpIGNsYXNzPVwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpbiBmYS0yeFwiPjwvaT4nO1xyXG4gICAgYXdhaXQgZmV0Y2goXHJcbiAgICAgIGAke3RoaXMuSW52b2x2ZW1lbnRBcGlFUH1hcHBzLyR7dGhpcy5JbnZvbHZlbWVudEFwcElEfS9jb21tZW50cz9pdGVtX2lkPSR7ZGF0YX1gLFxyXG4gICAgKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICBpZiAoanNvbi5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcclxuICAgICAgICAgIERpc3BsYXlDb21tZW50cyhqc29uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgQ29tbWVudExpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBBZGRMaWtlID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBhd2FpdCBmZXRjaChcclxuICAgICAgYCR7dGhpcy5JbnZvbHZlbWVudEFwaUVQfWFwcHMvJHt0aGlzLkludm9sdmVtZW50QXBwSUR9L2xpa2VzL2AsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBpdGVtX2lkOiBpZCxcclxuICAgICAgICB9KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gICBDb3VudExpa2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgIGF3YWl0IGZldGNoKFxyXG4gICAgICAgYCR7dGhpcy5JbnZvbHZlbWVudEFwaUVQfWFwcHMvJHt0aGlzLkludm9sdmVtZW50QXBwSUR9L2xpa2VzL2AsXHJcbiAgICAgKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICAgaWYgKGpzb24uY29uc3RydWN0b3IgPT09IEFycmF5KSB7XHJcbiAgICAgICAgICAgQ291bnRlckxpa2VzKGpzb24pO1xyXG4gICAgICAgICB9XHJcbiAgICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgQ291bnRDb21tZW50cyA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICBhd2FpdCBmZXRjaChcclxuICAgICAgYCR7dGhpcy5JbnZvbHZlbWVudEFwaUVQfWFwcHMvJHt0aGlzLkludm9sdmVtZW50QXBwSUR9L2NvbW1lbnRzP2l0ZW1faWQ9JHtkYXRhfWAsXHJcbiAgICApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgIGlmIChqc29uLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xyXG4gICAgICAgICAgQ291bnRDb21tZW50KGpzb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfTtcclxufVxyXG4iLCJjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb250YWluZXInKTtcbmNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudCcpO1xuY29uc3QgQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMnKTtcbmNvbnN0IFByb2R1Y3RzQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWNvdW50ZXInKTtcbmV4cG9ydCB7XG4gIG1vZGFsLCBQcm9kdWN0c0NvdW50ZXIsIGNvbW1lbnQsIENhcmRzLFxufTtcbiIsImltcG9ydCB7IG1vZGFsLCBDYXJkcywgUHJvZHVjdHNDb3VudGVyIH0gZnJvbSBcIi4vRG9tLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBEaXNwbGF5UG9wdXAoZGF0YSwgZXhhbXBsZXMpIHtcclxuICBtb2RhbC5pbm5lckhUTUwgPSBgIDxkaXYgY2xhc3M9XCJjbG9zZUJ0blwiPlg8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwicG9wdXBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWhlYWRlclwiID5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWctcG9wY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWctcG9waG9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtkYXRhLnN0ckNhdGVnb3J5VGh1bWJ9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdGl0bGVcIj4ke2RhdGEuc3RyQ2F0ZWdvcnl9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbHMtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgJHtkYXRhLnN0ckNhdGVnb3J5RGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1jb21tZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItY29tbWVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiY29tbWVudFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJDb21tZW50XCIgcmVxdWlyZWQvPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0taGVhZGVyXCI+PGlucHV0IHJlcXVpcmVkIGlkPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgLz4gPGJ1dHRvbiBjbGFzcz1cInN1Ym1pdFwiIGlkPVwiJHtkYXRhLmlkQ2F0ZWdvcnl9XCI+c3VibWl0PC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkNvbW1lbnQtY291bnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBDb21tZW50cygwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY29tbWVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5gO1xyXG4gIGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2VzXCIpO1xyXG4gIGV4YW1wbGVzLm1lYWxzLnNsaWNlKDAsIDMpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInNpbmdsZS1wcm9kdWN0LWV4YW1wbGVcIik7XHJcbiAgICBkaXYuaW5uZXJIVE1MID0gYCBcclxuICAgIDxkaXYgY2xhc3M9XCJpbWctcG9waG9sZHBvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWdleFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz0ke2VsZW1lbnQuc3RyTWVhbFRodW1ifT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxwIGNsYXNzPVwidGl0bGUtZXhhbXBsZVwiPiR7ZWxlbWVudC5zdHJNZWFsLnN1YnN0cigwLCAxNSl9PC9wPlxyXG5gO1xyXG4gICAgaW1hZ2VzLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZUJ0blwiKTtcclxuXHJcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEaXNwbGF5Q2FyZHMoZGF0YSkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICBkYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIENhcmRzLmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2VsZW1lbnQuc3RyQ2F0ZWdvcnlUaHVtYn1cIj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3MgPSAndGFnJz4ke2VsZW1lbnQuc3RyQ2F0ZWdvcnl9PC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW50ZXJhY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj4gICAgICAgPGRpdj48aSBpZD1cIiR7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmlkQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICB9XCIgY2xhc3M9XCJmYS1zb2xpZCBmYS1oZWFydCBmYS1sZ1wiPjwvaT4gPGIgaWQ9XCIke1xyXG4gICAgICBlbGVtZW50LmlkQ2F0ZWdvcnlcclxuICAgIH1cIiBjbGFzcz1cImxpa2VzLWNvdW50ZXJcIj48L2I+IDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwibWVhbC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICR7ZWxlbWVudC5zdHJDYXRlZ29yeURlc2NyaXB0aW9uLnN1YnN0cigwLCA1MCl9Li4uXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwiJHtcclxuICAgICAgICAgICAgZWxlbWVudC5pZENhdGVnb3J5XHJcbiAgICAgICAgICB9XCIgY2xhc3M9XCJidXR0b24gY29tbWVudFwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtY29tbWVudHNcIj48L2k+IENvbW1lbnRzPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICAgIGA7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZUNvbW1lbnRzKGRhdGEpIHtcclxuICBjb25zdCBtc2cgPSBgVG90YWwgQ29tbWVudHMoJHtkYXRhLmxlbmd0aH0pYDtcclxuICByZXR1cm4gbXNnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb3VudENvbW1lbnQoZGF0YSkge1xyXG4gIGNvbnN0IENvbW1lbnRDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Db21tZW50LWNvdW50ZXJcIik7XHJcbiAgQ29tbWVudENvdW50ZXIuaW5uZXJIVE1MID0gY2FsY3VsYXRlQ29tbWVudHMoZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERpc3BsYXlDb21tZW50cyhkYXRhKSB7XHJcbiAgY29uc3QgY29tbWVudFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbW1lbnRzXCIpO1xyXG4gIGxldCBjb21tZW50ID0gXCJcIjtcclxuICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGNvbW1lbnQgKz0gYDxsaSBjbGFzcz1cInNpbmdsZS1jb21tZW50XCI+XHJcbiAgICAgIDxpbWcgY2xhc3M9XCJ1c2VyXCIgc3JjPVwiaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9ob3d0by9pbWdfYXZhdGFyLnBuZ1wiIGFsdD1cInVzZXJcIiA+XHJcbiAgICAgIDxiIGNsYXNzPVwidXNlci1jb21tZW50XCI+JHtpdGVtLnVzZXJuYW1lfTogJHtpdGVtLmNvbW1lbnR9PC9iPlxyXG4gICAgICA8L2xpPmA7XHJcbiAgfSk7XHJcbiAgY29tbWVudFNlY3Rpb24uaW5uZXJIVE1MID0gY29tbWVudDtcclxuICBDb3VudENvbW1lbnQoZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvdW50UHJvZHVjdHMoZGF0YSkge1xyXG4gIHJldHVybiBkYXRhLmxlbmd0aDtcclxufVxyXG5cclxuZnVuY3Rpb24gQ291bnRlcihkYXRhKSB7XHJcbiAgUHJvZHVjdHNDb3VudGVyLmlubmVySFRNTCA9IGNvdW50UHJvZHVjdHMoZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvdW50ZXJMaWtlcyhkYXRhKSB7XHJcbiAgY29uc3QgbGlrZUNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saWtlcy1jb3VudGVyXCIpO1xyXG4gIGxpa2VDb3VudC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBkYXRhLmZvckVhY2goKGxpa2VzKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmlkID09PSBsaWtlcy5pdGVtX2lkKSB7XHJcbiAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBsaWtlcy5saWtlcztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgRGlzcGxheUNhcmRzLFxyXG4gIERpc3BsYXlQb3B1cCxcclxuICBDb3VudGVyLFxyXG4gIERpc3BsYXlDb21tZW50cyxcclxuICBDb3VudENvbW1lbnQsXHJcbiAgQ291bnRlckxpa2VzLFxyXG4gIGNhbGN1bGF0ZUNvbW1lbnRzLFxyXG4gIGNvdW50UHJvZHVjdHMsXHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==