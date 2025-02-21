import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Providers from "@/providers/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Next Mart",
  description: "Well, Hello there",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} antialiased`}
      >
        <Toaster richColors position="top-center" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}




// @layer base {
//   :root {
//     /* Light Theme */
//     --background: 0 0% 98%; /* Light gray background */
//     --foreground: 240 10% 3.9%; /* Dark gray text */
//     --card: 0 0% 100%; /* White card background */
//     --card-foreground: 240 10% 3.9%; /* Dark gray card text */
//     --popover: 0 0% 100%; /* White popover background */
//     --popover-foreground: 240 10% 3.9%; /* Dark gray popover text */
//     --primary: 346 77% 50%; /* Vibrant red for primary actions */
//     --primary-foreground: 0 0% 100%; /* White text on primary */
//     --secondary: 240 4.8% 95.9%; /* Light gray for secondary elements */
//     --secondary-foreground: 240 5.9% 10%; /* Dark gray text on secondary */
//     --muted: 240 4.8% 95.9%; /* Light gray for muted elements */
//     --muted-foreground: 240 3.8% 46.1%; /* Gray text for muted elements */
//     --accent: 240 4.8% 95.9%; /* Light gray for accents */
//     --accent-foreground: 240 5.9% 10%; /* Dark gray text on accents */
//     --destructive: 0 84.2% 60.2%; /* Red for destructive actions */
//     --destructive-foreground: 0 0% 100%; /* White text on destructive */
//     --border: 240 5.9% 90%; /* Light gray borders */
//     --input: 240 5.9% 90%; /* Light gray input fields */
//     --ring: 346 77% 50%; /* Vibrant red for focus rings */
//     --radius: 0.5rem; /* Rounded corners */
//     --chart-1: 346 77% 50%; /* Vibrant red for charts */
//     --chart-2: 210 100% 50%; /* Blue for charts */
//     --chart-3: 120 60% 50%; /* Green for charts */
//     --chart-4: 30 100% 50%; /* Orange for charts */
//     --chart-5: 280 70% 50%; /* Purple for charts */
//     --sidebar-background: 0 0% 98%; /* White sidebar background */
//     --sidebar-foreground: 240 5.3% 26.1%; /* Dark gray sidebar text */
//     --sidebar-primary: 240 5.9% 10%; /* Vibrant red for sidebar primary */
//     --sidebar-primary-foreground: 0 0% 98%; /* White text on sidebar primary */
//     --sidebar-accent: 240 4.8% 95.9%; /* Light gray for sidebar accents */
//     --sidebar-accent-foreground: 240 5.9% 10%; /* Dark gray text on sidebar accents */
//     --sidebar-border: 220 13% 91%; /* Light gray sidebar borders */
//     --sidebar-ring: 217.2 91.2% 59.8%; /* Vibrant red for sidebar focus rings */
//   }

//   .dark {
//     /* Dark Theme */
//     --background: 240 10% 3.9%; /* Dark gray background */
//     --foreground: 0 0% 98%; /* Light gray text */
//     --card: 240 10% 3.9%; /* Dark gray card background */
//     --card-foreground: 0 0% 98%; /* Light gray card text */
//     --popover: 240 10% 3.9%; /* Dark gray popover background */
//     --popover-foreground: 0 0% 98%; /* Light gray popover text */
//     --primary: 346 77% 50%; /* Vibrant red for primary actions */
//     --primary-foreground: 0 0% 100%; /* White text on primary */
//     --secondary: 240 3.7% 15.9%; /* Dark gray for secondary elements */
//     --secondary-foreground: 0 0% 98%; /* Light gray text on secondary */
//     --muted: 240 3.7% 15.9%; /* Dark gray for muted elements */
//     --muted-foreground: 240 5% 64.9%; /* Gray text for muted elements */
//     --accent: 240 3.7% 15.9%; /* Dark gray for accents */
//     --accent-foreground: 0 0% 98%; /* Light gray text on accents */
//     --destructive: 0 62.8% 30.6%; /* Dark red for destructive actions */
//     --destructive-foreground: 0 0% 98%; /* Light gray text on destructive */
//     --border: 240 3.7% 15.9%; /* Dark gray borders */
//     --input: 240 3.7% 15.9%; /* Dark gray input fields */
//     --ring: 346 77% 50%; /* Vibrant red for focus rings */
//     --chart-1: 346 77% 50%; /* Vibrant red for charts */
//     --chart-2: 210 100% 50%; /* Blue for charts */
//     --chart-3: 120 60% 50%; /* Green for charts */
//     --chart-4: 30 100% 50%; /* Orange for charts */
//     --chart-5: 280 70% 50%; /* Purple for charts */
//     --sidebar-background: 240 5.9% 10%; /* Dark gray sidebar background */
//     --sidebar-foreground: 240 4.8% 95.9%; /* Light gray sidebar text */
//     --sidebar-primary: 224.3 76.3% 48%; /* Vibrant red for sidebar primary */
//     --sidebar-primary-foreground: 0 0% 100%; /* White text on sidebar primary */
//     --sidebar-accent: 240 3.7% 15.9%; /* Dark gray for sidebar accents */
//     --sidebar-accent-foreground: 240 4.8% 95.9%; /* Light gray text on sidebar accents */
//     --sidebar-border: 240 3.7% 15.9%; /* Dark gray sidebar borders */
//     --sidebar-ring: 217.2 91.2% 59.8%; /* Vibrant red for sidebar focus rings */
//   }
// }