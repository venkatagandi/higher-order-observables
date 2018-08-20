// const numObservable = Rx.Observable.interval(1000).take(4);

// const higherOrderObservable = numObservable.map(x => Rx.Observable.of(1, 2));

// higherOrderObservable.subscribe(obs => obs.subscribe(x => console.log(x)));

const clickObservable = Rx.Observable.fromEvent(document, "click");

const clockObservable = clickObservable.map(click =>
  Rx.Observable.interval(1000)
);

clockObservable.subscribe(clock => clock.subscribe(x => console.log(x)));
