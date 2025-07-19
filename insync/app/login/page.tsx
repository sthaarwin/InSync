"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const router = useRouter()

  const handleLogin = () => {
    // Redirect directly to current projects without validation
    router.push("/current-projects")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md relative">
        {/* Cloud Icon */}
        <div className="absolute -right-4 top-8">
          <div className="relative">
            <div className="w-24 h-24 bg-teal-400 rounded-full opacity-80"></div>
            <div className="w-20 h-20 bg-teal-400 rounded-full absolute -top-4 -left-4 opacity-90"></div>
            <div className="w-16 h-16 bg-teal-500 rounded-full absolute top-2 left-2 opacity-100"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border border-white rounded-full relative">
                  <div className="absolute -top-1 -right-1 w-2 h-2 border border-white rounded-full"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 border border-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-2xl font-semibold text-gray-900">Login</h1>

          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 bg-gray-50 border-gray-200"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 bg-gray-50 border-gray-200"
              />
            </div>

            <div>
              <Label htmlFor="role" className="text-sm font-medium text-gray-700">
                Select you role
              </Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger className="mt-1 bg-gray-50 border-gray-200">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="supervisor">Supervisor</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button onClick={handleLogin} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg">
            Login
          </Button>

          <div className="text-center space-y-2">
            <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </Link>
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
