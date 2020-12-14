import React, { useContext } from 'react';
import ProductItem from '../ProductItem';
import { ProductsContext } from 'contexts/ProductsContext';
import styles from './ProductsGrid.module.scss';
import { SectionHeader } from 'components/molecules';


const ProductsGrid = () => {

    const { products } = useContext(ProductsContext)
    console.log("products: ", products);

    return ( 
      <div className={styles.p__container}>
        <SectionHeader 
            title="products"
            data-aos="fade-up"
        />
        <div className="row">
          <div className="col-sm-8">
            <div className="py-3">
              {products.length} Products
            </div>
          </div>
          {/* //* save for search products feature */}
          {/* <div className="col-sm-4">
            <div className="form-group">
              <input 
                type="text" 
                name="" 
                placeholder="Search product" 
                className="form-control" 
                id=""
              />
            </div>
          </div> */}
        </div>
        <div className={styles.p__grid}>
          {
            products.map(product => (
              <ProductItem key={product.id} product={product}/>
            ))
          }
        </div>
      </div>
     );
}
 
export default ProductsGrid;