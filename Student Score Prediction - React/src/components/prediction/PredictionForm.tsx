
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, Loader2 } from "lucide-react";

interface PredictionFormProps {
  onPredict: (data: { hoursStudied: number; previousScore: number; attendance: number }) => void;
  isLoading: boolean;
  error: string | null;
}

export const PredictionForm = ({ onPredict, isLoading, error }: PredictionFormProps) => {
  const [hoursStudied, setHoursStudied] = useState("");
  const [previousScore, setPreviousScore] = useState("");
  const [attendance, setAttendance] = useState("");

  const handlePredict = () => {
    const hours = parseFloat(hoursStudied);
    const prevScore = parseFloat(previousScore);
    const attend = parseFloat(attendance);
    
    if (!hoursStudied || !previousScore || !attendance) {
      return;
    }

    if (isNaN(hours) || isNaN(prevScore) || isNaN(attend)) {
      return;
    }

    onPredict({
      hoursStudied: hours,
      previousScore: prevScore,
      attendance: attend
    });
  };

  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
        <CardTitle className="flex items-center space-x-2">
          <Calculator className="h-5 w-5 text-blue-600" />
          <span>Predict Student Score</span>
        </CardTitle>
        <CardDescription>
          Enter student data to predict their exam score using our ML model
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="hours">Hours Studied per Week</Label>
          <Input
            id="hours"
            type="number"
            placeholder="e.g., 6.5"
            value={hoursStudied}
            onChange={(e) => setHoursStudied(e.target.value)}
            className="border-2 focus:border-blue-500"
            disabled={isLoading}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="previous">Previous Exam Score</Label>
          <Input
            id="previous"
            type="number"
            placeholder="e.g., 78"
            value={previousScore}
            onChange={(e) => setPreviousScore(e.target.value)}
            className="border-2 focus:border-blue-500"
            disabled={isLoading}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="attendance">Attendance Percentage</Label>
          <Input
            id="attendance"
            type="number"
            placeholder="e.g., 85"
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
            className="border-2 focus:border-blue-500"
            disabled={isLoading}
          />
        </div>
        
        <Button 
          onClick={handlePredict} 
          className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
          size="lg"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Predicting...
            </>
          ) : (
            <>
              <TrendingUp className="h-4 w-4 mr-2" />
              Predict Score
            </>
          )}
        </Button>
        
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};