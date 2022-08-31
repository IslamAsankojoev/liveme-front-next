import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="/static/css/linearicons.css" />
        <link rel="stylesheet" href="/static/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/static/css/themify-icons.css" />
        <link rel="stylesheet" href="/static/css/bootstrap.css" />
        <link rel="stylesheet" href="/static/css/owl.carousel.css" />
        <link rel="stylesheet" href="/static/css/nice-select.css" />
        <link rel="stylesheet" href="/static/css/nouislider.min.css" />
        <link rel="stylesheet" href="/static/css/ion.rangeSlider.css" />
        <link rel="stylesheet" href="/static/css/ion.rangeSlider.skinFlat.css" />
        <link rel="stylesheet" href="/static/css/magnific-popup.css" />
        <link rel="stylesheet" href="/static/css/main.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
