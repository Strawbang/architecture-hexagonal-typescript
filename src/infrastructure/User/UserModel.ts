import { Table, Column, Model, HasOne } from 'sequelize-typescript'
import { Person } from '../Person'

@Table
export class User extends Model {
  @Column
  username: string

  @Column
  password: string

  @HasOne(() => Person)
  details: Person[] 
}