import ThemeProvider from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { defaultNavbarConfig } from "@/components/navbar-config";
import "./globals.css";

export const metadata = {
  title: "Soomin Park - PR Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar config={defaultNavbarConfig} />
          <div
            className="flex-1 overflow-auto bg-white dark:bg-gray-950 text-black dark:text-white transition-all duration-300 ease-in-out"
            style={{
              marginLeft: 'var(--navbar-width, 0px)'
            }}
          >
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
