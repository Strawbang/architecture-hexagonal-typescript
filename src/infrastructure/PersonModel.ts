import { Table, Column, Model, HasOne } from 'sequelize-typescript'
import Address from './AddressModel'

@Table
export default class Person extends Model {
  @Column
  firstname: string

  @Column
  lastname: string

  @HasOne(() => Address, 'street')
  address: Address[]
}