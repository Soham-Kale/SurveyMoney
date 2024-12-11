// src/components/SurveyCreator/ThemeCustomizer.jsx
import { useState } from 'react';

const ThemeCustomizer = ({ theme, onThemeUpdate, onNext, onBack }) => {
  const [localTheme, setLocalTheme] = useState(theme);

  const handleThemeChange = (key, value) => {
    const updatedTheme = { ...localTheme, [key]: value };
    setLocalTheme(updatedTheme);
    onThemeUpdate(updatedTheme);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Customize Theme</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Primary Color
          </label>
          <input
            type="color"
            value={localTheme.primaryColor}
            onChange={(e) => handleThemeChange('primaryColor', e.target.value)}
            className="w-full h-10 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Background Color
          </label>
          <input
            type="color"
            value={localTheme.backgroundColor}
            onChange={(e) => handleThemeChange('backgroundColor', e.target.value)}
            className="w-full h-10 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Font Family
          </label>
          <select
            value={localTheme.fontFamily}
            onChange={(e) => handleThemeChange('fontFamily', e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="Inter">Inter</option>
            <option value="Arial">Arial</option>
            <option value="Georgia">Georgia</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
          </select>
        </div>

        <div className="flex justify-between">
          <button
            onClick={onBack}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Back
          </button>
          <button
            onClick={onNext}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
          >
            Next: Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeCustomizer;