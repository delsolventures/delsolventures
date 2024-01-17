"use client";
import Image from "next/image";
import SectionTitle from "../components/sectionTitle";
import {
  FaShieldCat,
  FaPepperHot,
  FaSeedling,
  FaChargingStation,
  FaSun,
  FaGlassWaterDroplet,
} from "react-icons/fa6";

export default function Portfolio() {
  return (
    <div className="main">
      <SectionTitle pretitle="Mission" title="del SOL Mission Statement">
        &quot;Our mission is to support Central American start-ups and
        communities to create sustainable, renewable & secure platforms.&quot;
      </SectionTitle>
      <div className="flex flex-wrap flex-grow gap-8 content-center justify-center mx-auto p-8">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        <Card6 />
      </div>
    </div>
  );
}

const ImageCard = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/${src}?w=${width}&q=${quality || 75}`;
};
function Card1() {
  return (
    <div className="card w-96 bg-neutral shadow-xl">
      <figure className="image-full">
        <Image
          loader={ImageCard}
          className="bg-white w-full"
          src="/doodleipsum-304181b3182265078bad3744c08e8ab6.png"
          height={200}
          width={300}
          alt="FoodTech"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">FoodTech</h2>
        <p>
          Vertical Farm Systems. <br />
          Climate-Control. <br />
          Reduced Emissions.
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <FaPepperHot
              className="fill-red-700 size-8 pr-2"
              aria-hidden="true"
            />
            Nature. Meet Nuture.
          </button>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="card w-96 bg-neutral shadow-xl">
      <figure className="image-full">
        <Image
          loader={ImageCard}
          className="bg-white w-full"
          src="/doodleipsum-4dd5fd75c6118b7161fca2ffd991842a.png"
          height={200}
          width={300}
          alt="Cybersecurity"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Cybersecurity</h2>
        <p>
          Digital Identity Management. <br />
          Data Privacy. <br />
          Privacy Protection Toolkits.
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <FaShieldCat
              className="fill-pink-400 size-8 pr-2"
              aria-hidden="true"
            />
            Privacy. Protection.
          </button>
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="card w-96 bg-neutral shadow-xl">
      <figure className="image-full">
        <Image
          loader={ImageCard}
          className="bg-white w-full"
          src="/doodleipsum-5ef96019d86f8e5221c37d9733cb5492.png"
          height={200}
          width={300}
          alt="CleanTech"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">CleanTech</h2>
        <p>
          Offgrid Solutions. <br />
          Solid State Batteries. <br />
          Community Renewal.
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <FaSeedling
              className="fill-green-400 size-8 pr-2"
              aria-hidden="true"
            />
            Sustain. Renew.
          </button>
        </div>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="card w-96 bg-neutral shadow-xl">
      <figure className="image-full">
        <Image
          loader={ImageCard}
          className="bg-white w-full"
          src="/doodleipsum-5af1ef6e7de4a6e775448b69ac0a9851.png"
          height={200}
          width={300}
          alt="Mobility"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Mobility</h2>
        <p>
          Hybrid EV. <br />
          EV Infrastructure. <br />
          Stored Energy. <br />
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <FaChargingStation
              className="fill-purple-400 size-8 pr-2"
              aria-hidden="true"
            />
            Electrified Future.
          </button>
        </div>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="card w-96 bg-neutral shadow-xl">
      <figure className="image-full">
        <Image
          loader={ImageCard}
          className="bg-white w-full"
          src="/doodleipsum-f701b63cfe38e57fa0408c238af32027.png"
          height={200}
          width={300}
          alt="Creators"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Water Sustainability</h2>
        <p>
          Atmospheric. <br />
          Water. <br />
          Generation. <br />
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <FaGlassWaterDroplet
              className="fill-slate-50 size-8 pr-2"
              aria-hidden="true"
            />
            AWG. Air to Water.
          </button>
        </div>
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="card w-96 bg-neutral shadow-xl">
      <figure className="image-full">
        <Image
          loader={ImageCard}
          className="bg-white w-full"
          src="/doodleipsum-3c3a259ced051ff05ebf18363560f8a3.png"
          height={200}
          width={300}
          alt="del SOL"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">del SOL</h2>
        <p>
          Discover. <br />
          Energize. <br />
          Explore. <br />
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <FaSun className="fill-yellow-400 size-8 pr-2" aria-hidden="true" />
            The. Ultimate. Venture.
          </button>
        </div>
      </div>
    </div>
  );
}
