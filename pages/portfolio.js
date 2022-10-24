import { Grid, Card, Col, Row, Button, Text, Link } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldCat,
  faPepperHot,
  faSeedling,
  faChargingStation,
  faSun
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/navbar";
import SEO from "../components/seo";
import SectionTitle from "../components/sectionTitle";
import PopupWidget from "../components/popupWidget";
export default function Portfolio() {
  return (
    <>
      <SEO
        title="Portfolio | del SOL"
        description="Portfolio del SOL. Early-stage VC in biotech, cleantech, foodtech & mobility."
      />
      <div className="main">
        <Navbar />
        <SectionTitle pretitle="Portfolio" title="del SOL Mission Statement">
          "Our mission is to support Southern Californian start-ups and
          communities to create sustainable, renewable & secure platforms."
        </SectionTitle>
        <div className="container w-10/12 items-center p-8 mx-auto w-full place-content-center">
          <Grid.Container gap={2} justify="center">
            <Grid xs={12} sm={4}>
              <Card1 />
            </Grid>
            <Grid xs={12} sm={4}>
              <Card2 />
            </Grid>
            <Grid xs={12} sm={4}>
              <Card3 />
            </Grid>
            <Grid xs={12} sm={5}>
              <Card4 />
            </Grid>
            <Grid xs={12} sm={7}>
              <Card5 />
            </Grid>
          </Grid.Container>
        </div>
      </div>
      <PopupWidget />
    </>
  );
}

function Card1() {
  return (
    <Card css={{ w: "100%", h: "400px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size="$2xl" weight="bold" transform="uppercase" color="#f3f4f6">
            Foodtech
          </Text>
          <Text size="$md" weight="semibold" color="#f3f4f6">
            Vertical systems. <br />
            Climate-controlled environments. <br />
            Reduced carbon emissions.
          </Text>
        </Col>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/doodleipsum-304181b3182265078bad3744c08e8ab6.png"
          objectFit="fit"
          width="100%"
          height="100%"
          alt="Vertical Farming"
          css={{ background: "#374151" }}
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          borderTop: "$borderWeights$light solid $gray800",
          bottom: 0,
          zIndex: 1
        }}
      >
        <Row wrap="wrap" justify="space-between" align="center">
          <Text size="$md" transform="uppercase" color="#f3f4f6">
            Nature. Meet Nuture.
          </Text>
          <Text>
            <FontAwesomeIcon
              icon={faPepperHot} //"fa-solid fa-pepper-hot"
              className="text-red-700"
              aria-hidden="true"
            />
          </Text>
        </Row>
      </Card.Footer>
    </Card>
  );
}
function Card2() {
  return (
    <Card css={{ w: "100%", h: "400px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size="$2xl" weight="bold" transform="uppercase" color="#f3f4f6">
            Cybersecurity
          </Text>
          <Text size="$md" weight="semibold" color="#f3f4f6">
            Digital Identity. <br />
            Data Privacy. <br />
            Privacy Protection Toolkits.
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/doodleipsum-4dd5fd75c6118b7161fca2ffd991842a.png"
          objectFit="fit"
          width="100%"
          height="100%"
          alt="Cybersecurity"
          css={{ background: "#374151" }}
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          borderTop: "$borderWeights$light solid $gray800",
          bottom: 0,
          zIndex: 1
        }}
      >
        <Row wrap="wrap" justify="space-between" align="center">
          <Text size="$md" transform="uppercase" color="#f3f4f6">
            Privacy. Protection.
          </Text>
          <Text>
            <FontAwesomeIcon
              icon={faShieldCat} //"fa-solid fa-shield-cat "
              className="text-trueSky-400"
              aria-hidden="true"
            />
          </Text>
        </Row>
      </Card.Footer>
    </Card>
  );
}
function Card3() {
  return (
    <Card css={{ w: "100%", h: "400px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size="$2xl" weight="bold" transform="uppercase" color="#f3f4f6">
            CleanTech
          </Text>
          <Text size="$md" weight="semibold" color="#f3f4f6">
            Offgrid Solutions <br />
            Solid State Batteries. <br />
            Community Renewal.
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/doodleipsum-5ef96019d86f8e5221c37d9733cb5492.png"
          objectFit="fit"
          width="100%"
          height="100%"
          alt="CleanTech"
          css={{ background: "#374151" }}
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          borderTop: "$borderWeights$light solid $gray800",
          bottom: 0,
          zIndex: 1
        }}
      >
        <Row wrap="wrap" justify="space-between" align="center">
          <Text size="$md" transform="uppercase" color="#f3f4f6">
            Sustainable. Renewable.
          </Text>
          <Text>
            <FontAwesomeIcon
              icon={faSeedling} //"fa-solid fa-seedling"
              className="text-green-400"
              aria-hidden="true"
            />
          </Text>
        </Row>
      </Card.Footer>
    </Card>
  );
}
function Card4() {
  return (
    <Card css={{ w: "100%", h: "400px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size="$2xl" weight="bold" transform="uppercase" color="#f3f4f6">
            Mobility
          </Text>
          <Text size="$md" weight="semibold" color="#f3f4f6">
            Hybrid EV. <br />
            EV Charging Infrastructure. <br />
            Renewalable Energy. <br />
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/doodleipsum-5af1ef6e7de4a6e775448b69ac0a9851.png" //portfolio-mobility.png"
          objectFit="fit"
          width="100%"
          height="100%"
          alt="Mobility"
          css={{ background: "#374151" }}
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          borderTop: "$borderWeights$light solid $gray800",
          bottom: 0,
          zIndex: 1
        }}
      >
        <Row wrap="wrap" justify="space-between" align="center">
          <Text size="$md" transform="uppercase" color="#f3f4f6">
            Electrified Future.
          </Text>
          <Text>
            <FontAwesomeIcon
              icon={faChargingStation} //"fa-solid fa-charging-station"
              className="text-purple-400"
              aria-hidden="true"
            />
          </Text>
        </Row>
      </Card.Footer>
    </Card>
  );
}
function Card5() {
  return (
    <Card css={{ w: "100%", h: "400px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size="$2xl" weight="bold" transform="uppercase" color="#f3f4f6">
            Sunny Dreams
          </Text>
          <Text size="$md" weight="semibold" color="#f3f4f6"></Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/doodleipsum-3c3a259ced051ff05ebf18363560f8a3.png"
          objectFit="fit"
          width="100%"
          height="100%"
          alt="Sunny Dreams"
          css={{ background: "#374151" }}
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          borderTop: "$borderWeights$light solid $gray800",
          bottom: 0,
          zIndex: 1
        }}
      >
        <Row wrap="wrap" justify="space-between" align="center">
          <Text size="$md" color="#f3f4f6">
            The. Ultimate Venture.
          </Text>
          <Text>
            <FontAwesomeIcon
              icon={faSun} //"fa-solid fa-sun"
              className="text-trueOrange-400"
              aria-hidden="true"
            />
          </Text>
        </Row>
      </Card.Footer>
    </Card>
  );
}
