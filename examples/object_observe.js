import { Observable } from '../node_modules/object-observer/dist/object-observer.min.js';
let a = [ 1, 2, 3, 4, 5 ],
    observableA = Observable.from(a);

Observable.observe(observableA, changes => {
    changes.forEach(change => {
        console.log(change);
    });
});
observableA.pop();
