import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Column from 'App/Models/Column'
import User from 'App/Models/User'
import Comment from 'App/Models/Comment'

export default class Card extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public text: string

  @column()
  public description: string

  @hasMany(() => Comment)
  public comments: HasMany<typeof Comment>

  @column()
  public columnId: number

  @belongsTo(() => Column)
  public column: BelongsTo<typeof Column>

  @column()
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
