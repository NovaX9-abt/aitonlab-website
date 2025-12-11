import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { ReactNode } from "react";

interface CallRileyDialogProps {
  trigger: ReactNode;
}

const CallRileyDialog = ({ trigger }: CallRileyDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            Call Riley
          </DialogTitle>
        </DialogHeader>

        {/* Warning */}
        <Card className="p-3 bg-amber-50 border-amber-200 dark:bg-amber-950/30 dark:border-amber-800">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-amber-800 dark:text-amber-200">
              Please only call Riley if you are interested in automation services.
            </p>
          </div>
        </Card>

        {/* What Riley Does */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">What Riley can do:</p>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-3.5 w-3.5 text-primary" />
              Answer calls 24/7 in English or French
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-3.5 w-3.5 text-primary" />
              Capture leads and qualify inquiries
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-3.5 w-3.5 text-primary" />
              Book appointments automatically
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-3.5 w-3.5 text-primary" />
              Provide information about your services
            </li>
          </ul>
        </div>

        {/* SIP Note */}
        <div className="flex items-start gap-2 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
          <p>Phone number will be active after MTN completes SIP setup.</p>
        </div>

        {/* Disabled Button */}
        <Button disabled className="w-full mt-2">
          <Phone className="h-4 w-4 mr-2" />
          Call Riley (Coming Soon)
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default CallRileyDialog;
