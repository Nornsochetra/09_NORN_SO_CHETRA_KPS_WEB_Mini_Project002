import "./globals.css";
import Logo from "@/components/logo";
import { Provider } from "@/context/provider";

export const metadata = {
  title: {
    template: "%s | Monster",
    default: "Todo List | Monster",
  },
  description: "Homework 006 - Next.js",
};

export default function AuthenticationLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-charcoal">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
