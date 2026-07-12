import { Lang } from "@/components/lang";
import { AdminUsersTable } from "@/components/admin-users-table";

export default function AdminUsersPage() {
  return (
    <>
      <div className="ahead">
        <h1>
          <Lang en="User management" bn="ইউজার ব্যবস্থাপনা" />
        </h1>
      </div>
      <AdminUsersTable />
    </>
  );
}
