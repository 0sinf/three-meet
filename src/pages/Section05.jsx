import Card from "../components/Card";
import Layout from "../layouts/Layout";

export default function Section05() {
  return (
    <Layout>
      <Card
        header="네번째 질문"
        content={`예수님께서 배고픈 청중들을 위해
        내가 아끼는 물고기 인형을
        진짜 물고기로 만드셨다.
        
        나는 _______다.`}
        link="/section06"
      />
    </Layout>
  );
}
