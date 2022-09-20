import AboutBg from "../../src/assets/images/about-bg-1.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
   <div>
     <div
      style={{ backgroundImage: `url(${AboutBg})` }}
      className="h-screen bg-cover bg-no-repeat object-cover"
    >
      <Navbar />
      <div className="w-10/12 mx-auto pt-[100px] space-y-10">
        <h1 className="text-white font-apocalypse text-[42px]">
          meaning & Mission
        </h1>
        <p className="text-[#d9d9d9] text-[14px] lg:max-w-4xl leading-6 lg:leading-10">
          The word 独自 (Dokuji), derived from the Japanese language means
          original or unique. DoKuJi is an exclusive community driven brand that
          focuses on driving changes to the world. Imagine an exclusive society
          that is actively tackling real world issues, has its own brand and
          style, on a sustainable internal ecosystem. A new socioeconomic
          reality where its members thrive while the world becomes a better
          place. All Equal. Be the pioneers to grace the revolution. Join us in
          making the world a better place.
        </p>
        <button className="text-white bg-[#e12b28] px-[60px] py-[8px]">
          Welcome
        </button>
      </div>
     
    </div>
    <Footer />
   </div>
  );
}
