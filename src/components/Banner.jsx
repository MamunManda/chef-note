import animation from "../assets/cooking.json";
import Lottie from "lottie-react";
const Banner = () => {
  return (
    <section
      className="bg-contain bg-fixed"
      style={{ backgroundImage: "url(/bg.png)" }}
    >
      <div
        id="banner"
        className="flex min-h-screen bg-white bg-opacity-95 flex-col-reverse md:flex-row items-center justify-around "
      >
        <div className="text space-y-4  text-center md:text-start ">
          <h1 className="text-5xl font-bold">
            With <span className="text-orange-400"> 30,000+</span> Recipies,
          </h1>
          <div className=" max-w-[520px] md:rounded-full p-2 bg-orange-400 text-white">
            <marquee direction="right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              harum magnam provident quidem earum quod modi unde, nobis atque
              voluptas, voluptatem assumenda fugit ipsum inventore. Fugiat totam
              sit, necessitatibus harum maxime animi temporibus adipisci
              perferendis cum architecto dolore, cumque nobis, doloribus
              exercitationem! Fugiat ipsum fuga quasi officia nemo suscipit
              error nostrum aut reprehenderit maxime ipsa quos culpa vel, earum
              unde exercitationem voluptatibus odit nihil voluptas natus.
              Consequatur vitae rerum porro cumque nihil dolor numquam tempora
              eos et sapiente aliquid, reiciendis, ex nisi officia quibusdam,
              voluptas aspernatur error corporis. Laudantium tempora tempore
              quos neque id minima officiis, doloremque aperiam dolor inventore!
            </marquee>
          </div>

          <h2 className="text-3xl">Be a Best Chef Of Your Family</h2>
          <div className="buttons flex gap-3 justify-center md:justify-start">
            <button className=" ">Join Now</button>
            <button className=" ">See Recipies</button>
          </div>
        </div>
        <div className="max-w-[400px] ">
          <Lottie animationData={animation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
