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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  vertical-align: baseline;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nblockquote,\r\nq {\r\n  quotes: none;\r\n}\r\n\r\nblockquote::before,\r\nblockquote::after,\r\nq::before,\r\nq::after {\r\n  content: \"\";\r\n  content: none;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  -webkit-box-sizing: border-box !important;\r\n  -moz-box-sizing: border-box !important;\r\n  -ms-box-sizing: border-box !important;\r\n  box-sizing: border-box !important;\r\n}\r\n\r\nbody {\r\n  background-color: #fdf2e9;\r\n  font-family: \"Rubik\", sans-serif;\r\n  font-weight: bolder;\r\n  letter-spacing: 0.2em;\r\n  color: #6c757d;\r\n  line-height: 1;\r\n}\r\n\r\n.nav {\r\n  margin-top: 1.5rem;\r\n}\r\n\r\n.nav-items {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.nav-items li {\r\n  list-style: none;\r\n  margin-left: 5%;\r\n  transition: all 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-items li:hover {\r\n  color: #e67e22;\r\n}\r\n\r\n.logo {\r\n  border-radius: 50%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.logo-title {\r\n  font-size: 20px;\r\n}\r\n\r\n.popup-food img {\r\n  width: 70%;\r\n  height: 300px;\r\n  margin-left: 15%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.meal-title {\r\n  text-align: center;\r\n  margin: 1rem;\r\n}\r\n\r\n.description {\r\n  letter-spacing: 0.2em;\r\n}\r\n\r\n.comment-title {\r\n  text-align: center;\r\n  margin: 0.8rem;\r\n}\r\n\r\n.display-comments {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.add-comm {\r\n  text-align: center;\r\n  margin: 1rem;\r\n}\r\n\r\n.form {\r\n  width: 300px;\r\n  margin-left: 10%;\r\n}\r\n\r\n.form .name {\r\n  padding: 0.5rem;\r\n  width: 70%;\r\n  margin: 1rem 0;\r\n  border: 2px solid black;\r\n  font-weight: bolder;\r\n}\r\n\r\n.form .insights {\r\n  padding-bottom: 20%;\r\n  padding-top: 0.8rem;\r\n  padding-left: 0.5rem;\r\n  margin-bottom: 1rem;\r\n  border: 2px solid black;\r\n  font-weight: bolder;\r\n}\r\n\r\n.cards {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 30px;\r\n  margin: 200px;\r\n}\r\n\r\n.social-links {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: center;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.icon {\r\n  border-radius: 50%;\r\n  margin-left: 2rem;\r\n}\r\n\r\n.footer {\r\n  bottom: 1rem;\r\n  width: 100%;\r\n  margin: 1rem auto;\r\n  border-top: 1px solid rgba(0, 0, 0, 0.5);\r\n  box-shadow: inset 0 7px 3px -3px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.licence {\r\n  text-align: center;\r\n  padding: 1rem;\r\n  color: rgba(0, 0, 0, 0.5);\r\n  font-weight: bolder;\r\n}\r\n\r\n.spinner {\r\n  padding: 20px;\r\n  background-color: white;\r\n  color: black;\r\n  border-radius: 10px;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n.popup-container {\r\n  position: fixed;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  margin-top: -23px;\r\n  backdrop-filter: blur(10px);\r\n  z-index: 999;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.popup {\r\n  height: 80%;\r\n  width: 90%;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n  background-color: #f4f4f4;\r\n}\r\n\r\n.popup-header {\r\n  --stripe: #cfd8dc;\r\n  --bg: #e1e1e1;\r\n\r\n  background:\r\n    linear-gradient(135deg, #e1e1e1 25%, transparent 25%) -50px 0,\r\n    linear-gradient(225deg, #e1e1e1 25%, transparent 25%) -50px 0,\r\n    linear-gradient(315deg, #e1e1e1 25%, transparent 25%),\r\n    linear-gradient(45deg, #e1e1e1 25%, transparent 25%);\r\n  background-color: var(--stripe);\r\n  display: flex;\r\n  background-size: cover;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n  height: 300px;\r\n  background-repeat: no-repeat;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.popup-header > .img-poppop {\r\n  position: absolute;\r\n  bottom: 0;\r\n  top: 0;\r\n  box-shadow: inset 0 0 10px 20px white;\r\n}\r\n\r\n.card {\r\n  margin: 10px;\r\n  background-color: #fff;\r\n  border-radius: 10px;\r\n  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);\r\n  overflow: hidden;\r\n  width: 300px;\r\n  transition: all 0.4s;\r\n}\r\n\r\n.card:hover {\r\n  transform: translateY(-1.2rem);\r\n  box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.06);\r\n  background-color: #e67e22;\r\n  color: #e6e6e6;\r\n}\r\n\r\n.meal-description {\r\n  font-size: 13px;\r\n  font-weight: 500;\r\n}\r\n\r\n.liked {\r\n  color: red;\r\n}\r\n\r\n.img-popcontainer {\r\n  height: 230px;\r\n  width: 200px;\r\n  overflow: hidden;\r\n  border-radius: 0 0 20px 20px;\r\n  display: inline-block;\r\n}\r\n\r\n.single-comment {\r\n  margin: 10px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 6px;\r\n  align-items: center;\r\n}\r\n\r\n.comment-list {\r\n  height: 100%;\r\n}\r\n\r\nb {\r\n  font-size: 12px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.single-product-example {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.example-products {\r\n  height: 100px;\r\n  width: 100px;\r\n}\r\n\r\n.user {\r\n  height: 50px;\r\n  width: 50px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.img-popcontainer img {\r\n  transform: skew(0deg, -13deg);\r\n  height: 250px;\r\n  margin: -35px 0 0 -70px;\r\n}\r\n\r\n.imgex {\r\n  display: inline-block;\r\n  border-radius: 20px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  font-size: 0;\r\n  margin: 30px 0 0 0;\r\n  background: #c8c2c2;\r\n  height: 150px;\r\n  width: 200px;\r\n}\r\n\r\n.title-example {\r\n  font-size: 12px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.img-container {\r\n  transition: transform 0.5s ease;\r\n  height: 230px;\r\n  width: 200px;\r\n  border-radius: 0 0 20px 20px;\r\n  display: inline-block;\r\n}\r\n\r\n.card-header img {\r\n  width: 100%;\r\n  height: 200px;\r\n  object-fit: cover;\r\n}\r\n\r\n.img {\r\n  width: 100%;\r\n  height: 200px;\r\n  object-fit: cover;\r\n}\r\n\r\n.img-container img:hover {\r\n  transform: scale(0.8);\r\n}\r\n\r\n.tag {\r\n  background: #e67e22;\r\n  border-radius: 50px;\r\n  font-size: 12px;\r\n  margin: 0;\r\n  color: #fff;\r\n  padding: 2px 10px;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n}\r\n\r\n.title-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 20px;\r\n  min-height: 250px;\r\n}\r\n\r\n.title-container h3 {\r\n  margin: 20px 0 10px 0;\r\n  color: #fff;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n}\r\n\r\n.fa-heart:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-comment:hover {\r\n  color: rgb(0, 89, 232);\r\n  cursor: pointer;\r\n}\r\n\r\n.comment {\r\n  padding: 10px;\r\n  margin: 20px;\r\n  background-color: #b1a9a3;\r\n  border: 0;\r\n  border-radius: 5%;\r\n  font-size: 15px;\r\n  color: #fff;\r\n}\r\n\r\n.interactions {\r\n  margin: 20px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n}\r\n\r\n.popup-details {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n}\r\n\r\n.details {\r\n  display: flex;\r\n  max-width: 70%;\r\n  flex-direction: column;\r\n}\r\n\r\n.closeBtn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 15px;\r\n  width: 80px;\r\n  margin-right: 70px;\r\n  margin-bottom: 40px;\r\n  align-self: flex-end;\r\n  background-color: rgba(255, 255, 255, 0.45);\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.details-text {\r\n  padding: 20px;\r\n  background-color: #cfcccc4f;\r\n  border-radius: 20px;\r\n  margin: 40px;\r\n}\r\n\r\n.images {\r\n  margin: 10px;\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.popup-comments {\r\n  width: 30%;\r\n}\r\n\r\n.container-comments {\r\n  width: 100%;\r\n  background-color: rgba(221, 218, 218, 0.453);\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nform {\r\n  margin: 10px;\r\n  display: flex;\r\n  gap: 5px;\r\n  flex-direction: column;\r\n}\r\n\r\n#name {\r\n  max-width: 50%;\r\n  padding: 12px 20px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#comment {\r\n  max-width: 80%;\r\n  padding: 12px 20px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  resize: none;\r\n}\r\n\r\n.submit {\r\n  width: 100px;\r\n  background-color: #4caf50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.submit:hover {\r\n  background-color: #45a049;\r\n}\r\n\r\n/* Sroll Bar */\r\n::-webkit-scrollbar {\r\n  width: 3px;\r\n  background: #b9b9b9;\r\n}\r\n\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 3px #c8c8c8;\r\n}\r\n\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  background: black;\r\n  border-radius: 3px;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.img-popholdpop > .imgex > img {\r\n  max-height: 200px;\r\n  max-width: 200px;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n  .popup {\r\n    max-height: 80%;\r\n    max-width: 100%;\r\n    overflow-y: scroll;\r\n    background-color: #f4f4f4;\r\n  }\r\n\r\n  .popup-details {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: column;\r\n    width: 100%;\r\n  }\r\n\r\n  .details {\r\n    display: flex;\r\n    max-width: 100%;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .images {\r\n    display: none;\r\n  }\r\n\r\n  .popup-comments {\r\n    width: 100%;\r\n  }\r\n\r\n  .closeBtn {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 15px;\r\n    width: 80px;\r\n    margin-right: 10px;\r\n    margin-bottom: 20px;\r\n    align-self: flex-end;\r\n    background-color: rgba(255, 255, 255, 0.45);\r\n    border-radius: 5px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  vertical-align: baseline;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nblockquote,\r\nq {\r\n  quotes: none;\r\n}\r\n\r\nblockquote::before,\r\nblockquote::after,\r\nq::before,\r\nq::after {\r\n  content: \"\";\r\n  content: none;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  -webkit-box-sizing: border-box !important;\r\n  -moz-box-sizing: border-box !important;\r\n  -ms-box-sizing: border-box !important;\r\n  box-sizing: border-box !important;\r\n}\r\n\r\nbody {\r\n  background-color: #fdf2e9;\r\n  font-family: \"Rubik\", sans-serif;\r\n  font-weight: bolder;\r\n  letter-spacing: 0.2em;\r\n  color: #6c757d;\r\n  line-height: 1;\r\n}\r\n\r\n.nav {\r\n  margin-top: 1.5rem;\r\n}\r\n\r\n.nav-items {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.nav-items li {\r\n  list-style: none;\r\n  margin-left: 5%;\r\n  transition: all 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-items li:hover {\r\n  color: #e67e22;\r\n}\r\n\r\n.logo {\r\n  border-radius: 50%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.logo-title {\r\n  font-size: 20px;\r\n}\r\n\r\n.popup-food img {\r\n  width: 70%;\r\n  height: 300px;\r\n  margin-left: 15%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.meal-title {\r\n  text-align: center;\r\n  margin: 1rem;\r\n}\r\n\r\n.description {\r\n  letter-spacing: 0.2em;\r\n}\r\n\r\n.comment-title {\r\n  text-align: center;\r\n  margin: 0.8rem;\r\n}\r\n\r\n.display-comments {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.add-comm {\r\n  text-align: center;\r\n  margin: 1rem;\r\n}\r\n\r\n.form {\r\n  width: 300px;\r\n  margin-left: 10%;\r\n}\r\n\r\n.form .name {\r\n  padding: 0.5rem;\r\n  width: 70%;\r\n  margin: 1rem 0;\r\n  border: 2px solid black;\r\n  font-weight: bolder;\r\n}\r\n\r\n.form .insights {\r\n  padding-bottom: 20%;\r\n  padding-top: 0.8rem;\r\n  padding-left: 0.5rem;\r\n  margin-bottom: 1rem;\r\n  border: 2px solid black;\r\n  font-weight: bolder;\r\n}\r\n\r\n.cards {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 30px;\r\n  margin: 200px;\r\n}\r\n\r\n.social-links {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: center;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.icon {\r\n  border-radius: 50%;\r\n  margin-left: 2rem;\r\n}\r\n\r\n.footer {\r\n  bottom: 1rem;\r\n  width: 100%;\r\n  margin: 1rem auto;\r\n  border-top: 1px solid rgba(0, 0, 0, 0.5);\r\n  box-shadow: inset 0 7px 3px -3px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.licence {\r\n  text-align: center;\r\n  padding: 1rem;\r\n  color: rgba(0, 0, 0, 0.5);\r\n  font-weight: bolder;\r\n}\r\n\r\n.spinner {\r\n  padding: 20px;\r\n  background-color: white;\r\n  color: black;\r\n  border-radius: 10px;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n.popup-container {\r\n  position: fixed;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  margin-top: -23px;\r\n  backdrop-filter: blur(10px);\r\n  z-index: 999;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.popup {\r\n  height: 80%;\r\n  width: 90%;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n  background-color: #f4f4f4;\r\n}\r\n\r\n.popup-header {\r\n  --stripe: #cfd8dc;\r\n  --bg: #e1e1e1;\r\n\r\n  background:\r\n    linear-gradient(135deg, #e1e1e1 25%, transparent 25%) -50px 0,\r\n    linear-gradient(225deg, #e1e1e1 25%, transparent 25%) -50px 0,\r\n    linear-gradient(315deg, #e1e1e1 25%, transparent 25%),\r\n    linear-gradient(45deg, #e1e1e1 25%, transparent 25%);\r\n  background-color: var(--stripe);\r\n  display: flex;\r\n  background-size: cover;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n  height: 300px;\r\n  background-repeat: no-repeat;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.popup-header > .img-poppop {\r\n  position: absolute;\r\n  bottom: 0;\r\n  top: 0;\r\n  box-shadow: inset 0 0 10px 20px white;\r\n}\r\n\r\n.card {\r\n  margin: 10px;\r\n  background-color: #fff;\r\n  border-radius: 10px;\r\n  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);\r\n  overflow: hidden;\r\n  width: 300px;\r\n  transition: all 0.4s;\r\n}\r\n\r\n.card:hover {\r\n  transform: translateY(-1.2rem);\r\n  box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.06);\r\n  background-color: #e67e22;\r\n  color: #e6e6e6;\r\n}\r\n\r\n.meal-description {\r\n  font-size: 13px;\r\n  font-weight: 500;\r\n}\r\n\r\n.liked {\r\n  color: red;\r\n}\r\n\r\n.img-popcontainer {\r\n  height: 230px;\r\n  width: 200px;\r\n  overflow: hidden;\r\n  border-radius: 0 0 20px 20px;\r\n  display: inline-block;\r\n}\r\n\r\n.single-comment {\r\n  margin: 10px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 6px;\r\n  align-items: center;\r\n}\r\n\r\n.comment-list {\r\n  height: 100%;\r\n}\r\n\r\nb {\r\n  font-size: 12px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.single-product-example {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.example-products {\r\n  height: 100px;\r\n  width: 100px;\r\n}\r\n\r\n.user {\r\n  height: 50px;\r\n  width: 50px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.img-popcontainer img {\r\n  transform: skew(0deg, -13deg);\r\n  height: 250px;\r\n  margin: -35px 0 0 -70px;\r\n}\r\n\r\n.imgex {\r\n  display: inline-block;\r\n  border-radius: 20px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  font-size: 0;\r\n  margin: 30px 0 0 0;\r\n  background: #c8c2c2;\r\n  height: 150px;\r\n  width: 200px;\r\n}\r\n\r\n.title-example {\r\n  font-size: 12px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.img-container {\r\n  transition: transform 0.5s ease;\r\n  height: 230px;\r\n  width: 200px;\r\n  border-radius: 0 0 20px 20px;\r\n  display: inline-block;\r\n}\r\n\r\n.card-header img {\r\n  width: 100%;\r\n  height: 200px;\r\n  object-fit: cover;\r\n}\r\n\r\n.img {\r\n  width: 100%;\r\n  height: 200px;\r\n  object-fit: cover;\r\n}\r\n\r\n.img-container img:hover {\r\n  transform: scale(0.8);\r\n}\r\n\r\n.tag {\r\n  background: #e67e22;\r\n  border-radius: 50px;\r\n  font-size: 12px;\r\n  margin: 0;\r\n  color: #fff;\r\n  padding: 2px 10px;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n}\r\n\r\n.title-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 20px;\r\n  min-height: 250px;\r\n}\r\n\r\n.title-container h3 {\r\n  margin: 20px 0 10px 0;\r\n  color: #fff;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n}\r\n\r\n.fa-heart:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-comment:hover {\r\n  color: rgb(0, 89, 232);\r\n  cursor: pointer;\r\n}\r\n\r\n.comment {\r\n  padding: 10px;\r\n  margin: 20px;\r\n  background-color: #b1a9a3;\r\n  border: 0;\r\n  border-radius: 5%;\r\n  font-size: 15px;\r\n  color: #fff;\r\n}\r\n\r\n.interactions {\r\n  margin: 20px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n}\r\n\r\n.popup-details {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n}\r\n\r\n.details {\r\n  display: flex;\r\n  max-width: 70%;\r\n  flex-direction: column;\r\n}\r\n\r\n.closeBtn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 15px;\r\n  width: 80px;\r\n  margin-right: 70px;\r\n  margin-bottom: 40px;\r\n  align-self: flex-end;\r\n  background-color: rgba(255, 255, 255, 0.45);\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.details-text {\r\n  padding: 20px;\r\n  background-color: #cfcccc4f;\r\n  border-radius: 20px;\r\n  margin: 40px;\r\n}\r\n\r\n.images {\r\n  margin: 10px;\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.popup-comments {\r\n  width: 30%;\r\n}\r\n\r\n.container-comments {\r\n  width: 100%;\r\n  background-color: rgba(221, 218, 218, 0.453);\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nform {\r\n  margin: 10px;\r\n  display: flex;\r\n  gap: 5px;\r\n  flex-direction: column;\r\n}\r\n\r\n#name {\r\n  max-width: 50%;\r\n  padding: 12px 20px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#comment {\r\n  max-width: 80%;\r\n  padding: 12px 20px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  resize: none;\r\n}\r\n\r\n.submit {\r\n  width: 100px;\r\n  background-color: #4caf50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.submit:hover {\r\n  background-color: #45a049;\r\n}\r\n\r\n/* Sroll Bar */\r\n::-webkit-scrollbar {\r\n  width: 3px;\r\n  background: #b9b9b9;\r\n}\r\n\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 3px #c8c8c8;\r\n}\r\n\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  background: black;\r\n  border-radius: 3px;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.img-popholdpop > .imgex > img {\r\n  max-height: 200px;\r\n  max-width: 200px;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n  .popup {\r\n    max-height: 80%;\r\n    max-width: 100%;\r\n    overflow-y: scroll;\r\n    background-color: #f4f4f4;\r\n  }\r\n\r\n  .popup-details {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: column;\r\n    width: 100%;\r\n  }\r\n\r\n  .details {\r\n    display: flex;\r\n    max-width: 100%;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .images {\r\n    display: none;\r\n  }\r\n\r\n  .popup-comments {\r\n    width: 100%;\r\n  }\r\n\r\n  .closeBtn {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 15px;\r\n    width: 80px;\r\n    margin-right: 10px;\r\n    margin-bottom: 20px;\r\n    align-self: flex-end;\r\n    background-color: rgba(255, 255, 255, 0.45);\r\n    border-radius: 5px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  const images = document.querySelector('.images');
  examples.meals.slice(0, 3).forEach((element) => {
    const div = document.createElement('div');
    div.classList.add('single-product-example');
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

  const closeBtn = document.querySelector('.closeBtn');

  closeBtn.addEventListener('click', () => {
    _Dom_js__WEBPACK_IMPORTED_MODULE_0__.modal.classList.toggle('hide');
  });
}

function DisplayCards(data) {
  document.querySelector('.cards').innerHTML = '';
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
  const CommentCounter = document.querySelector('.Comment-counter');
  CommentCounter.innerHTML = calculateComments(data);
}

function DisplayComments(data) {
  const commentSection = document.querySelector('.comments');
  let comment = '';
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
  const likeCount = document.querySelectorAll('.likes-counter');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDAzQkFBMDNCLGdCQUFnQixpQkFBaUIsZ0JBQWdCLHNCQUFzQiwrQkFBK0IsS0FBSyxvTEFBb0wscUJBQXFCLEtBQUssbUJBQW1CLHVCQUF1QixLQUFLLDBCQUEwQixtQkFBbUIsS0FBSyw2RUFBNkUsb0JBQW9CLG9CQUFvQixLQUFLLGVBQWUsZ0NBQWdDLHdCQUF3QixLQUFLLHNDQUFzQyxnQkFBZ0IsaUJBQWlCLGdEQUFnRCw2Q0FBNkMsNENBQTRDLHdDQUF3QyxLQUFLLGNBQWMsZ0NBQWdDLHlDQUF5QywwQkFBMEIsNEJBQTRCLHFCQUFxQixxQkFBcUIsS0FBSyxjQUFjLHlCQUF5QixLQUFLLG9CQUFvQixvQkFBb0IsOEJBQThCLDBCQUEwQixLQUFLLHVCQUF1Qix1QkFBdUIsc0JBQXNCLDJCQUEyQixzQkFBc0IsS0FBSyw2QkFBNkIscUJBQXFCLEtBQUssZUFBZSx5QkFBeUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsMEJBQTBCLEtBQUsscUJBQXFCLHNCQUFzQixLQUFLLHlCQUF5QixpQkFBaUIsb0JBQW9CLHVCQUF1Qix5QkFBeUIsS0FBSyxxQkFBcUIseUJBQXlCLG1CQUFtQixLQUFLLHNCQUFzQiw0QkFBNEIsS0FBSyx3QkFBd0IseUJBQXlCLHFCQUFxQixLQUFLLDJCQUEyQixvQkFBb0IsOEJBQThCLEtBQUssbUJBQW1CLHlCQUF5QixtQkFBbUIsS0FBSyxlQUFlLG1CQUFtQix1QkFBdUIsS0FBSyxxQkFBcUIsc0JBQXNCLGlCQUFpQixxQkFBcUIsOEJBQThCLDBCQUEwQixLQUFLLHlCQUF5QiwwQkFBMEIsMEJBQTBCLDJCQUEyQiwwQkFBMEIsOEJBQThCLDBCQUEwQixLQUFLLGdCQUFnQixvQkFBb0Isc0JBQXNCLDhCQUE4QiwwQkFBMEIsZ0JBQWdCLG9CQUFvQixLQUFLLHVCQUF1QixvQkFBb0Isa0JBQWtCLDhCQUE4Qix1QkFBdUIsS0FBSyxlQUFlLHlCQUF5Qix3QkFBd0IsS0FBSyxpQkFBaUIsbUJBQW1CLGtCQUFrQix3QkFBd0IsK0NBQStDLDBEQUEwRCxLQUFLLGtCQUFrQix5QkFBeUIsb0JBQW9CLGdDQUFnQywwQkFBMEIsS0FBSyxrQkFBa0Isb0JBQW9CLDhCQUE4QixtQkFBbUIsMEJBQTBCLEtBQUssZ0JBQWdCLHNCQUFzQixLQUFLLDBCQUEwQixzQkFBc0Isb0JBQW9CLG1CQUFtQix3QkFBd0Isa0NBQWtDLG1CQUFtQixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsS0FBSyxnQkFBZ0Isa0JBQWtCLGlCQUFpQix5QkFBeUIseUJBQXlCLGdDQUFnQyxLQUFLLHVCQUF1Qix3QkFBd0Isb0JBQW9CLDRSQUE0UixzQ0FBc0Msb0JBQW9CLDZCQUE2Qiw2QkFBNkIsZ0JBQWdCLG9CQUFvQixtQ0FBbUMsOEJBQThCLDBCQUEwQixLQUFLLHFDQUFxQyx5QkFBeUIsZ0JBQWdCLGFBQWEsNENBQTRDLEtBQUssZUFBZSxtQkFBbUIsNkJBQTZCLDBCQUEwQix1REFBdUQsdUJBQXVCLG1CQUFtQiwyQkFBMkIsS0FBSyxxQkFBcUIscUNBQXFDLHNEQUFzRCxnQ0FBZ0MscUJBQXFCLEtBQUssMkJBQTJCLHNCQUFzQix1QkFBdUIsS0FBSyxnQkFBZ0IsaUJBQWlCLEtBQUssMkJBQTJCLG9CQUFvQixtQkFBbUIsdUJBQXVCLG1DQUFtQyw0QkFBNEIsS0FBSyx5QkFBeUIsbUJBQW1CLG9CQUFvQiwwQkFBMEIsZUFBZSwwQkFBMEIsS0FBSyx1QkFBdUIsbUJBQW1CLEtBQUssV0FBVyxzQkFBc0IsMEJBQTBCLEtBQUssaUNBQWlDLG9CQUFvQiw2QkFBNkIsMEJBQTBCLEtBQUssMkJBQTJCLG9CQUFvQixtQkFBbUIsS0FBSyxlQUFlLG1CQUFtQixrQkFBa0IseUJBQXlCLEtBQUssK0JBQStCLG9DQUFvQyxvQkFBb0IsOEJBQThCLEtBQUssZ0JBQWdCLDRCQUE0QiwwQkFBMEIsdUJBQXVCLGlCQUFpQixtQkFBbUIseUJBQXlCLDBCQUEwQixvQkFBb0IsbUJBQW1CLEtBQUssd0JBQXdCLHNCQUFzQiwwQkFBMEIsS0FBSyx3QkFBd0Isc0NBQXNDLG9CQUFvQixtQkFBbUIsbUNBQW1DLDRCQUE0QixLQUFLLDBCQUEwQixrQkFBa0Isb0JBQW9CLHdCQUF3QixLQUFLLGNBQWMsa0JBQWtCLG9CQUFvQix3QkFBd0IsS0FBSyxrQ0FBa0MsNEJBQTRCLEtBQUssY0FBYywwQkFBMEIsMEJBQTBCLHNCQUFzQixnQkFBZ0Isa0JBQWtCLHdCQUF3QixnQ0FBZ0Msc0JBQXNCLEtBQUssMEJBQTBCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixvQkFBb0Isd0JBQXdCLEtBQUssNkJBQTZCLDRCQUE0QixrQkFBa0Isc0JBQXNCLHVCQUF1QixLQUFLLHlCQUF5QixzQkFBc0IsS0FBSywyQkFBMkIsNkJBQTZCLHNCQUFzQixLQUFLLGtCQUFrQixvQkFBb0IsbUJBQW1CLGdDQUFnQyxnQkFBZ0Isd0JBQXdCLHNCQUFzQixrQkFBa0IsS0FBSyx1QkFBdUIsbUJBQW1CLG9CQUFvQixzQkFBc0IsMEJBQTBCLDhCQUE4QixnQkFBZ0IsS0FBSyx3QkFBd0Isb0JBQW9CLHNCQUFzQixrQkFBa0IscUNBQXFDLEtBQUssa0JBQWtCLG9CQUFvQixxQkFBcUIsNkJBQTZCLEtBQUssbUJBQW1CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLG9CQUFvQixrQkFBa0IseUJBQXlCLDBCQUEwQiwyQkFBMkIsa0RBQWtELHlCQUF5QixzQkFBc0IsS0FBSyx1QkFBdUIsb0JBQW9CLGtDQUFrQywwQkFBMEIsbUJBQW1CLEtBQUssaUJBQWlCLG1CQUFtQixvQkFBb0IsZ0JBQWdCLEtBQUsseUJBQXlCLGlCQUFpQixLQUFLLDZCQUE2QixrQkFBa0IsbURBQW1ELG1CQUFtQixvQkFBb0IsNkJBQTZCLEtBQUssY0FBYyxtQkFBbUIsb0JBQW9CLGVBQWUsNkJBQTZCLEtBQUssZUFBZSxxQkFBcUIseUJBQXlCLDRCQUE0Qiw2QkFBNkIseUJBQXlCLDZCQUE2QixLQUFLLGtCQUFrQixxQkFBcUIseUJBQXlCLDRCQUE0Qiw2QkFBNkIseUJBQXlCLDZCQUE2QixtQkFBbUIsS0FBSyxpQkFBaUIsbUJBQW1CLGdDQUFnQyxtQkFBbUIseUJBQXlCLG9CQUFvQixtQkFBbUIseUJBQXlCLHNCQUFzQixLQUFLLHVCQUF1QixnQ0FBZ0MsS0FBSyxnREFBZ0QsaUJBQWlCLDBCQUEwQixLQUFLLGtEQUFrRCx3Q0FBd0MsS0FBSyxtREFBbUQsd0JBQXdCLHlCQUF5QixLQUFLLGVBQWUsb0JBQW9CLEtBQUssd0NBQXdDLHdCQUF3Qix1QkFBdUIsS0FBSyxtREFBbUQsY0FBYyx3QkFBd0Isd0JBQXdCLDJCQUEyQixrQ0FBa0MsT0FBTywwQkFBMEIsc0JBQXNCLHdCQUF3QiwrQkFBK0Isb0JBQW9CLE9BQU8sb0JBQW9CLHNCQUFzQix3QkFBd0IsK0JBQStCLE9BQU8sbUJBQW1CLHNCQUFzQixPQUFPLDJCQUEyQixvQkFBb0IsT0FBTyxxQkFBcUIsc0JBQXNCLGdDQUFnQyw0QkFBNEIsc0JBQXNCLG9CQUFvQiwyQkFBMkIsNEJBQTRCLDZCQUE2QixvREFBb0QsMkJBQTJCLE9BQU8sS0FBSyxXQUFXLG1GQUFtRixNQUFNLHFGQUFxRixXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLGdCQUFnQixVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sUUFBUSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxRQUFRLE9BQU8sYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLHkyQkFBeTJCLGdCQUFnQixpQkFBaUIsZ0JBQWdCLHNCQUFzQiwrQkFBK0IsS0FBSyxvTEFBb0wscUJBQXFCLEtBQUssbUJBQW1CLHVCQUF1QixLQUFLLDBCQUEwQixtQkFBbUIsS0FBSyw2RUFBNkUsb0JBQW9CLG9CQUFvQixLQUFLLGVBQWUsZ0NBQWdDLHdCQUF3QixLQUFLLHNDQUFzQyxnQkFBZ0IsaUJBQWlCLGdEQUFnRCw2Q0FBNkMsNENBQTRDLHdDQUF3QyxLQUFLLGNBQWMsZ0NBQWdDLHlDQUF5QywwQkFBMEIsNEJBQTRCLHFCQUFxQixxQkFBcUIsS0FBSyxjQUFjLHlCQUF5QixLQUFLLG9CQUFvQixvQkFBb0IsOEJBQThCLDBCQUEwQixLQUFLLHVCQUF1Qix1QkFBdUIsc0JBQXNCLDJCQUEyQixzQkFBc0IsS0FBSyw2QkFBNkIscUJBQXFCLEtBQUssZUFBZSx5QkFBeUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsMEJBQTBCLEtBQUsscUJBQXFCLHNCQUFzQixLQUFLLHlCQUF5QixpQkFBaUIsb0JBQW9CLHVCQUF1Qix5QkFBeUIsS0FBSyxxQkFBcUIseUJBQXlCLG1CQUFtQixLQUFLLHNCQUFzQiw0QkFBNEIsS0FBSyx3QkFBd0IseUJBQXlCLHFCQUFxQixLQUFLLDJCQUEyQixvQkFBb0IsOEJBQThCLEtBQUssbUJBQW1CLHlCQUF5QixtQkFBbUIsS0FBSyxlQUFlLG1CQUFtQix1QkFBdUIsS0FBSyxxQkFBcUIsc0JBQXNCLGlCQUFpQixxQkFBcUIsOEJBQThCLDBCQUEwQixLQUFLLHlCQUF5QiwwQkFBMEIsMEJBQTBCLDJCQUEyQiwwQkFBMEIsOEJBQThCLDBCQUEwQixLQUFLLGdCQUFnQixvQkFBb0Isc0JBQXNCLDhCQUE4QiwwQkFBMEIsZ0JBQWdCLG9CQUFvQixLQUFLLHVCQUF1QixvQkFBb0Isa0JBQWtCLDhCQUE4Qix1QkFBdUIsS0FBSyxlQUFlLHlCQUF5Qix3QkFBd0IsS0FBSyxpQkFBaUIsbUJBQW1CLGtCQUFrQix3QkFBd0IsK0NBQStDLDBEQUEwRCxLQUFLLGtCQUFrQix5QkFBeUIsb0JBQW9CLGdDQUFnQywwQkFBMEIsS0FBSyxrQkFBa0Isb0JBQW9CLDhCQUE4QixtQkFBbUIsMEJBQTBCLEtBQUssZ0JBQWdCLHNCQUFzQixLQUFLLDBCQUEwQixzQkFBc0Isb0JBQW9CLG1CQUFtQix3QkFBd0Isa0NBQWtDLG1CQUFtQixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsS0FBSyxnQkFBZ0Isa0JBQWtCLGlCQUFpQix5QkFBeUIseUJBQXlCLGdDQUFnQyxLQUFLLHVCQUF1Qix3QkFBd0Isb0JBQW9CLDRSQUE0UixzQ0FBc0Msb0JBQW9CLDZCQUE2Qiw2QkFBNkIsZ0JBQWdCLG9CQUFvQixtQ0FBbUMsOEJBQThCLDBCQUEwQixLQUFLLHFDQUFxQyx5QkFBeUIsZ0JBQWdCLGFBQWEsNENBQTRDLEtBQUssZUFBZSxtQkFBbUIsNkJBQTZCLDBCQUEwQix1REFBdUQsdUJBQXVCLG1CQUFtQiwyQkFBMkIsS0FBSyxxQkFBcUIscUNBQXFDLHNEQUFzRCxnQ0FBZ0MscUJBQXFCLEtBQUssMkJBQTJCLHNCQUFzQix1QkFBdUIsS0FBSyxnQkFBZ0IsaUJBQWlCLEtBQUssMkJBQTJCLG9CQUFvQixtQkFBbUIsdUJBQXVCLG1DQUFtQyw0QkFBNEIsS0FBSyx5QkFBeUIsbUJBQW1CLG9CQUFvQiwwQkFBMEIsZUFBZSwwQkFBMEIsS0FBSyx1QkFBdUIsbUJBQW1CLEtBQUssV0FBVyxzQkFBc0IsMEJBQTBCLEtBQUssaUNBQWlDLG9CQUFvQiw2QkFBNkIsMEJBQTBCLEtBQUssMkJBQTJCLG9CQUFvQixtQkFBbUIsS0FBSyxlQUFlLG1CQUFtQixrQkFBa0IseUJBQXlCLEtBQUssK0JBQStCLG9DQUFvQyxvQkFBb0IsOEJBQThCLEtBQUssZ0JBQWdCLDRCQUE0QiwwQkFBMEIsdUJBQXVCLGlCQUFpQixtQkFBbUIseUJBQXlCLDBCQUEwQixvQkFBb0IsbUJBQW1CLEtBQUssd0JBQXdCLHNCQUFzQiwwQkFBMEIsS0FBSyx3QkFBd0Isc0NBQXNDLG9CQUFvQixtQkFBbUIsbUNBQW1DLDRCQUE0QixLQUFLLDBCQUEwQixrQkFBa0Isb0JBQW9CLHdCQUF3QixLQUFLLGNBQWMsa0JBQWtCLG9CQUFvQix3QkFBd0IsS0FBSyxrQ0FBa0MsNEJBQTRCLEtBQUssY0FBYywwQkFBMEIsMEJBQTBCLHNCQUFzQixnQkFBZ0Isa0JBQWtCLHdCQUF3QixnQ0FBZ0Msc0JBQXNCLEtBQUssMEJBQTBCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixvQkFBb0Isd0JBQXdCLEtBQUssNkJBQTZCLDRCQUE0QixrQkFBa0Isc0JBQXNCLHVCQUF1QixLQUFLLHlCQUF5QixzQkFBc0IsS0FBSywyQkFBMkIsNkJBQTZCLHNCQUFzQixLQUFLLGtCQUFrQixvQkFBb0IsbUJBQW1CLGdDQUFnQyxnQkFBZ0Isd0JBQXdCLHNCQUFzQixrQkFBa0IsS0FBSyx1QkFBdUIsbUJBQW1CLG9CQUFvQixzQkFBc0IsMEJBQTBCLDhCQUE4QixnQkFBZ0IsS0FBSyx3QkFBd0Isb0JBQW9CLHNCQUFzQixrQkFBa0IscUNBQXFDLEtBQUssa0JBQWtCLG9CQUFvQixxQkFBcUIsNkJBQTZCLEtBQUssbUJBQW1CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLG9CQUFvQixrQkFBa0IseUJBQXlCLDBCQUEwQiwyQkFBMkIsa0RBQWtELHlCQUF5QixzQkFBc0IsS0FBSyx1QkFBdUIsb0JBQW9CLGtDQUFrQywwQkFBMEIsbUJBQW1CLEtBQUssaUJBQWlCLG1CQUFtQixvQkFBb0IsZ0JBQWdCLEtBQUsseUJBQXlCLGlCQUFpQixLQUFLLDZCQUE2QixrQkFBa0IsbURBQW1ELG1CQUFtQixvQkFBb0IsNkJBQTZCLEtBQUssY0FBYyxtQkFBbUIsb0JBQW9CLGVBQWUsNkJBQTZCLEtBQUssZUFBZSxxQkFBcUIseUJBQXlCLDRCQUE0Qiw2QkFBNkIseUJBQXlCLDZCQUE2QixLQUFLLGtCQUFrQixxQkFBcUIseUJBQXlCLDRCQUE0Qiw2QkFBNkIseUJBQXlCLDZCQUE2QixtQkFBbUIsS0FBSyxpQkFBaUIsbUJBQW1CLGdDQUFnQyxtQkFBbUIseUJBQXlCLG9CQUFvQixtQkFBbUIseUJBQXlCLHNCQUFzQixLQUFLLHVCQUF1QixnQ0FBZ0MsS0FBSyxnREFBZ0QsaUJBQWlCLDBCQUEwQixLQUFLLGtEQUFrRCx3Q0FBd0MsS0FBSyxtREFBbUQsd0JBQXdCLHlCQUF5QixLQUFLLGVBQWUsb0JBQW9CLEtBQUssd0NBQXdDLHdCQUF3Qix1QkFBdUIsS0FBSyxtREFBbUQsY0FBYyx3QkFBd0Isd0JBQXdCLDJCQUEyQixrQ0FBa0MsT0FBTywwQkFBMEIsc0JBQXNCLHdCQUF3QiwrQkFBK0Isb0JBQW9CLE9BQU8sb0JBQW9CLHNCQUFzQix3QkFBd0IsK0JBQStCLE9BQU8sbUJBQW1CLHNCQUFzQixPQUFPLDJCQUEyQixvQkFBb0IsT0FBTyxxQkFBcUIsc0JBQXNCLGdDQUFnQyw0QkFBNEIsc0JBQXNCLG9CQUFvQiwyQkFBMkIsNEJBQTRCLDZCQUE2QixvREFBb0QsMkJBQTJCLE9BQU8sS0FBSyx1QkFBdUI7QUFDN2gxQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNmc0I7QUFDYTtBQUNuQztBQUNBLHFCQUFxQix1REFBRztBQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNHd0I7QUFDUztBQUNqQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0Isa0JBQWtCLGlCQUFpQjtBQUN0RTtBQUNBO0FBQ0EsUUFBUSwyREFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0EsUUFBUSwyREFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkRBQXNCO0FBQ2xDO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNCQUFzQixPQUFPLHNCQUFzQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QyxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzQkFBc0IsT0FBTyxzQkFBc0Isb0JBQW9CLEtBQUs7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDhEQUFlO0FBQ3pCLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzQkFBc0IsT0FBTyxzQkFBc0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw2Q0FBNkM7QUFDN0MsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxzQkFBc0IsT0FBTyxzQkFBc0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsV0FBVywyREFBWTtBQUN2QjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsc0JBQXNCLE9BQU8sc0JBQXNCLG9CQUFvQixLQUFLO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwyREFBWTtBQUN0QjtBQUNBLE9BQU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6S0E7QUFDQTtBQUNBO0FBQ0E7QUFHRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOdUQ7QUFDekQ7QUFDQTtBQUNBLEVBQUUsb0RBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHNCQUFzQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsaUJBQWlCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNJQUFzSSxnQkFBZ0I7QUFDdEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDhCQUE4QjtBQUM3RDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBc0I7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHlCQUF5QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG9CQUFvQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGdCQUFnQiw2Q0FBNkM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFlBQVk7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxjQUFjLElBQUksYUFBYTtBQUMvRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDhEQUF5QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFVRSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9BcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL0RvbS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvRnVuY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiovXFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5LFxcclxcbmRpdixcXHJcXG5zcGFuLFxcclxcbmFwcGxldCxcXHJcXG5vYmplY3QsXFxyXFxuaWZyYW1lLFxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2LFxcclxcbnAsXFxyXFxuYmxvY2txdW90ZSxcXHJcXG5wcmUsXFxyXFxuYSxcXHJcXG5hYmJyLFxcclxcbmFjcm9ueW0sXFxyXFxuYWRkcmVzcyxcXHJcXG5iaWcsXFxyXFxuY2l0ZSxcXHJcXG5jb2RlLFxcclxcbmRlbCxcXHJcXG5kZm4sXFxyXFxuZW0sXFxyXFxuaW1nLFxcclxcbmlucyxcXHJcXG5rYmQsXFxyXFxucSxcXHJcXG5zLFxcclxcbnNhbXAsXFxyXFxuc21hbGwsXFxyXFxuc3RyaWtlLFxcclxcbnN0cm9uZyxcXHJcXG5zdWIsXFxyXFxuc3VwLFxcclxcbnR0LFxcclxcbnZhcixcXHJcXG5iLFxcclxcbnUsXFxyXFxuaSxcXHJcXG5jZW50ZXIsXFxyXFxuZGwsXFxyXFxuZHQsXFxyXFxuZGQsXFxyXFxub2wsXFxyXFxudWwsXFxyXFxubGksXFxyXFxuZmllbGRzZXQsXFxyXFxuZm9ybSxcXHJcXG5sYWJlbCxcXHJcXG5sZWdlbmQsXFxyXFxudGFibGUsXFxyXFxuY2FwdGlvbixcXHJcXG50Ym9keSxcXHJcXG50Zm9vdCxcXHJcXG50aGVhZCxcXHJcXG50cixcXHJcXG50aCxcXHJcXG50ZCxcXHJcXG5hcnRpY2xlLFxcclxcbmFzaWRlLFxcclxcbmNhbnZhcyxcXHJcXG5kZXRhaWxzLFxcclxcbmVtYmVkLFxcclxcbmZpZ3VyZSxcXHJcXG5maWdjYXB0aW9uLFxcclxcbmZvb3RlcixcXHJcXG5oZWFkZXIsXFxyXFxuaGdyb3VwLFxcclxcbm1lbnUsXFxyXFxubmF2LFxcclxcbm91dHB1dCxcXHJcXG5ydWJ5LFxcclxcbnNlY3Rpb24sXFxyXFxuc3VtbWFyeSxcXHJcXG50aW1lLFxcclxcbm1hcmssXFxyXFxuYXVkaW8sXFxyXFxudmlkZW8ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsXFxyXFxuYXNpZGUsXFxyXFxuZGV0YWlscyxcXHJcXG5maWdjYXB0aW9uLFxcclxcbmZpZ3VyZSxcXHJcXG5mb290ZXIsXFxyXFxuaGVhZGVyLFxcclxcbmhncm91cCxcXHJcXG5tZW51LFxcclxcbm5hdixcXHJcXG5zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5vbCxcXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlLFxcclxcbnEge1xcclxcbiAgcXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlOjpiZWZvcmUsXFxyXFxuYmxvY2txdW90ZTo6YWZ0ZXIsXFxyXFxucTo6YmVmb3JlLFxcclxcbnE6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgY29udGVudDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XFxyXFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudDtcXHJcXG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjJlOTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUnViaWtcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcXHJcXG4gIGNvbG9yOiAjNmM3NTdkO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW1zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbXMgbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW1zIGxpOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZTY3ZTIyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtZm9vZCBpbWcge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMTUlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC10aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXRpdGxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheS1jb21tZW50cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIC5uYW1lIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gLmluc2lnaHRzIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyMCU7XFxyXFxuICBwYWRkaW5nLXRvcDogMC44cmVtO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG4gIG1hcmdpbjogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbGlua3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBib3R0b206IDFyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgN3B4IDNweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpY2VuY2Uge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3Bpbm5lciB7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBtYXJnaW4tdG9wOiAtMjNweDtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAge1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhlYWRlciB7XFxyXFxuICAtLXN0cmlwZTogI2NmZDhkYztcXHJcXG4gIC0tYmc6ICNlMWUxZTE7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kOlxcclxcbiAgICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFlMWUxIDI1JSwgdHJhbnNwYXJlbnQgMjUlKSAtNTBweCAwLFxcclxcbiAgICBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjZTFlMWUxIDI1JSwgdHJhbnNwYXJlbnQgMjUlKSAtNTBweCAwLFxcclxcbiAgICBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZTFlMWUxIDI1JSwgdHJhbnNwYXJlbnQgMjUlKSxcXHJcXG4gICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZTFlMWUxIDI1JSwgdHJhbnNwYXJlbnQgMjUlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0cmlwZSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhlYWRlciA+IC5pbWctcG9wcG9wIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IDIwcHggd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAyLjRyZW0gNC44cmVtIHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMnJlbSk7XFxyXFxuICBib3gtc2hhZG93OiAwIDMuMnJlbSA2LjRyZW0gcmdiYSgwLCAwLCAwLCAwLjA2KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjdlMjI7XFxyXFxuICBjb2xvcjogI2U2ZTZlNjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtZGVzY3JpcHRpb24ge1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VkIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5pbWctcG9wY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogMjMwcHg7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnNpbmdsZS1jb21tZW50IHtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZ2FwOiA2cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYiB7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2luZ2xlLXByb2R1Y3QtZXhhbXBsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5leGFtcGxlLXByb2R1Y3RzIHtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi51c2VyIHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLXBvcGNvbnRhaW5lciBpbWcge1xcclxcbiAgdHJhbnNmb3JtOiBza2V3KDBkZWcsIC0xM2RlZyk7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgbWFyZ2luOiAtMzVweCAwIDAgLTcwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbWdleCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LXNpemU6IDA7XFxyXFxuICBtYXJnaW46IDMwcHggMCAwIDA7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYzhjMmMyO1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWV4YW1wbGUge1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1jb250YWluZXIge1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcXHJcXG4gIGhlaWdodDogMjMwcHg7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1oZWFkZXIgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNvbnRhaW5lciBpbWc6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFnIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlNjdlMjI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAycHggMTBweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgbWluLWhlaWdodDogMjUwcHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1jb250YWluZXIgaDMge1xcclxcbiAgbWFyZ2luOiAyMHB4IDAgMTBweCAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQ6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtY29tbWVudDpob3ZlciB7XFxyXFxuICBjb2xvcjogcmdiKDAsIDg5LCAyMzIpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IxYTlhMztcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5pbnRlcmFjdGlvbnMge1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWRldGFpbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWF4LXdpZHRoOiA3MCU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VCdG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNzBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLXRleHQge1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmNjY2M0ZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBtYXJnaW46IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZXMge1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnRzIHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItY29tbWVudHMge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMSwgMjE4LCAyMTgsIDAuNDUzKTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiNuYW1lIHtcXHJcXG4gIG1heC13aWR0aDogNTAlO1xcclxcbiAgcGFkZGluZzogMTJweCAyMHB4O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50IHtcXHJcXG4gIG1heC13aWR0aDogODAlO1xcclxcbiAgcGFkZGluZzogMTJweCAyMHB4O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcXHJcXG4gIG1hcmdpbjogOHB4IDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU3JvbGwgQmFyICovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogM3B4O1xcclxcbiAgYmFja2dyb3VuZDogI2I5YjliOTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVHJhY2sgKi9cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggI2M4YzhjODtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGFuZGxlICovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1wb3Bob2xkcG9wID4gLmltZ2V4ID4gaW1nIHtcXHJcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgLnBvcHVwIHtcXHJcXG4gICAgbWF4LWhlaWdodDogODAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmltYWdlcyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtY29tbWVudHMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jbG9zZUJ0biB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICB3aWR0aDogODBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCOztBQUVBLGdEQUFnRDtBQUNoRDs7Ozs7Ozs7Ozs7RUFXRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7Ozs7RUFJRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVix5Q0FBeUM7RUFDekMsc0NBQXNDO0VBQ3RDLHFDQUFxQztFQUNyQyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIs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O0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLGNBQWM7QUFDZDtFQUNFLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUEsVUFBVTtBQUNWO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBLFdBQVc7QUFDWDtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsMkNBQTJDO0lBQzNDLGtCQUFrQjtFQUNwQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXFxyXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxyXFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXHJcXG4qL1xcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSxcXHJcXG5kaXYsXFxyXFxuc3BhbixcXHJcXG5hcHBsZXQsXFxyXFxub2JqZWN0LFxcclxcbmlmcmFtZSxcXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNixcXHJcXG5wLFxcclxcbmJsb2NrcXVvdGUsXFxyXFxucHJlLFxcclxcbmEsXFxyXFxuYWJicixcXHJcXG5hY3JvbnltLFxcclxcbmFkZHJlc3MsXFxyXFxuYmlnLFxcclxcbmNpdGUsXFxyXFxuY29kZSxcXHJcXG5kZWwsXFxyXFxuZGZuLFxcclxcbmVtLFxcclxcbmltZyxcXHJcXG5pbnMsXFxyXFxua2JkLFxcclxcbnEsXFxyXFxucyxcXHJcXG5zYW1wLFxcclxcbnNtYWxsLFxcclxcbnN0cmlrZSxcXHJcXG5zdHJvbmcsXFxyXFxuc3ViLFxcclxcbnN1cCxcXHJcXG50dCxcXHJcXG52YXIsXFxyXFxuYixcXHJcXG51LFxcclxcbmksXFxyXFxuY2VudGVyLFxcclxcbmRsLFxcclxcbmR0LFxcclxcbmRkLFxcclxcbm9sLFxcclxcbnVsLFxcclxcbmxpLFxcclxcbmZpZWxkc2V0LFxcclxcbmZvcm0sXFxyXFxubGFiZWwsXFxyXFxubGVnZW5kLFxcclxcbnRhYmxlLFxcclxcbmNhcHRpb24sXFxyXFxudGJvZHksXFxyXFxudGZvb3QsXFxyXFxudGhlYWQsXFxyXFxudHIsXFxyXFxudGgsXFxyXFxudGQsXFxyXFxuYXJ0aWNsZSxcXHJcXG5hc2lkZSxcXHJcXG5jYW52YXMsXFxyXFxuZGV0YWlscyxcXHJcXG5lbWJlZCxcXHJcXG5maWd1cmUsXFxyXFxuZmlnY2FwdGlvbixcXHJcXG5mb290ZXIsXFxyXFxuaGVhZGVyLFxcclxcbmhncm91cCxcXHJcXG5tZW51LFxcclxcbm5hdixcXHJcXG5vdXRwdXQsXFxyXFxucnVieSxcXHJcXG5zZWN0aW9uLFxcclxcbnN1bW1hcnksXFxyXFxudGltZSxcXHJcXG5tYXJrLFxcclxcbmF1ZGlvLFxcclxcbnZpZGVvIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLFxcclxcbmFzaWRlLFxcclxcbmRldGFpbHMsXFxyXFxuZmlnY2FwdGlvbixcXHJcXG5maWd1cmUsXFxyXFxuZm9vdGVyLFxcclxcbmhlYWRlcixcXHJcXG5oZ3JvdXAsXFxyXFxubWVudSxcXHJcXG5uYXYsXFxyXFxuc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxub2wsXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYmxvY2txdW90ZSxcXHJcXG5xIHtcXHJcXG4gIHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYmxvY2txdW90ZTo6YmVmb3JlLFxcclxcbmJsb2NrcXVvdGU6OmFmdGVyLFxcclxcbnE6OmJlZm9yZSxcXHJcXG5xOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICBib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XFxyXFxuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGYyZTk7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJ1YmlrXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XFxyXFxuICBjb2xvcjogIzZjNzU3ZDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW1zIGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW4tbGVmdDogNSU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtcyBsaTpob3ZlciB7XFxyXFxuICBjb2xvcjogI2U2N2UyMjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWZvb2QgaW1nIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtdGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24ge1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC10aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktY29tbWVudHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW0ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSAubmFtZSB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIC5pbnNpZ2h0cyB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMjAlO1xcclxcbiAgcGFkZGluZy10b3A6IDAuOHJlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBtYXJnaW46IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLWxpbmtzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgYm90dG9tOiAxcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDFyZW0gYXV0bztcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDdweCAzcHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi5saWNlbmNlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNwaW5uZXIge1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgbWFyZ2luLXRvcDogLTIzcHg7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIHtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1oZWFkZXIge1xcclxcbiAgLS1zdHJpcGU6ICNjZmQ4ZGM7XFxyXFxuICAtLWJnOiAjZTFlMWUxO1xcclxcblxcclxcbiAgYmFja2dyb3VuZDpcXHJcXG4gICAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZTFlMSAyNSUsIHRyYW5zcGFyZW50IDI1JSkgLTUwcHggMCxcXHJcXG4gICAgbGluZWFyLWdyYWRpZW50KDIyNWRlZywgI2UxZTFlMSAyNSUsIHRyYW5zcGFyZW50IDI1JSkgLTUwcHggMCxcXHJcXG4gICAgbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2UxZTFlMSAyNSUsIHRyYW5zcGFyZW50IDI1JSksXFxyXFxuICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2UxZTFlMSAyNSUsIHRyYW5zcGFyZW50IDI1JSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdHJpcGUpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1oZWFkZXIgPiAuaW1nLXBvcHBvcCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAyMHB4IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMi40cmVtIDQuOHJlbSByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQ6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjJyZW0pO1xcclxcbiAgYm94LXNoYWRvdzogMCAzLjJyZW0gNi40cmVtIHJnYmEoMCwgMCwgMCwgMC4wNik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyO1xcclxcbiAgY29sb3I6ICNlNmU2ZTY7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWRlc2NyaXB0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5saWtlZCB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLXBvcGNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDIzMHB4O1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5zaW5nbGUtY29tbWVudCB7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGdhcDogNnB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmIge1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpbmdsZS1wcm9kdWN0LWV4YW1wbGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZXhhbXBsZS1wcm9kdWN0cyB7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXNlciB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1wb3Bjb250YWluZXIgaW1nIHtcXHJcXG4gIHRyYW5zZm9ybTogc2tldygwZGVnLCAtMTNkZWcpO1xcclxcbiAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gIG1hcmdpbjogLTM1cHggMCAwIC03MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nZXgge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1zaXplOiAwO1xcclxcbiAgbWFyZ2luOiAzMHB4IDAgMCAwO1xcclxcbiAgYmFja2dyb3VuZDogI2M4YzJjMjtcXHJcXG4gIGhlaWdodDogMTUwcHg7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1leGFtcGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5pbWctY29udGFpbmVyIHtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XFxyXFxuICBoZWlnaHQ6IDIzMHB4O1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaGVhZGVyIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1jb250YWluZXIgaW1nOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhZyB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZTY3ZTIyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMnB4IDEwcHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtY29udGFpbmVyIGgzIHtcXHJcXG4gIG1hcmdpbjogMjBweCAwIDEwcHggMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0OmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWNvbW1lbnQ6aG92ZXIge1xcclxcbiAgY29sb3I6IHJnYigwLCA4OSwgMjMyKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMWE5YTM7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1JTtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uaW50ZXJhY3Rpb25zIHtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1heC13aWR0aDogNzAlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlQnRuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy10ZXh0IHtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZjY2NjNGY7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgbWFyZ2luOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2VzIHtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50cyB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWNvbW1lbnRzIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjEsIDIxOCwgMjE4LCAwLjQ1Myk7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4jbmFtZSB7XFxyXFxuICBtYXgtd2lkdGg6IDUwJTtcXHJcXG4gIHBhZGRpbmc6IDEycHggMjBweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudCB7XFxyXFxuICBtYXgtd2lkdGg6IDgwJTtcXHJcXG4gIHBhZGRpbmc6IDEycHggMjBweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0IHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XFxyXFxuICBtYXJnaW46IDhweCAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XFxyXFxufVxcclxcblxcclxcbi8qIFNyb2xsIEJhciAqL1xcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDNweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNiOWI5Yjk7XFxyXFxufVxcclxcblxcclxcbi8qIFRyYWNrICovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4ICNjOGM4Yzg7XFxyXFxufVxcclxcblxcclxcbi8qIEhhbmRsZSAqL1xcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbWctcG9waG9sZHBvcCA+IC5pbWdleCA+IGltZyB7XFxyXFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXHJcXG4gIG1heC13aWR0aDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gIC5wb3B1cCB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDgwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbWFnZXMge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLWNvbW1lbnRzIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2xvc2VCdG4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBBcGkgZnJvbSAnLi9tb2R1bGVzL0FwaS5qcyc7XHJcblxyXG5jb25zdCBBcGlDYWxscyA9IG5ldyBBcGkoKTtcclxuQXBpQ2FsbHMuR2V0TWVhbHMoKTtcclxuIiwiaW1wb3J0IHtcclxuICBEaXNwbGF5UG9wdXAsXHJcbiAgRGlzcGxheUNhcmRzLFxyXG4gIENvdW50ZXIsXHJcbiAgQ291bnRDb21tZW50LFxyXG4gIERpc3BsYXlDb21tZW50cyxcclxuICBDb3VudGVyTGlrZXMsXHJcbn0gZnJvbSAnLi9GdW5jdGlvbnMuanMnO1xyXG5pbXBvcnQgeyBtb2RhbCB9IGZyb20gJy4vRG9tLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLkludm9sdmVtZW50QXBpRVAgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpLyc7XHJcbiAgICB0aGlzLkludm9sdmVtZW50QXBwSUQgPSAndVRnUWVrazFwdmtuakpOZ2lkMDInO1xyXG4gICAgdGhpcy5GcmVlTWVhbEVQID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvJztcclxuICB9XHJcblxyXG4gIEdldE1lYWxJbmZvcyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgYXdhaXQgZmV0Y2goYCR7dGhpcy5GcmVlTWVhbEVQfS8xL2NhdGVnb3JpZXMucGhwYClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAganNvbi5jYXRlZ29yaWVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgIGlmIChpdGVtLmlkQ2F0ZWdvcnkgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0RXhhbXBsZXMoaXRlbSwgaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBHZXRFeGFtcGxlcyA9IGFzeW5jIChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb250YWluZXInKTtcclxuICAgIG1vZGFsLmlubmVySFRNTCA9ICcgPGRpdiBjbGFzcz1cInNwaW5uZXJcIiA+PGkgY2xhc3M9XCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluIGZhLTV4XCI+PC9pPjwvZGl2Pic7XHJcbiAgICBhd2FpdCBmZXRjaChgJHt0aGlzLkZyZWVNZWFsRVB9LzEvZmlsdGVyLnBocD9jPSR7aXRlbS5zdHJDYXRlZ29yeX1gKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICBEaXNwbGF5UG9wdXAoaXRlbSwganNvbik7XHJcbiAgICAgICAgdGhpcy5Db3VudENvbW1lbnRzKGl0ZW0uaWRDYXRlZ29yeSk7XHJcbiAgICAgICAgdGhpcy5EaXNwbGF5Q29tbShpdGVtLmlkQ2F0ZWdvcnkpO1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcclxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWU7XHJcblxyXG4gICAgICAgICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50JykudmFsdWU7XHJcbiAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0JykuaWQ7XHJcbiAgICAgICAgICBpZiAodXNlcm5hbWUgJiYgY29tbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdDb21tZW50ID0ge1xyXG4gICAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgIGNvbW1lbnQsXHJcbiAgICAgICAgICAgICAgaXRlbV9pZDogYnV0dG9uLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLkFkZENvbW1lbnQobmV3Q29tbWVudCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIEdldFN0YXRzID0gYXN5bmMgKHByb2R1Y3RzKSA9PiB7XHJcbiAgICBDb3VudGVyKHByb2R1Y3RzKTtcclxuICAgIHRoaXMuQ291bnRMaWtlcygpO1xyXG4gIH07XHJcblxyXG4gIEdldE1lYWxzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzJykuaW5uZXJIVE1MID0gJyA8ZGl2IGNsYXNzPVwic3Bpbm5lclwiID48aSBjbGFzcz1cImZhcyBmYS1zcGlubmVyIGZhLXNwaW4gZmEtNXhcIj48L2k+PC9kaXY+JztcclxuICAgIGF3YWl0IGZldGNoKGAke3RoaXMuRnJlZU1lYWxFUH0vMS9jYXRlZ29yaWVzLnBocGApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgIERpc3BsYXlDYXJkcyhqc29uLmNhdGVnb3JpZXMpO1xyXG4gICAgICAgIHRoaXMuR2V0U3RhdHMoanNvbi5jYXRlZ29yaWVzKTtcclxuICAgICAgICBjb25zdCBsaWtlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLWhlYXJ0Jyk7XHJcbiAgICAgICAgY29uc3QgbGlrZUNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2VzLWNvdW50ZXInKTtcclxuICAgICAgICBsaWtlQnRuLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2xpa2VkJykpIHtcclxuICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnbGlrZWQnKTtcclxuICAgICAgICAgICAgICBsaWtlQ291bnQuZm9yRWFjaCgoY291bnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb3VudC5pZCA9PT0gYnRuLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuQWRkTGlrZShjb3VudC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvdW50LmlubmVySFRNTCA9IE51bWJlcihjb3VudC5pbm5lclRleHQpICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50Jyk7XHJcbiAgICAgICAgY29tbWVudC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0TWVhbEluZm9zKGl0ZW0uaWQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIEFkZENvbW1lbnQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnQnKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpLmlubmVySFRNTCA9ICcgPGkgY2xhc3M9XCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluIGZhLTF4XCI+PC9pPic7XHJcbiAgICBhd2FpdCBmZXRjaChcclxuICAgICAgYCR7dGhpcy5JbnZvbHZlbWVudEFwaUVQfWFwcHMvJHt0aGlzLkludm9sdmVtZW50QXBwSUR9L2NvbW1lbnRzYCxcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICkudGhlbigoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudCcpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpLmlubmVySFRNTCA9ICdzdWJtaXQnO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLkRpc3BsYXlDb21tKGRhdGEuaXRlbV9pZCk7XHJcbiAgfTtcclxuXHJcbiAgRGlzcGxheUNvbW0gPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgY29uc3QgQ29tbWVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMnKTtcclxuICAgIENvbW1lbnRMaXN0LmlubmVySFRNTCA9ICcgPGkgY2xhc3M9XCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluIGZhLTJ4XCI+PC9pPic7XHJcbiAgICBhd2FpdCBmZXRjaChcclxuICAgICAgYCR7dGhpcy5JbnZvbHZlbWVudEFwaUVQfWFwcHMvJHt0aGlzLkludm9sdmVtZW50QXBwSUR9L2NvbW1lbnRzP2l0ZW1faWQ9JHtkYXRhfWAsXHJcbiAgICApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgIGlmIChqc29uLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xyXG4gICAgICAgICAgRGlzcGxheUNvbW1lbnRzKGpzb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBDb21tZW50TGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIEFkZExpa2UgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGF3YWl0IGZldGNoKFxyXG4gICAgICBgJHt0aGlzLkludm9sdmVtZW50QXBpRVB9YXBwcy8ke3RoaXMuSW52b2x2ZW1lbnRBcHBJRH0vbGlrZXMvYCxcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGl0ZW1faWQ6IGlkLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgIENvdW50TGlrZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgYXdhaXQgZmV0Y2goXHJcbiAgICAgICBgJHt0aGlzLkludm9sdmVtZW50QXBpRVB9YXBwcy8ke3RoaXMuSW52b2x2ZW1lbnRBcHBJRH0vbGlrZXMvYCxcclxuICAgICApLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgICBpZiAoanNvbi5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcclxuICAgICAgICAgICBDb3VudGVyTGlrZXMoanNvbik7XHJcbiAgICAgICAgIH1cclxuICAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICBDb3VudENvbW1lbnRzID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIGF3YWl0IGZldGNoKFxyXG4gICAgICBgJHt0aGlzLkludm9sdmVtZW50QXBpRVB9YXBwcy8ke3RoaXMuSW52b2x2ZW1lbnRBcHBJRH0vY29tbWVudHM/aXRlbV9pZD0ke2RhdGF9YCxcclxuICAgIClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgaWYgKGpzb24uY29uc3RydWN0b3IgPT09IEFycmF5KSB7XHJcbiAgICAgICAgICBDb3VudENvbW1lbnQoanNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9O1xyXG59XHJcbiIsImNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWNvbnRhaW5lcicpO1xyXG5jb25zdCBjb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnQnKTtcclxuY29uc3QgQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMnKTtcclxuY29uc3QgUHJvZHVjdHNDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtY291bnRlcicpO1xyXG5leHBvcnQge1xyXG4gIG1vZGFsLCBQcm9kdWN0c0NvdW50ZXIsIGNvbW1lbnQsIENhcmRzLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBtb2RhbCwgQ2FyZHMsIFByb2R1Y3RzQ291bnRlciB9IGZyb20gJy4vRG9tLmpzJztcclxuXHJcbmZ1bmN0aW9uIERpc3BsYXlQb3B1cChkYXRhLCBleGFtcGxlcykge1xyXG4gIG1vZGFsLmlubmVySFRNTCA9IGAgPGRpdiBjbGFzcz1cImNsb3NlQnRuXCI+WDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJwb3B1cFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtaGVhZGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZy1wb3Bjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZy1wb3Bob2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2RhdGEuc3RyQ2F0ZWdvcnlUaHVtYn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC10aXRsZVwiPiR7ZGF0YS5zdHJDYXRlZ29yeX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlscy10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAke2RhdGEuc3RyQ2F0ZWdvcnlEZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1jb21tZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJjb21tZW50XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkNvbW1lbnRcIiByZXF1aXJlZC8+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1oZWFkZXJcIj48aW5wdXQgcmVxdWlyZWQgaWQ9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiAvPiA8YnV0dG9uIGNsYXNzPVwic3VibWl0XCIgaWQ9XCIke2RhdGEuaWRDYXRlZ29yeX1cIj5zdWJtaXQ8L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiQ29tbWVudC1jb3VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIENvbW1lbnRzKDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJjb21tZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgIDwvZGl2PmA7XHJcbiAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlcycpO1xyXG4gIGV4YW1wbGVzLm1lYWxzLnNsaWNlKDAsIDMpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3NpbmdsZS1wcm9kdWN0LWV4YW1wbGUnKTtcclxuICAgIGRpdi5pbm5lckhUTUwgPSBgIFxyXG4gICAgPGRpdiBjbGFzcz1cImltZy1wb3Bob2xkcG9wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImltZ2V4XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPSR7ZWxlbWVudC5zdHJNZWFsVGh1bWJ9PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHAgY2xhc3M9XCJ0aXRsZS1leGFtcGxlXCI+JHtlbGVtZW50LnN0ck1lYWwuc3Vic3RyKDAsIDE1KX08L3A+XHJcbmA7XHJcbiAgICBpbWFnZXMuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VCdG4nKTtcclxuXHJcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERpc3BsYXlDYXJkcyhkYXRhKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzJykuaW5uZXJIVE1MID0gJyc7XHJcbiAgZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBDYXJkcy5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtlbGVtZW50LnN0ckNhdGVnb3J5VGh1bWJ9XCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzID0gJ3RhZyc+JHtlbGVtZW50LnN0ckNhdGVnb3J5fTwvaDM+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImludGVyYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+PC9kaXY+ICAgICAgIDxkaXY+PGkgaWQ9XCIke1xyXG4gIGVsZW1lbnQuaWRDYXRlZ29yeVxyXG59XCIgY2xhc3M9XCJmYS1zb2xpZCBmYS1oZWFydCBmYS1sZ1wiPjwvaT4gPGIgaWQ9XCIke1xyXG4gIGVsZW1lbnQuaWRDYXRlZ29yeVxyXG59XCIgY2xhc3M9XCJsaWtlcy1jb3VudGVyXCI+PC9iPiA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzID1cIm1lYWwtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAke2VsZW1lbnQuc3RyQ2F0ZWdvcnlEZXNjcmlwdGlvbi5zdWJzdHIoMCwgNTApfS4uLlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7XHJcbiAgZWxlbWVudC5pZENhdGVnb3J5XHJcbn1cIiBjbGFzcz1cImJ1dHRvbiBjb21tZW50XCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jb21tZW50c1wiPjwvaT4gQ29tbWVudHM8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgYDtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlQ29tbWVudHMoZGF0YSkge1xyXG4gIGNvbnN0IG1zZyA9IGBUb3RhbCBDb21tZW50cygke2RhdGEubGVuZ3RofSlgO1xyXG4gIHJldHVybiBtc2c7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvdW50Q29tbWVudChkYXRhKSB7XHJcbiAgY29uc3QgQ29tbWVudENvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQ29tbWVudC1jb3VudGVyJyk7XHJcbiAgQ29tbWVudENvdW50ZXIuaW5uZXJIVE1MID0gY2FsY3VsYXRlQ29tbWVudHMoZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERpc3BsYXlDb21tZW50cyhkYXRhKSB7XHJcbiAgY29uc3QgY29tbWVudFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMnKTtcclxuICBsZXQgY29tbWVudCA9ICcnO1xyXG4gIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29tbWVudCArPSBgPGxpIGNsYXNzPVwic2luZ2xlLWNvbW1lbnRcIj5cclxuICAgICAgPGltZyBjbGFzcz1cInVzZXJcIiBzcmM9XCJodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2hvd3RvL2ltZ19hdmF0YXIucG5nXCIgYWx0PVwidXNlclwiID5cclxuICAgICAgPGIgY2xhc3M9XCJ1c2VyLWNvbW1lbnRcIj4ke2l0ZW0udXNlcm5hbWV9OiAke2l0ZW0uY29tbWVudH08L2I+XHJcbiAgICAgIDwvbGk+YDtcclxuICB9KTtcclxuICBjb21tZW50U2VjdGlvbi5pbm5lckhUTUwgPSBjb21tZW50O1xyXG4gIENvdW50Q29tbWVudChkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY291bnRQcm9kdWN0cyhkYXRhKSB7XHJcbiAgcmV0dXJuIGRhdGEubGVuZ3RoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb3VudGVyKGRhdGEpIHtcclxuICBQcm9kdWN0c0NvdW50ZXIuaW5uZXJIVE1MID0gY291bnRQcm9kdWN0cyhkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ291bnRlckxpa2VzKGRhdGEpIHtcclxuICBjb25zdCBsaWtlQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZXMtY291bnRlcicpO1xyXG4gIGxpa2VDb3VudC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBkYXRhLmZvckVhY2goKGxpa2VzKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmlkID09PSBsaWtlcy5pdGVtX2lkKSB7XHJcbiAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBsaWtlcy5saWtlcztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgRGlzcGxheUNhcmRzLFxyXG4gIERpc3BsYXlQb3B1cCxcclxuICBDb3VudGVyLFxyXG4gIERpc3BsYXlDb21tZW50cyxcclxuICBDb3VudENvbW1lbnQsXHJcbiAgQ291bnRlckxpa2VzLFxyXG4gIGNhbGN1bGF0ZUNvbW1lbnRzLFxyXG4gIGNvdW50UHJvZHVjdHMsXHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==