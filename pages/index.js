import Head from "next/head";
import About from "../components/About";
import Blogs from "../components/Blogs";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Prabin Acharya</title>
      </Head>
      <About />
      <Blogs />
      <Projects />
    </div>
  );
}
