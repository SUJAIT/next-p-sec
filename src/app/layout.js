import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";


const inter = Inter({ subsets: ["latin"] });
const pop = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})


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
      <body className={pop.className}>
       <Header></Header>
        {children}
        </body>
    </html>
  );
}
