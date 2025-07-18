
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, ScatterChart, Scatter } from 'recharts';

export const AnalyticsCharts = () => {
  const performanceData = [
    { hours: "0-2", avgScore: 45, students: 12 },
    { hours: "2-4", avgScore: 62, students: 28 },
    { hours: "4-6", avgScore: 74, students: 35 },
    { hours: "6-8", avgScore: 83, students: 22 },
    { hours: "8+", avgScore: 91, students: 15 }
  ];

  const trendData = [
    { month: "Jan", avgScore: 68 },
    { month: "Feb", avgScore: 72 },
    { month: "Mar", avgScore: 75 },
    { month: "Apr", avgScore: 71 },
    { month: "May", avgScore: 78 },
    { month: "Jun", avgScore: 82 }
  ];

  const scatterData = [
    { attendance: 65, score: 55 },
    { attendance: 72, score: 68 },
    { attendance: 85, score: 78 },
    { attendance: 91, score: 85 },
    { attendance: 95, score: 92 },
    { attendance: 78, score: 72 },
    { attendance: 88, score: 81 }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Study Hours vs Performance</CardTitle>
          <CardDescription>Average scores by study time ranges</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hours" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="avgScore" fill="#3B82F6" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Performance Trends</CardTitle>
          <CardDescription>Monthly average score progression</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="avgScore" stroke="#10B981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      <Card className="shadow-lg lg:col-span-2">
        <CardHeader>
          <CardTitle>Attendance vs Score Correlation</CardTitle>
          <CardDescription>Relationship between class attendance and exam performance</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={scatterData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="attendance" name="Attendance %" />
              <YAxis dataKey="score" name="Score" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter dataKey="score" fill="#8B5CF6" />
            </ScatterChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};