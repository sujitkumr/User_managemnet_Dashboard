"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { UserFormData } from "@/app/dashboard/add/page"

interface BasicInfoStepProps {
  formData: UserFormData
  errors: Partial<UserFormData>
  updateFormData: (data: Partial<UserFormData>) => void
}

export function BasicInfoStep({ formData, errors, updateFormData }: BasicInfoStepProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          placeholder="Enter full name"
          value={formData.name}
          onChange={(e) => updateFormData({ name: e.target.value })}
          className={errors.name ? "border-destructive" : ""}
        />
        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          className={errors.email ? "border-destructive" : ""}
        />
        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
      </div>
    </div>
  )
}
