import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getGlobalPageData, getGlobalPageMetaData } from "@/data/loaders";
import { Header } from "@/components/custom/Header";
import { Footer } from "@/components/custom/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export async function generateMetadata(): Promise<Metadata> {

  const metadata = await getGlobalPageMetaData();
  
  return {
    title: metadata?.title,
    description: metadata?.description
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const globalData = await getGlobalPageData();
  
  return (
    <html lang="en">
      <body className={inter.className + `flex flex-col`}>
        <Header data={globalData.header} />
        <div className="flex-1">
          {children}
        </div>
        <Footer data={globalData.footer} />
      </body>
    </html>
  );
}
