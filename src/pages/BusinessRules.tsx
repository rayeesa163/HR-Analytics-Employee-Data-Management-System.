import { AppLayout } from "@/components/layout/AppLayout";
import { Header } from "@/components/layout/Header";
import { businessRules } from "@/data/employees";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  AlertCircle,
  Plus,
  Edit,
  Trash2,
  Shield,
  Clock,
  DollarSign,
  Users,
  FileCheck,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Compensation: DollarSign,
  Onboarding: Clock,
  Organization: Users,
  Offboarding: FileCheck,
  Performance: Shield,
};

const BusinessRules = () => {
  return (
    <AppLayout>
      <Header
        title="Business Rules"
        subtitle="Configure and manage HR business validation rules"
      />
      
      <div className="p-8 space-y-6">
        {/* Action Bar */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              {businessRules.length} active rules configured
            </p>
          </div>
          <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Plus className="w-4 h-4 mr-2" />
            Add Rule
          </Button>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {businessRules.map((rule, index) => {
            const Icon = categoryIcons[rule.category] || Shield;
            return (
              <motion.div
                key={rule.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="glass-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-accent/10">
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <CardTitle className="text-base">{rule.name}</CardTitle>
                          <Badge variant="outline" className="mt-1 text-xs">
                            {rule.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {rule.status === "active" ? (
                          <CheckCircle2 className="w-5 h-5 text-success" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-warning" />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {rule.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge
                        className={
                          rule.status === "active"
                            ? "status-active"
                            : "status-inactive"
                        }
                      >
                        {rule.status}
                      </Badge>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-card rounded-xl p-6 bg-primary/5 border-primary/20"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                About Business Rules
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Business rules are automated validations that enforce HR policies
                and ensure data integrity. They are triggered during data entry,
                workflow approvals, and scheduled processes. Configure rules to
                match your organization's specific requirements and compliance
                needs.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default BusinessRules;
