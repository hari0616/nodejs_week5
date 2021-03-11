//yield function
function* countApple () {
    let saleList = [3, 7, 5,6,89]
    for (let i = 0; i < saleList.length; i++) {
      yield saleList[i]
    }
  }
  let appleStore = countApple()  // Generator { }
  console.log(appleStore.next())      
  console.log(appleStore.next())      
  console.log(appleStore.next())     
  console.log(appleStore.next()) 
  console.log(appleStore.next())
  console.log(appleStore.next())

  //yield function generator passing the arguments
  function* generator(i) {
    yield i;
    yield i + 10;
    yield i+"hi"
  }
    const gen = generator(10);
  
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);


  //yield* & yield function
  function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
    yield i + 4;
  }
  
  function* generator(i) {
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
  }
  
  var gen = generator(10);
  
  console.log(gen.next().value); // 10
  console.log(gen.next().value); // 11
  console.log(gen.next().value); // 12
  console.log(gen.next().value); // 13
  console.log(gen.next().value); //14
  console.log(gen.next().value); // 20


  // array reduce method
  let flattened = [[0, 1], [5, 2],[ 3, 8],[4, 5, 9]].reduce(
    function(accumulator, currentValue) {
        var temp=[...accumulator,...currentValue ]
          return(temp);
    })
    console.log(flattened);
  let temp=flattened.reduce(
     function (accumulator,currentValue) {
         return accumulator+currentValue
     }
 )
console.log(temp);