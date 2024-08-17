import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:"Next Hero",
    template:"%s | Next Hero"
  },
  description: "Nextjs is a Supper Power",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Header></Header>
        {children}
        </body>
    </html>
  );
}
