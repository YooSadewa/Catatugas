import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { AppFooter } from "@/components/footer/app-footer";

const figtree = Figtree({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catatugas",
  description: "Platform untuk mahasiswa pekerja",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", figtree.variable)}
    >
      <body className="min-h-full flex flex-col bg-[#FBF8FF]">
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full flex flex-col min-h-svh">
            <SidebarTrigger />
            <div className="px-6 pt-4 flex-1">
              {children}
            </div>
            <AppFooter />
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
