//reduce method

let flattened = [[0, 1], [5, 2],[ 3, 8],[4, 5, 9]].reduce(
  function(accumulator, currentValue) {
      console.log(accumulator);
      console.log(currentValue);
    return accumulator+(currentValue)
  })
console.log(flattened)

//nested callback

get_intgredients('getintgredients',function(getintgredient,err){
  console.log(getintgredient);
  if(!err){
      cookthebeef('cookingbeef',function(cookbeef,err){
          console.log(cookbeef);
            if(!err){
              getbugerbuns('getbugerbun',function(getbugbun,err){
                  console.log(getbugbun);
                  if(!err){
                      cookedbunsandbeef('cookingbunsandbeef',function(cookingbeef,err){
                          console.log(cookingbeef);
                          if(!err){
                              servetheburger('servingtheburger',function(servingburger,err){
                                  if(!err){
                                       console.log(servingburger);
                                  }
                              })
                          }
                      })
                  }

              })
            }
      })
  }
})

function get_intgredients(value,callback){
  callback(value +'  '+'first step')
}
function  cookthebeef(value,callback){
  callback(value +'second step')
}
function getbugerbuns(value,callback){
  callback(value+' '+'third step')
}
function cookedbunsandbeef(value,callback){
  callback(value)
}
function servetheburger(value,callback){
  callback(value)
}