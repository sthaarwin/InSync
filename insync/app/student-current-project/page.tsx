import React from 'react'
import { Layout } from '../../components/layout'
import { ProjectTabs } from '../../components/project-tabs'
import { EmptyState } from '../../components/empty-state'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function StudentCurrentProject() {
  return (
    <Layout title="Current Projects">
      <div className="container mx-auto py-8">
        <ProjectTabs activeTab="project" onTabChange={() => {}} />
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">Current Projects</h1>
              <p className="text-muted-foreground">View and manage your current projects</p>
            </div>
            <div className="flex gap-4">
              <Input 
                placeholder="Search projects..." 
                className="w-64" 
              />
              <Button>Filter</Button>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Project Alpha</span>
                  <Badge variant="default">Active</Badge>
                </CardTitle>
                <CardDescription>
                  A comprehensive web application for project management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress:</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Due: Dec 31, 2024</span>
                    <span>Team: 4 members</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Project Beta</span>
                  <Badge variant="secondary">In Review</Badge>
                </CardTitle>
                <CardDescription>
                  Mobile application for task tracking and collaboration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress:</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Due: Jan 15, 2025</span>
                    <span>Team: 3 members</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Project Gamma</span>
                  <Badge variant="outline">Planning</Badge>
                </CardTitle>
                <CardDescription>
                  Data analytics dashboard for business intelligence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress:</span>
                    <span>25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-yellow-600 h-2 rounded-full" 
                      style={{ width: '25%' }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Due: Mar 30, 2025</span>
                    <span>Team: 5 members</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}