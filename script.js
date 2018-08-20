const clickObservable = Rx.Observable.fromEvent(document, "click");

const clockObservable = clickObservable
  .map(click => Rx.Observable.interval(1000))
  // .mergeAll();
  .mergeAll(2);
clockObservable.subscribe(x => console.log(x));
