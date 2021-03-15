var chai=require('chai');
let chaihttp=require("chai-http");
let server=require('../hellowd');
chai.should();
chai.use(chaihttp);
 describe("task api",()=>{
     describe("get",()=>{
         it("its should get method",(done)=>{
             //chai.request(server)  //server is api
                 chai.request(server)
                 .get('/')
                 .end((err,response)=>{
                     response.should.have.status(200)
                done();
                 })
         })

     })
     describe("/get with id",()=>{
        it("its should get method with id",(done)=>{
            const takenid=1
            chai.request(server)//server is api
                .get('/'+takenid)
                .end((err,response)=>{
                    response.should.have.status(200);
                    done();
                })
        })
    })
    describe("/post method",()=>{
        it("its should post method with id",(done)=>{
            const task = {
                title: 'Have some dinner'
                        };
            chai.request(server)//server is api
                .post('/')
                .send(task)
                .end((err,response)=>{
                    response.should.have.status(201);
                    response.body.should.have.property('title').eq('Have some dinner');
                    done();
                })
        })
    })
    describe("/put method",()=>{
        it("its should put method with id",(done)=>{
            const taskId = 1;
            // const task1 = {
            //     title: 'Have some dinner with hari',
            //     order:1,
            //     completed:'false'
            // };
            chai.request(server)//server is api
                .put('/'+taskId)
                //.send(task1)
                .end((err,response)=>{
                    response.should.have.status(200);
                    // response.body.should.have.property('title').eq('Have some dinner with hari');
                    // response.body.should.have.property('order').eq(1);
                    // response.body.should.have.property('completed').eq('false');
                    

                    done();
                })
        })
    })

    describe("/delete method",()=>{
        it("its should delete method with id",(done)=>{
            const taskId = 1;
            chai.request(server)//server is api
                .delete('/'+taskId)
                .end((err,response)=>{
                    response.should.have.status(200);
                    done();
                })
        })
    })


})
