// src/modules/reporting/ReportingModule.tsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ReportingModule: React.FC = () => {
  return (
    <div className="space-y-8">
      <CommunicationFrequencyChart />
      <EngagementEffectiveness />
      <OverdueTrends />
      <ActivityLog />
    </div>
  );
};

// src/modules/reporting/CommunicationFrequencyChart.tsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CommunicationFrequencyChart: React.FC = () => {
  const data = [
    { method: 'LinkedIn Post', count: 45 },
    { method: 'LinkedIn Message', count: 32 },
    { method: 'Email', count: 28 },
    { method: 'Phone Call', count: 15 },
    { method: 'Other', count: 8 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Communication Frequency</h2>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="method" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#4f46e5" />
      </BarChart>
    </div>
  );
};

// src/modules/reporting/EngagementEffectiveness.tsx
const EngagementEffectiveness: React.FC = () => {
  const data = [
    { month: 'Jan', email: 65, linkedin: 78, phone: 82 },
    { month: 'Feb', email: 72, linkedin: 75, phone: 85 },
    // ... more data
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Engagement Effectiveness</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="email" stroke="#8884d8" />
        <Line type="monotone" dataKey="linkedin" stroke="#82ca9d" />
        <Line type="monotone" dataKey="phone" stroke="#ffc658" />
      </LineChart>
    </div>
  );
};

// src/modules/reporting/ActivityLog.tsx
const ActivityLog: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Activity Log</h2>
      <div className="space-y-4">
        {/* Activity items will be mapped here */}
      </div>
    </div>
  );
};

export default ReportingModule;
