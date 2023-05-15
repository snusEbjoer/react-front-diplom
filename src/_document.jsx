import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import "./assets/css/main.css"
import "./assets/css/animate.css"
import "./assets/css/lineicons.css"
import "./assets/css/bootstrap.min.css"

 export default class CustomDocument extends Document {
   render() {
   <Html lang="en">
     <Head>
       <Helmet>
       <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <title>SaaSpal - SaaS and Software Landing Page Template</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="shortcut icon"
      type="image/x-icon"
      href="assets/img/favicon.png"
    />
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/lineicons.css" />
    <link rel="stylesheet" href="assets/css/animate.css" />
    <link rel="stylesheet" href="assets/css/main.css" />
       </Helmet>
     </Head>
     <body>
       <Main />
       <NextScript />
     </body>
   </Html>
   }};