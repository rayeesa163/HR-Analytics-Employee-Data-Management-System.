import { motion } from "framer-motion";
import { Employee } from "@/data/employees";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface RecentActivityProps {
  employees: Employee[];
}

const activityTypes = [
  "joined the company",
  "completed onboarding",
  "received a promotion",
  "updated personal info",
  "completed performance review",
];

export const RecentActivity = ({ employees }: RecentActivityProps) => {
  const recentEmployees = employees.slice(0, 5);

  return (
    <div className="glass-card rounded-xl p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Recent Activity
      </h3>
      <div className="space-y-4">
        {recentEmployees.map((employee, index) => (
          <motion.div
            key={employee.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <Avatar>
              <AvatarFallback className="bg-primary/10 text-primary">
                {employee.firstName[0]}
                {employee.lastName[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {employee.firstName} {employee.lastName}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {activityTypes[index % activityTypes.length]}
              </p>
            </div>
            <Badge variant="outline" className="text-xs">
              {employee.department}
            </Badge>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
