import { ProductType } from '@/types/product.type'
import { UUID } from 'crypto'

export class Category {
  id: UUID
  name: string
  type: ProductType
  description: string
  path: string
  constructor(props: Category) {
    this.id = props.id
    this.name = props.name
    this.type = props.type
    this.description = props.description
    this.path = props.path
  }
}
