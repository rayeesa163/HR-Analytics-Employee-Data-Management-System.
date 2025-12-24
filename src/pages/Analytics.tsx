import { AppLayout } from "@/components/layout/AppLayout";
import { Header } from "@/components/layout/Header";
import { analyticsData, employees } from "@/data/employees";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
} from "recharts";

const monthlyData = [
  { month: "Jan", headcount: 235, hires: 12, terminations: 5 },
  { month: "Feb", headcount: 238, hires: 8, terminations: 5 },
  { month: "Mar", headcount: 242, hires: 10, terminations: 6 },
  { month: "Apr", headcount: 239, hires: 5, terminations: 8 },
  { month: "May", headcount: 241, hires: 9, terminations: 7 },
  { month: "Jun", headcount: 244, hires: 11, terminations: 8 },
  { month: "Jul", headcount: 247, hires: 8, terminations: 5 },
];

const diversityData = [
  { category: "Male", percentage: analyticsData.diversity.gender.male },
  { category: "Female", percentage: analyticsData.diversity.gender.female },
  { category: "Other", percentage: analyticsData.diversity.gender.other },
];

const compensationByDept = [
  { department: "Tech", avgSalary: 145000 },
  { department: "Finance", avgSalary: 125000 },
  { department: "HR", avgSalary: 95000 },
  { department: "Marketing", avgSalary: 105000 },
  { department: "Sales", avgSalary: 85000 },
  { department: "Product", avgSalary: 120000 },
];

const Analytics = () => {
  return (
    <AppLayout>
      <Header
        title="Workforce Analytics"
        subtitle="Comprehensive HR insights and reporting"
      />
      
      <div className="p-8 space-y-8">
        {/* Headcount Trend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-xl p-6"
        >
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Headcount Trend
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="headcountGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(174, 62%, 40%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(174, 62%, 40%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  domain={[220, 260]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="headcount"
                  stroke="hsl(174, 62%, 40%)"
                  strokeWidth={2}
                  fill="url(#headcountGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Two column charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Hires vs Terminations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Hires vs Terminations
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--border))"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    axisLine={{ stroke: "hsl(var(--border))" }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="hires"
                    stroke="hsl(142, 71%, 45%)"
                    strokeWidth={2}
                    dot={{ fill: "hsl(142, 71%, 45%)" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="terminations"
                    stroke="hsl(0, 72%, 51%)"
                    strokeWidth={2}
                    dot={{ fill: "hsl(0, 72%, 51%)" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-8 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success" />
                <span className="text-sm text-muted-foreground">Hires</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <span className="text-sm text-muted-foreground">Terminations</span>
              </div>
            </div>
          </motion.div>

          {/* Compensation by Department */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Avg. Compensation by Department
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={compensationByDept} layout="vertical">
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--border))"
                    horizontal={false}
                  />
                  <XAxis
                    type="number"
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    axisLine={{ stroke: "hsl(var(--border))" }}
                    tickLine={false}
                    tickFormatter={(value) => `$${value / 1000}K`}
                  />
                  <YAxis
                    dataKey="department"
                    type="category"
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    width={80}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, "Avg Salary"]}
                  />
                  <Bar
                    dataKey="avgSalary"
                    fill="hsl(222, 60%, 20%)"
                    radius={[0, 4, 4, 0]}
                    maxBarSize={30}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Gender Diversity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card rounded-xl p-6"
        >
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Gender Diversity
          </h3>
          <div className="grid grid-cols-3 gap-6">
            {diversityData.map((item, index) => (
              <div key={item.category} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="hsl(var(--muted))"
                      strokeWidth="12"
                    />
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke={
                        index === 0
                          ? "hsl(222, 60%, 20%)"
                          : index === 1
                          ? "hsl(174, 62%, 40%)"
                          : "hsl(199, 89%, 48%)"
                      }
                      strokeWidth="12"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "0 352" }}
                      animate={{
                        strokeDasharray: `${(item.percentage / 100) * 352} 352`,
                      }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-foreground">
                      {item.percentage}%
                    </span>
                  </div>
                </div>
                <p className="text-sm font-medium text-foreground">
                  {item.category}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default Analytics;
