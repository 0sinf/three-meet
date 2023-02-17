import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";
import "./Home.css";

export default function Home() {
  return (
    <Layout>
      <div className="home">
        <h1 className="home__header">삼자대면</h1>
        <Link to="/three-meet/section01">
          <Button variant="contained">시작하기</Button>
        </Link>
      </div>
    </Layout>
  );
}
