import "./globals.css";

import Header from "@/components/layout/header";
import MSWProvider from "@/providers/MSWProvider";
import ReduxProvider from "@/store/ReduxProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-background text-gray-100">
        <ReduxProvider>
          <MSWProvider>
            <Header />
            <main className="mx-auto w-full max-w-layout py-20">{children}</main>
          </MSWProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
