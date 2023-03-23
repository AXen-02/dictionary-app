import { GetStaticProps } from "next";
import { Html, Head, Main, NextScript } from "next/document";
import { useState } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export default function Document() {
  const [theme, setTheme] = useState("night");
  const NavBar = () => {
    return (
      <div className="justify-end flex p-8">
        <label className="swap swap-rotate">
          <input type="checkbox" />
          <IoSunnyOutline
            className="swap-on fill-current w-10 h-10"
            onClick={() => setTheme("lofi")}
          />
          <IoMoonOutline
            className="swap-off fill-current w-10 h-10"
            onClick={() => setTheme("night")}
          />
        </label>
      </div>
    );
  };

  return (
    <Html lang="en" data-theme={theme}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
