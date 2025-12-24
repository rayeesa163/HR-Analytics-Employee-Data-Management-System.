import { Employee } from "@/data/employees";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  DollarSign,
  User,
  Globe,
  AlertCircle,
} from "lucide-react";
import { format } from "date-fns";

interface EmployeeDetailModalProps {
  employee: Employee;
  open: boolean;
  onClose: () => void;
}

const statusColors: Record<string, string> = {
  active: "status-active",
  inactive: "status-inactive",
  pending: "status-pending",
  terminated: "status-terminated",
};

export const EmployeeDetailModal = ({
  employee,
  open,
  onClose,
}: EmployeeDetailModalProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "MMM d, yyyy");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                {employee.firstName[0]}
                {employee.lastName[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <DialogTitle className="text-2xl">
                {employee.firstName} {employee.lastName}
              </DialogTitle>
              <p className="text-muted-foreground">{employee.jobTitle}</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge
                  className={`status-badge ${statusColors[employee.status]}`}
                >
                  {employee.status}
                </Badge>
                <Badge variant="outline" className="capitalize">
                  {employee.employmentType}
                </Badge>
              </div>
            </div>
          </div>
        </DialogHeader>

        <Tabs defaultValue="job" className="mt-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="job">Job Info</TabsTrigger>
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="compensation">Compensation</TabsTrigger>
            <TabsTrigger value="organization">Organization</TabsTrigger>
          </TabsList>

          <TabsContent value="job" className="mt-6 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <InfoItem
                icon={Briefcase}
                label="Employee ID"
                value={employee.employeeId}
              />
              <InfoItem
                icon={Briefcase}
                label="Job Title"
                value={employee.jobTitle}
              />
              <InfoItem
                icon={Calendar}
                label="Hire Date"
                value={formatDate(employee.hireDate)}
              />
              <InfoItem
                icon={MapPin}
                label="Location"
                value={employee.location}
              />
              <InfoItem
                icon={Mail}
                label="Email"
                value={employee.email}
              />
              <InfoItem
                icon={Phone}
                label="Phone"
                value={employee.phone}
              />
            </div>
            {employee.terminationDate && (
              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                <div className="flex items-center gap-2 text-destructive">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-medium">
                    Terminated on {formatDate(employee.terminationDate)}
                  </span>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="personal" className="mt-6 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <InfoItem
                icon={Calendar}
                label="Date of Birth"
                value={formatDate(employee.personalInfo.dateOfBirth)}
              />
              <InfoItem
                icon={User}
                label="Gender"
                value={employee.personalInfo.gender}
              />
              <InfoItem
                icon={Globe}
                label="Nationality"
                value={employee.personalInfo.nationality}
              />
              <InfoItem
                icon={MapPin}
                label="Address"
                value={`${employee.personalInfo.address}, ${employee.personalInfo.city}`}
              />
            </div>
            <Separator />
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Emergency Contact
              </h4>
              <div className="grid grid-cols-2 gap-6">
                <InfoItem
                  icon={User}
                  label="Contact Name"
                  value={employee.personalInfo.emergencyContact}
                />
                <InfoItem
                  icon={Phone}
                  label="Contact Phone"
                  value={employee.personalInfo.emergencyPhone}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="compensation" className="mt-6 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <InfoItem
                icon={DollarSign}
                label="Base Salary"
                value={formatCurrency(employee.compensation.baseSalary)}
              />
              <InfoItem
                icon={DollarSign}
                label="Annual Bonus"
                value={formatCurrency(employee.compensation.bonus)}
              />
              <InfoItem
                icon={Briefcase}
                label="Pay Grade"
                value={employee.compensation.payGrade}
              />
              <InfoItem
                icon={DollarSign}
                label="Total Compensation"
                value={formatCurrency(
                  employee.compensation.baseSalary + employee.compensation.bonus
                )}
              />
            </div>
            <Separator />
            <div className="grid grid-cols-2 gap-6">
              <InfoItem
                icon={Calendar}
                label="Last Review"
                value={formatDate(employee.compensation.lastReviewDate)}
              />
              <InfoItem
                icon={Calendar}
                label="Next Review"
                value={formatDate(employee.compensation.nextReviewDate)}
              />
            </div>
          </TabsContent>

          <TabsContent value="organization" className="mt-6 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <InfoItem
                icon={Briefcase}
                label="Department"
                value={employee.department}
              />
              <InfoItem
                icon={Briefcase}
                label="Division"
                value={employee.division}
              />
              <InfoItem
                icon={User}
                label="Manager"
                value={employee.manager || "None (Executive)"}
              />
              <InfoItem
                icon={MapPin}
                label="Work Location"
                value={employee.location}
              />
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

interface InfoItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

const InfoItem = ({ icon: Icon, label, value }: InfoItemProps) => (
  <div className="flex items-start gap-3">
    <div className="p-2 rounded-lg bg-muted">
      <Icon className="w-4 h-4 text-muted-foreground" />
    </div>
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium text-foreground">{value}</p>
    </div>
  </div>
);
