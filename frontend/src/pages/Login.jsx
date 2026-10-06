import { useState } from 'react';
import loginImg from '../assets/loginImg.jpg'
import { Eye } from 'lucide-react'
import { useNavigate } from 'react-router';

const Login= ()=>{

    const [activeTab, setActiveTab] = useState('login');
    const [showPassword, setShowPassword] = useState(false);
    const navigate= useNavigate();
    return (
        <div className= "min-h-screen flex">
            <div className="hidden md:block w-1/2 min-h-screen">
                <img src={loginImg} alt="login" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 min-h-screen flex items-center justify-center bg-white px-8">
                        <div className= "w-full max-w-md">
                            <div className= "flex justify-center mb-16 gap-8">
                                <button onClick={() => setActiveTab('login')} className={`relative ${activeTab === 'login' ? 'text-indigo-700' : 'text-slate-400'}`}>Login
                                    {activeTab === 'login' && (
                                        <span className="absolute left-0 right-0 -bottom-2 h-[2px] bg-slate-600" />
                                    )}
                                </button>
                                <button onClick={() => setActiveTab('signup')} className={`relative text-lg font-medium ${activeTab === 'signup' ? 'text-indigo-700' : 'text-slate-400'}`}>Signup 
                                    {activeTab === 'signup' && (
                                        <span className="absolute left-0 right-0 -bottom-2 h-[2px] bg-slate-600" />
                                    )}
                                </button>
                            </div>
                            {activeTab === 'login' && (
                                <form>
                                    <input type="email" placeholder="Enter your email" className="w-full border-b border-slate-300 py-3 text-sm outline-none focus:border-slate-600 placeholder:text-slate-500 mb-8" />
                                    <div className="relative">
                                        <input type="password" placeholder="Enter your password" className="w-full border-b border-slate-300 py-3 pr-10 text-sm outline-none focus:border-slate-600 placeholder:text-slate-500 mb-8" />
                                        <button type="button" onClick={()=> setShowPassword(!showPassword)} className="absolute right-1 top-1/4 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                                            <Eye />
                                        </button>
                                    </div>

                                    <div className="text-right mt-1/2">
                                        <button type='button' className="text-xs text-slate-400 hover:text-slate-600">Forgot Password?</button>
                                    </div>

                                    <button type="button" onClick={() => navigate('/home')} className="w-full mt-16 bg-indigo-600 hover:bg-indigo-700 text-white py-3 transition">Login</button>
                                    <p className="text-center text-xs text-slate-500 mt-5">Don't have an account?{" "}
                                    <button type='button' onClick={() => setActiveTab('signup')} className="font-medium text-indigo-600 hover:text-indigo-700">Create Account</button></p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
    )
}

export default Login;