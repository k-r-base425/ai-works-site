import { Route, Routes } from "react-router-dom";
import { SiteShell } from "./components/SiteShell";
import { CanDoPage } from "./pages/CanDoPage";
import { HomePage } from "./pages/HomePage";
import { NotesPage } from "./pages/NotesPage";
import { ProcessPage } from "./pages/ProcessPage";
import { ProfilePage } from "./pages/ProfilePage";
import { QrGuidePage } from "./pages/QrGuidePage";
import { RelatedPage } from "./pages/RelatedPage";
import { WorkDetailPage } from "./pages/WorkDetailPage";
import { WorksPage } from "./pages/WorksPage";

function App() {
  return (
    <SiteShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/works/ai-works" element={<WorkDetailPage />} />
        <Route path="/can-do" element={<CanDoPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/related" element={<RelatedPage />} />
        <Route path="/qr-guide" element={<QrGuidePage />} />
      </Routes>
    </SiteShell>
  );
}

export default App;
