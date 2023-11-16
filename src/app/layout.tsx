"use client";

import { Montserrat } from "next/font/google";
import Providers from "../../lib/providers";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"]
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head></head>
      <body className={montserrat.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;