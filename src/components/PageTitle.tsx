import Head from "next/head";

interface TitleProps {
  title: string;
  keywords: string;
  description: string;
}

const PageTitle = ({ title, keywords, description }: TitleProps) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon_io/favicon.ico" />
      <title>{title}</title>
      {/* <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon_io/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon_io/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon_io/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon_io/site.webmanifest" /> */}
    </Head>
  );
};

PageTitle.defaultProps = {
  title: "Infinanze",
  keywords: "Infinanze, Software, Applications",
  description: "",
};

export default PageTitle;
