import { Card } from "../components";
import { useTitle } from "../hooks";

export const ShopList = ({title}) => {
  useTitle(title)
  const products = [
    {

      "id": 10001,
      "img": "/assets/images/AmazonSpeaker.jpg",
      "price": 800,
      "name": "Amazon Speaker",
      "in_stock": "true"
    },
    {
      "id": 10002,
      "img": "/assets/images/AppleWrist.jpg",
      "price": 1400,
      "name": "Apple Watch",
      "in_stock": "true"
    },
    {
      "id": 10003,
      "img": "/assets/images/NikeRun.jpg",
      "price": 400,
      "name": "Nike Running Shoes",
      "in_stock": "true"
    },
    {
      "id": 10004,
      "img": "/assets/images/RayBan.jpg",
      "price": 300,
      "name": "Ray Ban Glasses",
      "in_stock": "true"
    },
    {
      "id": 10005,
      "img": "/assets/images/watch.jpg",
      "price": 500,
      "name": "Samsung Smart Watch",
      "in_stock": "true"
    },
    {
      "id": 10006,
      "img": "/assets/images/CD-X.jpg",
      "price": 700,
      "name": "Portable CD-X",
      "in_stock": "true"
    }
  ]
  return (
    <main>
      <section className="products poppins-regular">
      {products.map((product) => {
        return(
          <Card product={product} key={product.id} />
        )
          
      })}
        
      </section>
    </main>
    
  )
}

