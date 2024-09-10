import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ShoppingBag, Heart } from 'lucide-react';
import { Footer } from "@/components/ui/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb/Breadcrumb";
import { SimpleDialog } from '@/components/ui/Dialog/SimpleDialog';
import { MyContextProvider } from '@/context/UserContext';
import { CustomMenu } from '@/components/ui/NavigationMenu/CustomMenu';
import { Toaster } from '@/components/ui/Toast/toaster';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Next Ecommerce",
  description: "Made with lots of love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background font-sans antialiased flex flex-col min-h-[100dvh]",
          fontSans.variable
        )}
      >
        <Toaster />
        <MyContextProvider>
      <section
      aria-label='shipping'
      className='w-full container flex justify-center m-1'
    >
      free shipping
    </section>
    
    <section aria-label='menu' className='w-full py-4 bg-muted'>
      
      <div className='container flex flex-row-reverse px-4 md:px-6'>

        <div className='px-2'><Heart className='hover:cursor-pointer' /></div>
        <div className='px-2'><SimpleDialog /></div>
        <div className='px-2'><ShoppingBag className='hover:cursor-pointer' /></div>
        
        {/* <User email='john@example.com' fullName='John Doe' /> */}
      </div>
    </section>
    <section aria-label='breadcrumb' className="container flex flex-row px-4 md:px-6">
      <Breadcrumb />
      <CustomMenu />
      </section>{children}

    <Footer />
    </MyContextProvider>
      </body>
    </html>
  );
}
