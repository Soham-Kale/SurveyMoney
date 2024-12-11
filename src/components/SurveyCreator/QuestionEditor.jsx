// src/components/SurveyCreator/QuestionEditor.jsx
import { useState } from 'react';

const questionTypes = [
  { id: 'multiple_choice', label: 'Multiple Choice' },
  { id: 'checkbox', label: 'Checkbox' },
  { id: 'text', label: 'Text Answer' },
  { id: 'rating', label: 'Rating Scale' },
  { id: 'dropdown', label: 'Dropdown' },
  { id: 'file_upload', label: 'File Upload' },
  { id: 'date', label: 'Date Picker' },
  { id: 'matrix', label: 'Matrix' },
  { id: 'ranking', label: 'Ranking' },
  { id: 'slider', label: 'Slider' },
];

const QuestionEditor = ({ questions, onQuestionsUpdate, onNext, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState({
    type: 'multiple_choice',
    question: '',
    options: [''],
    required: false,
    description: '',
  });

  const addQuestion = () => {
    onQuestionsUpdate([...questions, currentQuestion]);
    setCurrentQuestion({
      type: 'multiple_choice',
      question: '',
      options: [''],
      required: false,
      description: '',
    });
  };

  const removeQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    onQuestionsUpdate(newQuestions);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Add Questions</h2>
      
      {/* Question List */}
      {questions.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Current Questions</h3>
          <div className="space-y-4">
            {questions.map((q, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div>
                  <span className="font-medium">Q{index + 1}:</span> {q.question}
                </div>
                <button
                  onClick={() => removeQuestion(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* New Question Form */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Question Type
          </label>
          <select
            value={currentQuestion.type}
            onChange={(e) =>
              setCurrentQuestion({ ...currentQuestion, type: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md p-2"
          >
            {questionTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Question Text
          </label>
          <input
            type="text"
            value={currentQuestion.question}
            onChange={(e) =>
              setCurrentQuestion({ ...currentQuestion, question: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter your question"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description (Optional)
          </label>
          <input
            type="text"
            value={currentQuestion.description}
            onChange={(e) =>
              setCurrentQuestion({ ...currentQuestion, description: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Add a description or instructions"
          />
        </div>

        {/* Options for multiple choice, checkbox, dropdown, and ranking questions */}
        {['multiple_choice', 'checkbox', 'dropdown', 'ranking'].includes(
          currentQuestion.type
        ) && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Options
            </label>
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...currentQuestion.options];
                    newOptions[index] = e.target.value;
                    setCurrentQuestion({
                      ...currentQuestion,
                      options: newOptions,
                    });
                  }}
                  className="flex-1 border border-gray-300 rounded-md p-2 mr-2"
                  placeholder={`Option ${index + 1}`}
                />
                <button
                  onClick={() => {
                    const newOptions = currentQuestion.options.filter(
                      (_, i) => i !== index
                    );
                    setCurrentQuestion({
                      ...currentQuestion,
                      options: newOptions,
                    });
                  }}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={() =>
                setCurrentQuestion({
                  ...currentQuestion,
                  options: [...currentQuestion.options, ''],
                })
              }
              className="text-primary hover:text-primary-dark text-sm font-medium"
            >
              + Add Option
            </button>
          </div>
        )}

        <div className="flex items-center">
          <input
            type="checkbox"
            id="required"
            checked={currentQuestion.required}
            onChange={(e) =>
              setCurrentQuestion({
                ...currentQuestion,
                required: e.target.checked,
              })
            }
            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
          />
          <label htmlFor="required" className="ml-2 text-sm text-gray-700">
            Required question
          </label>
        </div>

        <div className="flex justify-between">
          <button
            onClick={onBack}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Back
          </button>
          <div className="space-x-4">
            <button
              onClick={addQuestion}
              className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary-50"
            >
              Add Question
            </button>
            <button
              onClick={onNext}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
              disabled={questions.length === 0}
            >
              Next: Customize Theme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionEditor;