import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
// import { useAmp } from 'next/amp';

// import { GA_TRACKING_ID } from '../lib/analytics';

// function AmpWrap({ ampOnly, nonAmp }) {
// 	const isAmp = useAmp();
// 	if (ampOnly) return isAmp && ampOnly;
// 	return !isAmp && nonAmp;
// }

class NextSite extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=optional"
            rel="preload"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=optional"
            rel="preload"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#000000" />
          <link rel="icon" type="image/svg+xml" href="/static/favicon/favicon.svg" />
          <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-config" content="/static/favicon/browserconfig.xml" />
          <meta name="theme-color" content="#000" />
          {/* <link rel="alternate" type="application/rss+xml" href="/feed.xml" /> */}

          {/* <AmpWrap
						ampOnly={
							<script
								async
								key="amp-analytics"
								custom-element="amp-analytics"
								src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
							/>
						}
					/>
					<AmpWrap
						ampOnly={<script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js" />}
					/> */}
        </Head>
        <body className="dark:bg-black bg-white">
          <Main />
          <NextScript />
          {/* <AmpWrap
						ampOnly={
							<amp-analytics type="googleanalytics" id="analytics1" data-credentials="include">
								<script
									type="application/json"
									dangerouslySetInnerHTML={{
										__html: JSON.stringify({
											vars: {
												account: GA_TRACKING_ID,
												gtag_id: GA_TRACKING_ID,
												config: {
													GA_TRACKING_ID: { groups: 'default' },
												},
											},
											triggers: {
												trackPageview: {
													on: 'visible',
													request: 'pageview',
												},
											},
										}),
									}}
								/>
							</amp-analytics>
						}
					/>
					<AmpWrap
						nonAmp={
							<>
								<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
								<script
									dangerouslySetInnerHTML={{
										__html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}');
                  `,
									}}
								/>
							</>
						}
					/> */}
        </body>
      </Html>
    )
  }
}

export default NextSite
