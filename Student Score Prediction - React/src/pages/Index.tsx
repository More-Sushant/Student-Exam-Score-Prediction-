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
