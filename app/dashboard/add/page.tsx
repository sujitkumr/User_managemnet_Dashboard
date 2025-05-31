"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Check, User, MapPin, Eye } from "lucide-react"
import { BasicInfoStep } from "@/components/add-user/basic-info-step"
import { AddressStep } from "@/components/add-user/address-step"
import { ReviewStep } from "@/components/add-user/review-step"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import React from "react"

export interface UserFormData {
  name: string
  email: string
  street: string
  city: string
  zipcode: string
}

const STEPS = [
  { id: 1, title: "Basic Info", icon: User, description: "Name and email" },
  { id: 2, title: "Address", icon: MapPin, description: "Location details" },
  { id: 3, title: "Review", icon: Eye, description: "Confirm details" },
]

export default function AddUser() {
  const router = useRouter()
  const { toast } = useToast()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    email: "",
    street: "",
    city: "",
    zipcode: "",
  })
  const [errors, setErrors] = useState<Partial<UserFormData>>({})

  const updateFormData = (data: Partial<UserFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
    // Clear errors for updated fields
    const updatedFields = Object.keys(data)
    setErrors((prev) => {
      const newErrors = { ...prev }
      updatedFields.forEach((field) => {
        delete newErrors[field as keyof UserFormData]
      })
      return newErrors
    })
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<UserFormData> = {}

    if (step === 1) {
      if (!formData.name.trim()) {
        newErrors.name = "Name is required"
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required"
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address"
      }
    }

    if (step === 2) {
      if (!formData.street.trim()) {
        newErrors.street = "Street address is required"
      }
      if (!formData.city.trim()) {
        newErrors.city = "City is required"
      }
      if (!formData.zipcode.trim()) {
        newErrors.zipcode = "ZIP code is required"
      } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipcode)) {
        newErrors.zipcode = "Please enter a valid ZIP code (e.g., 12345 or 12345-6789)"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, STEPS.length))
    }
  }

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = () => {
    if (validateStep(1) && validateStep(2)) {
      // Log the form data to console as requested
      console.log("New User Data:", {
        ...formData,
        id: Date.now(), // Generate a temporary ID
        phone: "Not provided", // Default values for missing fields
        address: {
          street: formData.street,
          city: formData.city,
          zipcode: formData.zipcode,
        },
      })

      toast({
        title: "User Added Successfully!",
        description: `${formData.name} has been added to the system.`,
      })

      // Redirect back to dashboard after a short delay
      setTimeout(() => {
        router.push("/dashboard")
      }, 2000)
    }
  }

  const progress = (currentStep / STEPS.length) * 100

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={() => router.push("/dashboard")} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>

          <h1 className="text-3xl font-bold tracking-tight mb-2">Add New User</h1>
          <p className="text-muted-foreground">Complete the form below to add a new user to the system</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {STEPS.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    currentStep > step.id
                      ? "bg-primary border-primary text-primary-foreground"
                      : currentStep === step.id
                        ? "border-primary text-primary"
                        : "border-muted-foreground/30 text-muted-foreground"
                  }`}
                >
                  {currentStep > step.id ? <Check className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
                </div>
                {index < STEPS.length - 1 && (
                  <div
                    className={`w-16 h-0.5 mx-2 ${currentStep > step.id ? "bg-primary" : "bg-muted-foreground/30"}`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mb-2">
            <Badge variant="outline">
              Step {currentStep} of {STEPS.length}
            </Badge>
          </div>

          <Progress value={progress} className="mb-2" />

          <div className="text-center">
            <h2 className="text-lg font-semibold">{STEPS[currentStep - 1].title}</h2>
            <p className="text-sm text-muted-foreground">{STEPS[currentStep - 1].description}</p>
          </div>
        </div>

        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {React.createElement(STEPS[currentStep - 1].icon, { className: "w-5 h-5" })}
              {STEPS[currentStep - 1].title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {currentStep === 1 && <BasicInfoStep formData={formData} errors={errors} updateFormData={updateFormData} />}

            {currentStep === 2 && <AddressStep formData={formData} errors={errors} updateFormData={updateFormData} />}

            {currentStep === 3 && <ReviewStep formData={formData} />}

            {/* Navigation */}
            <div className="flex justify-between pt-6">
              <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              {currentStep < STEPS.length ? (
                <Button onClick={handleNext}>
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button onClick={handleSubmit}>
                  <Check className="w-4 h-4 mr-2" />
                  Add User
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      <Toaster />
    </div>
  )
}
