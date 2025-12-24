import { AppLayout } from "@/components/layout/AppLayout";
import { Header } from "@/components/layout/Header";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Download,
  Calendar,
  BarChart3,
  Users,
  DollarSign,
  Clock,
  ChevronRight,
} from "lucide-react";

const reports = [
  {
    id: "rpt-001",
    name: "Headcount Summary",
    description: "Monthly headcount breakdown by department and location",
    category: "Workforce",
    lastRun: "2024-01-15",
    frequency: "Monthly",
    icon: Users,
  },
  {
    id: "rpt-002",
    name: "Compensation Analysis",
    description: "Salary distribution and pay equity analysis",
    category: "Compensation",
    lastRun: "2024-01-10",
    frequency: "Quarterly",
    icon: DollarSign,
  },
  {
    id: "rpt-003",
    name: "Turnover Report",
    description: "Employee turnover trends and exit analysis",
    category: "Analytics",
    lastRun: "2024-01-12",
    frequency: "Monthly",
    icon: BarChart3,
  },
  {
    id: "rpt-004",
    name: "New Hire Report",
    description: "Onboarding status and new employee details",
    category: "Onboarding",
    lastRun: "2024-01-14",
    frequency: "Weekly",
    icon: Clock,
  },
  {
    id: "rpt-005",
    name: "Performance Review Status",
    description: "Annual review completion tracking",
    category: "Performance",
    lastRun: "2024-01-08",
    frequency: "Monthly",
    icon: FileText,
  },
  {
    id: "rpt-006",
    name: "Diversity & Inclusion",
    description: "Workforce diversity metrics and trends",
    category: "Analytics",
    lastRun: "2024-01-05",
    frequency: "Quarterly",
    icon: Users,
  },
];

const Reports = () => {
  return (
    <AppLayout>
      <Header
        title="Reports"
        subtitle="Generate and view HR analytics reports"
      />
      
      <div className="p-8 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="glass-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {reports.length}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Available Reports
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-success/10">
                  <Calendar className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">3</p>
                  <p className="text-xs text-muted-foreground">
                    Scheduled Today
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Download className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">24</p>
                  <p className="text-xs text-muted-foreground">
                    Downloads This Week
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-warning/10">
                  <Clock className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">2h</p>
                  <p className="text-xs text-muted-foreground">
                    Avg Generation Time
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="glass-card hover:shadow-elegant transition-all duration-300 cursor-pointer group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <report.icon className="w-5 h-5 text-accent" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {report.frequency}
                    </Badge>
                  </div>
                  <CardTitle className="text-base mt-3">{report.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {report.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      Last run: {report.lastRun}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-accent hover:text-accent/80"
                    >
                      Run
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Reports;
