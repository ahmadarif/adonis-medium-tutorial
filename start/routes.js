'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/api/users/:id', 'TestController.getUserById')

Route.get('/sample/:type', async ({ params, response }) => {
  if (params.type) {
    return response.send({ message: 'Tipe 1'})
  }
  return response.send({ message: 'Bukan tipe 1'})
})

function contohCallback(value, callback) {
  setTimeout(() => {
      callback(null, value * 2)
  }, 1000)
}

// Contoh callback
function contohCallback(value, callback) {
  setTimeout(() => {
      callback(null, value * 2)
  }, 1000)
}

Route.get('/callback/:value', async ({ params, response }) => {
  const value = params.value
  contohCallback(value, function(err, data) {
    console.log('hoho')
    response.send(`Hasil = `, data)
  })
})
    
const Helpers = use('Helpers')
Route.get('/callback/v1/:value', async ({ params, response }) => {
  const value = params.value
  const contohCallbackPromisify = Helpers.promisify(contohCallback)

  const data = await contohCallbackPromisify(value)
  response.send(`Hasil = ${data}`)
})

const { promisify } = use('util')
Route.get('/callback/v2/:value', async ({ params, response }) => {
  const value = params.value
  const contohCallbackPromisify = promisify(contohCallback)

  const data = await contohCallbackPromisify(value)
  response.send(`Hasil = ${data}`)
})
//> Contoh callback