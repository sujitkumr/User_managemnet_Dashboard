"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { UserFormData } from "@/app/dashboard/add/page"

interface AddressStepProps {
  formData: UserFormData
  errors: Partial<UserFormData>
  updateFormData: (data: Partial<UserFormData>) => void
}

export function AddressStep({ formData, errors, updateFormData }: AddressStepProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="street">Street Address *</Label>
        <Input
          id="street"
          placeholder="Enter street address"
          value={formData.street}
          onChange={(e) => updateFormData({ street: e.target.value })}
          className={errors.street ? "border-destructive" : ""}
        />
        {errors.street && <p className="text-sm text-destructive">{errors.street}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="city">City *</Label>
          <Input
            id="city"
            placeholder="Enter city"
            value={formData.city}
            onChange={(e) => updateFormData({ city: e.target.value })}
            className={errors.city ? "border-destructive" : ""}
          />
          {errors.city && <p className="text-sm text-destructive">{errors.city}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="zipcode">ZIP Code *</Label>
          <Input
            id="zipcode"
            placeholder="12345 or 12345-6789"
            value={formData.zipcode}
            onChange={(e) => updateFormData({ zipcode: e.target.value })}
            className={errors.zipcode ? "border-destructive" : ""}
          />
          {errors.zipcode && <p className="text-sm text-destructive">{errors.zipcode}</p>}
        </div>
      </div>
    </div>
  )
}
