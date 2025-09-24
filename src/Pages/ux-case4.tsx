import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Meine UX-Projekte</h1>
      <Link to="/ux-case1">Case Study 1 ansehen</Link>
      <Link to="/ux-case2">Case Study 2 ansehen</Link>
      {/* usw. */}
    </div>
  );
}