import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/powerbi/User'

export default class UsersController {
  public  async createUser({ request, response }: HttpContextContract) {
    const { username, email, password } = request.all()

    const user = await User.create({
      username: username,
      email: email,
      password: password,
    })
    console.log(user.$isPersisted);

    return response.status(201).json(user)
  }
}
