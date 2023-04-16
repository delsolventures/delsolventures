import Image from "next/image";
import Link from "next/link";
import Container from "./container";

const ImageHero = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap ">
        <h1 className="text-center text-4xl font-bold leading-snug tracking-tight text-trueGray-700 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-trueGray-100">
          Investing in a Digital and Sustainable World
        </h1>{" "}
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <div className="text-center pt-8 text-xl leading-normal text-trueGray-700 lg:text-xl xl:text-2xl dark:text-trueGray-100">
              del SOL is an early-stage VC firm led by a team with technology
              and investment experience looking to enable the future
              technologists of the world.
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="hidden lg:block">
            <Image
              loader={ImageHero}
              src="/doodleipsum-f93384e7375de3fe0c8ab3a29cd337ea.png"
              width={600}
              height={600}
              alt="Hero Illustration"
              priority={true}
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl text-center text-trueGray-700 dark:text-trueGray-100">
            Building a diverse portfolio across multiple industries in Southern
            California.
          </h2>
        </div>
      </Container>
    </>
  );
}
