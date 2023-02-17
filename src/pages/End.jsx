import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";
import "./End.css";

export default function End() {
  return (
    <Layout>
      <div className="end__container">
        <h1 className="end__header">끝!</h1>
        <Link to="/">
          <Button variant="contained">처음으로</Button>
        </Link>
      </div>
    </Layout>
  );
}
