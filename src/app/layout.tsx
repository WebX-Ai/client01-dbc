import NavBar from "@/components/common/NavBar/NavBar";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "@/components/common/Footer/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const inter = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Dream Big Corporation",
  description:
    "Dream Big Corporation. Identify. Track. Manage. A proven solutions integrator for increased productivity and efficiency in your supply chain.",
  keywords:
    "Barcode, RFID, Labels, Software, Mobile Devices, Printers, Services, Solutions, Zebra, Honeywell,lenovo, dlink,godex,acer,rugtek,tsc, epson,newland,decade, SCANSMART ID CARD, SCANSMART INVENTORY, SCANSMART ID CARD, TEMPERATURE SCANNING , PRE-PRINTED LABELS, CUSTOM PRE-PRINTED LABELS, INDUSTRIAL PRINTERS, DESKTOP PRINTERS, MOBILE PRINTERS, CARD PRINTERS,HANDHELD BARCODE SCANNERS,FIXED SCANNERS, rugged tablet computers, RUGGED MOBILE DEVICES, WEARABLE MOBILE COMPUTERS & SCANNERS, FIXED/MOUNTED MOBILE COMPUTER DEVICES",
  openGraph: {
    title: "Dream Big Corporation",
    description:
      "Dream Big Corporation. Identify. Track. Manage. A proven solutions integrator for increased productivity and efficiency in your supply chain.",
    images: 'https://www.dreambigcorporation.com/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
