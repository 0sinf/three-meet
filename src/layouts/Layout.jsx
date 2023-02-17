import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="container">
      <div className="container__inner">{children}</div>
    </div>
  );
}
