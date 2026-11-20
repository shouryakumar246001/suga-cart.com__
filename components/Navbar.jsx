'use client'
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import { assets } from "@/assets/assets";

const Navbar = () => {

    const router = useRouter();

    const [search, setSearch] = useState('')
    const cartCount = useSelector(state => state.cart.total)

    const handleSearch = (e) => {
        e.preventDefault()
        router.push(`/shop?search=${search}`)
    }

    return (
        <nav className="relative bg-[#fdf2f5]/90 backdrop-blur-md sticky top-0 z-50">
            <div className="mx-6">
                <div className="flex items-center justify-between max-w-7xl mx-auto py-3.5 transition-all">

                    <Link href="/" className="relative flex items-center gap-3.5 group">
                        <Image 
                            src={assets.suga_logo} 
                            alt="suga cart.com logo" 
                            className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover shadow-sm group-hover:scale-105 transition-transform" 
                            priority 
                        />
                        <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-800">
                            suga <span className="text-purple-700">cart</span><span className="text-pink-500 font-extrabold">.com</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden sm:flex items-center gap-4 lg:gap-8 text-slate-600">
                        <Link href="/">Home</Link>
                        <Link href="/shop">Shop</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Contact</Link>

                        <form onSubmit={handleSearch} className="hidden xl:flex items-center w-xs text-sm gap-2 bg-white/80 border border-pink-200/70 px-4 py-2.5 rounded-full focus-within:border-pink-400 focus-within:bg-white transition">
                            <Search size={18} className="text-slate-600" />
                            <input className="w-full bg-transparent outline-none placeholder-slate-600" type="text" placeholder="Search products" value={search} onChange={(e) => setSearch(e.target.value)} required />
                        </form>

                        <Link href="/cart" className="relative flex items-center gap-2 text-slate-600">
                            <ShoppingCart size={18} />
                            Cart
                            <button className="absolute -top-1 left-3 text-[8px] text-white bg-slate-600 size-3.5 rounded-full">{cartCount}</button>
                        </Link>

                        <button className="px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
                            Login
                        </button>

                    </div>

                    {/* Mobile User Button  */}
                    <div className="sm:hidden">
                        <button className="px-7 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-sm transition text-white rounded-full">
                            Login
                        </button>
                    </div>
                </div>
            </div>
            <hr className="border-pink-200/60" />
        </nav>
    )
}

export default Navbar