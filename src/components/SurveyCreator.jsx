// src/components/SurveyCreator.jsx
import { useState } from 'react';

const SurveyCreator = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    type: 'multiple_choice',
    question: '',
    options: [''],
  });

  const questionTypes = [
    { id: 'multiple_choice', label: 'Multiple Choice' },
    { id: 'text', label: 'Text Answer' },
    { id: 'rating', label: 'Rating Scale' },
    { id: 'checkbox', label: 'Checkbox' },
  ];

  const addQuestion = () => {
    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion({
      type: 'multiple_choice',
      question: '',
      options: [''],
    });
  };

  const addOption = () => {
    setCurrentQuestion({
      ...currentQuestion,
      options: [...currentQuestion.options, ''],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle survey submission logic here
    console.log('Survey Created:', questions);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Create New Survey</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Question Type Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Question Type
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-2"
              value={currentQuestion.type}
              onChange={(e) => setCurrentQuestion({
                ...currentQuestion,
                type: e.target.value,
              })}
            >
              {questionTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Question Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Question
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
              value={currentQuestion.question}
              onChange={(e) => setCurrentQuestion({
                ...currentQuestion,
                question: e.target.value,
              })}
              placeholder="Enter your question"
            />
          </div>

          {/* Options (for multiple choice/checkbox) */}
          {['multiple_choice', 'checkbox'].includes(currentQuestion.type) && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Options
              </label>
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex mb-2">
                  <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded-md p-2 mr-2"
                    value={option}
                    onChange={(e) => {
                      const newOptions = [...currentQuestion.options];
                      newOptions[index] = e.target.value;
                      setCurrentQuestion({
                        ...currentQuestion,
                        options: newOptions,
                      });
                    }}
                    placeholder={`Option ${index + 1}`}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const newOptions = currentQuestion.options.filter((_, i) => i !== index);
                      setCurrentQuestion({
                        ...currentQuestion,
                        options: newOptions,
                      });
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addOption}
                className="text-primary hover:text-primary-dark text-sm font-medium"
              >
                + Add Option
              </button>
            </div>
          )}

          {/* Add Question Button */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={addQuestion}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
            >
              Add Question
            </button>
          </div>

          {/* Submit Survey Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
            >
              Create Survey
            </button>
          </div>
        </form>

        {/* Preview Section */}
        {questions.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Survey Preview</h3>
            {questions.map((q, index) => (
              <div key={index} className="mb-6 p-4 border rounded-lg">
                <p className="font-medium mb-2">Q{index + 1}: {q.question}</p>
                {['multiple_choice', 'checkbox'].includes(q.type) && (
                  <div className="ml-4">
                    {q.options.map((option, optIndex) => (
                      <div key={optIndex} className="flex items-center mb-2">
                        <input
                          type={q.type === 'multiple_choice' ? 'radio' : 'checkbox'}
                          name={`question-${index}`}
                          className="mr-2"
                        />
                        <span>{option}</span>
                      </div>
                    ))}
                  </div>
                )}
                {q.type === 'text' && (
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Text answer"
                    disabled
                  />
                )}
                {q.type === 'rating' && (
                  <div className="flex space-x-4">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100"
                      >
                        {rating}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SurveyCreator;