const expect=require('chai').expect;
async function add(a,b){
 return Promise.resolve(a+b)
}
async function multiply(a,b){
    return Promise.resolve(a*b)
   }
describe("add",()=>{
    it("it 2+2=4",async()=>{
        const p= await add(2,2)
        expect (p).is.equal(4)
    })
    it("it 3+3=6",async()=>{
        const p= await add(3,3)
        expect (p).is.equal(6)
    })

     
})
describe("multiply",()=>{
    it("it 2*2=4",async()=>{
        const p= await multiply(2,2)
        expect (p).is.equal(4)
    })
    it("it 3*3=9",async()=>{
        const p= await multiply(3,3)
        expect (p).is.equal(9)
    })

     
})