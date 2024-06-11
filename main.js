import {getAll, getAllLastNames, getAllFullNameJob, getAllJobTitle } from "./js/module/employees.js";


console.log(await getAllJobTitle({cargo: "President"}));