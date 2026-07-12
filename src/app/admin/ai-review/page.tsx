import { Lang } from "@/components/lang";
import { AdminAiReview } from "@/components/admin-ai-review";

export default function AdminAiReviewPage() {
  return (
    <>
      <div className="ahead">
        <h1>
          <Lang en="AI answer review & flags" bn="এআই উত্তর পর্যালোচনা ও ফ্ল্যাগ" />
        </h1>
        <span className="badge2fa" style={{ marginLeft: "auto" }}>
          <Lang en="Keeps answers grounded" bn="উত্তর নির্ভরযোগ্য রাখে" />
        </span>
      </div>
      <AdminAiReview />
    </>
  );
}
