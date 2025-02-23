import React, { useState,useContext } from 'react';
import styles from './BabyProducts.module.css';
import PageContext from "../page/PageContext";
import product1 from '../../assets/images/Product1.jpg'
import product2 from '../../assets/images/Product2.jpg'
import product3 from '../../assets/images/Product3.jpg'
import product4 from '../../assets/images/Product4.jpg'
import product5 from '../../assets/images/Product5.jpg'
import product6 from '../../assets/images/Product6.jpg'
import product7 from '../../assets/images/Product7.jpg'
import product8 from '../../assets/images/Product8.jpg'
import product9 from '../../assets/images/Product9.jpg'
import product10 from '../../assets/images/Product10.jpg'
import product11 from '../../assets/images/Product11.jpg'
import { Baby } from '../../assets/Ui/Baby';
import { BaselineProductionQuantityLimits } from '../../assets/Ui/Pro';

const babyProducts = [
  { id: 1, name: "Baby Clothes Set", category: "Clothing", price: "25.00", description: "Soft and comfortable clothes for your newborn.", image: product1 },
  { id: 2, name: "Baby Bottles", category: "Feeding", price: "15.00", description: "BPA-free bottles for safe feeding.", image: product2 },
  { id: 3, name: "Organic Baby Wipes", category: "Hygiene", price: "10.00", description: "Gentle and eco-friendly wipes for your baby’s delicate skin.", image: product3 },
  { id: 4, name: "Diaper Bag", category: "Accessories", price: "40.00", description: "Stylish and spacious bag to carry all baby essentials.", image: product4 },
  { id: 5, name: "Portable Baby Crib", category: "Furniture", price: "120.00", description: "Lightweight and easy-to-fold crib for travel and home use.", image: product5 },
  { id: 6, name: "Teething Toys", category: "Toys", price: "12.00", description: "Soft and safe teething toys to soothe your baby's gums.", image: product6 },
  { id: 7, name: "Baby Monitor", category: "Safety", price: "80.00", description: "High-definition baby monitor with night vision and two-way audio.", image: product7 },
  { id: 8, name: "Swaddle Blanket", category: "Bedding", price: "18.00", description: "Ultra-soft cotton swaddle blanket for cozy naps.", image: product8 },
  { id: 9, name: "Breast Pump", category: "Feeding", price: "65.00", description: "Electric breast pump for easy milk expression.", image: product9},
  { id: 10, name: "Baby Shampoo & Body Wash", category: "Hygiene", price: "12.50", description: "Tear-free and hypoallergenic wash for sensitive skin.", image: product10 }
];

const BabyProducts = () => {
    const ctx = useContext(PageContext)
    const {changePage} = ctx
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} has been added to your cart! 🛒`);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}><Baby/> Shop the Best for Your Baby</h2>
      <p className={styles.subtitle}>Carefully selected products to make parenting easier and more joyful!</p>

      <div className={styles.productsGrid}>
        {babyProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.productCategory}>{product.category}</p>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.productPrice}>${product.price}</p>
            <button onClick={() => addToCart(product)} className={styles.addToCartButton}>
              Add to Cart <BaselineProductionQuantityLimits/>
            </button>
          </div>
        ))}
      </div>
      <button onClick={() => changePage("dashboard")}>Back</button>
    </div>
  );
};

export default BabyProducts;
