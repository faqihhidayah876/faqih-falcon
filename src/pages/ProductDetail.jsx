import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowLeft, FaCheckCircle, FaStar, FaBox } from "react-icons/fa";

export default function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => setError("Product not found in beauty database"));
    }, [id]);

    if (error) return (
        <div className="flex justify-center mt-20">
            <div className="text-red-500 bg-red-50 px-6 py-4 rounded-xl border border-red-100 font-medium flex items-center shadow-sm">
                <span className="mr-2">⚠️</span> {error}
            </div>
        </div>
    );
    
    if (!product) return (
        <div className="flex justify-center mt-20">
            <div className="animate-pulse flex items-center gap-3 text-teal-600 font-semibold bg-teal-50 px-6 py-3 rounded-full">
                <div className="w-5 h-5 border-2 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
                Loading Beauty Specs...
            </div>
        </div>
    );

    return (
        <div className="p-4 md:p-8 max-w-5xl mx-auto font-inter">
            <button 
                onClick={() => navigate(-1)} 
                className="group flex items-center text-gray-500 hover:text-teal-600 mb-8 transition-colors text-sm font-medium"
            >
                <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 mr-3 group-hover:border-teal-200 group-hover:bg-teal-50 transition-all">
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                </div>
                Back to Inventory
            </button>

            <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
                
                {/* Image Section */}
                <div className="lg:w-1/2 bg-gradient-to-br from-teal-50 to-gray-50 p-8 flex items-center justify-center relative">
                    <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-teal-700 uppercase tracking-widest shadow-sm">
                        {product.category}
                    </div>
                    <img 
                        src={product.thumbnail} 
                        alt={product.title} 
                        className="rounded-2xl shadow-xl w-full max-w-md h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500 border-4 border-white" 
                    />
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-2 text-sm font-semibold text-teal-600 tracking-wide uppercase">
                        {product.brand || "Exclusive Brand"}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                        {product.title}
                    </h2>
                    
                    <p className="text-gray-500 text-base leading-relaxed mb-8">
                        {product.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center gap-4">
                            <div className="bg-white p-3 rounded-xl shadow-sm text-yellow-500">
                                <FaStar size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-medium">Rating</p>
                                <p className="font-bold text-gray-800">{product.rating} / 5.0</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center gap-4">
                            <div className="bg-white p-3 rounded-xl shadow-sm text-teal-500">
                                <FaBox size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-medium">Stock</p>
                                <p className="font-bold text-gray-800">{product.stock} Units</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <div className="bg-teal-600 text-white p-6 rounded-3xl shadow-lg shadow-teal-600/30 flex items-center justify-between">
                            <div>
                                <p className="text-teal-100 text-sm font-medium mb-1">Retail Price</p>
                                <p className="text-3xl font-black">
                                    Rp {(product.price * 15000).toLocaleString('id-ID')}
                                </p>
                            </div>
                            <div className="bg-teal-500/50 p-4 rounded-2xl backdrop-blur-sm">
                                <FaCheckCircle size={28} className="text-white" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}