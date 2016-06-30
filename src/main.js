import { map } from 'lodash';

let numbers = map([1,2,3,4,5,6], n => n*n);

setTimeout( () => {
    require(['./numberlist.hbs'], template => {
        document.getElementById("app-container").innerHTML = template({numbers});
    })
}, 2000);