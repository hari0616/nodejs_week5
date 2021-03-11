//promise race
const promiseWillReject = [
    new Promise((resolve, reject) => setTimeout(resolve, 25, 'first')),
    new Promise((resolve, reject) => setTimeout(reject, 1, 'second')),
    new Promise((resolve, reject) => setTimeout(resolve, 150, 'third')),
  ]
  Promise.race(promiseWillReject)
    .then(value => console.log(`This won't be called...="${value}"`))
    .catch(error => console.log(`The humanity is doomed...="${error}"`))

//promise allsettled

    const promisesWithOneReject = [
    Promise.resolve('first'),
    new Promise((_, reject) => setTimeout(reject, 10, 'second')),
    'third',
    new Promise((_, reject) => setTimeout(reject, 100, 'fourth'))
  ]
  Promise.allSettled(promisesWithOneReject)
    .then(apples => {
      const badApples = apples.filter(apple => apple.status === 'rejected').map(_ => _.reason)
      const goodApples = apples.filter(apple => apple.status === 'fulfilled').map(_ => _.value)
      console.log(`Let's throw out`, badApples, `and sell the rest`, goodApples)
    })

    //high order function

    function multiply(a){
        return function executemultiply(b){
          return a*b;
        }
      }
      const double=multiply(2);
      console.log(double(3));
      console.log(double(5));
      const tenes=multiply(10);
      console.log(tenes(5));



