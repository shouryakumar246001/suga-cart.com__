'use client'
import Link from "next/link"
import Image from "next/image"
import { assets } from "@/assets/assets"

const AdminNavbar = () => {


    return (
        <div className="flex items-center justify-between px-12 py-3 border-b border-pink-200/60 bg-[#fdf2f5]/90 backdrop-blur-md transition-all">
            <Link href="/" className="flex items-center gap-3.5">
                <Image src={assets.suga_logo} alt="suga cart.com logo" className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-cover shadow-sm" priority />
                <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-800">
                    suga <span className="text-purple-700">cart</span><span className="text-pink-500 font-extrabold">.com</span>
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full text-white bg-purple-600 shadow-xs">
                    Admin
                </span>
            </Link>
            <div className="flex items-center gap-3">
                <p>Hi, Admin</p>
            </div>
        </div>
    )
}

export default AdminNavbar