
import { GraduationCap } from "lucide-react";
import { UserMenu } from "@/components/auth/UserMenu";

export const DashboardHeader = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Student Score Predictor</h1>
              <p className="text-sm text-gray-600">AI-powered academic analytics</p>
            </div>
          </div>
          <UserMenu />
        </div>
      </div>
    </header>
  );
};