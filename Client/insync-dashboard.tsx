import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  Search,
  Plus,
  MoreHorizontal,
  Calendar,
  Clock,
  Users,
  FileText,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react"

export default function InSyncDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IS</span>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">InSync</h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search projects, tasks..." className="pl-10 w-80 bg-gray-50 border-gray-200" />
            </div>

            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>

            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-6">
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start text-blue-600 bg-blue-50">
              <Calendar className="w-4 h-4 mr-3" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600">
              <FileText className="w-4 h-4 mr-3" />
              Projects
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600">
              <Users className="w-4 h-4 mr-3" />
              Team
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600">
              <Clock className="w-4 h-4 mr-3" />
              Timeline
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Good morning, John!</h2>
                <p className="text-gray-600 mt-1">Here's what's happening with your projects today.</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                New Project
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Projects</p>
                    <p className="text-2xl font-bold text-gray-900">12</p>
                  </div>
                  <div className="w-12 h-12 [{
	"resource": "/home/axzyte/code/project/InSync/Client/app/page.tsx",
	"owner": "typescript",
	"code": "2307",
	"severity": 8,
	"message": "Cannot find module '../pages/login' or its corresponding type declarations.",
	"source": "ts",
	"startLineNumber": 1,
	"startColumn": 23,
	"endLineNumber": 1,
	"endColumn": 39
}]
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Completed Tasks</p>
                    <p className="text-2xl font-bold text-gray-900">89</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Team Members</p>
                    <p className="text-2xl font-bold text-gray-900">24</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Pending Reviews</p>
                    <p className="text-2xl font-bold text-gray-900">7</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Projects */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Projects</CardTitle>
                  <Button variant="ghost" size="sm">
                    View All
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">WA</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Website Redesign</h4>
                        <p className="text-sm text-gray-600">Updated 2 hours ago</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      On Track
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">MA</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Mobile App</h4>
                        <p className="text-sm text-gray-600">Updated 5 hours ago</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                      In Review
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">DB</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Database Migration</h4>
                        <p className="text-sm text-gray-600">Updated 1 day ago</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-red-100 text-red-800">
                      Delayed
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Activity */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Team Activity</CardTitle>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">Sarah Adams</span> completed the wireframe design
                      </p>
                      <p className="text-xs text-gray-500">2 minutes ago</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">Mike Johnson</span> added 3 new tasks to Mobile App
                      </p>
                      <p className="text-xs text-gray-500">15 minutes ago</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>EW</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">Emily Wilson</span> commented on Database Migration
                      </p>
                      <p className="text-xs text-gray-500">1 hour ago</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>DL</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">David Lee</span> updated project timeline
                      </p>
                      <p className="text-xs text-gray-500">3 hours ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
