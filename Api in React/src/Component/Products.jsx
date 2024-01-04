import { useEffect ,useState} from "react"

function Products() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data)
      
      })
      .catch((err) => {
      console.log(err);
    })
  },[])
  
  return (
    <div className="products">
      {
        products.map((product) => {
          return (
            <div className="product">
              <div className="image-wrapper">
                <img className="p-image" src={product.image} alt='product'/>
              </div>
              <h1 className="p-title">{product.title}</h1>
              <p className="p-category">{ product.category}</p>
              <p className="p-description">{ product.description}</p>
              <p className="p-price">{ product.price}</p>
            </div>
          )

        } )
      }
    </div>
  )
}

export default Products;