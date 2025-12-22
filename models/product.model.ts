import { ProductType } from '@/types/product.type'
import { UUID } from 'crypto'
import { Category } from './category.model'

export class Product {
  id: UUID
  type: ProductType
  name: string
  description: string
  price: number
  color: string
  material: string
  category: Category
  constructor(props: Product) {
    this.id = props.id
    this.type = props.type
    this.name = props.name
    this.description = props.description
    this.price = props.price
    this.category = props.category
    this.color = props.color
    this.material = props.material
  }
}
