import PostJob from "@/screens/postJob/PostJob";
import { Sidebar } from "@/components/recruiter/Sidebar/RecruiterSidebar";

export default function PostJobRoutePage() {
  return (
    <div className="theme-recruiter relative min-h-screen bg-canvas">
      <Sidebar />
      <PostJob />
    </div>
  );
}
