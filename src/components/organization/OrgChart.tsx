import { motion } from "framer-motion";
import { Employee } from "@/data/employees";
import { ChevronDown, ChevronRight, User } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface OrgNode {
  employee: Employee;
  children: OrgNode[];
}

interface OrgChartProps {
  employees: Employee[];
}

const buildOrgTree = (employees: Employee[]): OrgNode[] => {
  const employeeMap = new Map<string, Employee>();
  employees.forEach((emp) => employeeMap.set(emp.id, emp));

  const roots: OrgNode[] = [];
  const nodeMap = new Map<string, OrgNode>();

  // Create nodes
  employees.forEach((emp) => {
    nodeMap.set(emp.id, { employee: emp, children: [] });
  });

  // Build tree
  employees.forEach((emp) => {
    const node = nodeMap.get(emp.id)!;
    if (emp.managerId && nodeMap.has(emp.managerId)) {
      nodeMap.get(emp.managerId)!.children.push(node);
    } else if (!emp.managerId) {
      roots.push(node);
    }
  });

  return roots;
};

interface OrgNodeCardProps {
  node: OrgNode;
  level: number;
}

const OrgNodeCard = ({ node, level }: OrgNodeCardProps) => {
  const [expanded, setExpanded] = useState(level < 2);
  const hasChildren = node.children.length > 0;

  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: level * 0.1 }}
        className={`flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:shadow-elegant transition-all cursor-pointer ${
          level === 0 ? "bg-gradient-to-r from-primary/5 to-accent/5 border-accent/30" : ""
        }`}
        style={{ marginLeft: level * 32 }}
        onClick={() => setExpanded(!expanded)}
      >
        {hasChildren && (
          <button className="p-1 hover:bg-muted rounded">
            {expanded ? (
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            ) : (
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            )}
          </button>
        )}
        {!hasChildren && <div className="w-6" />}
        
        <Avatar className="h-10 w-10">
          <AvatarFallback
            className={`text-sm ${
              level === 0
                ? "bg-accent text-accent-foreground"
                : "bg-primary/10 text-primary"
            }`}
          >
            {node.employee.firstName[0]}
            {node.employee.lastName[0]}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground">
            {node.employee.firstName} {node.employee.lastName}
          </p>
          <p className="text-xs text-muted-foreground truncate">
            {node.employee.jobTitle}
          </p>
        </div>
        
        <div className="text-right">
          <p className="text-xs text-muted-foreground">
            {node.employee.department}
          </p>
          {hasChildren && (
            <p className="text-xs text-accent font-medium">
              {node.children.length} direct report{node.children.length > 1 ? "s" : ""}
            </p>
          )}
        </div>
      </motion.div>

      {expanded && hasChildren && (
        <div className="mt-1 space-y-1 relative">
          <div
            className="absolute left-6 top-0 bottom-4 w-px bg-border"
            style={{ marginLeft: level * 32 + 16 }}
          />
          {node.children
            .filter((child) => child.employee.status !== "terminated")
            .map((child) => (
              <OrgNodeCard key={child.employee.id} node={child} level={level + 1} />
            ))}
        </div>
      )}
    </div>
  );
};

export const OrgChart = ({ employees }: OrgChartProps) => {
  const orgTree = buildOrgTree(employees.filter((e) => e.status !== "terminated"));

  return (
    <div className="glass-card rounded-xl p-6">
      <h3 className="text-lg font-semibold text-foreground mb-6">
        Organizational Hierarchy
      </h3>
      <div className="space-y-2">
        {orgTree.map((node) => (
          <OrgNodeCard key={node.employee.id} node={node} level={0} />
        ))}
      </div>
    </div>
  );
};
