import Head from "next/head";

type IMetaProps = {
  title: string;
  description: string;
};

const Meta = ({ title, description }: IMetaProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
    </>
  );
};

export default Meta;
