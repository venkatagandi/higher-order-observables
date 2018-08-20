const clickObservable = Rx.Observable.fromEvent(document, "click");

const clockObservable = clickObservable
  .map(click => Rx.Observable.interval(1000))
  .switch();

clockObservable.subscribe(x => console.log(x));
