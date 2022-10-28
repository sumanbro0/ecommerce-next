import Head from "next/head";
import Blog from "../components/Blog";
import Clients from "../components/Clients";
import Players from "../components/Player";
import Products from "../components/Products";
import Section from "../components/Section";
import Slider from "../components/Slider";

function Home({ data }) {
  const product = data;
  return (
    <div>
      <Head>
        <title>DARKO</title>
        <meta name="keywords" content="next js,perfume store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <Products n={"5"} hidden={false} product={product} />
      <Players />
      <Clients />
      <Section />
      <Blog />
    </div>
  );
}
export async function getServerSideProps(context) {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/");

    if (!res.ok) {
      throw new Error(`Error! status: ${res.status}`);
    }
    let data = await res.json();
    return {
      props: { data },
    };
  } catch (err) {
    console.log(err);
  }
}

export default Home;
