


app.post("/test", function(req, res) {

  payload = req.body.payload.person
  //console.log("payload", payload)

  knex('nationbuildertestdata').insert({id: payload.id ,first_name: payload.first_name, email: payload.email, created_at: payload.created_at})
  .then(function(data, err){
    if(err){
      console.log('error message: ', err)
    } else {
    console.log('check data is entered')
    }
  })
})

app.post("/updatePerson", function(req, res) {

  payload = req.body.payload.person
  console.log(payload.email)

  knex('nationbuildertestdata').where({id: payload.id}).update({updated_at: payload.updated_at, first_name: payload.first_name, last_name: payload.last_name, email: payload.email})
  .then(function(data, err){
    if(err){
      console.log('error message: ', err)
    } else {
    console.log('Congratulations! Person Updated from Nationbuilder to SQL')
    }
  })
})

app.post("/deletePerson", function(req, res) {

  payload = req.body.payload.person
  console.log(payload)

  knex('nationbuildertestdata').where({id: payload.id}).del()
  .then(function(data, err){
    if(err){
      console.log('error message: ', err)
    } else {
    console.log('Person Deleted. Goodbye.')
    }
  })
})

var testKnex = function() {
  knex('nationbuildertestdata').insert({first_name: 'ngrok', email: 'ngroknpmpackage@email.com'})
  .then(function(data, err){
    console.log("data entered")
  })
}

testKnex()
