import React, { useState } from 'react';
import { FiPlus, FiSearch, FiUsers,  FiMapPin } from 'react-icons/fi';
import AlumniModal from './AlumniModal';
import AlumniTable from './AlumniTable';
import StatsCard from './StatsCard';
import { sampleAlumni, getNextId } from '../data/sampleData';

const AlumniDashboard = () => {
  const [alumni, setAlumni] = useState(sampleAlumni);
  const [filteredAlumni, setFilteredAlumni] = useState(sampleAlumni);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingAlumni, setEditingAlumni] = useState(null);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  React.useEffect(() => {
    if (!searchTerm) {
      setFilteredAlumni(alumni);
    } else {
      const filtered = alumni.filter(alumnus =>
        alumnus.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumnus.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumnus.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumnus.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumnus.current_company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumnus.current_position.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredAlumni(filtered);
    }
  }, [alumni, searchTerm]);

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 3000);
  };

  const handleAddAlumni = () => {
    setEditingAlumni(null);
    setShowModal(true);
  };

  const handleEditAlumni = (alumnus) => {
    setEditingAlumni(alumnus);
    setShowModal(true);
  };

  const handleDeleteAlumni = (id) => {
    if (window.confirm('Are you sure you want to delete this alumni record?')) {
      setAlumni(prev => prev.filter(alumnus => alumnus.id !== id));
      showNotification('Alumni deleted successfully', 'success');
    }
  };

  const handleSaveAlumni = (alumniData) => {
    if (editingAlumni) {
      setAlumni(prev => prev.map(alumnus => 
        alumnus.id === editingAlumni.id 
          ? { ...alumniData, id: editingAlumni.id }
          : alumnus
      ));
      showNotification('Alumni updated successfully', 'success');
    } else {
      const newAlumni = {
        ...alumniData,
        id: getNextId(alumni),
        graduation_year: parseInt(alumniData.graduation_year)
      };
      setAlumni(prev => [...prev, newAlumni]);
      showNotification('Alumni added successfully', 'success');
    }
    
    setShowModal(false);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const totalAlumni = alumni.length;
  const recentGraduates = alumni.filter(a => a.graduation_year >= new Date().getFullYear() - 2).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-200 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Alumni Management</h1>
            </div>
            <button
              onClick={handleAddAlumni}
              className="bg-blue-600 hover:cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
            >
              <FiPlus className="w-4 h-4" />
              Add Alumni
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <StatsCard
            title="Total Alumni"
            value={totalAlumni}
            icon={FiUsers}
            color="blue"
          />
          <StatsCard
            title="Recent Graduates"
            value={recentGraduates}
            icon={FiMapPin}
            color="purple"
          />
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search alumni by name, email, branch, or company..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <AlumniTable
            alumni={filteredAlumni}
            loading={false}
            onEdit={handleEditAlumni}
            onDelete={handleDeleteAlumni}
          />
        </div>

      </div>

      {showModal && (
        <AlumniModal
          alumni={editingAlumni}
          onSave={handleSaveAlumni}
          onClose={() => setShowModal(false)}
        />
      )}

      {notification.show && (
        <div className="fixed top-4 right-4 z-50">
          <div
            className={`px-6 py-4 rounded-lg shadow-lg text-white transform transition-transform duration-300 ${
              notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {notification.message}
          </div>
        </div>
      )}
    </div>
  );
};

export default AlumniDashboard;
