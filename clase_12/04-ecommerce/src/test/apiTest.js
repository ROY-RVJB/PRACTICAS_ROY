import { obtenerProductos, nuevoProducto } from '../service/productService.js';

// Función para probar la API
const evaluarAPI = async () => {
  console.log('🔍 Iniciando evaluación de la API...\n');

  // 1. Probar obtención de productos
  console.log('📋 Probando obtenerProductos()...');
  try {
    const productos = await obtenerProductos();
    console.log('✅ Productos obtenidos exitosamente:', productos.length, 'productos');
    console.log('📊 Primeros productos:', productos.slice(0, 2));
  } catch (error) {
    console.error('❌ Error al obtener productos:', error.message);
  }

  console.log('\n' + '='.repeat(50) + '\n');

  // 2. Probar creación de producto
  console.log('➕ Probando nuevoProducto()...');
  
  const productosPrueba = [
    {
      nombre: 'iPhone 15 Pro',
      descripcion: 'Smartphone de última generación con chip A17 Pro',
      marca: 'Apple',
      precio: '1299.99',
      foto: 'https://example.com/iphone15.jpg',
      color: '000000'
    },
    {
      nombre: 'Samsung Galaxy S24',
      descripcion: 'Smartphone Android con IA integrada',
      marca: 'Samsung',
      precio: '999.99',
      foto: 'https://example.com/galaxy-s24.jpg',  
      color: 'ffffff'
    },
    {
      nombre: 'MacBook Pro M3',
      descripcion: 'Laptop profesional con chip M3',
      marca: 'Apple',
      precio: '2399.99',
      foto: 'https://example.com/macbook-m3.jpg',
      color: 'c0c0c0'
    }
  ];

  for (let i = 0; i < productosPrueba.length; i++) {
    const producto = productosPrueba[i];
    console.log(`\n🔄 Creando producto ${i + 1}: ${producto.nombre}`);
    
    try {
      const resultado = await nuevoProducto(producto);
      console.log('✅ Producto creado exitosamente');
      console.log('📦 ID asignado:', resultado.id);
      console.log('💰 Precio registrado:', resultado.precio);
      
      // Pequeña pausa entre creaciones
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.error('❌ Error al crear producto:', error.message);
    }
  }

  console.log('\n' + '='.repeat(50) + '\n');

  // 3. Verificar productos después de las creaciones
  console.log('🔍 Verificando productos después de las creaciones...');
  try {
    const productosFinales = await obtenerProductos();
    console.log('📊 Total de productos en la API:', productosFinales.length);
    console.log('🆕 Últimos productos creados:');
    productosFinales.slice(-3).forEach(producto => {
      console.log(`   - ${producto.nombre} (${producto.marca}) - $${producto.precio}`);
    });
  } catch (error) {
    console.error('❌ Error al verificar productos:', error.message);
  }

  console.log('\n🏁 Evaluación completada');
};

// Ejecutar evaluación si se llama directamente
if (import.meta.url === `file://${process.argv[1]}`) {
  evaluarAPI();
}

export { evaluarAPI };