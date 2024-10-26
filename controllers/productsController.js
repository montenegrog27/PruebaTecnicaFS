const productos = [{ nombre: "arroz", precio: 32, stock: 100 }];
let idCount = 1;
const getProducts = (req, res) => {
  res.json(productos);
};

const createProduct = (req, res) => {
  try {
    const { nombre, stock, precio } = req.body;

    if (nombre && typeof precio === "number") {
      const newProduct = {
        id: idCount++,
        nombre,
        precio,
        stock,
      };
      productos.push(newProduct);
      res.status(200).json(newProduct);
    } else
      res
        .status(400)
        .json({ error: "Debe existir nombre y precio debe ser un número" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateProduct = (req, res) => {
  console.log("aprams", req.params);
  const { id } = req.params;
  console.log(id);
  const { nombre, stock, precio } = req.body;

  const product = productos.find((pro) => pro.id === parseInt(id));
  console.log(product);
  if (nombre) {
    product.nombre = nombre;
  }
  if (stock) {
    product.stock = stock;
  }
  if (precio && typeof precio === "number") {
    product.precio = precio;
  }
  res.json(product);
};
const deleteProduct = (req, res) => {
  const { id } = req.params;
  console.log(id);

  const productToDelete = productos.filter((pro) => pro.id !== parseInt(id));
  console.log(productToDelete);
  productos = productToDelete;
  res.json(productToDelete);
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
