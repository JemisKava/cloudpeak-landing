import { MetricProps } from "@/types";
import { TrendingUp } from "lucide-react";
export function Metric({ value, label, growth }: MetricProps) {
  return (
    <div className="space-y-1 p-4">
      <div className="flex items-center gap-2">
        <h2 className="text-h2-40 tracking-tight ">{value}</h2>
        {growth && (
          <span className="text-sm text-gray-500 flex items-center gap-0.5">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            {growth.value}%
          </span>
        )}
      </div>
      <p className="text-body-16 text-neutral-2 text-start">{label}</p>
    </div>
  );
}
