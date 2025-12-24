import { AppLayout } from "@/components/layout/AppLayout";
import { Header } from "@/components/layout/Header";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  Users,
  ChevronRight,
  Plus,
} from "lucide-react";

const jobs = [
  {
    id: "job-001",
    title: "Senior Software Engineer",
    department: "Technology",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$150,000 - $180,000",
    openings: 3,
    posted: "2024-01-10",
    status: "active",
  },
  {
    id: "job-002",
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    openings: 1,
    posted: "2024-01-12",
    status: "active",
  },
  {
    id: "job-003",
    title: "HR Coordinator",
    department: "Human Resources",
    location: "New York, NY",
    type: "Full-time",
    salary: "$55,000 - $70,000",
    openings: 2,
    posted: "2024-01-08",
    status: "active",
  },
  {
    id: "job-004",
    title: "Financial Analyst",
    department: "Finance",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$80,000 - $100,000",
    openings: 1,
    posted: "2024-01-05",
    status: "active",
  },
  {
    id: "job-005",
    title: "UX Designer",
    department: "Product",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    openings: 2,
    posted: "2024-01-14",
    status: "active",
  },
  {
    id: "job-006",
    title: "Data Analyst Intern",
    department: "Technology",
    location: "Boston, MA",
    type: "Internship",
    salary: "$25/hour",
    openings: 4,
    posted: "2024-01-15",
    status: "active",
  },
];

const Jobs = () => {
  const totalOpenings = jobs.reduce((sum, job) => sum + job.openings, 0);

  return (
    <AppLayout>
      <Header
        title="Job Positions"
        subtitle="Manage open positions and job requisitions"
      />
      
      <div className="p-8 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="glass-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {jobs.length}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Open Positions
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {totalOpenings}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Total Openings
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-success/10">
                  <Clock className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">12</p>
                  <p className="text-xs text-muted-foreground">
                    Days Avg. to Fill
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {jobs.length} active positions
          </p>
          <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Plus className="w-4 h-4 mr-2" />
            Create Position
          </Button>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="glass-card hover:shadow-elegant transition-all duration-300 cursor-pointer group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{job.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {job.department}
                      </p>
                    </div>
                    <Badge className="status-active">{job.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <DollarSign className="w-4 h-4" />
                      {job.salary}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      {job.openings} opening{job.openings > 1 ? "s" : ""}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {job.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        Posted: {job.posted}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-accent hover:text-accent/80"
                    >
                      View
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

export default Jobs;
