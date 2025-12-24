import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  DollarSign,
  Users,
  Calendar,
  Briefcase,
  Building2,
  Edit,
  Share2,
  Trash2,
} from "lucide-react";
import { toast } from "sonner";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  openings: number;
  posted: string;
  status: string;
  description?: string;
}

interface JobDetailModalProps {
  job: Job;
  open: boolean;
  onClose: () => void;
}

export const JobDetailModal = ({ job, open, onClose }: JobDetailModalProps) => {
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Job link copied to clipboard!");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl">{job.title}</DialogTitle>
              <p className="text-muted-foreground mt-1">{job.department}</p>
            </div>
            <Badge className="status-active">{job.status}</Badge>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <InfoBadge icon={MapPin} label="Location" value={job.location} />
            <InfoBadge icon={Briefcase} label="Type" value={job.type} />
            <InfoBadge icon={Users} label="Openings" value={`${job.openings}`} />
            <InfoBadge icon={Calendar} label="Posted" value={job.posted} />
          </div>

          <Separator />

          {/* Compensation */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-accent" />
              Compensation
            </h4>
            <p className="text-lg font-medium text-foreground">{job.salary}</p>
            <p className="text-sm text-muted-foreground">Annual salary range</p>
          </div>

          <Separator />

          {/* Description */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-accent" />
              Job Description
            </h4>
            <div className="text-sm text-muted-foreground space-y-3">
              {job.description ? (
                <p>{job.description}</p>
              ) : (
                <>
                  <p>
                    We are looking for a talented {job.title} to join our{" "}
                    {job.department} team in {job.location}.
                  </p>
                  <p>
                    <strong>Responsibilities:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Lead and contribute to key projects</li>
                    <li>Collaborate with cross-functional teams</li>
                    <li>Drive innovation and best practices</li>
                    <li>Mentor junior team members</li>
                  </ul>
                  <p>
                    <strong>Requirements:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>3+ years of relevant experience</li>
                    <li>Strong communication skills</li>
                    <li>Bachelor's degree or equivalent</li>
                    <li>Experience with industry-standard tools</li>
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Close Position
              </Button>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              View Applicants
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface InfoBadgeProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

const InfoBadge = ({ icon: Icon, label, value }: InfoBadgeProps) => (
  <div className="p-3 rounded-lg bg-muted/50">
    <div className="flex items-center gap-2 text-muted-foreground mb-1">
      <Icon className="w-3 h-3" />
      <span className="text-xs">{label}</span>
    </div>
    <p className="text-sm font-medium text-foreground">{value}</p>
  </div>
);
