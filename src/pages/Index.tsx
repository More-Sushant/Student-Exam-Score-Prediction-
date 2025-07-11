
// // import { useState } from "react";
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import { Button } from "@/components/ui/button";
// // import { Badge } from "@/components/ui/badge";
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // import { Progress } from "@/components/ui/progress";
// // import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, ScatterChart, Scatter } from 'recharts';
// // import { BookOpen, TrendingUp, Users, Target, Clock, Award, Calculator, Database } from "lucide-react";

// // const Index = () => {
// //   const [hoursStudied, setHoursStudied] = useState("");
// //   const [previousScore, setPreviousScore] = useState("");
// //   const [attendance, setAttendance] = useState("");
// //   const [predictedScore, setPredictedScore] = useState<number | null>(null);

// //   // Sample data for charts
// //   const performanceData = [
// //     { hours: "0-2", avgScore: 45, students: 12 },
// //     { hours: "2-4", avgScore: 62, students: 28 },
// //     { hours: "4-6", avgScore: 74, students: 35 },
// //     { hours: "6-8", avgScore: 83, students: 22 },
// //     { hours: "8+", avgScore: 91, students: 15 }
// //   ];

// //   const trendData = [
// //     { month: "Jan", avgScore: 68 },
// //     { month: "Feb", avgScore: 72 },
// //     { month: "Mar", avgScore: 75 },
// //     { month: "Apr", avgScore: 71 },
// //     { month: "May", avgScore: 78 },
// //     { month: "Jun", avgScore: 82 }
// //   ];

// //   const scatterData = [
// //     { attendance: 65, score: 55 },
// //     { attendance: 72, score: 68 },
// //     { attendance: 85, score: 78 },
// //     { attendance: 91, score: 85 },
// //     { attendance: 95, score: 92 },
// //     { attendance: 78, score: 72 },
// //     { attendance: 88, score: 81 }
// //   ];

// //   // const handlePredict = () => {
// //   //   // Simple prediction logic (in real app, this would call your Flask API)
// //   //   const hours = parseFloat(hoursStudied);
// //   //   const prevScore = parseFloat(previousScore);
// //   //   const attend = parseFloat(attendance);
    
// //   //   if (hours && prevScore && attend) {
// //   //     const prediction = Math.min(100, Math.max(0, 
// //   //       (hours * 5) + (prevScore * 0.3) + (attend * 0.4) + Math.random() * 10
// //   //     ));
// //   //     setPredictedScore(Math.round(prediction));
// //   //   }
// //   // };

// //   const handlePredict = async () => {
// //   try {
// //     const response = await fetch('http://localhost:5000/predict', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({
// //         hoursStudied: parseFloat(hoursStudied),
// //         previousScore: parseFloat(previousScore),
// //         attendance: parseFloat(attendance),
// //       }),
// //     });

// //     if (!response.ok) {
// //       throw new Error('Prediction failed');
// //     }

// //     const data = await response.json();
// //     setPredictedScore(data.predictedScore);
// //   } catch (error) {
// //     console.error('Error making prediction:', error);
// //     // Handle error appropriately
// //   }
// // };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
// //       {/* Header */}
// //       <div className="bg-white shadow-sm border-b">
// //         <div className="max-w-7xl mx-auto px-6 py-4">
// //           <div className="flex items-center justify-between">
// //             <div className="flex items-center space-x-3">
// //               <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
// //                 <BookOpen className="h-6 w-6 text-white" />
// //               </div>
// //               <div>
// //                 <h1 className="text-2xl font-bold text-gray-900">Student Exam Score Prediction</h1>
// //                 <p className="text-gray-600">AI-powered academic performance analytics</p>
// //               </div>
// //             </div>
// //             <div className="flex items-center space-x-4">
// //               <Badge variant="secondary" className="bg-green-100 text-green-800">
// //                 <Database className="h-3 w-3 mr-1" />
// //                 Kaggle Dataset
// //               </Badge>
// //               <Badge variant="secondary" className="bg-blue-100 text-blue-800">
// //                 <TrendingUp className="h-3 w-3 mr-1" />
// //                 ML Powered
// //               </Badge>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="max-w-7xl mx-auto px-6 py-8">
// //         {/* Stats Cards */}
// //         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
// //           <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
// //             <CardContent className="p-6">
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <p className="text-blue-100">Total Students</p>
// //                   <p className="text-3xl font-bold">1,247</p>
// //                 </div>
// //                 <Users className="h-8 w-8 text-blue-200" />
// //               </div>
// //             </CardContent>
// //           </Card>
          
// //           <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
// //             <CardContent className="p-6">
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <p className="text-green-100">Avg Score</p>
// //                   <p className="text-3xl font-bold">74.2</p>
// //                 </div>
// //                 <Target className="h-8 w-8 text-green-200" />
// //               </div>
// //             </CardContent>
// //           </Card>
          
// //           <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
// //             <CardContent className="p-6">
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <p className="text-purple-100">Avg Study Hours</p>
// //                   <p className="text-3xl font-bold">5.3</p>
// //                 </div>
// //                 <Clock className="h-8 w-8 text-purple-200" />
// //               </div>
// //             </CardContent>
// //           </Card>
          
// //           <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
// //             <CardContent className="p-6">
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <p className="text-orange-100">Model Accuracy</p>
// //                   <p className="text-3xl font-bold">87.5%</p>
// //                 </div>
// //                 <Award className="h-8 w-8 text-orange-200" />
// //               </div>
// //             </CardContent>
// //           </Card>
// //         </div>

// //         <Tabs defaultValue="predict" className="space-y-6">
// //           <TabsList className="grid w-full grid-cols-3 lg:w-96">
// //             <TabsTrigger value="predict">Score Prediction</TabsTrigger>
// //             <TabsTrigger value="analytics">Analytics</TabsTrigger>
// //             <TabsTrigger value="insights">Insights</TabsTrigger>
// //           </TabsList>
          
// //           <TabsContent value="predict" className="space-y-6">
// //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //               {/* Prediction Form */}
// //               <Card className="shadow-lg">
// //                 <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
// //                   <CardTitle className="flex items-center space-x-2">
// //                     <Calculator className="h-5 w-5 text-blue-600" />
// //                     <span>Predict Student Score</span>
// //                   </CardTitle>
// //                   <CardDescription>
// //                     Enter student data to predict their exam score using our ML model
// //                   </CardDescription>
// //                 </CardHeader>
// //                 <CardContent className="p-6 space-y-6">
// //                   <div className="space-y-2">
// //                     <Label htmlFor="hours">Hours Studied per Week</Label>
// //                     <Input
// //                       id="hours"
// //                       type="number"
// //                       placeholder="e.g., 6.5"
// //                       value={hoursStudied}
// //                       onChange={(e) => setHoursStudied(e.target.value)}
// //                       className="border-2 focus:border-blue-500"
// //                     />
// //                   </div>
                  
// //                   <div className="space-y-2">
// //                     <Label htmlFor="previous">Previous Exam Score</Label>
// //                     <Input
// //                       id="previous"
// //                       type="number"
// //                       placeholder="e.g., 78"
// //                       value={previousScore}
// //                       onChange={(e) => setPreviousScore(e.target.value)}
// //                       className="border-2 focus:border-blue-500"
// //                     />
// //                   </div>
                  
// //                   <div className="space-y-2">
// //                     <Label htmlFor="attendance">Attendance Percentage</Label>
// //                     <Input
// //                       id="attendance"
// //                       type="number"
// //                       placeholder="e.g., 85"
// //                       value={attendance}
// //                       onChange={(e) => setAttendance(e.target.value)}
// //                       className="border-2 focus:border-blue-500"
// //                     />
// //                   </div>
                  
// //                   <Button 
// //                     onClick={handlePredict} 
// //                     className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
// //                     size="lg"
// //                   >
// //                     <TrendingUp className="h-4 w-4 mr-2" />
// //                     Predict Score
// //                   </Button>
// //                 </CardContent>
// //               </Card>
              
// //               {/* Prediction Result */}
// //               <Card className="shadow-lg">
// //                 <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
// //                   <CardTitle>Prediction Result</CardTitle>
// //                   <CardDescription>
// //                     AI-generated score prediction based on input factors
// //                   </CardDescription>
// //                 </CardHeader>
// //                 <CardContent className="p-6">
// //                   {predictedScore !== null ? (
// //                     <div className="text-center space-y-6">
// //                       <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-full w-32 h-32 mx-auto flex items-center justify-center text-white">
// //                         <div className="text-center">
// //                           <div className="text-3xl font-bold">{predictedScore}</div>
// //                           <div className="text-sm">Score</div>
// //                         </div>
// //                       </div>
                      
// //                       <div className="space-y-3">
// //                         <div className="flex justify-between text-sm">
// //                           <span>Performance Level</span>
// //                           <span className="font-medium">
// //                             {predictedScore >= 90 ? "Excellent" : 
// //                              predictedScore >= 80 ? "Good" :
// //                              predictedScore >= 70 ? "Average" : "Needs Improvement"}
// //                           </span>
// //                         </div>
// //                         <Progress value={predictedScore} className="h-3" />
// //                       </div>
                      
// //                       <div className="bg-gray-50 p-4 rounded-lg">
// //                         <h4 className="font-medium mb-2">Recommendations:</h4>
// //                         <ul className="text-sm text-gray-600 space-y-1">
// //                           {predictedScore < 70 && <li>• Increase study hours</li>}
// //                           {parseFloat(attendance) < 85 && <li>• Improve attendance</li>}
// //                           <li>• Focus on weak subjects</li>
// //                           <li>• Consider additional tutoring</li>
// //                         </ul>
// //                       </div>
// //                     </div>
// //                   ) : (
// //                     <div className="text-center py-12">
// //                       <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
// //                       <p className="text-gray-500">Enter student data to see prediction</p>
// //                     </div>
// //                   )}
// //                 </CardContent>
// //               </Card>
// //             </div>
// //           </TabsContent>
          
// //           <TabsContent value="analytics" className="space-y-6">
// //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //               <Card className="shadow-lg">
// //                 <CardHeader>
// //                   <CardTitle>Study Hours vs Performance</CardTitle>
// //                   <CardDescription>Average scores by study time ranges</CardDescription>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <ResponsiveContainer width="100%" height={300}>
// //                     <BarChart data={performanceData}>
// //                       <CartesianGrid strokeDasharray="3 3" />
// //                       <XAxis dataKey="hours" />
// //                       <YAxis />
// //                       <Tooltip />
// //                       <Bar dataKey="avgScore" fill="#3B82F6" radius={4} />
// //                     </BarChart>
// //                   </ResponsiveContainer>
// //                 </CardContent>
// //               </Card>
              
// //               <Card className="shadow-lg">
// //                 <CardHeader>
// //                   <CardTitle>Performance Trends</CardTitle>
// //                   <CardDescription>Monthly average score progression</CardDescription>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <ResponsiveContainer width="100%" height={300}>
// //                     <LineChart data={trendData}>
// //                       <CartesianGrid strokeDasharray="3 3" />
// //                       <XAxis dataKey="month" />
// //                       <YAxis />
// //                       <Tooltip />
// //                       <Line type="monotone" dataKey="avgScore" stroke="#10B981" strokeWidth={3} />
// //                     </LineChart>
// //                   </ResponsiveContainer>
// //                 </CardContent>
// //               </Card>
              
// //               <Card className="shadow-lg lg:col-span-2">
// //                 <CardHeader>
// //                   <CardTitle>Attendance vs Score Correlation</CardTitle>
// //                   <CardDescription>Relationship between class attendance and exam performance</CardDescription>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <ResponsiveContainer width="100%" height={300}>
// //                     <ScatterChart data={scatterData}>
// //                       <CartesianGrid strokeDasharray="3 3" />
// //                       <XAxis dataKey="attendance" name="Attendance %" />
// //                       <YAxis dataKey="score" name="Score" />
// //                       <Tooltip cursor={{ strokeDasharray: '3 3' }} />
// //                       <Scatter dataKey="score" fill="#8B5CF6" />
// //                     </ScatterChart>
// //                   </ResponsiveContainer>
// //                 </CardContent>
// //               </Card>
// //             </div>
// //           </TabsContent>
          
// //           <TabsContent value="insights" className="space-y-6">
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <Card className="shadow-lg">
// //                 <CardHeader>
// //                   <CardTitle className="text-green-700">Key Success Factors</CardTitle>
// //                 </CardHeader>
// //                 <CardContent className="space-y-4">
// //                   <div className="flex items-center space-x-3">
// //                     <div className="w-2 h-2 bg-green-500 rounded-full"></div>
// //                     <span>Students studying 6+ hours weekly score 25% higher</span>
// //                   </div>
// //                   <div className="flex items-center space-x-3">
// //                     <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
// //                     <span>95%+ attendance correlates with top 20% performance</span>
// //                   </div>
// //                   <div className="flex items-center space-x-3">
// //                     <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
// //                     <span>Previous scores are 70% predictive of future performance</span>
// //                   </div>
// //                 </CardContent>
// //               </Card>
              
// //               <Card className="shadow-lg">
// //                 <CardHeader>
// //                   <CardTitle className="text-orange-700">Areas for Improvement</CardTitle>
// //                 </CardHeader>
// //                 <CardContent className="space-y-4">
// //                   <div className="flex items-center space-x-3">
// //                     <div className="w-2 h-2 bg-red-500 rounded-full"></div>
// //                     <span>23% of students study less than 3 hours weekly</span>
// //                   </div>
// //                   <div className="flex items-center space-x-3">
// //                     <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
// //                     <span>Average attendance is 78% - room for improvement</span>
// //                   </div>
// //                   <div className="flex items-center space-x-3">
// //                     <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
// //                     <span>Students need better study habit guidance</span>
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </div>
            
// //             <Card className="shadow-lg">
// //               <CardHeader>
// //                 <CardTitle>Model Information</CardTitle>
// //                 <CardDescription>Technical details about the prediction system</CardDescription>
// //               </CardHeader>
// //               <CardContent>
// //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //                   <div className="text-center">
// //                     <div className="text-2xl font-bold text-blue-600">87.5%</div>
// //                     <div className="text-sm text-gray-600">Model Accuracy</div>
// //                   </div>
// //                   <div className="text-center">
// //                     <div className="text-2xl font-bold text-green-600">1,247</div>
// //                     <div className="text-sm text-gray-600">Training Samples</div>
// //                   </div>
// //                   <div className="text-center">
// //                     <div className="text-2xl font-bold text-purple-600">3</div>
// //                     <div className="text-sm text-gray-600">Input Features</div>
// //                   </div>
// //                 </div>
// //                 <div className="mt-6 p-4 bg-gray-50 rounded-lg">
// //                   <h4 className="font-medium mb-2">Technologies Used:</h4>
// //                   <div className="flex flex-wrap gap-2">
// //                     <Badge variant="secondary">Python</Badge>
// //                     <Badge variant="secondary">Flask</Badge>
// //                     <Badge variant="secondary">Scikit-learn</Badge>
// //                     <Badge variant="secondary">Kinde Auth</Badge>
// //                     <Badge variant="secondary">React</Badge>
// //                     <Badge variant="secondary">Kaggle Dataset</Badge>
// //                   </div>
// //                 </div>
// //               </CardContent>
// //             </Card>
// //           </TabsContent>
// //         </Tabs>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Index;


// import { useState } from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Progress } from "@/components/ui/progress";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, ScatterChart, Scatter } from 'recharts';
// import { BookOpen, TrendingUp, Users, Target, Clock, Award, Calculator, Database, Loader2 } from "lucide-react";
// import { usePrediction } from "@/hooks/usePrediction";

// const Index = () => {
//   const [hoursStudied, setHoursStudied] = useState("");
//   const [previousScore, setPreviousScore] = useState("");
//   const [attendance, setAttendance] = useState("");
  
//   const { predictedScore, isLoading, error, makePrediction, resetPrediction } = usePrediction();

//   // Sample data for charts
//   const performanceData = [
//     { hours: "0-2", avgScore: 45, students: 12 },
//     { hours: "2-4", avgScore: 62, students: 28 },
//     { hours: "4-6", avgScore: 74, students: 35 },
//     { hours: "6-8", avgScore: 83, students: 22 },
//     { hours: "8+", avgScore: 91, students: 15 }
//   ];

//   const trendData = [
//     { month: "Jan", avgScore: 68 },
//     { month: "Feb", avgScore: 72 },
//     { month: "Mar", avgScore: 75 },
//     { month: "Apr", avgScore: 71 },
//     { month: "May", avgScore: 78 },
//     { month: "Jun", avgScore: 82 }
//   ];

//   const scatterData = [
//     { attendance: 65, score: 55 },
//     { attendance: 72, score: 68 },
//     { attendance: 85, score: 78 },
//     { attendance: 91, score: 85 },
//     { attendance: 95, score: 92 },
//     { attendance: 78, score: 72 },
//     { attendance: 88, score: 81 }
//   ];

//   const handlePredict = async () => {
//     // Reset previous prediction
//     resetPrediction();
    
//     // Validate inputs
//     const hours = parseFloat(hoursStudied);
//     const prevScore = parseFloat(previousScore);
//     const attend = parseFloat(attendance);
    
//     if (!hoursStudied || !previousScore || !attendance) {
//       return;
//     }

//     if (isNaN(hours) || isNaN(prevScore) || isNaN(attend)) {
//       return;
//     }

//     // Make prediction using the ML model
//     await makePrediction({
//       hoursStudied: hours,
//       previousScore: prevScore,
//       attendance: attend
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-3">
//               <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
//                 <BookOpen className="h-6 w-6 text-white" />
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-gray-900">Student Exam Score Prediction</h1>
//                 <p className="text-gray-600">AI-powered academic performance analytics</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <Badge variant="secondary" className="bg-green-100 text-green-800">
//                 <Database className="h-3 w-3 mr-1" />
//                 ML Model
//               </Badge>
//               <Badge variant="secondary" className="bg-blue-100 text-blue-800">
//                 <TrendingUp className="h-3 w-3 mr-1" />
//                 Supabase Edge Functions
//               </Badge>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-8">
//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//           <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-blue-100">Total Students</p>
//                   <p className="text-3xl font-bold">1,247</p>
//                 </div>
//                 <Users className="h-8 w-8 text-blue-200" />
//               </div>
//             </CardContent>
//           </Card>
          
//           <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-green-100">Avg Score</p>
//                   <p className="text-3xl font-bold">74.2</p>
//                 </div>
//                 <Target className="h-8 w-8 text-green-200" />
//               </div>
//             </CardContent>
//           </Card>
          
//           <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-purple-100">Avg Study Hours</p>
//                   <p className="text-3xl font-bold">5.3</p>
//                 </div>
//                 <Clock className="h-8 w-8 text-purple-200" />
//               </div>
//             </CardContent>
//           </Card>
          
//           <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-orange-100">Model Accuracy</p>
//                   <p className="text-3xl font-bold">87.5%</p>
//                 </div>
//                 <Award className="h-8 w-8 text-orange-200" />
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         <Tabs defaultValue="predict" className="space-y-6">
//           <TabsList className="grid w-full grid-cols-3 lg:w-96">
//             <TabsTrigger value="predict">Score Prediction</TabsTrigger>
//             <TabsTrigger value="analytics">Analytics</TabsTrigger>
//             <TabsTrigger value="insights">Insights</TabsTrigger>
//           </TabsList>
          
//           <TabsContent value="predict" className="space-y-6">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {/* Prediction Form */}
//               <Card className="shadow-lg">
//                 <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
//                   <CardTitle className="flex items-center space-x-2">
//                     <Calculator className="h-5 w-5 text-blue-600" />
//                     <span>Predict Student Score</span>
//                   </CardTitle>
//                   <CardDescription>
//                     Enter student data to predict their exam score using our ML model
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="p-6 space-y-6">
//                   <div className="space-y-2">
//                     <Label htmlFor="hours">Hours Studied per Week</Label>
//                     <Input
//                       id="hours"
//                       type="number"
//                       placeholder="e.g., 6.5"
//                       value={hoursStudied}
//                       onChange={(e) => setHoursStudied(e.target.value)}
//                       className="border-2 focus:border-blue-500"
//                       disabled={isLoading}
//                     />
//                   </div>
                  
//                   <div className="space-y-2">
//                     <Label htmlFor="previous">Previous Exam Score</Label>
//                     <Input
//                       id="previous"
//                       type="number"
//                       placeholder="e.g., 78"
//                       value={previousScore}
//                       onChange={(e) => setPreviousScore(e.target.value)}
//                       className="border-2 focus:border-blue-500"
//                       disabled={isLoading}
//                     />
//                   </div>
                  
//                   <div className="space-y-2">
//                     <Label htmlFor="attendance">Attendance Percentage</Label>
//                     <Input
//                       id="attendance"
//                       type="number"
//                       placeholder="e.g., 85"
//                       value={attendance}
//                       onChange={(e) => setAttendance(e.target.value)}
//                       className="border-2 focus:border-blue-500"
//                       disabled={isLoading}
//                     />
//                   </div>
                  
//                   <Button 
//                     onClick={handlePredict} 
//                     className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
//                     size="lg"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? (
//                       <>
//                         <Loader2 className="h-4 w-4 mr-2 animate-spin" />
//                         Predicting...
//                       </>
//                     ) : (
//                       <>
//                         <TrendingUp className="h-4 w-4 mr-2" />
//                         Predict Score
//                       </>
//                     )}
//                   </Button>
                  
//                   {error && (
//                     <div className="p-3 bg-red-50 border border-red-200 rounded-md">
//                       <p className="text-red-800 text-sm">{error}</p>
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>
              
//               {/* Prediction Result */}
//               <Card className="shadow-lg">
//                 <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
//                   <CardTitle>Prediction Result</CardTitle>
//                   <CardDescription>
//                     ML-generated score prediction based on input factors
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="p-6">
//                   {predictedScore !== null ? (
//                     <div className="text-center space-y-6">
//                       <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-full w-32 h-32 mx-auto flex items-center justify-center text-white">
//                         <div className="text-center">
//                           <div className="text-3xl font-bold">{predictedScore}</div>
//                           <div className="text-sm">Score</div>
//                         </div>
//                       </div>
                      
//                       <div className="space-y-3">
//                         <div className="flex justify-between text-sm">
//                           <span>Performance Level</span>
//                           <span className="font-medium">
//                             {predictedScore >= 90 ? "Excellent" : 
//                              predictedScore >= 80 ? "Good" :
//                              predictedScore >= 70 ? "Average" : "Needs Improvement"}
//                           </span>
//                         </div>
//                         <Progress value={predictedScore} className="h-3" />
//                       </div>
                      
//                       <div className="bg-gray-50 p-4 rounded-lg">
//                         <h4 className="font-medium mb-2">Recommendations:</h4>
//                         <ul className="text-sm text-gray-600 space-y-1">
//                           {predictedScore < 70 && <li>• Increase study hours</li>}
//                           {parseFloat(attendance) < 85 && <li>• Improve attendance</li>}
//                           <li>• Focus on weak subjects</li>
//                           <li>• Consider additional tutoring</li>
//                         </ul>
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="text-center py-12">
//                       <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//                       <p className="text-gray-500">Enter student data to see prediction</p>
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>
//             </div>
//           </TabsContent>
          
//           <TabsContent value="analytics" className="space-y-6">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <Card className="shadow-lg">
//                 <CardHeader>
//                   <CardTitle>Study Hours vs Performance</CardTitle>
//                   <CardDescription>Average scores by study time ranges</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ResponsiveContainer width="100%" height={300}>
//                     <BarChart data={performanceData}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="hours" />
//                       <YAxis />
//                       <Tooltip />
//                       <Bar dataKey="avgScore" fill="#3B82F6" radius={4} />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </CardContent>
//               </Card>
              
//               <Card className="shadow-lg">
//                 <CardHeader>
//                   <CardTitle>Performance Trends</CardTitle>
//                   <CardDescription>Monthly average score progression</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ResponsiveContainer width="100%" height={300}>
//                     <LineChart data={trendData}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="month" />
//                       <YAxis />
//                       <Tooltip />
//                       <Line type="monotone" dataKey="avgScore" stroke="#10B981" strokeWidth={3} />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 </CardContent>
//               </Card>
              
//               <Card className="shadow-lg lg:col-span-2">
//                 <CardHeader>
//                   <CardTitle>Attendance vs Score Correlation</CardTitle>
//                   <CardDescription>Relationship between class attendance and exam performance</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ResponsiveContainer width="100%" height={300}>
//                     <ScatterChart data={scatterData}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="attendance" name="Attendance %" />
//                       <YAxis dataKey="score" name="Score" />
//                       <Tooltip cursor={{ strokeDasharray: '3 3' }} />
//                       <Scatter dataKey="score" fill="#8B5CF6" />
//                     </ScatterChart>
//                   </ResponsiveContainer>
//                 </CardContent>
//               </Card>
//             </div>
//           </TabsContent>
          
//           <TabsContent value="insights" className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Card className="shadow-lg">
//                 <CardHeader>
//                   <CardTitle className="text-green-700">Key Success Factors</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                     <span>Students studying 6+ hours weekly score 25% higher</span>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                     <span>95%+ attendance correlates with top 20% performance</span>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
//                     <span>Previous scores are 70% predictive of future performance</span>
//                   </div>
//                 </CardContent>
//               </Card>
              
//               <Card className="shadow-lg">
//                 <CardHeader>
//                   <CardTitle className="text-orange-700">Areas for Improvement</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-2 h-2 bg-red-500 rounded-full"></div>
//                     <span>23% of students study less than 3 hours weekly</span>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
//                     <span>Average attendance is 78% - room for improvement</span>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
//                     <span>Students need better study habit guidance</span>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
            
//             <Card className="shadow-lg">
//               <CardHeader>
//                 <CardTitle>Model Information</CardTitle>
//                 <CardDescription>Technical details about the prediction system</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-blue-600">87.5%</div>
//                     <div className="text-sm text-gray-600">Model Accuracy</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-green-600">1,247</div>
//                     <div className="text-sm text-gray-600">Training Samples</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-purple-600">3</div>
//                     <div className="text-sm text-gray-600">Input Features</div>
//                   </div>
//                 </div>
//                 <div className="mt-6 p-4 bg-gray-50 rounded-lg">
//                   <h4 className="font-medium mb-2">Technologies Used:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     <Badge variant="secondary">Supabase Edge Functions</Badge>
//                     <Badge variant="secondary">Machine Learning</Badge>
//                     <Badge variant="secondary">TypeScript</Badge>
//                     <Badge variant="secondary">React</Badge>
//                     <Badge variant="secondary">Statistical Models</Badge>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default Index;

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePrediction } from "@/hooks/usePrediction";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { PredictionForm } from "@/components/prediction/PredictionForm";
import { PredictionResult } from "@/components/prediction/PredictionResult";
import { AnalyticsCharts } from "@/components/analytics/AnalyticsCharts";
import { InsightsPanel } from "@/components/insights/InsightsPanel";

const Index = () => {
  const [attendance, setAttendance] = useState("");
  const { predictedScore, isLoading, error, makePrediction, resetPrediction } = usePrediction();

  const handlePredict = async (data: { hoursStudied: number; previousScore: number; attendance: number }) => {
    resetPrediction();
    setAttendance(data.attendance.toString());
    await makePrediction(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <DashboardHeader />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <StatsCards />

        <Tabs defaultValue="predict" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-96">
            <TabsTrigger value="predict">Score Prediction</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>
          
          <TabsContent value="predict" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <PredictionForm 
                onPredict={handlePredict}
                isLoading={isLoading}
                error={error}
              />
              <PredictionResult 
                predictedScore={predictedScore}
                attendance={attendance}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="analytics" className="space-y-6">
            <AnalyticsCharts />
          </TabsContent>
          
          <TabsContent value="insights" className="space-y-6">
            <InsightsPanel />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
