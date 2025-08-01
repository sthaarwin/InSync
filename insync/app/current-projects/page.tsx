"use client"

import { useEffect, useState } from "react"
import { Layout } from "../../components/layout"
import { Button } from "@/components/ui/button"
import { Plus, MoreHorizontal, Archive, Trash2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

interface ProjectCardWithMenuProps {
  title: string
  semester: string
  projectId: string
  onArchive: (projectId: string) => void
  onDelete: (projectId: string) => void
}

function ProjectCardWithMenu({ title, semester, projectId, onArchive, onDelete }: ProjectCardWithMenuProps) {
  const router = useRouter()

  const handleCardClick = () => {
    router.push(`/project/${projectId}`)
  }

  const handleArchive = (e: React.MouseEvent) => {
    e.stopPropagation()
    onArchive(projectId)
  }

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
    onDelete(projectId)
  }

  return (
    <Card
      className="bg-teal-50 border-teal-200 relative cursor-pointer hover:shadow-md transition-shadow"
      onClick={handleCardClick}
    >
      <CardContent className="p-4">
        <div className="absolute top-2 right-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="w-6 h-6" onClick={(e) => e.stopPropagation()}>
                <MoreHorizontal className="w-4 h-4 text-gray-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem onClick={handleArchive} className="cursor-pointer">
                <Archive className="w-4 h-4 mr-2" />
                Archive
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete} className="cursor-pointer text-red-600 hover:text-red-700">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="text-center">
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{semester}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default function CurrentProjectsPage() {
  const router = useRouter()
  const [projects, setProjects] = useState<any[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem("token")

        const res = await fetch("http://localhost:5000/api/projects", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        const data = await res.json()
        setProjects(data)
      } catch (err) {
        console.error("Error fetching projects:", err)
      }
    }

    fetchProjects()
  }, [])

  const handleAddProject = () => {
    router.push("/create-project")
  }

  const handleArchiveProject = (projectId: string) => {
    setProjects(projects.filter((project) => project.projectID !== projectId))
    alert(`Project archived successfully!`)
  }

  const handleDeleteProject = (projectId: string) => {
    if (window.confirm("Are you sure you want to delete this project? This action cannot be undone.")) {
      setProjects(projects.filter((project) => project.projectID !== projectId))
      alert(`Project deleted successfully!`)
    }
  }

  return (
    <Layout title="Current Projects">
      <div className="space-y-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((project) => (
            <ProjectCardWithMenu
              key={project.projectID}
              title={project.projectTitle}
              semester={project.Semester}
              projectId={String(project.projectID)}
              onArchive={handleArchiveProject}
              onDelete={handleDeleteProject}
            />
          ))}
        </div>

        <div className="fixed bottom-6 right-6">
          <Button onClick={handleAddProject} className="bg-teal-600 hover:bg-teal-700 shadow-lg">
            <Plus className="w-4 h-4 mr-2" />
            Add a Project
          </Button>
        </div>
      </div>
    </Layout>
  )
}
