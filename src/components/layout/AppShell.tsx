import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

export default function AppShell() {
  return (
    <div style={{ background: "var(--bg-base)", minHeight: "100vh" }}>
      <TopBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
