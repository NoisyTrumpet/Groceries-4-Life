import { Partytown } from "@builder.io/partytown/react";
import React from "react";

const resolveUrl = (url) => {
  if (
    url.hostname === "www.google-analytics.com" ||
    url.hostname === "connect.facebook.net" ||
    url.hostname === "analytics.tiktok.com" ||
    url.hostname === "www.googletagmanager.com" ||
    url.hostname === "www.googleadservices.com" ||
    url.hostname === "googleads.g.doubleclick.net"
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
      forward={["dataLayer.push", "fbq", "ttq.load", "ttq.page", "ttq.track"]}
      resolveUrl={resolveUrl}
    />,
    <script
      key="google-tag-manager-head"
      type="text/partytown"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.GATSBY_GOOGLE_TAG_MANAGER_ID}');`,
      }}
    />,
  ]),
    setPreBodyComponents([
      <noscript
        key="google-tagmanager-body"
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GATSBY_GOOGLE_TAG_MANAGER_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />,
    ]);
};
