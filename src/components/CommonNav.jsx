import { Link } from "react-router-dom";

export const CommonNav = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link target="_blank" to="/editor/10">
            Editor
          </Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/admin/profile">Admin Profile</Link>
        </li>
        <li>
          <Link to="/super-admin">Super Admin</Link>
        </li>
        <li>
          <Link to="/super-admin/profile">Super Admin Profile</Link>
        </li>
      </ul>
    </>
  );
};
