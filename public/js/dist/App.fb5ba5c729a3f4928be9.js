/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/About/About.js":
/*!***************************************!*\
  !*** ./src/components/About/About.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function About() {
  return /*#__PURE__*/React.createElement("div", {
    className: true
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "about"), /*#__PURE__*/React.createElement("div", {
    className: "About-Flex"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "https://imgur.com/a/BbfqRSN",
    height: "250px",
    width: "100px"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "about-paragraph"
  }, "hello."), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("p", {
    className: "about-paragraph"
  }, "welcome to halmet coffee company, founded February 2nd, 2020."), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("p", {
    className: "about-paragraph"
  }, "at hamlet, we are committed to sustainable aggriculture and a more humane economy, sourcing our milks from family-owned NY state farms, our pastries from locally-owned bakery Runner and Stone, and our beans from fair-trade-certified coffee farms around the world."), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("p", {
    className: "about-paragraph"
  }))));
}

/***/ }),

/***/ "./src/components/CategoryList/CategoryList.js":
/*!*****************************************************!*\
  !*** ./src/components/CategoryList/CategoryList.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CategoryList)
/* harmony export */ });
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
// import styles from './CategoryList.module.scss'

function CategoryList(_ref) {
  let {
    categories,
    activeCat,
    setActiveCat
  } = _ref;
  const cats = categories.map(cat => /*#__PURE__*/React.createElement("li", {
    key: cat,
    className: cat === activeCat ? styles.active : ''
  }, cat));
  return /*#__PURE__*/React.createElement("ul", {
    className: /*{styles.CategoryList}*/"CategoryList"
  }, cats);
}

/***/ }),

/***/ "./src/components/ContactUs/ContactUs.js":
/*!***********************************************!*\
  !*** ./src/components/ContactUs/ContactUs.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactUs)
/* harmony export */ });
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function ContactUs() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ContactUs"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "contact us"), /*#__PURE__*/React.createElement("div", {
    className: "icons"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png",
    class: "icon",
    href: "https://www.instagram.com/hamletcoffeecompany/",
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    src: "https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png",
    class: "icon",
    href: "",
    alt: ""
  })));
}

/***/ }),

/***/ "./src/components/FindUs/FindUs.js":
/*!*****************************************!*\
  !*** ./src/components/FindUs/FindUs.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FindUs)
/* harmony export */ });
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function FindUs() {
  // Initialize and add the map
  // let map;

  // async function initMap() {
  //     // The location of Uluru
  //     const position = { lat: 40.6630459, lng: -73.9542193 };
  //     // Request needed libraries.
  //     //@ts-ignore
  //     const { Map } = await google.maps.importLibrary("maps");
  //     const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  //     // The map, centered at 465 Rogers Ave
  //     map = new Map(document.getElementById("map"), {
  //         zoom: 4,
  //         center: position,
  //         mapId: "DEMO_MAP_ID",
  //     });

  //     // The marker, positioned at 465 Rogers Ave
  //     const marker = new AdvancedMarkerElement({
  //         map: map,
  //         position: position,
  //         title: "hamlet coffee co",
  //     });
  // }
  // initMap();

  return /*#__PURE__*/React.createElement("div", {
    className: "FindUs"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "find us"), /*#__PURE__*/React.createElement("div", {
    className: "map"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "title"
  }, "Location and Hours"), /*#__PURE__*/React.createElement("div", {
    className: "flexbox"
  }, /*#__PURE__*/React.createElement("div", {
    className: "left"
  }, /*#__PURE__*/React.createElement("p", {
    className: "par",
    id: "address"
  }, "465 Rogers Ave."), /*#__PURE__*/React.createElement("p", {
    className: "par",
    id: "address"
  }, "#1"), /*#__PURE__*/React.createElement("p", {
    className: "par",
    id: "address"
  }, "Brooklyn, NY 11225")), /*#__PURE__*/React.createElement("div", {
    className: "middle"
  }), /*#__PURE__*/React.createElement("div", {
    className: "right"
  }, /*#__PURE__*/React.createElement("p", {
    className: "par"
  }, "Sunday 7 AM-5 PM"), /*#__PURE__*/React.createElement("p", {
    className: "par"
  }, "Monday 7 AM-5 PM"), /*#__PURE__*/React.createElement("p", {
    className: "par"
  }, "Tuesday 7 AM-5 PM"), /*#__PURE__*/React.createElement("p", {
    className: "par"
  }, "Wednesday 7 AM-5 PM"), /*#__PURE__*/React.createElement("p", {
    className: "par"
  }, "Thursday 7 AM-5 PM"), /*#__PURE__*/React.createElement("p", {
    className: "par"
  }, "Friday 7 AM-5 PM"), /*#__PURE__*/React.createElement("p", {
    className: "par"
  }, "Saturday 7 AM-5 PM"))));
}

/***/ }),

/***/ "./src/components/Hamlet/Hamlet.js":
/*!*****************************************!*\
  !*** ./src/components/Hamlet/Hamlet.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hamlet)
/* harmony export */ });
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function Hamlet() {
  return /*#__PURE__*/React.createElement("div", {
    className: "hamlet"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "hamlet"), /*#__PURE__*/React.createElement("img", {
    src: "https://i.imgur.com/n94ZpmJ.jpg"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "title"
  }, "coffee company"));
}

/***/ }),

/***/ "./src/components/LineItem/LineItem.js":
/*!*********************************************!*\
  !*** ./src/components/LineItem/LineItem.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LineItem)
/* harmony export */ });
/* harmony import */ var _LineItem_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineItem.module.scss */ "./src/components/LineItem/LineItem.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function LineItem(_ref) {
  let {
    lineItem,
    isPaid,
    handleChangeQty
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: _LineItem_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].LineItem
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-ctr-ctr"
  }, lineItem.item.emoji), /*#__PURE__*/React.createElement("div", {
    className: "flex-ctr-ctr flex-col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "align-ctr"
  }, lineItem.item.name), /*#__PURE__*/React.createElement("span", null, lineItem.item.price.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: _LineItem_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].qty,
    style: {
      justifyContent: isPaid && 'center'
    }
  }, !isPaid && /*#__PURE__*/React.createElement("button", {
    className: "btn-xs",
    onClick: () => handleChangeQty(lineItem.item._id, lineItem.qty - 1)
  }, "\u2212"), /*#__PURE__*/React.createElement("span", null, lineItem.qty), !isPaid && /*#__PURE__*/React.createElement("button", {
    className: "btn-xs",
    onClick: () => handleChangeQty(lineItem.item._id, lineItem.qty + 1)
  }, "+")), /*#__PURE__*/React.createElement("div", {
    className: _LineItem_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].extPrice
  }, "$", lineItem.extPrice.toFixed(2)));
}

/***/ }),

/***/ "./src/components/LoginForm/LoginForm.js":
/*!***********************************************!*\
  !*** ./src/components/LoginForm/LoginForm.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


function LoginForm(_ref) {
  let {
    setUser
  } = _ref;
  const [credentials, setCredentials] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    email: '',
    password: ''
  });
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  function handleChange(evt) {
    setCredentials(_objectSpread(_objectSpread({}, credentials), {}, {
      [evt.target.name]: evt.target.value
    }));
    setError('');
  }
  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await _utilities_users_service__WEBPACK_IMPORTED_MODULE_1__.login(credentials);
      setUser(user);
    } catch (_unused) {
      setError('Log In Failed - Try Again');
    }
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "form-container"
  }, /*#__PURE__*/React.createElement("form", {
    autoComplete: "off",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "email",
    value: credentials.email,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/React.createElement("label", null, "Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    name: "password",
    value: credentials.password,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "LOG IN"))));
}

/***/ }),

/***/ "./src/components/Logo/Logo.js":
/*!*************************************!*\
  !*** ./src/components/Logo/Logo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var _Logo_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.module.scss */ "./src/components/Logo/Logo.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function Logo() {
  return /*#__PURE__*/React.createElement("div", {
    className: /*{styles.Logo}*/"Logo"
  }, /*#__PURE__*/React.createElement("div", null, "SEI"), /*#__PURE__*/React.createElement("div", null, "CAFE"));
}

/***/ }),

/***/ "./src/components/Menu/Menu.js":
/*!*************************************!*\
  !*** ./src/components/Menu/Menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function Menu(_ref) {
  let {
    order,
    setOrder
  } = _ref;
  let newOrder;
  return /*#__PURE__*/React.createElement("div", {
    className: "Menu",
    "data-color": "tan"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "Menu"), /*#__PURE__*/React.createElement("h2", {
    className: "item"
  }, "coffee & tea"), /*#__PURE__*/React.createElement("div", {
    className: "menu-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "menu"
  }, /*#__PURE__*/React.createElement("p", {
    className: "item"
  }, "Espresso"), /*#__PURE__*/React.createElement("button", {
    className: "order",
    onClick: () => {
      newOrder = [...order, 'Espresso'];
      setOrder(newOrder);
    }
  }, "Add to order"), /*#__PURE__*/React.createElement("p", {
    className: "par"
  }, "Macchiato"), /*#__PURE__*/React.createElement("button", {
    className: "order",
    onClick: () => setOrder([...order, 'Machiato'])
  }, "Add to order"), /*#__PURE__*/React.createElement("p", {
    className: "item"
  }, "Cortado"), /*#__PURE__*/React.createElement("button", {
    className: "order",
    onClick: () => setOrder([...order, 'Cortado'])
  }, "Add to order"), /*#__PURE__*/React.createElement("p", {
    className: "item"
  }, "Latte"), /*#__PURE__*/React.createElement("button", {
    className: "order",
    onClick: () => setOrder([...order, 'Latte'])
  }, "Add to order"), /*#__PURE__*/React.createElement("p", {
    className: "item"
  }, "Mocha"), /*#__PURE__*/React.createElement("button", {
    className: "order",
    onClick: () => setOrder([...order, 'Mocha'])
  }, "Add to order")), /*#__PURE__*/React.createElement("div", {
    className: "this is an empty div for spacing"
  }), /*#__PURE__*/React.createElement("div", {
    className: "menu"
  }, /*#__PURE__*/React.createElement("p", {
    className: "item"
  }, "Drip"), /*#__PURE__*/React.createElement("button", {
    className: "order",
    onClick: () => setOrder([...order, 'Drip'])
  }, "Add to order"), /*#__PURE__*/React.createElement("p", {
    className: "item"
  }, "Tea"), /*#__PURE__*/React.createElement("button", {
    className: "order",
    onClick: () => setOrder([...order, 'Tea'])
  }, "Add to order"), /*#__PURE__*/React.createElement("p", {
    className: "item"
  }, "Matcha"), /*#__PURE__*/React.createElement("button", {
    className: "order",
    onClick: () => setOrder([...order, 'Matcha'])
  }, "Add to order"), /*#__PURE__*/React.createElement("p", {
    className: "item"
  }, "Turmeric Latte"), /*#__PURE__*/React.createElement("button", {
    className: "order",
    onClick: () => setOrder([...order, 'Turmeric'])
  }, "Add to order"), /*#__PURE__*/React.createElement("p", {
    className: "item"
  }, "Hot Chocolate"), /*#__PURE__*/React.createElement("button", {
    className: "order",
    onClick: () => setOrder([...order, 'Hot Chocolate'])
  }, "Add to order"))), /*#__PURE__*/React.createElement("h2", {
    className: "item"
  }, "food"), /*#__PURE__*/React.createElement("div", {
    className: "menu-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "menu"
  }, /*#__PURE__*/React.createElement("p", {
    className: "item"
  }, "English Muffin"), /*#__PURE__*/React.createElement("button", {
    className: "order",
    onClick: () => setOrder([...order, 'English Muffin'])
  }, "Add to order")), /*#__PURE__*/React.createElement("div", {
    className: "this is an empty div for spacing"
  }, "       "), /*#__PURE__*/React.createElement("div", {
    className: "menu"
  }, /*#__PURE__*/React.createElement("p", {
    className: "item"
  }, "Lemon-Raspberry Scone"), /*#__PURE__*/React.createElement("button", {
    className: "order",
    onClick: () => setOrder([...order, 'Lemon-Raspberry Scone'])
  }, "Add to order"))), /*#__PURE__*/React.createElement("h2", {
    className: "item"
  }, "by the bag"), /*#__PURE__*/React.createElement("div", {
    className: "menu-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "menu2"
  }, /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("p", {
    className: "item"
  }, "Little Wolf"), /*#__PURE__*/React.createElement("p", {
    className: "origin"
  }, "Laayyoo, Ethopia"), /*#__PURE__*/React.createElement("button", {
    className: "order",
    onClick: () => setOrder([...order, 'Little Wolf'])
  }, "Add to Order"), /*#__PURE__*/React.createElement("p", {
    className: "origin"
  }, "notes:"), /*#__PURE__*/React.createElement("p", {
    className: "origin"
  }, "peach,"), /*#__PURE__*/React.createElement("p", {
    className: "origin"
  }, "lychee,"), /*#__PURE__*/React.createElement("p", {
    className: "origin"
  }, "floral")), /*#__PURE__*/React.createElement("div", {
    className: "this is an empty div for spacing"
  }, "       "), /*#__PURE__*/React.createElement("div", {
    className: "menu2"
  }, /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("p", {
    className: "item"
  }, "Coptic Light"), /*#__PURE__*/React.createElement("p", {
    className: "origin"
  }, "Las Palmas, El Salvador"), /*#__PURE__*/React.createElement("button", {
    className: "order",
    onClick: () => setOrder([...order, 'Coptic Light'])
  }, "Add to Order"), /*#__PURE__*/React.createElement("p", {
    className: "origin"
  }, "notes:"), /*#__PURE__*/React.createElement("p", {
    className: "origin"
  }, " milk chocolate,"), /*#__PURE__*/React.createElement("p", {
    className: "origin"
  }, "candied pecan,"), /*#__PURE__*/React.createElement("p", {
    className: "origin"
  }, "caramel"))));
}

/***/ }),

/***/ "./src/components/MenuList/MenuList.js":
/*!*********************************************!*\
  !*** ./src/components/MenuList/MenuList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuList)
/* harmony export */ });
/* harmony import */ var _MenuListItem_MenuListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MenuListItem/MenuListItem */ "./src/components/MenuListItem/MenuListItem.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
// import styles from './MenuList.module.scss' 

function MenuList(_ref) {
  let {
    menuItems,
    handleAddToOrder
  } = _ref;
  const items = menuItems.map(item => /*#__PURE__*/React.createElement(_MenuListItem_MenuListItem__WEBPACK_IMPORTED_MODULE_0__["default"], {
    key: item._id,
    handleAddToOrder: handleAddToOrder,
    menuItem: item
  }));
  return /*#__PURE__*/React.createElement("main", {
    className: /*{styles.MenuList}*/"MenuList"
  }, items);
}

/***/ }),

/***/ "./src/components/MenuListItem/MenuListItem.js":
/*!*****************************************************!*\
  !*** ./src/components/MenuListItem/MenuListItem.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuListItem)
/* harmony export */ });
/* harmony import */ var _MenuListItem_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuListItem.module.scss */ "./src/components/MenuListItem/MenuListItem.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function MenuListItem(_ref) {
  let {
    menuItem,
    handleAddToOrder
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: _MenuListItem_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].MenuListItem
  }, /*#__PURE__*/React.createElement("div", {
    className: _MenuListItem_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].image + ' ' + 'flex-ctr-ctr'
  }, menuItem.emoji), /*#__PURE__*/React.createElement("div", {
    className: _MenuListItem_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].name
  }, menuItem.name), /*#__PURE__*/React.createElement("div", {
    className: _MenuListItem_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].buy
  }, /*#__PURE__*/React.createElement("span", null, "$", menuItem.price.toFixed(2)), /*#__PURE__*/React.createElement("button", {
    className: "btn-sm",
    onClick: () => handleAddToOrder(menuItem._id)
  }, "ADD")));
}

/***/ }),

/***/ "./src/components/Nav/Nav.js":
/*!***********************************!*\
  !*** ./src/components/Nav/Nav.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Hamlet_Hamlet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Hamlet/Hamlet */ "./src/components/Hamlet/Hamlet.js");
/* harmony import */ var _components_About_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/About/About */ "./src/components/About/About.js");
/* harmony import */ var _components_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Menu/Menu */ "./src/components/Menu/Menu.js");
/* harmony import */ var _components_FindUs_FindUs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/FindUs/FindUs */ "./src/components/FindUs/FindUs.js");
/* harmony import */ var _components_ContactUs_ContactUs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ContactUs/ContactUs */ "./src/components/ContactUs/ContactUs.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

// import styles from './Nav.module.scss'






const NavBar = props => {
  return /*#__PURE__*/React.createElement("nav", {
    className: /*{styles.nav}*/"NavBar"
  }, /*#__PURE__*/React.createElement("button", {
    as: "a",
    href: "#Home"
  }, "home"), /*#__PURE__*/React.createElement("button", {
    as: "a",
    href: "#About"
  }, "about"), /*#__PURE__*/React.createElement("button", {
    as: "a",
    href: "#Menu"
  }, "menu"), /*#__PURE__*/React.createElement("button", {
    as: "a",
    href: "#FindUs"
  }, "find us"), /*#__PURE__*/React.createElement("button", {
    as: "a",
    href: "#ContactUs"
  }, "contact us"), /*#__PURE__*/React.createElement("button", null, "account"));
};

// import { Link } from 'react-router-dom';

// const NavBar = props => {
// 	return (
// 		<nav className="NavBar">
// 			{props.routes.map(({ key, path }) => (
// 				<Link key={key} to={path}>
// 					{key}
// 				</Link>
// 			))}
// 		</nav>
// 	);
// };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "./src/components/OrderDetail/OrderDetail.js":
/*!***************************************************!*\
  !*** ./src/components/OrderDetail/OrderDetail.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrderDetail)
/* harmony export */ });
/* harmony import */ var _OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderDetail.module.scss */ "./src/components/OrderDetail/OrderDetail.module.scss");
/* harmony import */ var _LineItem_LineItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LineItem/LineItem */ "./src/components/LineItem/LineItem.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



// Used to display the details of any order, including the cart (unpaid order)
function OrderDetail(_ref) {
  let {
    order,
    handleChangeQty,
    handleCheckout
  } = _ref;
  if (!order) return null;
  const lineItems = order.lineItems.map(item => /*#__PURE__*/React.createElement(_LineItem_LineItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    lineItem: item,
    isPaid: order.isPaid,
    handleChangeQty: handleChangeQty,
    key: item._id
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: _OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].OrderDetail
  }, /*#__PURE__*/React.createElement("div", {
    className: _OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].sectionHeading
  }, order.isPaid ? /*#__PURE__*/React.createElement("span", null, "ORDER ", /*#__PURE__*/React.createElement("span", {
    className: "smaller"
  }, order.orderId)) : /*#__PURE__*/React.createElement("span", null, "NEW ORDER"), /*#__PURE__*/React.createElement("span", null, new Date(order.updatedAt).toLocaleDateString())), /*#__PURE__*/React.createElement("div", {
    className: "".concat(_OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].lineItemContainer, " flex-ctr-ctr flex-col scroll-y")
  }, lineItems.length ? /*#__PURE__*/React.createElement(React.Fragment, null, lineItems, /*#__PURE__*/React.createElement("section", {
    className: _OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].total
  }, order.isPaid ? /*#__PURE__*/React.createElement("span", {
    className: _OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].right
  }, "TOTAL&nbsp &nbsp ") : /*#__PURE__*/React.createElement("button", {
    className: "btn-sm",
    onClick: handleCheckout,
    disabled: !lineItems.length
  }, "CHECKOUT"), /*#__PURE__*/React.createElement("span", null, order.totalQty), /*#__PURE__*/React.createElement("span", {
    className: _OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].right
  }, "$", order.orderTotal.toFixed(2)))) : /*#__PURE__*/React.createElement("div", {
    className: _OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].hungry
  }, "Hungry?")));
}

/***/ }),

/***/ "./src/components/OrderList/OrderList.js":
/*!***********************************************!*\
  !*** ./src/components/OrderList/OrderList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrderList)
/* harmony export */ });
/* harmony import */ var _OrderListItem_OrderListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OrderListItem/OrderListItem */ "./src/components/OrderListItem/OrderListItem.js");
/* harmony import */ var _OrderList_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderList.module.scss */ "./src/components/OrderList/OrderList.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function OrderList(_ref) {
  let {
    orders,
    activeOrder,
    handleSelectOrder
  } = _ref;
  const orderItems = orders.map(o => /*#__PURE__*/React.createElement(_OrderListItem_OrderListItem__WEBPACK_IMPORTED_MODULE_0__["default"], {
    order: o,
    isSelected: o === activeOrder,
    handleSelectOrder: handleSelectOrder,
    key: o._id
  }));
  return /*#__PURE__*/React.createElement("main", {
    className: _OrderList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].OrderList
  }, orderItems.length ? orderItems : /*#__PURE__*/React.createElement("span", {
    className: _OrderList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].noOrders
  }, "No Previous Orders"));
}

/***/ }),

/***/ "./src/components/OrderListItem/OrderListItem.js":
/*!*******************************************************!*\
  !*** ./src/components/OrderListItem/OrderListItem.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrderListItem)
/* harmony export */ });
/* harmony import */ var _OrderListItem_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderListItem.module.scss */ "./src/components/OrderListItem/OrderListItem.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function OrderListItem(_ref) {
  let {
    order,
    isSelected,
    handleSelectOrder
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(_OrderListItem_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].OrderListItem, " ").concat(isSelected ? _OrderListItem_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].selected : ''),
    onClick: () => handleSelectOrder(order)
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "Order Id: ", /*#__PURE__*/React.createElement("span", {
    className: "smaller"
  }, order.orderId)), /*#__PURE__*/React.createElement("div", {
    className: "smaller"
  }, new Date(order.updatedAt).toLocaleDateString())), /*#__PURE__*/React.createElement("div", {
    className: "align-rt"
  }, /*#__PURE__*/React.createElement("div", null, "$", order.orderTotal.toFixed(2)), /*#__PURE__*/React.createElement("div", {
    className: "smaller"
  }, order.totalQty, " Item", order.totalQty > 1 ? 's' : '')));
}

/***/ }),

/***/ "./src/components/SignUpForm/SignUpForm.js":
/*!*************************************************!*\
  !*** ./src/components/SignUpForm/SignUpForm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignUpForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


class SignUpForm extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      name: '',
      email: '',
      password: '',
      confirm: '',
      error: ''
    });
    _defineProperty(this, "handleChange", evt => {
      this.setState({
        [evt.target.name]: evt.target.value,
        error: ''
      });
    });
    _defineProperty(this, "handleSubmit", async evt => {
      evt.preventDefault();
      try {
        const formData = _objectSpread({}, this.state);
        delete formData.confirm;
        delete formData.error;
        // The promise returned by the signUp service method
        // will resolve to the user object included in the
        // payload of the JSON Web Token (JWT)
        const user = await (0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_1__.signUp)(formData);
        // Baby step
        this.props.setUser(user);
      } catch (_unused) {
        // An error happened on the server
        this.setState({
          error: 'Sign Up Failed - Try Again'
        });
      }
    });
  }
  // We must override the render method
  // The render method is the equivalent to a function-based component
  // (its job is to return the UI)
  render() {
    const disable = this.state.password !== this.state.confirm;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "form-container"
    }, /*#__PURE__*/React.createElement("form", {
      autoComplete: "off",
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("label", null, "Name"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "name",
      value: this.state.name,
      onChange: this.handleChange,
      required: true
    }), /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
      type: "email",
      name: "email",
      value: this.state.email,
      onChange: this.handleChange,
      required: true
    }), /*#__PURE__*/React.createElement("label", null, "Password"), /*#__PURE__*/React.createElement("input", {
      type: "password",
      name: "password",
      value: this.state.password,
      onChange: this.handleChange,
      required: true
    }), /*#__PURE__*/React.createElement("label", null, "Confirm"), /*#__PURE__*/React.createElement("input", {
      type: "password",
      name: "confirm",
      value: this.state.confirm,
      onChange: this.handleChange,
      required: true
    }), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      disabled: disable
    }, "SIGN UP"))), /*#__PURE__*/React.createElement("p", {
      className: "error-message"
    }, "\xA0", this.state.error));
  }
}

/***/ }),

/***/ "./src/components/UserLogOut/UserLogOut.js":
/*!*************************************************!*\
  !*** ./src/components/UserLogOut/UserLogOut.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogOut)
/* harmony export */ });
/* harmony import */ var _UserLogOut_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserLogOut.module.scss */ "./src/components/UserLogOut/UserLogOut.module.scss");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function UserLogOut(_ref) {
  let {
    user,
    setUser
  } = _ref;
  function handleLogOut() {
    (0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_1__.logOut)();
    setUser(null);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: _UserLogOut_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].UserLogOut
  }, /*#__PURE__*/React.createElement("div", null, user.name), /*#__PURE__*/React.createElement("div", {
    className: _UserLogOut_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].email
  }, user.email), /*#__PURE__*/React.createElement("button", {
    className: "btn-sm",
    onClick: handleLogOut
  }, "LOG OUT"));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _pages_App_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/App/App */ "./src/pages/App/App.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
// import {StrictMode} from "react";
// import { createRoot } from "react-dom/client";






const root = react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_pages_App_App__WEBPACK_IMPORTED_MODULE_3__["default"], null))));

/***/ }),

/***/ "./src/pages/App/App.js":
/*!******************************!*\
  !*** ./src/pages/App/App.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");
/* harmony import */ var _AuthPage_AuthPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AuthPage/AuthPage */ "./src/pages/AuthPage/AuthPage.js");
/* harmony import */ var _NewOrderPage_NewOrderPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NewOrderPage/NewOrderPage */ "./src/pages/NewOrderPage/NewOrderPage.js");
/* harmony import */ var _OrderHistoryPage_OrderHistoryPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OrderHistoryPage/OrderHistoryPage */ "./src/pages/OrderHistoryPage/OrderHistoryPage.js");
/* harmony import */ var _components_Nav_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Nav/Nav */ "./src/components/Nav/Nav.js");
/* harmony import */ var _Home_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Home/Home */ "./src/pages/Home/Home.js");


// import styles from './App.module.scss';





// import Hamlet from '../../components/Hamlet/Hamlet'
// import About from '../../components/About/About'
// import Menu from '../../components/Menu/Menu'
// import FindUs from '../../components/FindUs/FindUs'
// import ContactUs from '../../components/ContactUs/ContactUs'

function App() {
  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_6__.getUser)());
  const [order, setOrder] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: /*{styles.App}*/"main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: /*{styles.Nav}*/"Nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], null)), order.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home_Home__WEBPACK_IMPORTED_MODULE_5__["default"], {
    order: order,
    setOrder: setOrder
  }) : user ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NewOrderPage_NewOrderPage__WEBPACK_IMPORTED_MODULE_2__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AuthPage_AuthPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    setUser: setUser
  }));
}

// export default function App() {
//     const [user, setUser] = useState(getUser())
//     return (
//         <main>
//         {/* <main className={styles.main}> */}
//             { user ? 
//             <>
//                 <Routes>
//                     <Route path='/orders/new' element={<NewOrderPage user={user} setUser={setUser} /> } />
//                     <Route path='/orders' element={<OrderHistoryPage user={user} setUser={setUser} /> } /> 
//                     <Route path='/*' elememt={<Navigate to='/orders/new' /> } />
//                 </Routes>
//             </>
//             :
//             <AuthPage setUser={setUser} />
//             }
//         </main>
//     )
// }

/***/ }),

/***/ "./src/pages/AuthPage/AuthPage.js":
/*!****************************************!*\
  !*** ./src/pages/AuthPage/AuthPage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/LoginForm/LoginForm */ "./src/components/LoginForm/LoginForm.js");
/* harmony import */ var _components_SignUpForm_SignUpForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/SignUpForm/SignUpForm */ "./src/components/SignUpForm/SignUpForm.js");
/* harmony import */ var _components_Logo_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Logo/Logo */ "./src/components/Logo/Logo.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

// import styles from './AuthPage.module.scss' 



function AuthPage(_ref) {
  let {
    setUser
  } = _ref;
  const [showLogin, setShowLogin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  return /*#__PURE__*/React.createElement("main", {
    className: /*{styles.AuthPage}*/"AuthPage"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "hamlet"), /*#__PURE__*/React.createElement("h2", {
    className: "title"
  }, "coffee company"), /*#__PURE__*/React.createElement("h3", {
    onClick: () => setShowLogin(!showLogin)
  }, showLogin ? 'SIGN UP' : 'LOG IN')), showLogin ? /*#__PURE__*/React.createElement(_components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    setUser: setUser
  }) : /*#__PURE__*/React.createElement(_components_SignUpForm_SignUpForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setUser: setUser
  }));
}

/***/ }),

/***/ "./src/pages/Home/Home.js":
/*!********************************!*\
  !*** ./src/pages/Home/Home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Hamlet_Hamlet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Hamlet/Hamlet */ "./src/components/Hamlet/Hamlet.js");
/* harmony import */ var _components_About_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/About/About */ "./src/components/About/About.js");
/* harmony import */ var _components_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Menu/Menu */ "./src/components/Menu/Menu.js");
/* harmony import */ var _components_FindUs_FindUs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/FindUs/FindUs */ "./src/components/FindUs/FindUs.js");
/* harmony import */ var _components_ContactUs_ContactUs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ContactUs/ContactUs */ "./src/components/ContactUs/ContactUs.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");






function Home(_ref) {
  let {
    order,
    setOrder
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: "Hamlet",
    id: "Home"
  }, /*#__PURE__*/React.createElement(_components_Hamlet_Hamlet__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement("div", {
    className: "About",
    id: "About"
  }, /*#__PURE__*/React.createElement(_components_About_About__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/React.createElement("div", {
    className: "Menu",
    id: "Menu"
  }, /*#__PURE__*/React.createElement(_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    order: order,
    setOrder: setOrder
  })), /*#__PURE__*/React.createElement("div", {
    className: "FindUs",
    id: "FindUs"
  }, /*#__PURE__*/React.createElement(_components_FindUs_FindUs__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/React.createElement("div", {
    className: "ContactUs",
    id: "ContactUs"
  }, /*#__PURE__*/React.createElement(_components_ContactUs_ContactUs__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
}

/***/ }),

/***/ "./src/pages/NewOrderPage/NewOrderPage.js":
/*!************************************************!*\
  !*** ./src/pages/NewOrderPage/NewOrderPage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewOrderPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_items_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilities/items-api */ "./src/utilities/items-api.js");
/* harmony import */ var _utilities_order_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/order-api */ "./src/utilities/order-api.js");
/* harmony import */ var _NewOrderPage_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewOrderPage.module.scss */ "./src/pages/NewOrderPage/NewOrderPage.module.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_Logo_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Logo/Logo */ "./src/components/Logo/Logo.js");
/* harmony import */ var _components_MenuList_MenuList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MenuList/MenuList */ "./src/components/MenuList/MenuList.js");
/* harmony import */ var _components_CategoryList_CategoryList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/CategoryList/CategoryList */ "./src/components/CategoryList/CategoryList.js");
/* harmony import */ var _components_OrderDetail_OrderDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/OrderDetail/OrderDetail */ "./src/components/OrderDetail/OrderDetail.js");
/* harmony import */ var _components_UserLogOut_UserLogOut__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/UserLogOut/UserLogOut */ "./src/components/UserLogOut/UserLogOut.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");










function NewOrderPage(_ref) {
  let {
    user,
    setUser
  } = _ref;
  const [menuItems, setMenuItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [activeCat, setActiveCat] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const categoriesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    async function getItems() {
      const items = await _utilities_items_api__WEBPACK_IMPORTED_MODULE_9__.getAll();
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setMenuItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();
    async function getCart() {
      const cart = await _utilities_order_api__WEBPACK_IMPORTED_MODULE_1__.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  /*--- event handlers ---*/
  async function handleAddToOrder(itemId) {
    const updatedCart = await _utilities_order_api__WEBPACK_IMPORTED_MODULE_1__.addItemToCart(itemId);
    setCart(updatedCart);
  }
  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await _utilities_order_api__WEBPACK_IMPORTED_MODULE_1__.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }
  async function handleCheckout() {
    await _utilities_order_api__WEBPACK_IMPORTED_MODULE_1__.checkout();
    navigate('/orders');
  }
  return /*#__PURE__*/React.createElement("main", {
    className: _NewOrderPage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].NewOrderPage
  }, /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement(_components_Logo_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/React.createElement(_components_CategoryList_CategoryList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    categories: categoriesRef.current,
    cart: setCart,
    setActiveCat: setActiveCat
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
    to: "/orders",
    className: "button btn-sm"
  }, "PREVIOUS ORDERS"), /*#__PURE__*/React.createElement(_components_UserLogOut_UserLogOut__WEBPACK_IMPORTED_MODULE_7__["default"], {
    user: user,
    setUser: setUser
  })), /*#__PURE__*/React.createElement(_components_MenuList_MenuList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    menuItems: menuItems.filter(item => item.category.name === activeCat),
    handleAddToOrder: handleAddToOrder
  }), /*#__PURE__*/React.createElement(_components_OrderDetail_OrderDetail__WEBPACK_IMPORTED_MODULE_6__["default"], {
    order: cart,
    handleChangeQty: handleChangeQty,
    handleCheckout: handleCheckout
  }));
}

/***/ }),

/***/ "./src/pages/OrderHistoryPage/OrderHistoryPage.js":
/*!********************************************************!*\
  !*** ./src/pages/OrderHistoryPage/OrderHistoryPage.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var _OrderHistoryPage_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderHistoryPage.module.scss */ "./src/pages/OrderHistoryPage/OrderHistoryPage.module.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _utilities_order_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/order-api */ "./src/utilities/order-api.js");
/* harmony import */ var _components_Logo_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Logo/Logo */ "./src/components/Logo/Logo.js");
/* harmony import */ var _components_UserLogOut_UserLogOut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/UserLogOut/UserLogOut */ "./src/components/UserLogOut/UserLogOut.js");
/* harmony import */ var _components_OrderList_OrderList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/OrderList/OrderList */ "./src/components/OrderList/OrderList.js");
/* harmony import */ var _components_OrderDetail_OrderDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/OrderDetail/OrderDetail */ "./src/components/OrderDetail/OrderDetail.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");








function OrderHistoryPage(_ref) {
  let {
    user,
    setUser
  } = _ref;
  /*--- State --- */
  const [orders, setOrders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [activeOrder, setActiveOrder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  /*--- Side Effects --- */
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    async function fetchOrderHistory() {
      const orders = await _utilities_order_api__WEBPACK_IMPORTED_MODULE_2__.getOrderHistory();
      setOrders(orders);
      setActiveOrder(orders[0] || null);
    }
    fetchOrderHistory();
  }, []);

  /*--- Event Handlers --- */
  function handleSelectOrder(order) {
    setActiveOrder(order);
  }

  /*--- Rendered UI --- */
  return /*#__PURE__*/React.createElement("main", {
    className: _OrderHistoryPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].OrderHistoryPage
  }, /*#__PURE__*/React.createElement("aside", {
    className: _OrderHistoryPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].aside
  }, /*#__PURE__*/React.createElement(_components_Logo_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
    to: "/orders/new",
    className: "button btn-sm"
  }, "NEW ORDER"), /*#__PURE__*/React.createElement(_components_UserLogOut_UserLogOut__WEBPACK_IMPORTED_MODULE_4__["default"], {
    user: user,
    setUser: setUser
  })), /*#__PURE__*/React.createElement(_components_OrderList_OrderList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    orders: orders,
    activeOrder: activeOrder,
    handleSelectOrder: handleSelectOrder
  }), /*#__PURE__*/React.createElement(_components_OrderDetail_OrderDetail__WEBPACK_IMPORTED_MODULE_6__["default"], {
    order: activeOrder
  }));
}

/***/ }),

/***/ "./src/utilities/items-api.js":
/*!************************************!*\
  !*** ./src/utilities/items-api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAll: () => (/* binding */ getAll)
/* harmony export */ });
/* unused harmony export getById */
/* harmony import */ var _send_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-request */ "./src/utilities/send-request.js");

const BASE_URL = '/api/items';
function getAll() {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])(BASE_URL);
}
function getById(id) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/").concat(id));
}

/***/ }),

/***/ "./src/utilities/order-api.js":
/*!************************************!*\
  !*** ./src/utilities/order-api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addItemToCart: () => (/* binding */ addItemToCart),
/* harmony export */   checkout: () => (/* binding */ checkout),
/* harmony export */   getCart: () => (/* binding */ getCart),
/* harmony export */   getOrderHistory: () => (/* binding */ getOrderHistory),
/* harmony export */   setItemQtyInCart: () => (/* binding */ setItemQtyInCart)
/* harmony export */ });
/* harmony import */ var _send_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-request */ "./src/utilities/send-request.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const BASE_URL = '/api/orders';
function getCart() {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/cart"));
}
function addItemToCart(itemId) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/cart/items/").concat(itemId), 'POST');
}
function setItemQtyInCart(itemId, newQty) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/cart/qty"), 'PUT', {
    itemId,
    newQty
  });
}
function checkout() {
  if (!user) return /*#__PURE__*/React.createElement(AuthPage, null);
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/cart/checkout"), 'POST');
}
function getOrderHistory() {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/history"));
}

/***/ }),

/***/ "./src/utilities/send-request.js":
/*!***************************************!*\
  !*** ./src/utilities/send-request.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sendRequest)
/* harmony export */ });
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-service */ "./src/utilities/users-service.js");

async function sendRequest(url) {
  let method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
  let payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  const options = {
    method
  };
  if (payload) {
    options.headers = {
      'Content-Type': 'application/json'
    };
    options.body = JSON.stringify(payload);
  }
  const token = (0,_users_service__WEBPACK_IMPORTED_MODULE_0__.getToken)();
  if (token) {
    options.headers = options.headers || {};
    options.headers.Authorization = "Bearer ".concat(token);
  }
  const res = await fetch(url, options);
  if (res.ok) return res.json();
  throw new Error('bad request');
}

/***/ }),

/***/ "./src/utilities/users-api.js":
/*!************************************!*\
  !*** ./src/utilities/users-api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   signUp: () => (/* binding */ signUp)
/* harmony export */ });
/* harmony import */ var _send_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-request */ "./src/utilities/send-request.js");

const BASE_URL = '/api/users';
function signUp(userData) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])(BASE_URL, 'POST', userData);
}
function login(credentials) {
  (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/login"), 'POST', credentials);
}

/***/ }),

/***/ "./src/utilities/users-service.js":
/*!****************************************!*\
  !*** ./src/utilities/users-service.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getToken: () => (/* binding */ getToken),
/* harmony export */   getUser: () => (/* binding */ getUser),
/* harmony export */   logOut: () => (/* binding */ logOut),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   signUp: () => (/* binding */ signUp)
/* harmony export */ });
/* harmony import */ var _users_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-api */ "./src/utilities/users-api.js");

async function signUp(userData) {
  const token = await _users_api__WEBPACK_IMPORTED_MODULE_0__.signUp(userData);
  localStorage.setItem('token', token);
  return getUser();
}
async function login(credentials) {
  const token = await _users_api__WEBPACK_IMPORTED_MODULE_0__.login(credentials);
  localStorage.setItem('token', token);
  return getUser();
}
function getToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
}
function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}
function logOut() {
  localStorage.removeItem('token');
}

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/LineItem/LineItem.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/LineItem/LineItem.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"LineItem":"ZeRW57PNaWpYVsw6JlaC","qty":"Z_MQzAiRjTlxboCrh9om","extPrice":"iZ6oJDRJlBAjRnxPhUy5"});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Logo/Logo.module.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Logo/Logo.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"Logo":"EDeinQzfS2N2rVW_Z1GP"});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/MenuListItem/MenuListItem.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/MenuListItem/MenuListItem.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"MenuListItem":"X4tFBfG4MKknHvd01CKE","image":"dTwdG1Vxh_kNAcuyMLbz","buy":"fO9kiPygtr0vmzsXoUxA","name":"VR1OCl60qOXrRx1IzVEa"});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/OrderDetail/OrderDetail.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/OrderDetail/OrderDetail.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"OrderDetail":"cPR75kdAXDGVxib0PszB","sectionHeading":"ap70fWT3eETsAtLlRQKl","lineItemContainer":"vVkqXbRqxMYDCnUttflb","total":"V5OAbv7QFHo6WglNx0m0","right":"GtULiQQdndLNSQN4Yc97","hungry":"dyrUhYTujwEUiMzpjxWX"});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/OrderList/OrderList.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/OrderList/OrderList.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"OrderList":"l6Ner7C7O5I4V69HVVgW","noOrders":"zqVYKU3SzotKremHzxQ_"});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/OrderListItem/OrderListItem.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/OrderListItem/OrderListItem.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"OrderListItem":"SbDKL2bctOyC5ZgA0KfW","selected":"mOA_Z5p05rn7VW_2oU68"});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/UserLogOut/UserLogOut.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/UserLogOut/UserLogOut.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/NewOrderPage/NewOrderPage.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/NewOrderPage/NewOrderPage.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"NewOrderPage":"RZqTJBeYN7RXwcHgPFys"});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/OrderHistoryPage/OrderHistoryPage.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/OrderHistoryPage/OrderHistoryPage.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"OrderHistoryPage":"U7F51i6q23MB43wS4GeC","aside":"Gl976TgPIRmY9_yeWoZA"});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/LineItem/LineItem.module.scss":
/*!******************************************************!*\
  !*** ./src/components/LineItem/LineItem.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LineItem_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./LineItem.module.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/LineItem/LineItem.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LineItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LineItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LineItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LineItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Logo/Logo.module.scss":
/*!**********************************************!*\
  !*** ./src/components/Logo/Logo.module.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Logo_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Logo.module.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Logo/Logo.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Logo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Logo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Logo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Logo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/MenuListItem/MenuListItem.module.scss":
/*!**************************************************************!*\
  !*** ./src/components/MenuListItem/MenuListItem.module.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MenuListItem_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./MenuListItem.module.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/MenuListItem/MenuListItem.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MenuListItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MenuListItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MenuListItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MenuListItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/OrderDetail/OrderDetail.module.scss":
/*!************************************************************!*\
  !*** ./src/components/OrderDetail/OrderDetail.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./OrderDetail.module.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/OrderDetail/OrderDetail.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/OrderList/OrderList.module.scss":
/*!********************************************************!*\
  !*** ./src/components/OrderList/OrderList.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./OrderList.module.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/OrderList/OrderList.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/OrderListItem/OrderListItem.module.scss":
/*!****************************************************************!*\
  !*** ./src/components/OrderListItem/OrderListItem.module.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderListItem_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./OrderListItem.module.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/OrderListItem/OrderListItem.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderListItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderListItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderListItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderListItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/UserLogOut/UserLogOut.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/UserLogOut/UserLogOut.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_UserLogOut_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./UserLogOut.module.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/UserLogOut/UserLogOut.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_UserLogOut_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_UserLogOut_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_UserLogOut_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_UserLogOut_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/NewOrderPage/NewOrderPage.module.scss":
/*!*********************************************************!*\
  !*** ./src/pages/NewOrderPage/NewOrderPage.module.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NewOrderPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./NewOrderPage.module.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/NewOrderPage/NewOrderPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NewOrderPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NewOrderPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NewOrderPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NewOrderPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/OrderHistoryPage/OrderHistoryPage.module.scss":
/*!*****************************************************************!*\
  !*** ./src/pages/OrderHistoryPage/OrderHistoryPage.module.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderHistoryPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./OrderHistoryPage.module.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/OrderHistoryPage/OrderHistoryPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderHistoryPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderHistoryPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderHistoryPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderHistoryPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbig_poppa_code_react_starter_kit"] = self["webpackChunkbig_poppa_code_react_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-dom_client_js-node_modules_react-router-dom_dist_index_js-node_mod-cb3c1b"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.80d71587c785f010881b4e7cb3691628.js.map