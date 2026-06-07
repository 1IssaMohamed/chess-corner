// HashRouter instead of BrowserRouter because GitHub Pages serves static files —
// it doesn't know about /learn/xyz, so any direct URL would 404. With HashRouter,
// routes live in the URL fragment (#/learn/xyz) which is client-side only and
// never sent to the server. All navigation just works.

import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import AppShell from "@/components/layout/AppShell";
import HomePage from "@/components/home/HomePage";
import OpeningPage from "@/components/opening/OpeningPage";
import LearnPage from "@/components/learn/LearnPage";
import PracticePage from "@/components/practice/PracticePage";
import FreePlayPage from "@/components/freeplay/FreePlayPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route index element={<HomePage />} />
          <Route path="opening/:openingId" element={<OpeningPage />} />
          <Route path="learn/:openingId/:lineId" element={<LearnPage />} />
          <Route
            path="practice/:openingId/:lineId"
            element={<PracticePage />}
          />
          <Route path="play/:openingId/:lineId" element={<FreePlayPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
