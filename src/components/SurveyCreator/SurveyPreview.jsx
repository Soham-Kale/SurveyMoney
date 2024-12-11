// src/components/SurveyCreator/SurveyPreview.jsx
const SurveyPreview = ({ surveyData }) => {
    return (
      <div
        className="p-6 rounded-lg"
        style={{
          backgroundColor: surveyData.theme.backgroundColor,
          fontFamily: surveyData.theme.fontFamily,
        }}
      >
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: surveyData.theme.primaryColor }}
        >
          {surveyData.title}
        </h2>
        <p className="text-gray-700 mb-6">{surveyData.description}</p>
  
        {surveyData.questions.map((question, index) => (
          <div key={index} className="mb-6">
            <p className="font-medium mb-2">{question.question}</p>
            {question.type === 'multiple_choice' && (
              <select className="w-full border border-gray-300 rounded-md p-2">
                {question.options.map((option, optIndex) => (
                  <option key={optIndex} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
            {question.type === 'checkbox' && (
              <div className="space-y-2">
                {question.options.map((option, optIndex) => (
                  <div key={optIndex} className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label className="ml-2 text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
            )}
            {question.type === 'text' && (
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Your answer"
              />
            )}
            {question.type === 'rating' && (
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
            {question.type === 'dropdown' && (
              <select className="w-full border border-gray-300 rounded-md p-2">
                {question.options.map((option, optIndex) => (
                  <option key={optIndex} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
            {question.type === 'file_upload' && (
              <input
                type="file"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            )}
            {question.type === 'date' && (
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            )}
            {question.type === 'matrix' && (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Row
                      </th>
                      {question.options.map((option, optIndex) => (
                        <th
                          key={optIndex}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {option}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {['Row 1', 'Row 2', 'Row 3'].map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {row}
                        </td>
                        {question.options.map((option, optIndex) => (
                          <td
                            key={optIndex}
                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                          >
                            <input
                              type="radio"
                              name={`matrix-${rowIndex}`}
                              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {question.type === 'ranking' && (
              <div className="space-y-2">
                {question.options.map((option, optIndex) => (
                  <div key={optIndex} className="flex items-center">
                    <span className="mr-2">{optIndex + 1}</span>
                    <input
                      type="text"
                      value={option}
                      className="flex-1 border border-gray-300 rounded-md p-2"
                      readOnly
                    />
                  </div>
                ))}
              </div>
            )}
            {question.type === 'slider' && (
              <input
                type="range"
                min="0"
                max="100"
                className="w-full"
              />
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default SurveyPreview;