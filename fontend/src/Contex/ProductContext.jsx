import { createContext, useEffect, useState } from "react"

export const ProductContext = createContext({})
export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [shippingInfo, setShippingInfo] = useState({
        email: "",
        city: "",
        fullName: "",
        address: "",
        others: "",
        phoneNumber:'',
      });
    
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productInfo, setProductInfo] = useState([])
  useEffect(() => {
      fetch('https://ledisbucket.onrender.com/api/v1/all/product')
          .then(res => res.json())
          .then(data => {
              setProducts(data.products)
              setFilteredProducts(data.products)
              
          })
  }, [])
    return <ProductContext.Provider value={{
         products,setProducts,
         filteredProducts,setFilteredProducts,
         productInfo, setProductInfo,
         shippingInfo, setShippingInfo

    }}> {children} </ProductContext.Provider>
}