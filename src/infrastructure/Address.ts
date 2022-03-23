import { Table, Column, Model } from 'sequelize-typescript'

@Table
export class Address extends Model {
  @Column
  street: string

  @Column
  city: string

  @Column
  department: number

  @Column
  streetNumber: number

  @Column
  area: string

  @Column
  zipcode: number
}