import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, AlertTriangle, Info } from "lucide-react";

export const InsightsPanel = () => {
  console.log("InsightsPanel component is rendering");
  
  return (
    <div className="space-y-6 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-lg border">
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <CardTitle className="text-green-700">Key Success Factors</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
              <span className="text-sm">Students studying 6+ hours weekly score 25% higher</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
              <span className="text-sm">95%+ attendance correlates with top 20% performance</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
              <span className="text-sm">Previous scores are 70% predictive of future performance</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg border">
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <CardTitle className="text-orange-700">Areas for Improvement</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              <span className="text-sm">23% of students study less than 3 hours weekly</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span className="text-sm">Average attendance is 78% - room for improvement</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              <span className="text-sm">Students need better study habit guidance</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="shadow-lg border">
        <CardHeader className="pb-4">
          <div className="flex items-center space-x-2">
            <Info className="h-5 w-5 text-blue-600" />
            <CardTitle>Model Information</CardTitle>
          </div>
          <CardDescription>Technical details about the prediction system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-1">87.5%</div>
              <div className="text-sm text-gray-600">Model Accuracy</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-1">1,247</div>
              <div className="text-sm text-gray-600">Training Samples</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-1">3</div>
              <div className="text-sm text-gray-600">Input Features</div>
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium mb-3 text-gray-800">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">Supabase Edge Functions</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">Machine Learning</Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">TypeScript</Badge>
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">React</Badge>
              <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">Statistical Models</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
