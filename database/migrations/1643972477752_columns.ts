import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Columns extends BaseSchema {
  protected tableName = 'columns'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.text('title').notNullable()
      table.bigInteger('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
