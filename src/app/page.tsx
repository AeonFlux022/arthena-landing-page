import Content from "./components/Content";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Content />
      <Testimonial />
    </>
  );
}
