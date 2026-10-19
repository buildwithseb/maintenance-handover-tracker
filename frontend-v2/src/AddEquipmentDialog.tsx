import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function AddEquipmentDialog() {
  return (
    <Dialog>
      {/* Button that opens the dialog */}
      <DialogTrigger render={<Button />}>Add Equipment</DialogTrigger>

      {/* Dialog popup */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Equipment</DialogTitle>

          <DialogDescription>
            Enter the equipment details below.
          </DialogDescription>
        </DialogHeader>

        {/* Form fields */}
        <div className="space-y-4">
          <Input placeholder="Equipment ID" />
          <Input placeholder="Equipment Name" />
          <Input placeholder="Location" />
        </div>

        {/* Footer buttons */}
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Cancel
          </DialogClose>

          <Button>Save Equipment</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddEquipmentDialog;
