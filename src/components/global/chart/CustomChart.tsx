"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect } from "react";

const chartData = [
  { hour: "10:00", sales: 5 },
  { hour: "11:00", sales: 10 },
  { hour: "12:00", sales: 50 },
  { hour: "13:00", sales: 100 },
  { hour: "14:00", sales: 120 },
  { hour: "15:00", sales: 90 },
  { hour: "16:00", sales: 80 },
  { hour: "17:00", sales: 70 },
  { hour: "18:00", sales: 10 },
  { hour: "19:00", sales: 50 },
  { hour: "20:00", sales: 80 },
  { hour: "21:00", sales: 40 },
  { hour: "22:00", sales: 20 },
];

const chartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function Component() {
  // handle error (XAxis: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.)
  useEffect(() => {
    const originalConsoleError = console.error;

    console.error = (...args: any[]) => {
      if (typeof args[0] === "string" && /defaultProps/.test(args[0])) {
        return;
      }

      originalConsoleError(...args);
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Penjualan Harian</CardTitle>
        <CardDescription>
          Penjualan dari pukul 10:00 - 22:00 WIB
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="hour"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="sales"
              type="natural"
              fill={chartConfig.sales.color}
              fillOpacity={0.4}
              stroke={chartConfig.sales.color}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Sales up by 5.2% today <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing sales data for the last 24 hours
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
