import { replaceConsoleLog } from '../browser/console.log';
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject';

replaceConsoleLog();

// const firstObservable = Observable.of('value');
// firstObservable.subscribe(
//     streamValue => console.log(streamValue)
// );
// firstObservable.subscribe(
//     streamValue => console.log(streamValue)
// );

// const customObservable = new Observable(
//     observer => {
//         let tick = 0;
//         const intervalRef = setInterval(
//             () => {
//                 if (tick == 1) {
//                     observer.complete();
//                 } else {
//                     observer.next(tick++);
//                 }
//             },
//             1000
//         );
//
//         return () => {
//             clearInterval(intervalRef);
//             console.log('end stream');
//         };
//     }
// );
// const customObservableSubscription = customObservable.subscribe(
//     streamValue => {
//         console.log(`customObservable stream value: ${streamValue}`);
//     }
// );
// setTimeout(() => {
//     const customObservableSubscription = customObservable.subscribe(
//         streamValue => {
//             console.log(`customObservable stream value2: ${streamValue}`);
//         }
//     );
//
//     setTimeout(() => {
//         customObservableSubscription.unsubscribe();
//     }, 3000);
//
// }, 5000);

// setTimeout(() => {
//     customObservableSubscription.unsubscribe();
// }, 3000);

// ez a serviceben lenne
const firstSubject = new Subject();
// serviceben kezelem rogton az erteket
const subscription = firstSubject.subscribe(
    streamValue => {
        console.log(`Subject stream value: ${streamValue}`);
    }
);
let tick = 0;
// server adatkuldes emulalas
setInterval(() => {
        firstSubject.next(tick++);
        if (tick === 3) {
            subscription.unsubscribe();
        }
    }
    , 1000);

// componentbe feliratkozo
setTimeout(
    () => {
        firstSubject.subscribe(
            streamValue => {
                console.log(`Second subscriber stream value: ${streamValue}`);
            }
        );
    },
    5000
);