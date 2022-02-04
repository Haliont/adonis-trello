import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async signUp({ request, auth, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    // TODO: add input validate

    const existedUser = await User.findBy('email', email)
    if (existedUser) {
      response.badRequest('User with this email already exists')
    }

    const user = await User.create({ email, password })
    return auth.use('api').generate(user)
  }

  public async signIn({ request, auth, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    // TODO: add input validate

    try {
      const token = await auth.use('api').attempt(email, password)
      return token
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }
}
