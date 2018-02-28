'use strict'

const User = use('App/Models/User')

class TestController {

  async getUserById({ params }) {
    const user = await User.find(params.id)
    return user
  }
  
}

module.exports = TestController
