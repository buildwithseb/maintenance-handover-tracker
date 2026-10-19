import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EquipmentCard = () => {
  return (
    <Card className="w-full max-w-md shadow-md">
      <CardHeader>
        <CardTitle>CAT 793F</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-gray-600">Status: Under Maintenance</p>

        <Button className="w-full">View Handover</Button>
      </CardContent>
    </Card>
  );
};


export default  EquipmentCard;