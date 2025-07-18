
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target } from "lucide-react";

interface PredictionResultProps {
  predictedScore: number | null;
  attendance: string;
}

export const PredictionResult = ({ predictedScore, attendance }: PredictionResultProps) => {
  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
        <CardTitle>Prediction Result</CardTitle>
        <CardDescription>
          ML-generated score prediction based on input factors
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        {predictedScore !== null ? (
          <div className="text-center space-y-6">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-full w-32 h-32 mx-auto flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-3xl font-bold">{predictedScore}</div>
                <div className="text-sm">Score</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Performance Level</span>
                <span className="font-medium">
                  {predictedScore >= 90 ? "Excellent" : 
                    predictedScore >= 80 ? "Good" :
                    predictedScore >= 70 ? "Average" : "Needs Improvement"}
                </span>
              </div>
              <Progress value={predictedScore} className="h-3" />
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Recommendations:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {predictedScore < 70 && <li>• Increase study hours</li>}
                {parseFloat(attendance) < 85 && <li>• Improve attendance</li>}
                <li>• Focus on weak subjects</li>
                <li>• Consider additional tutoring</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Enter student data to see prediction</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
