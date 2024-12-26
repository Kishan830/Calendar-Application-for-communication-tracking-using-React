// src/modules/user/UserModule.tsx
import React from 'react';
import Dashboard from './Dashboard';
import CalendarView from './CalendarView';
import Notifications from './Notifications';

const UserModule: React.FC = () => {
  return (
    <div className="space-y-8">
      <Notifications />
      <Dashboard />
      <CalendarView />
    </div>
  );
};

// src/modules/user/Dashboard.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

const Dashboard: React.FC = () => {
  const getHighlightColor = (lastComm: Date) => {
    const today = new Date();
    const diffDays = Math.floor((today.getTime() - lastComm.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays > 14) return 'bg-red-100';
    if (diffDays === 0) return 'bg-yellow-100';
    return '';
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b">Company</th>
            <th className="px-6 py-3 border-b">Last 5 Communications</th>
            <th className="px-6 py-3 border-b">Next Scheduled</th>
            <th className="px-6 py-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Company rows will be mapped here */}
        </tbody>
      </table>
    </div>
  );
};

// src/modules/user/CalendarView.tsx
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const CalendarView: React.FC = () => {
  const handleDateClick = (arg: any) => {
    // Handle date click
  };

  const handleEventClick = (arg: any) => {
    // Handle event click
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        events={[
          // Events will be populated from Redux store
        ]}
      />
    </div>
  );
};

// src/modules/user/Notifications.tsx
import React from 'react';

const Notifications: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-red-50 p-4 rounded-lg">
        <h3 className="font-medium text-red-800">Overdue Communications</h3>
        {/* Overdue items */}
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg">
        <h3 className="font-medium text-yellow-800">Due Today</h3>
        {/* Today's items */}
      </div>
    </div>
  );
};

export default UserModule;
