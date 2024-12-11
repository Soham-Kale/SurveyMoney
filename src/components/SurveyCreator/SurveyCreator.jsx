// src/components/SurveyCreator/index.jsx
import { useState } from 'react';
import QuestionEditor from './QuestionEditor';
import SurveyPreview from './SurveyPreview';
import ThemeCustomizer from './ThemeCustomizer';

const SurveyCreator = () => {
  const [surveyData, setSurveyData] = useState({
    title: '',
    description: '',
    theme: {
      primaryColor: '#00BF6F',
      backgroundColor: '#ffffff',
      fontFamily: 'Inter',
    },
    questions: [],
  });

  const [currentStep, setCurrentStep] = useState('details'); // details, questions, theme, preview

  const handleSurveySubmit = () => {
    console.log('Survey Data:', surveyData);
    // Handle survey submission logic here
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {['details', 'questions', 'theme', 'preview'].map((step, index) => (
            <div
              key={step}
              className="flex items-center"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep === step
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {index + 1}
              </div>
              {index < 3 && (
                <div className="w-24 h-1 mx-2 bg-gray-200">
                  <div
                    className={`h-full bg-primary transition-all ${
                      ['details', 'questions', 'theme', 'preview'].indexOf(currentStep) > index
                        ? 'w-full'
                        : 'w-0'
                    }`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-sm font-medium">Survey Details</span>
          <span className="text-sm font-medium">Questions</span>
          <span className="text-sm font-medium">Theme</span>
          <span className="text-sm font-medium">Preview</span>
        </div>
      </div>

      {/* Survey Details */}
      {currentStep === 'details' && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Survey Details</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Survey Title
              </label>
              <input
                type="text"
                value={surveyData.title}
                onChange={(e) =>
                  setSurveyData({ ...surveyData, title: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter survey title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={surveyData.description}
                onChange={(e) =>
                  setSurveyData({ ...surveyData, description: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md p-2"
                rows={4}
                placeholder="Enter survey description"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setCurrentStep('questions')}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
              >
                Next: Add Questions
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Questions Editor */}
      {currentStep === 'questions' && (
        <QuestionEditor
          questions={surveyData.questions}
          onQuestionsUpdate={(questions) =>
            setSurveyData({ ...surveyData, questions })
          }
          onNext={() => setCurrentStep('theme')}
          onBack={() => setCurrentStep('details')}
        />
      )}

      {/* Theme Customizer */}
      {currentStep === 'theme' && (
        <ThemeCustomizer
          theme={surveyData.theme}
          onThemeUpdate={(theme) => setSurveyData({ ...surveyData, theme })}
          onNext={() => setCurrentStep('preview')}
          onBack={() => setCurrentStep('questions')}
        />
      )}

      {/* Preview */}
      {currentStep === 'preview' && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Survey Preview</h2>
            <div className="space-x-4">
              <button
                onClick={() => setCurrentStep('theme')}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={handleSurveySubmit}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
              >
                Create Survey
              </button>
            </div>
          </div>
          <SurveyPreview surveyData={surveyData} />
        </div>
      )}
    </div>
  );
};

export default SurveyCreator;