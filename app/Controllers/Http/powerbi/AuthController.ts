import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {

  public async login({ request, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const token = await auth.use('api').attempt(email, password, {
      expiresIn: '10 days',
    })

    return token.toJSON()
  }

  public async logout({ auth }: HttpContextContract) {
    await auth.use('api').revoke()

    return {
      revoked: true,
    }
  }

  public async me({ auth, response }: HttpContextContract) {

    return await response.status(200).json(auth.user)
  }
}
