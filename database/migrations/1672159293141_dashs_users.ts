import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'dashs_users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('dash_id').unsigned().references('id').inTable('dashs')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.unique(["user_id", "dash_id"]);

      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
