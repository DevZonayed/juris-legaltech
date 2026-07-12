import { Lang } from "@/components/lang";
import { AdminLawCms } from "@/components/admin-law-cms";

export default function AdminCmsPage() {
  return (
    <>
      <div className="ahead">
        <h1>
          <Lang en="Law CMS — bilingual editor" bn="ল CMS — দ্বিভাষিক সম্পাদক" />
        </h1>
      </div>
      <AdminLawCms />
    </>
  );
}
