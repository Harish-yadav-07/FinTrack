"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroSection = () => {

    const imageRef = useRef();

    useEffect(() => {

        const imageElement = imageRef.current;
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;

            if (scrollPosition > scrollThreshold) {
                imageElement.classList.add("scrolled")
            } else {
                imageElement.classList.remove("scrolled")
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])


    return (
        <div className="pb-20 px-4">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 mb-2 gradient-title">Turn Every Expense into <br /> Smarter Decision</h1>
                <p className="text-xl text-gray-500 mb-8 max-w-5xl mx-auto">
                    FinTrack is an AI-powered personal finance platform that helps you track income, monitor expenses, uncover spending patterns, and make smarter financial decisions with real-time insights.
                </p>
                <div className="flex justify-center space-x-4">
                    <Link href={'/dashboard'}>
                        <Button size="lg" className="px-8">
                            Get Started
                        </Button>
                    </Link>
                    <Link href={'/'}>
                        <Button size="lg" variant="outline" className="px-8 border-black">
                            Learn More
                        </Button>
                    </Link>
                </div>
                <div className="hero-image-wrapper">
                    <div ref={imageRef} className="hero-image">
                        <Image src={'/Banner.png'} alt="Dashboard Image" height={720} width={1280} priority className="rounded-lg shadow-2xl border mx-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;