import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";
import "./Card.css";

export default function Card({ header, content, link }) {
  return (
    <Layout>
      <div className="section">
        <h2 className="section__header">{header}</h2>
        <div className="section__content">{content}</div>
        <Link to={link}>
          <Button variant="contained">다음 질문</Button>
        </Link>
      </div>
    </Layout>
  );
}
