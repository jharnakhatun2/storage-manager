//utility functions
//set local storage
const setLocalStorage = (key, value) => localStorage.setItem(key, value);
// get local storage
const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key))
// remove local storage
const removeLocalStorage = (key) => localStorage.removeItem(key)
// set session storage
const setSessionStorage = (key, value) => sessionStorage.setItem(key, value)
// get session storage
const getSessionStorage = (key) => JSON.parse(sessionStorage.getItem(key))
// remove session storage
const removeSessionStorage = (key) => sessionStorage.removeItem(key);

const getId = (id) => document.getElementById(id);
//selected all elements
const form = getId("userForm");
const name = form.elements["name"].value;
const preference = form.elements["preference"].value;
const sessionButton = getId("sessionButton");
const clearLocalButton = getId("clearLocalButton");
const clearSessionButton = getId("clearSessionButton");
