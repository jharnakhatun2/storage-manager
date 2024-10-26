//utility functions
//set local storage
const setLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
// get local storage
const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key))
// remove local storage
const removeLocalStorage = (key) => localStorage.removeItem(key)
// set session storage
const setSessionStorage = (key, value) => sessionStorage.setItem(key, JSON.stringify(value))
// get session storage
const getSessionStorage = (key) => JSON.parse(sessionStorage.getItem(key))
// remove session storage
const removeSessionStorage = (key) => sessionStorage.removeItem(key);

const getId = (id) => document.getElementById(id);
//selected all elements
const form = getId("userForm");
const nameIn = getId("name");
const preference = getId("preference");
const sessionButton = getId("sessionButton");
const clearLocalButton = getId("clearLocalButton");
const clearSessionButton = getId("clearSessionButton");
const displayData = getId("storedData");

//handle form submission
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const nameValue = nameIn.value;
    const preferenceValue = preference.value;
    console.log(preferenceValue);
    setLocalStorage("Name", nameValue);
    setLocalStorage("Preference", preferenceValue);
    displayStorageData();
    form.reset();
})

sessionButton.addEventListener("click", ()=>{
    const nameValue = nameIn.value;
    const preferenceValue = preference.value;
    setSessionStorage("sessionName", nameValue);
    setSessionStorage("sessionPreference", preferenceValue);
    displayStorageData();
    form.reset();
})

clearLocalButton.addEventListener("click", ()=>{
    removeLocalStorage ("Name");
    removeLocalStorage ("Preference");
    displayStorageData();
})
clearSessionButton.addEventListener("click", ()=>{
    removeSessionStorage("sessionName");
    removeSessionStorage("sessionPreference");
    displayStorageData();
})

const displayStorageData = () =>{
    const localName = getLocalStorage("Name");
    const localPreference = getLocalStorage("Preference");
    const sessionName = getSessionStorage("sessionName");
    const sessionPreference = getSessionStorage("sessionPreference")

    //display data 
    displayData.innerHTML =`
    <h3>Local Storage:</h3>
    <p>Name : ${localName || 'N/A'}</p>
    <p>Preference : ${localPreference || 'N/A'}</p>
    <h3>Session Storage:</h3>
    <p>Name : ${sessionName || 'N/A'}</p>
    <p>Preference : ${sessionPreference || 'N/A'}</p>
    `
}
displayStorageData();