import type { Metadata } from "next";
import { site } from "@/content/site";
import Nav from "@/components/Nav";
import Cursor from "@/components/Cursor";
import Motion from "@/components/Motion";
import Footer from "@/components/Footer";
import "./globals.css";
export const metadata: Metadata = { title: { default: site.title, template: "%s | bytebeard_" }, description: site.statement, openGraph: { title: site.title, description: site.statement, type: "website" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=DM+Sans:wght@400;500;600;700;800&family=Righteous&display=swap" rel="stylesheet"/></head><body><div className="grain" aria-hidden="true"/><Nav/><Motion/><Cursor/>{children}<Footer/></body></html>; }
