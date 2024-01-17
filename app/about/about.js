"use client";
import Link from "next/link";
import Image from "next/image";

const Loader = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/${src}?w=${width}&q=${quality || 75}`;
};

export default function About() {
  return (
    <div className="hero min-h-screen items-center text-center text-pretty">
      <div className="hero-content">
        <div className="max-w-2xl">
          <div className="mb-8">
            <Image
              loader={Loader}
              src="logo-dsvi-light.svg"
              alt="del SOL VENTURES"
              height={300}
              width={300}
              className="mx-auto border-2 border-white p-2"
            />
          </div>
          <h2 className="text-2xl font-bold">
            Building strategic partnerships focused on innovative & sustainable
            solutions in Central America.
          </h2>
          <p className="py-6">
            Creating bold investment strategies in innovative sustainable &
            diverse companies & platforms.
          </p>
          <ul className="list-inside">
            Our focus being on,
            <li>Smart homes</li>
            <li>Energy storage & efficiency</li>
            <li>Bioculture & Permaculture</li>
            <li>Water sustainability</li>
          </ul>
          <button className="btn btn-primary uppercase my-4">
            <Link href="/contact">Contact</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

function UDLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 256.000000 256.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        xmlns="http://www.w3.org/2000/svg"
        transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
        fill="#f3f4f6"
        stroke="none"
      >
        <path d="M0 1280 l0 -1280 1280 0 1280 0 0 1280 0 1280 -1280 0 -1280 0 0 -1280z m1876 570 c2 0 75 53 162 118 86 65 163 122 170 126 9 6 12 -60 12 -316 l0 -323 -173 -70 -172 -70 -6 -220 c-6 -236 -7 -242 -69 -366 -67 -132 -230 -258 -381 -294 -269 -63 -551 71 -670 318 l-41 86 -46 -19 c-26 -10 -103 -41 -171 -69 -68 -28 -126 -50 -128 -47 -2 2 71 59 161 127 l166 123 2 270 3 270 165 92 c91 51 171 93 177 93 10 1 13 -54 15 -225 l3 -226 197 149 197 148 3 194 3 194 205 113 205 113 3 -144 c1 -80 5 -145 8 -145z" />
        <path d="M1247 1060 c-104 -43 -191 -81 -194 -84 -13 -13 45 -102 86 -131 37 -26 51 -30 111 -30 60 0 74 4 112 30 65 46 88 99 88 207 0 48 -3 88 -7 87 -5 0 -93 -36 -196 -79z" />
      </g>
    </svg>
  );
}

function LinkedInLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 448 512"
      preserveAspectRatio="xMidYMid meet"
    >
      <g xmlns="http://www.w3.org/2000/svg" fill="#f3f4f6" stroke="none">
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
      </g>
    </svg>
  );
}
function DiscordLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 640 512"
      preserveAspectRatio="xMidYMid meet"
    >
      <g xmlns="http://www.w3.org/2000/svg" fill="#f3f4f6" stroke="none">
        <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
      </g>
    </svg>
  );
}
