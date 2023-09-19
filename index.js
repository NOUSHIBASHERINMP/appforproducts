import { getAllProducts, getProductById } from "./product.js";
import { getAllBrands, getBrandById } from "./brand.js";
console.log(getAllProducts(), getProductById(3));
console.log(getAllBrands(), getBrandById(5));
