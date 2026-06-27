"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden text-center px-4">
            {/* Pulse rings */}
            {[280, 380, 480].map((size, i) => (
                <div
                    key={size}
                    className="absolute rounded-full border border-blue-500/30 animate-ping"
                    style={{
                        width: size, height: size,
                        animationDelay: `${i * 0.7}s`,
                        animationDuration: "2s",
                    }}
                />
            ))}

            {/* Floating particles */}
            {["top-1/4 left-1/5", "top-1/3 right-1/4", "top-2/3 left-1/6", "top-3/4 right-1/5"].map((pos, i) => (
                <div key={i} className={`absolute w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce ${pos}`}
                    style={{ animationDelay: `${i * 0.4}s` }} />
            ))}

            {/* Main content */}
            <div className="relative z-10 animate-fade-in-up">
                <div className="text-7xl mb-2 animate-bounce">🚀</div>
                <h1 className="text-[130px] font-medium leading-none bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%] bg-clip-text text-transparent animate-shimmer">
                    404
                </h1>
                <h2 className="text-2xl font-medium text-foreground mt-2 mb-3">Lost in space</h2>
                <p className="text-muted-foreground text-[15px] max-w-sm mx-auto mb-8 leading-relaxed">
                    The page you&apos;re looking for has drifted into the void. Don&apos;t worry — mission control can get you back.
                </p>

                <div className="flex items-center justify-center gap-3 flex-wrap">
                    <Link href="/" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all hover:-translate-y-0.5">
                        <Home size={16} /> Return home
                    </Link>
                    <button onClick={() => router.back()} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-muted-foreground hover:bg-muted hover:text-foreground transition-all">
                        <ArrowLeft size={16} /> Go back
                    </button>
                </div>
            </div>

            <p className="relative z-10 mt-10 text-xs text-muted-foreground">
                Error code 404 · Page not found
            </p>
        </div>
    );
}