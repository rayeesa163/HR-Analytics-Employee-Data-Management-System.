import { AppLayout } from "@/components/layout/AppLayout";
import { Header } from "@/components/layout/Header";
import { EmployeeTable } from "@/components/employees/EmployeeTable";
import { employees } from "@/data/employees";
import { Button } from "@/components/ui/button";
import { UserPlus, Download, Upload } from "lucide-react";

const Employees = () => {
  return (
    <AppLayout>
      <Header
        title="Employee Directory"
        subtitle="Manage and view all employee records"
      />
      
      <div className="p-8 space-y-6">
        {/* Action Bar */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              {employees.length} employees in the system
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Upload className="w-4 h-4 mr-2" />
              Import
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <UserPlus className="w-4 h-4 mr-2" />
              Add Employee
            </Button>
          </div>
        </div>

        {/* Employee Table */}
        <EmployeeTable employees={employees} />
      </div>
    </AppLayout>
  );
};

export default Employees;
