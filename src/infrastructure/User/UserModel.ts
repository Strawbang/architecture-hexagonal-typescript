import { Table, Column, Model, HasOne } from 'sequelize-typescript'
import Person from '../PersonModel'

@Table({modelName: 'User'})
export default class UserModel extends Model {
  @Column
  username: string

  @Column
  password: string

  @HasOne(() => Person, 'firstname')
  details: Person[] 
}