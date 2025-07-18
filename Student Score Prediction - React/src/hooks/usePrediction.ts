
import { useState } from "react";
import { predictExamScore, PredictionRequest } from "@/services/predictionAPI";
import { toast } from "@/components/ui/use-toast";

export const usePrediction = () => {
  const [predictedScore, setPredictedScore] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const makePrediction = async (data: PredictionRequest) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await predictExamScore(data);
      
      if (result.success) {
        setPredictedScore(result.predictedScore);
        toast({
          title: "Prediction Complete",
          description: `Predicted score: ${result.predictedScore}`,
        });
      } else {
        setError(result.error || 'Prediction failed');
        toast({
          title: "Prediction Failed",
          description: result.error || 'An error occurred while making the prediction',
          variant: "destructive",
        });
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
      toast({
        title: "Prediction Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetPrediction = () => {
    setPredictedScore(null);
    setError(null);
  };

  return {
    predictedScore,
    isLoading,
    error,
    makePrediction,
    resetPrediction
  };
};