import React, { Component } from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import SHOP_PAGE_DATA from './shoppage.data'
class ShopPage extends Component {
  constructor() {
    super()
    this.state = {
      collections: SHOP_PAGE_DATA
    }
  }

  render() {
    const { collections } = this.state
    return (
      <div className='shop-page'>
        {
          collections.map(({ id, ...otherCollectionProps }) => {
            return (
              <CollectionPreview key={id} {...otherCollectionProps} />
            )
          })
        }
      </div>
    )
  }
}

export default ShopPage