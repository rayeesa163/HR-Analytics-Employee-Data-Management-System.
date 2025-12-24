import { AppLayout } from "@/components/layout/AppLayout";
import { Header } from "@/components/layout/Header";
import { OrgChart } from "@/components/organization/OrgChart";
import { employees } from "@/data/employees";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Building2, Users, MapPin, Briefcase } from "lucide-react";

const Organization = () => {
  const departments = [...new Set(employees.map((e) => e.department))];
  const locations = [...new Set(employees.map((e) => e.location))];
  const divisions = [...new Set(employees.map((e) => e.division))];

  return (
    <AppLayout>
      <Header
        title="Organization Structure"
        subtitle="View and manage organizational hierarchy"
      />
      
      <div className="p-8 space-y-8">
        {/* Org Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <MetricCard
            title="Departments"
            value={departments.length}
            icon={Building2}
            color="primary"
            delay={0}
          />
          <MetricCard
            title="Divisions"
            value={divisions.length}
            icon={Briefcase}
            color="accent"
            delay={0.1}
          />
          <MetricCard
            title="Locations"
            value={locations.length}
            icon={MapPin}
            color="info"
            delay={0.2}
          />
          <MetricCard
            title="Active Employees"
            value={employees.filter((e) => e.status === "active").length}
            icon={Users}
            color="success"
            delay={0.3}
          />
        </div>

        {/* Org Chart */}
        <OrgChart employees={employees} />
      </div>
    </AppLayout>
  );
};

export default Organization;
