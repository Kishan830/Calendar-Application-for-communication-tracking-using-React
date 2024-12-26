// src/modules/admin/AdminModule.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CompanyManagement from './CompanyManagement';
import CommunicationMethodManagement from './CommunicationMethodManagement';

const AdminModule: React.FC = () => {
  return (
    <Routes>
      <Route path="companies" element={<CompanyManagement />} />
      <Route path="methods" element={<CommunicationMethodManagement />} />
    </Routes>
  );
};

// src/modules/admin/CompanyManagement.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Company } from '../../types';

const CompanyManagement: React.FC = () => {
  const [formData, setFormData] = useState<Partial<Company>>({
    name: '',
    location: '',
    linkedinProfile: '',
    emails: [''],
    phoneNumbers: [''],
    comments: '',
    communicationPeriodicity: 14, // default 2 weeks
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dispatch action to add/update company
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Company Management</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required
          />
        </div>
        {/* Add other form fields similarly */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Save Company
        </button>
      </form>
    </div>
  );
};

// src/modules/admin/CommunicationMethodManagement.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CommunicationMethod } from '../../types';

const CommunicationMethodManagement: React.FC = () => {
  const [methods, setMethods] = useState<CommunicationMethod[]>([
    { id: '1', name: 'LinkedIn Post', description: 'Post on LinkedIn', sequence: 1, isMandatory: true },
    { id: '2', name: 'LinkedIn Message', description: 'Direct message on LinkedIn', sequence: 2, isMandatory: true },
    // ... other default methods
  ]);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Communication Methods</h2>
      <div className="space-y-4">
        {methods.map((method) => (
          <div key={method.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
            <div>
              <h3 className="font-medium">{method.name}</h3>
              <p className="text-sm text-gray-500">{method.description}</p>
            </div>
            <div className="flex space-x-2">
              <button className="text-blue-600">Edit</button>
              <button className="text-red-600">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminModule;
