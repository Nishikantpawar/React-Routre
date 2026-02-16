const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.get("/api/products", (req, res) => {
  const product = [
    {
      "id": 1,
      "name": "Wireless Bluetooth Headphones",
      "image": "https://images.unsplash.com/photo-1604780032295-9f8186eede96?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price": 59.99,
      "category": "Electronics",
      "description": "Noise-cancelling over-ear Bluetooth headphones with 20-hour battery life."
    },
    {
      "id": 2,
      "name": "Stainless Steel Water Bottle",
      "image": "https://images.unsplash.com/photo-1544003484-3cd181d17917?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price": 19.99,
      "category": "Home & Kitchen",
      "description": "Insulated 1-liter water bottle that keeps drinks cold for 24 hours."
    },
    {
      "id": 3,
      "name": "Smart LED Desk Lamp",
      "image": "https://images.unsplash.com/photo-1560074557-d54ddce534f7?q=80&w=1130&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price": 34.95,
      "category": "Office",
      "description": "Adjustable LED desk lamp with touch controls and 5 brightness levels."
    },
    {
      "id": 4,
      "name": "Running Sneakers",
      "image": "https://images.unsplash.com/photo-1709258228137-19a8c193be39?q=80&w=811&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price": 89.50,
      "category": "Footwear",
      "description": "Lightweight breathable running shoes with cushioned soles."
    },
    {
      "id": 5,
      "name": "Wireless Gaming Mouse",
      "image": "https://images.unsplash.com/photo-1660491083562-d91a64d6ea9c?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price": 29.99,
      "category": "Gaming",
      "description": "Ergonomic gaming mouse with customizable DPI and RGB lighting."
    },
    {
      "id": 6,
      "name": "Mobile cover",
      "image": "https://images.unsplash.com/photo-1547658718-f4311ad64746?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price": 9.99,
      "category": "Mobile",
      "description": "Silicon black mobile cover."
    },


    {
      "id": 7,
      "name": "Ergonomic Office Chair",
      "image": "https://images.unsplash.com/photo-1641794008048-d863bb4a23d3?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price": 249.99,
      "categories": ["Furniture", "Office", "Home"],
      "description": "Comfortable ergonomic office chair with lumbar support, adjustable height, and breathable mesh design."
    },
    {
      "id": 8,
      "name": "Plant-Based Protein Powder",
      "image": "https://images.unsplash.com/photo-1693996045346-d0a9b9470909?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price": 34.99,
      "categories": ["Health", "Nutrition", "Fitness"],
      "description": "Clean, plant-based protein powder made from peas and brown rice, ideal for muscle recovery and daily nutrition."
    },

    {
      "id": 9,
      "name": "Smart Home LED Light Strip",
      "image": "https://images.unsplash.com/photo-1576383735244-e0a02fae95a8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price": 29.99,
      "categories": ["Smart Home", "Lighting", "Electronics"],
      "description": "App-controlled smart LED light strip with customizable colors, scenes, and voice assistant support."
    },

    {
      "id": 10,
      "name": "Men's Casual Cotton Shirt",
      "image": "https://images.unsplash.com/photo-1744535814651-b106bb53026d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price": 99.99,
      "categories": ["Men", "Clothing", "Shirts"],
      "description": "Premium quality cotton casual shirt for men. Comfortable fit, breathable fabric, perfect for daily wear."
    },
    {
      "id": 11,
      "name": "Women's Floral Kurti",
      "image": "https://images.unsplash.com/photo-1768803968246-5b8c7d04b722?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price": 12.99,
      "categories": ["Women", "Ethnic Wear", "Kurtis"],
      "description": "Elegant floral printed kurti made from soft rayon fabric. Suitable for office and casual outings."
    },
    {
      "id": 12,
      "name": "Running Sports Shoes",
      "image": "https://images.unsplash.com/photo-1619253341026-74c609e6ce50?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price": 24.99,
      "categories": ["Footwear", "Men", "Sports"],
      "description": "Lightweight running shoes with cushioned sole and breathable mesh for maximum comfort."
    },
    {
      "id": 13,
      "name": "Smartphone (6GB RAM, 128GB Storage)",
      "image": "https://images.unsplash.com/photo-1707438095940-1eee18e85400?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price": 159.99,
      "categories": ["Electronics", "Mobiles"],
      "description": "Powerful smartphone with high-speed performance, long battery life, and high-resolution camera."
    },
    {
      "id": 14,
      "name": "Non-Stick Cookware Set (3 Pieces)",
      "image": "https://images.unsplash.com/photo-1768203629130-31b0c5571223?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price": 19.99,
      "categories": ["Home & Kitchen", "Cookware"],
      "description": "Durable non-stick cookware set with heat-resistant handles for everyday cooking needs."
    },



    {
      id: 15,
      name: "iPhone 14 Pro",
      image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 1299,
      category: "Electronics",
      description:
        "Apple iPhone 14 Pro with A16 Bionic chip, 48MP camera, Dynamic Island, and Super Retina XDR display."
    },
    {
      id: 16,
      name: "Nike Air Max 270",
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      price: 150,
      category: "Footwear",
      description:
        "Comfortable and stylish Nike Air Max 270 sneakers with breathable mesh and responsive cushioning."
    },
    {
      id: 17,
      name: "Samsung 55-inch 4K Smart TV",
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
      price: 699,
      category: "Electronics",
      description:
        "Ultra HD 4K Smart TV with HDR support, built-in streaming apps, and crystal-clear display."
    },
    {
      id: 18,
      name: "Wooden Study Desk",
      image: "https://images.unsplash.com/photo-1625874274375-71db2bf2f50c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 249,
      category: "Furniture",
      description:
        "Minimalist wooden study desk with storage drawer and sturdy metal legs, perfect for home office."
    },
    {
      id: 19,
      name: "Men's Casual Denim Jacket",
      image: "https://images.unsplash.com/photo-1739652398636-80c7ea73291e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 89,
      category: "Clothing",
      description:
        "Premium quality men's denim jacket with slim fit design and durable fabric."
    },
    {
      id: 20,
      name: "Wireless Bluetooth Headphones",
      image: "https://images.unsplash.com/photo-1580894908361-967195033215",
      price: 199,
      category: "Electronics",
      description:
        "Noise-cancelling wireless headphones with deep bass, 30-hour battery life, and fast charging."
    },
    {
      id: 21,
      name: "Women’s Handbag",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
      price: 120,
      category: "Accessories",
      description:
        "Elegant women’s handbag made of premium leather with multiple compartments."
    },
    {
      id: 23,
      name: "Gaming Laptop RTX 4060",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
      price: 1499,
      category: "Electronics",
      description:
        "High-performance gaming laptop with RTX 4060 GPU, 16GB RAM, and 1TB SSD storage."
    }



  ]

  res.json(product)

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
