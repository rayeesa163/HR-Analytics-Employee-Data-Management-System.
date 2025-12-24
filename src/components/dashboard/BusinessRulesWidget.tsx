import { motion } from "framer-motion";
import { businessRules } from "@/data/employees";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, Info } from "lucide-react";

export const BusinessRulesWidget = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="glass-card rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">
          Active Business Rules
        </h3>
        <Badge variant="secondary" className="text-xs">
          {businessRules.length} Rules
        </Badge>
      </div>
      <div className="space-y-3">
        {businessRules.slice(0, 4).map((rule, index) => (
          <motion.div
            key={rule.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            className="flex items-start gap-3 p-3 rounded-lg bg-muted/30"
          >
            {rule.status === "active" ? (
              <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{rule.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                {rule.description}
              </p>
            </div>
            <Badge variant="outline" className="text-xs flex-shrink-0">
              {rule.category}
            </Badge>
          </motion.div>
        ))}
      </div>
      <button className="w-full mt-4 py-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors flex items-center justify-center gap-1">
        <Info className="w-4 h-4" />
        View All Rules
      </button>
    </motion.div>
  );
};
