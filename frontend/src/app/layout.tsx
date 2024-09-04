import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { User } from "@/components/ui/User";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb/Breadcrumb";

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
      <section
      aria-label='shipping'
      className='w-full container flex justify-center m-1'
    >
      free shipping
    </section>
    <section aria-label='menu' className='w-full py-4 bg-muted'>
      <div className='container flex flex-row-reverse px-4 md:px-6'>
        <User email='john@example.com' fullName='John Doe' />
      </div>
    </section>
    <section aria-label='breadcrumb' className="container flex flex-row px-4 md:px-6">
      <Breadcrumb />
      </section>{children}
    <Footer />
      </body>
    </html>
  );
}
