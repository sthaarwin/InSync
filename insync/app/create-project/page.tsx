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
import { Plus, Send, UserPlus, X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
  const [formData, setFormData] = useState({
    projectTitle: "",
    projectDescription: "",
    Semester: "",
    projectRepository: "",
    status: "",
    proposal: "",
    userID: 1, // Replace this dynamically later
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(`Project created! Join Code: ${data.joinCode}`);
    } catch (err) {
      console.error("Error creating project:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="projectTitle" onChange={handleChange} placeholder="Title" required />
      <textarea name="projectDescription" onChange={handleChange} placeholder="Description" />
      <input name="Semester" onChange={handleChange} placeholder="Semester" />
      <input name="projectRepository" onChange={handleChange} placeholder="Repo Link" />
      <input name="status" onChange={handleChange} placeholder="Status" />
      <input name="proposal" onChange={handleChange} placeholder="Proposal" />
      <button type="submit">Create Project</button>
    </form>
  );
}
