import Card from "../components/Card";
import Layout from "../layouts/Layout";

export default function Section03() {
  return (
    <Layout>
      <Card
        header="세번째 질문"
        content={`만약에 10억 생기면?`}
        link="/three-meet/section04"
      />
    </Layout>
  );
}
