import "@/assets/styles/tailwind.css";

import { hankenGrotesk } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "Results Summary Component - Frontend Mentor",
  description:
    "This project is a solution to the Results Summary Component challenge on Frontend Mentor, developed by Arda Eker.",
};

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body className={`${hankenGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
