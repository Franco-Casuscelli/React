import React, { Component } from 'react';
import './App.css';



class Product extends Component {

  constructor(){
    super();
    this.state = {
      product: []
    }
  }

  componentDidMount(){
      fetch('/api/product')
      .then(response => response.json())
      .then(info => {
        console.log(info);
        let newProduct = info.data;
        this.setState(prevStatus => {
          return { product: newProduct}
        })
      })
      .catch(error => console.log(error))
  }

    render(){
      let {product} = this.state;
      return (
        <React.Fragment>
          <div className="container-fluid" id='base1'>
            <div className='row'>

              <div className='col-1'>

              </div>
              <div className='col-10' id='nombres'>
                  <h4>Products</h4>
                  <ul>
                    {product && product.map((product,i) =>  <li key={i}>{product.name}</li> )}
                  </ul>
              </div>
              <div className='col-1'>

              </div>

            </div>

          
          
          
          </div>
        </React.Fragment>
      )
    }



}

export default Product;
