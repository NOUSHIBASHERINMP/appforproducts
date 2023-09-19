var brands = [
  { id: 1, Brand: "Apple" },
  { id: 2, Brand: "Google" },
  { id: 3, Brand: "Samsung" },
  { id: 4, Brand: "Louis Vuitton" },
  { id: 5, Brand: "McDonald's" },
  { id: 6, Brand: "Toyota" },
  { id: 7, Brand: "NIKE" },
  { id: 8, Brand: "BMW" },
  { id: 9, Brand: "Honda" },
  { id: 10, Brand: "L'Oréal" },
  { id: 11, Brand: "Gucci" },
  { id: 12, Brand: "Starbucks" },
  { id: 13, Brand: "Audi" },
  { id: 14, Brand: "Sony" },
  { id: 15, Brand: "Lenovo" },
];

export function getAllBrands() {
  return brands;
}
export function getBrandById(id) {
  var brandById = brands.filter((brand) => brand.id == id);
  return brandById;
}
