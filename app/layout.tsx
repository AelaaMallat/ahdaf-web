import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const kanit = Kanit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "Ahdaf",
  description: "Ahdaf website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document, 'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '976290557802878');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className={`${kanit.variable} font-kanit antialiased`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-X6HY8D5F8T" />
    </html>
  );
}
