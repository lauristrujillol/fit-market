const products = [
    {
        id: "1",
        name: "Mantequilla de Maní",
        price: 25000,
        category: "Snacks",
        img: "https://supermercadosla80.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM3gwa1E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--cc31ca27f12446f19d88458229f97ba4e73dc913/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/CREMA-MANI-NATURAL-720G-(1).png?locale=es",
        stock: 5,
        description: "Descripcion 1"
    },
    
    {id: "2", name: "Arepa De Almojábana x6", price: 19400, category: "Refrigerados", stock:"20", img: "https://vitaintegral.co/wp-content/uploads/2021/10/12206-Arepa-De-Almojabana-x6-Unidades-La-Mary-Frente.jpg.jpg.png"},
    {id: "3", name: "Yogurt Griego x900Gr Sketos", price: 33800, category: "Refrigerados", stock:"8", img: "https://vitaintegral.co/wp-content/uploads/2021/03/4221-Yogurt-Griego-Descremado-Natural-Sin-Dulce-x900Gr-Sketos-Frente.jpg"},
    {id: "4", name: "Tortillas de harina de coco", price: 8800, category: "Refrigerados", stock:"15", img: "https://vitaintegral.co/wp-content/uploads/2022/04/12555-Tortillas-De-Coco-x150Gr-Bodai-Frente-1.jpg"},
    {id: "5", name: "Marañon natural x250Gr", price: 24500, category: "Snacks", stock:"6", img: "https://vitaintegral.co/wp-content/uploads/2021/01/2487-Maranon-Natural-x250Gr-Salugran-Frente.jpg"},
    {id: "6", name: "Brownie De Aguacate x40Gr", price: 9900, category: "Snacks", stock:"12", img: "https://vitaintegral.co/wp-content/uploads/2021/04/11041-Brownie-De-Aguacate-Sin-Remordimiento-X-40Gr-Frente.jpg"},
    {id: "7", name: "Choco Up Natural x40Gr", price: 5500, category: "Snacks", stock:"6", img: "https://vitaintegral.co/wp-content/uploads/2022/03/WAKE-UP-CHOCO-UP-NATURAL-40G.jpg"},
    {id: "8", name: "Pan Trenza De Arroz x2", price: 12900, category: "Parva", stock:"4", img: "https://vitaintegral.co/wp-content/uploads/2021/04/9144-Pan-Trenza-De-Arroz-x2-unidades-Siempre-Natural-Frente.jpg"},
    {id: "9", name: "Pan Mini Algarrobo Con Cacao", price: 20500, category: "Parva", stock:"10", img: "https://vitaintegral.co/wp-content/uploads/2021/06/mini-algarrobo-1.jpg"},
    {id: "10", name: "Crispetas Mixtas x200Gr", price: 13500, category: "Snacks", stock:"6", img: "https://vitaintegral.co/wp-content/uploads/2021/04/11755-Crispetas-Mixtas-Dulces-Y-Saladas-x200Gr-Frunch-F.jpg"},
] 



export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const ProductsByCategory = products.filter(prod => prod.category === categoryId);
        resolve (ProductsByCategory)
      }, 500);
    })
  };