import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Maintenance Handover Tracker V2</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="mb-4">React + TypeScript + Tailwind CSS</p>
          <Button>Get Started</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default App