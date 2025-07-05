import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Filter, Grid, List, Star, Heart, ShoppingBag } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export const Shop = (): JSX.Element => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products", count: 24 },
    { id: "clothing", name: "Clothing", count: 15 },
    { id: "accessories", name: "Accessories", count: 6 },
    { id: "home-decor", name: "Home Decor", count: 3 },
  ];

  const products = [
    {
      id: 1,
      name: "Navigating The Sea Denim Jacket",
      price: "₹1,499",
      originalPrice: "₹2,999",
      image: "/rectangle-16.png",
      rating: 4.8,
      reviews: 124,
      category: "clothing",
      story: "Upcycled from 3 old denim pieces",
      artisan: "Meera Collective, Rajasthan",
      isNew: true,
      discount: 50
    },
    {
      id: 2,
      name: "Vintage Patchwork Kurta",
      price: "₹899",
      originalPrice: "₹1,799",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 89,
      category: "clothing",
      story: "Made from vintage saree fabrics",
      artisan: "Kala Niketan, Gujarat",
      isNew: false,
      discount: 50
    },
    {
      id: 3,
      name: "Eco-Friendly Tote Bag",
      price: "₹599",
      originalPrice: "₹999",
      image: "https://images.pexels.com/photos/7679745/pexels-photo-7679745.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 156,
      category: "accessories",
      story: "Crafted from old cotton shirts",
      artisan: "Green Hands, Kerala",
      isNew: false,
      discount: 40
    },
    {
      id: 4,
      name: "Upcycled Silk Scarf",
      price: "₹799",
      originalPrice: "₹1,299",
      image: "https://images.pexels.com/photos/7679747/pexels-photo-7679747.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      reviews: 67,
      category: "accessories",
      story: "Transformed from old silk sarees",
      artisan: "Silk Route Artisans, Karnataka",
      isNew: true,
      discount: 38
    },
    {
      id: 5,
      name: "Patchwork Cushion Cover",
      price: "₹449",
      originalPrice: "₹799",
      image: "https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 92,
      category: "home-decor",
      story: "Made from fabric scraps",
      artisan: "Home Craft Collective, Punjab",
      isNew: false,
      discount: 44
    },
    {
      id: 6,
      name: "Recycled Denim Skirt",
      price: "₹1,199",
      originalPrice: "₹2,199",
      image: "https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 78,
      category: "clothing",
      story: "Redesigned from old jeans",
      artisan: "Denim Dreams, Tamil Nadu",
      isNew: true,
      discount: 45
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#fdf9f9]">
      {/* Header */}
      <div className="bg-[#2e3155] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-['Bebas_Neue'] text-5xl md:text-6xl mb-4"
          >
            Sustainable Fashion Store
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-['Kameron'] text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Every purchase supports artisan livelihoods and reduces textile waste
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-['Kameron'] font-bold text-[#2e3155] text-lg mb-6">
                Categories
              </h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-[#ffdff9] text-[#2e3155] font-semibold"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-['Kameron']">{category.name}</span>
                      <span className="text-sm text-gray-500">({category.count})</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-['Kameron'] font-bold text-[#2e3155] mb-4">
                  Price Range
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="font-['Kameron'] text-sm">Under ₹500</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="font-['Kameron'] text-sm">₹500 - ₹1000</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="font-['Kameron'] text-sm">₹1000 - ₹2000</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="font-['Kameron'] text-sm">Above ₹2000</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div className="flex items-center space-x-4">
                <span className="font-['Kameron'] text-gray-600">
                  Showing {filteredProducts.length} products
                </span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-white rounded-lg p-1 shadow-md">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === "grid" ? "bg-[#2e3155] text-white" : "text-gray-600"
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === "list" ? "bg-[#2e3155] text-white" : "text-gray-600"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
                
                <Button variant="outline" className="flex items-center space-x-2">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" 
                : "grid-cols-1"
            }`}>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className={`overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white ${
                    viewMode === "list" ? "flex" : ""
                  }`}>
                    <div className={`relative overflow-hidden ${
                      viewMode === "list" ? "w-48 flex-shrink-0" : ""
                    }`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                          viewMode === "list" ? "w-full h-full" : "w-full h-64"
                        }`}
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col space-y-2">
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Upcycled
                        </div>
                        {product.isNew && (
                          <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            New
                          </div>
                        )}
                        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          -{product.discount}%
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 transition-colors">
                          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                        </button>
                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 transition-colors">
                          <ShoppingBag className="w-5 h-5 text-gray-600 hover:text-blue-500" />
                        </button>
                      </div>
                    </div>
                    
                    <CardContent className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-['Kameron'] font-semibold text-[#2e3155] text-lg leading-tight">
                          {product.name}
                        </h3>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">
                        {product.story} • By {product.artisan}
                      </p>
                      
                      <div className="flex items-center mb-3">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">
                          {product.rating} ({product.reviews} reviews)
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-[#2e3155] text-xl">
                            {product.price}
                          </span>
                          <span className="text-gray-500 text-sm line-through">
                            {product.originalPrice}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button
                          asChild
                          className="flex-1 h-[45px] bg-[#2e3155] hover:bg-[#2e3155]/90 rounded-full"
                        >
                          <Link to={`/product/${product.id}`}>
                            View Details
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          className="h-[45px] px-4 rounded-full border-2 border-[#2e3155] hover:bg-[#2e3155] hover:text-white"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="h-[50px] px-8 rounded-full border-2 border-[#2e3155] hover:bg-[#2e3155] hover:text-white transition-all duration-300"
              >
                Load More Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};