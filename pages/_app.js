import { Analytics } from "@vercel/analytics/react";
import "lxgw-wenkai-webfont/style.css";
import "reactflow/dist/style.css";
import "./styles.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
