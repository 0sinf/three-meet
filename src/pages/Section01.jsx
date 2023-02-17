import Card from "../components/Card";
import Layout from "../layouts/Layout";

export default function Section01() {
  return (
    <Layout>
      <Card
        header="첫번째 질문"
        content="당신의 MBTI는?"
        link="/three-meet/section02"
      />
    </Layout>
  );
}
