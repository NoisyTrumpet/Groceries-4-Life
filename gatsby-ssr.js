import { Partytown } from "@builder.io/partytown/react";
import React from "react";

const resolveUrl = (url) => {
  if (
    url.hostname === "www.google-analytics.com" ||
    url.hostname === "connect.facebook.net" ||
    url.hostname === "analytics.tiktok.com" ||
    url.hostname === "www.googletagmanager.com"
  ) {
    var proxyUrl = new URL(
      `https://coop-atm.mygenfcu.workers.dev/?${url.href}`
    );
    // proxyUrl.searchParams.append('', )
    return proxyUrl;
  }
  return url;
};

const ORIGIN = "https://www.googletagmanager.com";

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test")
    return null;
  setHeadComponents([
    <Partytown
      key="partytown"
      debug={false}
      forward={["dataLayer.push", "gtag"]}
      resolveUrl={resolveUrl}
    />,
    <script
      key="google-analytics"
      type="text/partytown"
      src={`${ORIGIN}/gtag/js?id=${process.env.GATSBY_GOOGLE_TAG_MANAGER_ID}`}
    />,
    <script
      key="google-analytics-config"
      type="text/partytown"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(){ window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.GATSBY_GOOGLE_TAG_MANAGER_ID}', { send_page_view: false })`,
      }}
    />,
  ]);
};
