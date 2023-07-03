import NextHead from 'next/head';

const Head = () => {
  const title = 'Demo Scam Website';
  const description =
    "This demo website shows how a scammer can trick you into signing a transaction you didn't intend to.";
  const domain = 'scam-demo.revoke.cash';
  const url = `https://${domain}`;
  const image = `${url}/card.png`;

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={domain} />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </NextHead>
  );
};

export default Head;
