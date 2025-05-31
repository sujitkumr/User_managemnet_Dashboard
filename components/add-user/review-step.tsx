import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Mail, MapPin, Hash } from "lucide-react"
import type { UserFormData } from "@/app/dashboard/add/page"

interface ReviewStepProps {
  formData: UserFormData
}

export function ReviewStep({ formData }: ReviewStepProps) {
  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold mb-2">Review User Information</h3>
        <p className="text-sm text-muted-foreground">Please review the information below before adding the user</p>
      </div>

      <div className="grid gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <User className="w-4 h-4" />
              Basic Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Name:</span>
              <Badge variant="outline">{formData.name}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Mail className="w-3 h-3" />
                Email:
              </span>
              <span className="text-sm font-medium">{formData.email}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Address Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-start">
              <span className="text-sm text-muted-foreground">Street:</span>
              <span className="text-sm font-medium text-right max-w-48">{formData.street}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">City:</span>
              <Badge variant="outline">{formData.city}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Hash className="w-3 h-3" />
                ZIP:
              </span>
              <span className="text-sm font-medium">{formData.zipcode}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted/50 rounded-lg p-4 mt-6">
        <p className="text-sm text-muted-foreground text-center">
          By clicking "Add User", this information will be logged to the console and you'll be redirected to the
          dashboard.
        </p>
      </div>
    </div>
  )
}
