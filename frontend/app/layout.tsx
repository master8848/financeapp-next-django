import { Flowbite } from "flowbite-react";
import "./globals.css";
import { flowbiteTheme as theme } from "./theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Flowbite theme={{ theme }}>{children}</Flowbite>
      </body>
    </html>
  );
}
