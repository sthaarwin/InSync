"use client"

import type React from "react"
import { useState } from "react"
import { Layout } from "../../components/layout"
import { ProjectTabs } from "../../components/project-tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Plus, Send } from "lucide-react"

interface WorkLogEntry {
  id: number
  date: string
  task: string
}

interface Member {
  id: number
  name: string
  role: "supervisor" | "student"
}

interface Comment {
  id: number
  author: string
  role: "supervisor" | "student"
  content: string
  timestamp: string
}

export default function CreateProjectPage() {
  const [activeTab, setActiveTab] = useState("project")
  const [projectName, setProjectName] = useState("")
  const [projectDetails, setProjectDetails] = useState("")
  const [workLogEntries, setWorkLogEntries] = useState<WorkLogEntry[]>([])
  const [newDate, setNewDate] = useState("")
  const [newTask, setNewTask] = useState("")
  const [showAddForm, setShowAddForm] = useState(false)

  // Comments state
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Suman Shrestha",
      role: "supervisor",
      content: "Great progress on the initial setup. Please make sure to document your API endpoints properly.",
      timestamp: "2024-01-20 10:30 AM",
    },
    {
      id: 2,
      author: "Erika Shrestha",
      role: "student",
      content:
        "Thank you for the feedback! I've updated the documentation and added more detailed comments in the code.",
      timestamp: "2024-01-20 2:15 PM",
    },
  ])
  const [newComment, setNewComment] = useState("")

  // Sample members data
  const [members, setMembers] = useState<Member[]>([
    { id: 1, name: "Current User", role: "student" }, // Default current user
  ])

  const handleAddWorkLog = () => {
    if (newDate && newTask) {
      const newEntry: WorkLogEntry = {
        id: Date.now(),
        date: newDate,
        task: newTask,
      }
      setWorkLogEntries([...workLogEntries, newEntry])
      setNewDate("")
      setNewTask("")
      setShowAddForm(false)
    }
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now(),
        author: "Current User", // In real app, this would be the logged-in user
        role: "student", // This would be determined by the user's role
        content: newComment.trim(),
        timestamp: new Date().toLocaleString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
      }
      setComments([...comments, comment])
      setNewComment("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleAddComment()
    }
  }

  const supervisors = members.filter((member) => member.role === "supervisor")
  const students = members.filter((member) => member.role === "student")

  const renderTabContent = () => {
    switch (activeTab) {
      case "project":
        return (
          <div className="space-y-6">
            <Card className="bg-teal-50 border-teal-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-2">Your project</h3>
                    <Input
                      placeholder="Enter project name"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      className="bg-white border-gray-200"
                    />
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <Button size="sm" variant="outline">
                      📋
                    </Button>
                    <Button size="sm" variant="outline">
                      📁
                    </Button>
                    <Button size="sm" variant="outline">
                      📊
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Project Details</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Enter details here..."
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  className="min-h-[200px] bg-gray-50 border-gray-200 resize-none"
                />
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Repository</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-gray-500 text-sm">No content...</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Proposal Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      Upload Pending
                    </Badge>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                      <span className="mr-2">+</span>
                      Add your work
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      case "comments":
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">Comments</h3>
              <span className="text-sm text-gray-500">{comments.length} comments</span>
            </div>

            {/* Comments List */}
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {comments.length === 0 ? (
                <div className="flex items-center justify-center h-32 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                  <p className="text-gray-500 text-sm">No comments yet</p>
                </div>
              ) : (
                comments.map((comment) => (
                  <Card key={comment.id} className="bg-gray-50">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <Avatar className="w-8 h-8 bg-gray-300">
                          <AvatarFallback className="text-gray-600 text-xs font-medium">
                            {comment.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-sm text-gray-900">{comment.author}</span>
                            <Badge
                              variant="secondary"
                              className={`text-xs ${
                                comment.role === "supervisor"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-green-100 text-green-800"
                              }`}
                            >
                              {comment.role}
                            </Badge>
                            <span className="text-xs text-gray-500">{comment.timestamp}</span>
                          </div>
                          <p className="text-sm text-gray-700">{comment.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {/* Add Comment Form */}
            <Card className="bg-white border-2 border-teal-200">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8 bg-blue-500">
                      <AvatarFallback className="text-white text-xs font-medium">CU</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Textarea
                        placeholder="Add a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="min-h-[80px] resize-none border-gray-200 focus:border-teal-500"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-500">Press Enter to send, Shift+Enter for new line</p>
                    <Button
                      onClick={handleAddComment}
                      disabled={!newComment.trim()}
                      className="bg-teal-600 hover:bg-teal-700"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )
      case "worklog":
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">Work Log</h3>
              <Button onClick={() => setShowAddForm(!showAddForm)} className="bg-teal-600 hover:bg-teal-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Entry
              </Button>
            </div>

            {showAddForm && (
              <Card className="bg-gray-50">
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                      <Input
                        type="date"
                        value={newDate}
                        onChange={(e) => setNewDate(e.target.value)}
                        className="bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Task</label>
                      <Input
                        placeholder="Enter task description"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className="bg-white"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2 mt-4">
                    <Button variant="outline" onClick={() => setShowAddForm(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleAddWorkLog} className="bg-teal-600 hover:bg-teal-700">
                      Add Entry
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3 font-medium text-gray-900 bg-gray-50">Date</TableHead>
                      <TableHead className="font-medium text-gray-900 bg-gray-50">Task</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {workLogEntries.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={2} className="text-center py-8 text-gray-500">
                          No work log entries yet
                        </TableCell>
                      </TableRow>
                    ) : (
                      workLogEntries.map((entry) => (
                        <TableRow key={entry.id}>
                          <TableCell className="font-medium">{entry.date}</TableCell>
                          <TableCell>{entry.task}</TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )
      case "members":
        return (
          <div className="space-y-6">
            {/* Supervisor Section */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4 pb-2 border-b border-gray-200">Supervisor</h3>
              <div className="space-y-3">
                {supervisors.map((supervisor) => (
                  <div key={supervisor.id} className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10 bg-gray-300">
                      <AvatarFallback className="text-gray-600 font-medium">
                        {supervisor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-gray-900 font-medium">{supervisor.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Students Section */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4 pb-2 border-b border-gray-200">Students</h3>
              <div className="space-y-3">
                {students.map((student) => (
                  <div key={student.id} className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10 bg-gray-300">
                      <AvatarFallback className="text-gray-600 font-medium">
                        {student.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-gray-900 font-medium">{student.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <Layout title="Create Project" userRole="Student">
      <div className="max-w-4xl">
        <ProjectTabs activeTab={activeTab} onTabChange={setActiveTab} userRole="Student" />
        {renderTabContent()}
      </div>
    </Layout>
  )
}
