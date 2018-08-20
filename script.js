const clickObservable = Rx.Observable.fromEvent(document, "click");

const clockObservable = clickObservable
  .map(click => Rx.Observable.interval(1000).take(5))
  // .mergeAll(1);
  .concatAll();
clockObservable.subscribe(x => console.log(x));
