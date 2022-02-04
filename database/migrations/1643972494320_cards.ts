import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cards extends BaseSchema {
  protected tableName = 'cards'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')

      table.text('text').notNullable()
      table.text('description').notNullable()
      table.bigInteger('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')

      table
        .bigInteger('column_id')
        .unsigned()
        .references('id')
        .inTable('columns')
        .onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
