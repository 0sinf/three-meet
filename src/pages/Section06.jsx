import Card from "../components/Card";
import Layout from "../layouts/Layout";

export default function Section06() {
  return (
    <Layout>
      <Card
        header="다섯번째 질문"
        content={`만약에 바울과 일주일 뒤
        전도여행을 출발한다면,
        
        일주일동안 무엇을 하겠는가?`}
        link="/three-meet/end"
      />
    </Layout>
  );
}
