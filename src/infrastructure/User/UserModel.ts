import { Table, Column, Model, HasOne } from 'sequelize-typescript'
import Person from '../PersonModel'

@Table
export default class User extends Model {
  @Column
  username: string

  @Column
  password: string

  @HasOne(() => Person, 'firstname')
  details: Person[] 
}