import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/powerbi/Category'

export default class CategoriesController {
  public async index({}: HttpContextContract) {
    const categories = await Category.all()
    return categories

  }

  public async create({request}: HttpContextContract) {
    const name = request.input('name')
    const category = await Category.create({name: name})

    return category;
  }

  public async show({request}: HttpContextContract) {
    const id = request.input('id')
    const category = await Category.find(id)

    return category;
  }

  public async update({request}: HttpContextContract) {
    const id = request.input('id')
    const name = request.input('name')

    const category = await Category.findByOrFail('id', id)
    category.name = name
    await category.save()

    return category;
  }

  public async destroy({request}: HttpContextContract) {
    const id = request.input('id')
    const category = await Category.find(id)
    await category?.delete()

    return category;
  }
}
