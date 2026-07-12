import { Lang } from "@/components/lang";
import { AdminLawyerQueue } from "@/components/admin-lawyer-queue";

export default function AdminLawyersPage() {
  return (
    <>
      <div className="ahead">
        <h1>
          <Lang en="Lawyer verification queue" bn="আইনজীবী যাচাই সারি" />
        </h1>
      </div>
      <AdminLawyerQueue />
    </>
  );
}
