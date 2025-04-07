import React, { useState, useEffect } from "react";
import { FaLeaf, FaRecycle, FaSeedling, FaWater, FaWhatsapp, FaShoppingCart, FaCreditCard, FaUser, FaBox } from "react-icons/fa";
import { MdLocalShipping, MdPayment } from "react-icons/md";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState("credit");
  const [showProducts, setShowProducts] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ name: "", email: "", password: "", confirmPassword: "" });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0).toFixed(2);
  };

  const processPayment = () => {
    setTimeout(() => {
      const isSuccessful = Math.random() > 0.3;
      setPaymentStatus(isSuccessful ? "success" : "failed");
      if (isSuccessful) {
        setCart([]);
        setTimeout(() => {
          setShowPayment(false);
          setShowCart(false);
          setPaymentStatus(null);
        }, 2000);
      }
    }, 1500);
  };

  const handleAddToCartFromHome = (product) => {
    addToCart(product);
    alert("Producto agregado al carrito");
  };

  const products = [
    {
      id: 1,
      name: "Bolsa de Verduras de Temporada",
      price: "$25.99",
      description: "Verduras orgánicas frescas cosechadas semanalmente",
      image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c",
      availability: "Todo el año",
      category: "Verduras"
    },
    {
      id: 2,
      name: "Caja Premium de la Granja",
      price: "$35.99",
      description: "Selección curada de productos orgánicos premium",
      image: "https://images.unsplash.com/photo-1557844352-761f2565b576",
      availability: "De temporada",
      category: "Cajas"
    },
    {
      id: 3,
      name: "Frutas Orgánicas Mixtas",
      price: "$28.99",
      description: "Selección de frutas orgánicas de temporada",
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf",
      availability: "Según temporada",
      category: "Frutas"
    },
    {
      id: 4,
      name: "Hierbas Aromáticas Frescas",
      price: "$15.99",
      description: "Mix de hierbas aromáticas recién cortadas",
      image: "https://images.unsplash.com/photo-1620800113641-67c4f0e4c9d2",
      availability: "Todo el año",
      category: "Hierbas"
    }
  ];

  const seedlings = [
    {
      id: 1,
      name: "Plántulas de Tomate",
      price: "$4.99",
      instructions: "Plantar a pleno sol, regar regularmente",
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2",
      availability: "Primavera"
    },
    {
      id: 2,
      name: "Kit de Jardín de Hierbas",
      price: "$12.99",
      instructions: "Perfecto para jardines de ventana",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
      availability: "Todo el año"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sara Jiménez",
      quote: "¡Las verduras más frescas que he probado!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    },
    {
      id: 2,
      name: "Miguel Chen",
      quote: "Me encanta apoyar la agricultura local sostenible",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    }
  ];

  const handleProductsClick = () => {
    setShowProducts(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempted with:", loginData);
    setShowLogin(false);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registration attempted with:", registerData);
    setShowRegister(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} bg-green-800 text-white w-64 space-y-6 py-7 px-2 transition duration-200 ease-in-out z-50`}>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute right-0 top-0 p-4 text-white"
        >
          ✕
        </button>
        <nav className="mt-8">
          <div 
            onClick={() => {
              setShowProducts(false);
              setIsSidebarOpen(false);
            }}
            className="flex items-center space-x-3 px-4 py-3 hover:bg-green-700 rounded cursor-pointer"
          >
            <FaLeaf className="text-xl" />
            <span>Inicio</span>
          </div>
          <div 
            onClick={() => {
              setShowCart(true);
              setIsSidebarOpen(false);
            }}
            className="flex items-center space-x-3 px-4 py-3 hover:bg-green-700 rounded cursor-pointer"
          >
            <FaShoppingCart className="text-xl" />
            <span>Carrito de Ventas</span>
          </div>
          <div className="flex items-center space-x-3 px-4 py-3 hover:bg-green-700 rounded cursor-pointer">
            <FaUser className="text-xl" />
            <span>Mi Perfil</span>
          </div>
          <div 
            onClick={handleProductsClick}
            className="flex items-center space-x-3 px-4 py-3 hover:bg-green-700 rounded cursor-pointer"
          >
            <FaBox className="text-xl" />
            <span>Productos</span>
          </div>
        </nav>
      </div>

      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-40 bg-green-600 p-3 rounded-full text-white"
      >
        ☰
      </button>

      <div className="flex-1">
        {showProducts ? (
          <div className="pt-24 px-8 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Nuestros Productos</h2>
                <button
                  onClick={() => setShowProducts(false)}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Volver al Inicio
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {products.slice(0, 3).map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{product.name}</h3>
                      <div className="flex justify-between items-center">
                        <p className="text-green-600 font-bold">{product.price}</p>
                        <button
                          onClick={() => handleAddToCartFromHome(product)}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-sm"
                        >
                          Agregar al Carrito
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="relative">
            <div className="relative h-screen">
              <img
                src="https://images.unsplash.com/photo-1500076656116-558758c991c1"
                alt="Paisaje de Reina Pacha"
                className="w-full h-screen object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40">
                <div className="flex items-center justify-center h-full text-center text-white px-4">
                  <div className="flex flex-col space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold">Reina Pacha</h1>
                    <p className="text-xl md:text-2xl">Agricultura sostenible para un mejor mañana</p>
                    <button 
                      onClick={() => setShowProducts(true)}
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg transition duration-300 mx-auto"
                    >
                      Ordenar Ahora
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-16 px-4 bg-white">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Nuestra Huerta</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  <div className="text-center">
                    <FaLeaf className="text-4xl text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">100% Orgánico</h3>
                    <p className="text-gray-600">Cultivamos sin pesticidas ni químicos dañinos</p>
                  </div>
                  <div className="text-center">
                    <FaRecycle className="text-4xl text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Sostenible</h3>
                    <p className="text-gray-600">Prácticas agrícolas respetuosas con el medio ambiente</p>
                  </div>
                  <div className="text-center">
                    <FaWater className="text-4xl text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Riego Eficiente</h3>
                    <p className="text-gray-600">Sistema de riego por goteo para ahorro de agua</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-center mb-12">Productos Destacados</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {products.slice(0, 3).map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <h3 className="font-semibold mb-2">{product.name}</h3>
                        <p className="text-green-600 font-bold">{product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-center mb-12">Testimonios</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-center mb-4">
                        <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                        </div>
                      </div>
                      <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                    </div>
                  ))}
                </div>

                <div className="text-center bg-green-50 p-8 rounded-lg">
                  <h2 className="text-3xl font-bold mb-4">Contáctanos</h2>
                  <p className="text-gray-600 mb-6">¿Tienes preguntas? Estamos aquí para ayudarte</p>
                  <a href="https://wa.me/1234567890" className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300">
                    <FaWhatsapp className="mr-2" />
                    Contactar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {showCart && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Carrito de Compras</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              {cart.length === 0 ? (
                <p className="text-gray-500">Tu carrito está vacío</p>
              ) : (
                <>
                  {cart.map((item, index) => (
                    <div key={index} className="flex items-center justify-between border-b py-2">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-gray-600">{item.price}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Eliminar
                      </button>
                    </div>
                  ))}
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex justify-between font-bold">
                      <span>Total:</span>
                      <span>${calculateTotal()}</span>
                    </div>
                    <button 
                      onClick={() => {
                        setShowPayment(true);
                        setShowCart(false);
                      }} 
                      className="w-full bg-green-600 text-white py-2 rounded mt-4 hover:bg-green-700"
                    >
                      Proceder al Pago
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {showPayment && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Método de Pago</h2>
                <button
                  onClick={() => {
                    setShowPayment(false);
                    setPaymentStatus(null);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              {paymentStatus === null ? (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="credit"
                      name="payment"
                      value="credit"
                      checked={selectedPayment === "credit"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                    />
                    <label htmlFor="credit" className="flex items-center">
                      <FaCreditCard className="mr-2" /> Tarjeta de Crédito
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="debit"
                      name="payment"
                      value="debit"
                      checked={selectedPayment === "debit"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                    />
                    <label htmlFor="debit" className="flex items-center">
                      <MdPayment className="mr-2" /> Tarjeta de Débito
                    </label>
                  </div>
                  <button
                    onClick={processPayment}
                    className="w-full bg-green-600 text-white py-2 rounded mt-4 hover:bg-green-700"
                  >
                    Pagar ${calculateTotal()}
                  </button>
                </div>
              ) : paymentStatus === "success" ? (
                <div className="text-center text-green-600">
                  <p className="text-xl font-bold mb-2">¡Pago realizado con éxito!</p>
                  <p>Gracias por tu compra</p>
                </div>
              ) : (
                <div className="text-center text-red-600">
                  <p className="text-xl font-bold mb-2">Error en el pago</p>
                  <p>Por favor, intenta nuevamente</p>
                  <button
                    onClick={() => setPaymentStatus(null)}
                    className="w-full bg-green-600 text-white py-2 rounded mt-4 hover:bg-green-700"
                  >
                    Intentar de nuevo
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {showLogin && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg max-w-md w-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Iniciar Sesión</h2>
                <button onClick={() => setShowLogin(false)} className="text-gray-500">✕</button>
              </div>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Contraseña</label>
                  <input
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                  Iniciar Sesión
                </button>
              </form>
            </div>
          </div>
        )}

        {showRegister && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg max-w-md w-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Registrarse</h2>
                <button onClick={() => setShowRegister(false)} className="text-gray-500">✕</button>
              </div>
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Nombre</label>
                  <input
                    type="text"
                    value={registerData.name}
                    onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={registerData.email}
                    onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Contraseña</label>
                  <input
                    type="password"
                    value={registerData.password}
                    onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Confirmar Contraseña</label>
                  <input
                    type="password"
                    value={registerData.confirmPassword}
                    onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                  Registrarse
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="absolute top-4 right-4 flex items-center">
          <button 
            onClick={() => setShowLogin(true)} 
            className="bg-white text-green-600 px-6 py-2 rounded-full hover:bg-green-50 transition duration-300 font-semibold mr-4"
          >
            Iniciar Sesión
          </button>
          <button 
            onClick={() => setShowRegister(true)} 
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300 font-semibold mr-4"
          >
            Registrarse
          </button>
          <button
            onClick={() => setShowCart(true)}
            className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition duration-300 font-semibold flex items-center relative"
          >
            <FaShoppingCart className="text-xl" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

export default App;
