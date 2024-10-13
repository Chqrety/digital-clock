import localFont from "next/font/local";
import "./globals.css";

const digital7 = localFont({
    src: "./fonts/digital7.woff",
    variable: "--font-digital7",
    weight: "100 900",
});
const digital7Mono = localFont({
    src: "./fonts/digital7-mono.ttf",
    variable: "--font-digital7-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Jam Kost",
    description: "Simple online clock with region device",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${digital7.variable} ${digital7Mono.variable} antialiased`}>{children}</body>
        </html>
    );
}
