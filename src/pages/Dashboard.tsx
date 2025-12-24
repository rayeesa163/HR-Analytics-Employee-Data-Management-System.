import { AppLayout } from "@/components/layout/AppLayout";
import { Header } from "@/components/layout/Header";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { DepartmentChart } from "@/components/dashboard/DepartmentChart";
import { TenureChart } from "@/components/dashboard/TenureChart";
import { BusinessRulesWidget } from "@/components/dashboard/BusinessRulesWidget";
import { employees, analyticsData } from "@/data/employees";
import { Users, UserPlus, UserMinus, TrendingUp, DollarSign, Building2 } from "lucide-react";

const Dashboard = () => {
  return (
    <AppLayout>
      <Header
        title="HR Dashboard"
        subtitle="Welcome back! Here's an overview of your workforce analytics."
      />
      
      <div className="p-8 space-y-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Headcount"
            value={analyticsData.headcount.total}
            change={5.2}
            changeLabel="vs last month"
            icon={Users}
            color="primary"
            delay={0}
          />
          <MetricCard
            title="Active Employees"
            value={analyticsData.headcount.active}
            change={3.8}
            changeLabel="vs last month"
            icon={UserPlus}
            color="success"
            delay={0.1}
          />
          <MetricCard
            title="Turnover Rate"
            value={`${analyticsData.turnover.rate}%`}
            change={-2.1}
            changeLabel="improvement"
            icon={UserMinus}
            color="warning"
            delay={0.2}
          />
          <MetricCard
            title="Avg. Compensation"
            value={`$${(analyticsData.compensation.averageSalary / 1000).toFixed(0)}K`}
            change={4.5}
            changeLabel="annual increase"
            icon={DollarSign}
            color="accent"
            delay={0.3}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DepartmentChart data={analyticsData.diversity.departments} />
          <TenureChart data={analyticsData.tenure} />
        </div>

        {/* Activity and Rules */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentActivity employees={employees} />
          <BusinessRulesWidget />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            title="Pending Onboarding"
            value={analyticsData.headcount.pending}
            icon={UserPlus}
            color="info"
            delay={0.4}
          />
          <MetricCard
            title="Total Locations"
            value="10"
            icon={Building2}
            color="accent"
            delay={0.5}
          />
          <MetricCard
            title="Total Payroll"
            value={`$${(analyticsData.compensation.totalPayroll / 1000000).toFixed(1)}M`}
            icon={DollarSign}
            color="primary"
            delay={0.6}
          />
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
