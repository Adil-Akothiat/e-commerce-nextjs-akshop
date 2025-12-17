"use client";
import { Inter } from "next/font/google";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { Suspense, useEffect } from "react";
import { MainLoader } from "@/components/ui/loaders";
import { Provider } from "react-redux";
import store from "@/redux/store";
import "./globals.css";
import "@/features/products/components/shared/ProductCard/card.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(()=>{
    window.scrollTo({ top:0, behavior:"smooth" });
  },[])
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <ReactQueryProvider>
            <Suspense fallback={<MainLoader />}>
              <Header />
              {children}
              <Footer />
            </Suspense>
          </ReactQueryProvider>
        </Provider>
      </body>
    </html>
  );
}