import * as React from "react";
import Providers from "./Providers";
import Layout from "Layout";
import { ChildrenType } from "./Types";

export default function RootLayout(props:ChildrenType) {
  return (
    <html lang="en">
      <body>
        <Providers><Layout>{props.children}</Layout></Providers>
      </body>
    </html>
  );
}
