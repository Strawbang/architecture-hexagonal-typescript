import { Table, Column, Model, HasMany, HasOne } from 'sequelize-typescript'
import { Address } from './Address'

@Table
export class Person extends Model {
  @Column
  firstname: string

  @Column
  lastname: string

  @HasOne(() => Address)
  address: Address[]
}