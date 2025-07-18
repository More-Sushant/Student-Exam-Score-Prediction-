import { supabase } from "../integrations/supabase/client";

export interface PredictionRequest {
  hoursStudied: number;
  previousScore: number;
  attendance: number;
}

export interface PredictionResponse {
  predictedScore: number;
  success: boolean;
  error?: string;
}

export const predictExamScore = async (data: PredictionRequest): Promise<PredictionResponse> => {
  try {
    const { data: result, error } = await supabase.functions.invoke('predict-score', {
      body: data
    });

    if (error) {
      console.error('Edge function error:', error);
      throw new Error(error.message || 'Failed to get prediction');
    }

    return result as PredictionResponse;
  } catch (error) {
    console.error('Prediction API error:', error);
    return {
      predictedScore: 0,
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};
