import TeamBg from "../../src/assets/images/team-bg.png";
import KISHEN from "../../src/assets/images/KISHEN-M-2.png";
import XIANG from "../../src/assets/images/XIANG-M-1.png";
import FLOATLN from "../../src/assets/images/FLOATLN-M.png";
import IK1 from "../../src/assets/images/IK1-M.png";
import VISWA from "../../src/assets/images/VISWA-M-1.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Team() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${TeamBg})` }}
        className="lg:bg-no-repeat bg-cover object-cover"
      >
        <Navbar />
        <h1 className="text-white text-center lg:pl-[150px] pl-[50px] lg:pt-[50px] uppercase font-apocalypse text-[42px]">
          the team
        </h1>
        <div className="lg:grid lg:grid-cols-5 sm:grid sm:grid-cols-2  mx-auto lg:pt-[60px] pt-[30px] gap-6 space-y-10 lg:space-y-0 pb-10 lg:pb-10">
          <div className="space-y-4 flex lg:inline">
            <div>
              <h2 className="text-white lg:text-center lg:pr-[86px] pl-[50px]">
                KISHEN
              </h2>
              <img src={KISHEN} alt="" className="h-[200px] w-[390px] lg:h-full lg:w-full" />
            </div>
            <div className="space-y-4 pt-[25px] lg:pt-0 lg:pl-[60px]">
              <p className="text-gray-300 text-[14px]">Project Lead </p>
              <p className="text-gray-300 text-[12px] w-[90%] lg:w-full">
                Making the world a better place is the dream, ideas are the
                by-product.
              </p>
              <p className="text-white text-[12px]">
                Robotics and Mechatronics Engineer by Qualification
              </p>
            </div>
          </div>

          <div className="space-y-4 flex lg:inline">
            <div>
              <h2 className="text-white lg:text-center lg:pr-[86px] pl-[50px]">
              FLOATLN
              </h2>
              <img src={FLOATLN} alt="" className="h-[200px] w-[390px] lg:h-full lg:w-full" />
            </div>
            <div className="space-y-4 pt-[25px] pl-[20px] lg:pt-0 lg:pl-[60px]">
              <p className="text-gray-300 text-[14px]">Art Director</p>
              <p className="text-gray-300 text-[12px] w-[90%] lg:w-full">
              I put the Colors into Ideas
              </p>
              <p className="text-white text-[12px]">
                Robotics and Mechatronics Engineer by Qualification
              </p>
            </div>
          </div>

          <div className="space-y-4 flex lg:inline">
            <div>
              <h2 className="text-white lg:text-center lg:pr-[86px] pl-[50px]">
              IK
              </h2>
              <img src={IK1} alt="" className="h-[200px] w-[390px] lg:h-full lg:w-full"/>
            </div>
            <div className="space-y-4 pt-[25px] pl-[20px] lg:pt-0 lg:pl-[60px]">
              <p className="text-gray-300 text-[14px]">Technical Lead</p>
              <p className="text-gray-300 text-[12px] w-[90%] lg:w-full">
              I am the definition of Tech
              </p>
             
            </div>
          </div>

          <div className="space-y-4 flex lg:inline">
            <div>
              <h2 className="text-white lg:text-center lg:pr-[86px] pl-[50px]">
              XIANG
              </h2>
              <img src={XIANG} alt="" className="h-[200px] w-[390px] lg:h-full lg:w-full"/>
            </div>
            <div className="space-y-4 pt-[25px] pl-[20px] lg:pt-0 lg:pl-[60px]">
              <p className="text-gray-300 text-[14px]">Web3 Developer</p>
              <p className="text-gray-300 text-[12px] w-[90%] lg:w-full">
              Web2 to Web3 and everything in between
              </p>
             
            </div>
          </div>

          <div className="space-y-4 flex lg:inline">
            <div>
              <h2 className="text-white lg:text-center lg:pr-[86px] pl-[50px]">
              VISWA
              </h2>
              <img src={VISWA} alt="" className="h-[200px] w-[390px] lg:h-full lg:w-full"/>
            </div>
            <div className="space-y-4 pt-[25px] pl-[20px] lg:pt-0 lg:pl-[60px]">
              <p className="text-gray-300 text-[14px]">Financial Administrator</p>
              <p className="text-gray-300 text-[12px] w-[90%] lg:w-full">
              I crunch numbers for lunch.
              </p>
             
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
