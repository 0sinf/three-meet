import Card from "../components/Card";
import Layout from "../layouts/Layout";

export default function Section02() {
  return (
    <Layout>
      <Card
        header="두번째 질문"
        content={`만약에 예수님께서 베드로에게 하신 것과
        같이 따라오라 하셨을 때,
        
        당신의 선택은?`}
        link="/section03"
      />
    </Layout>
  );
}
