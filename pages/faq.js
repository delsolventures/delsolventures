import Link from "next/link";
import { GraphQLClient } from "graphql-request";

export async function getStaticProps() {
  const hygraph = new GraphQLClient(
    //    'https://api-eu-central-1.hygraph.com/v2/ck8sn5tnf01gc01z89dbc7s0o/master'
    "https://api-us-west-2.hygraph.com/v2/cl9daxg3907zv01umhvo51g65/master"
  );

  const { faqs } = await hygraph.request(
    `
      {
        faqs  {
    id
    title
    content
    grids {
      title
      subtitle
    }
  }
      }
    `
  );

  return {
    props: {
      faqs
    }
  };
}

export default ({ faqs }) => faqs.map(({ title, index }) => <p>{title}</p>);
