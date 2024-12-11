// src/pages/Projects.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    ChartBarIcon,
    PencilIcon,
    TrashIcon,
    ShareIcon,
    FolderIcon,
    SparklesIcon,
    DocumentDuplicateIcon,
    AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline';

const CATEGORIES = [
    { id: 'customer', name: 'Customer Feedback' },
    { id: 'employee', name: 'Employee Feedback' },
    { id: 'market', name: 'Market Research' },
    { id: 'event', name: 'Event Feedback' },
    { id: 'education', name: 'Education' },
    { id: 'product', name: 'Product Testing' },
];

const Projects = () => {
    const [view, setView] = useState('grid'); // 'grid' or 'list'
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: 'Customer Satisfaction Survey',
            category: 'Customer Feedback',
            status: 'Active',
            responses: 245,
            created: '2024-02-20',
            lastModified: '2024-02-25',
            template: 'Customer Satisfaction',
            aiAssisted: true,
        },
    ]);

    const QuickActions = () => (
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <h3 className="text-lg font-medium mb-4">Quick Start</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                    <DocumentDuplicateIcon className="h-5 w-5 text-primary" />
                    <span>Use Template</span>
                </button>
                <button className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                    <SparklesIcon className="h-5 w-5 text-primary" />
                    <span>AI Assistant</span>
                </button>
                <button className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                    <PencilIcon className="h-5 w-5 text-primary" />
                    <span>Start from Scratch</span>
                </button>
            </div>
        </div>
    );

    const CategoryFilters = () => (
        <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
            {CATEGORIES.map((category) => (
                <button
                    key={category.id}
                    className="px-4 py-2 rounded-full bg-white shadow-sm hover:bg-gray-50 whitespace-nowrap"
                >
                    {category.name}
                </button>
            ))}
        </div>
    );

    const GridView = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                ${project.status === 'Active' ? 'bg-green-100 text-green-800' :
                                    project.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-gray-100 text-gray-800'}`}>
                                {project.status}
                            </span>
                            {project.aiAssisted && (
                                <SparklesIcon className="h-5 w-5 text-primary" title="AI Assisted" />
                            )}
                        </div>

                        <Link to={`/projects/${project.id}`} className="block">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">{project.title}</h3>
                            <p className="text-sm text-gray-500 mb-4">{project.category}</p>

                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <span>{project.responses} responses</span>
                                <span>Modified {new Date(project.lastModified).toLocaleDateString()}</span>
                            </div>
                        </Link>

                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="flex justify-between">
                                <div className="flex space-x-2">
                                    <button className="p-2 text-gray-400 hover:text-gray-500">
                                        <PencilIcon className="h-5 w-5" />
                                    </button>
                                    <button className="p-2 text-gray-400 hover:text-gray-500">
                                        <ShareIcon className="h-5 w-5" />
                                    </button>
                                    <button className="p-2 text-gray-400 hover:text-gray-500">
                                        <ChartBarIcon className="h-5 w-5" />
                                    </button>
                                </div>
                                <button
                                    onClick={() => handleDelete(project.id)}
                                    className="p-2 text-gray-400 hover:text-red-500"
                                >
                                    <TrashIcon className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    const ListView = () => (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="min-w-full divide-y divide-gray-200">
                {/* Table Header */}
                <div className="bg-gray-50 px-6 py-3">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-4">
                            <span className="text-sm font-medium text-gray-500">Survey Title</span>
                        </div>
                        <div className="col-span-2">
                            <span className="text-sm font-medium text-gray-500">Category</span>
                        </div>
                        <div className="col-span-1">
                            <span className="text-sm font-medium text-gray-500">Status</span>
                        </div>
                        <div className="col-span-1">
                            <span className="text-sm font-medium text-gray-500">Responses</span>
                        </div>
                        <div className="col-span-2">
                            <span className="text-sm font-medium text-gray-500">Last Modified</span>
                        </div>
                        <div className="col-span-2">
                            <span className="text-sm font-medium text-gray-500">Actions</span>
                        </div>
                    </div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-gray-200">
                    {projects.map((project) => (
                        <div key={project.id} className="px-6 py-4 hover:bg-gray-50">
                            <div className="grid grid-cols-12 gap-4 items-center">
                                <div className="col-span-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="flex-shrink-0">
                                            {project.aiAssisted ? (
                                                <SparklesIcon className="h-5 w-5 text-primary" />
                                            ) : (
                                                <DocumentIcon className="h-5 w-5 text-gray-400" />
                                            )}
                                        </div>
                                        <div>
                                            <Link
                                                to={`/projects/${project.id}`}
                                                className="text-sm font-medium text-gray-900 hover:text-primary"
                                            >
                                                {project.title}
                                            </Link>
                                            {project.template && (
                                                <p className="text-xs text-gray-500">
                                                    Based on: {project.template}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <span className="text-sm text-gray-500">{project.category}</span>
                                </div>
                                <div className="col-span-1">
                                    <span
                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${project.status === 'Active'
                                                ? 'bg-green-100 text-green-800'
                                                : project.status === 'Draft'
                                                    ? 'bg-yellow-100 text-yellow-800'
                                                    : 'bg-gray-100 text-gray-800'
                                            }`}
                                    >
                                        {project.status}
                                    </span>
                                </div>
                                <div className="col-span-1">
                                    <span className="text-sm text-gray-500">
                                        {project.responses}
                                    </span>
                                </div>
                                <div className="col-span-2">
                                    <span className="text-sm text-gray-500">
                                        {new Date(project.lastModified).toLocaleDateString()}
                                    </span>
                                </div>
                                <div className="col-span-2">
                                    <div className="flex space-x-2">
                                        <button
                                            className="p-2 text-gray-400 hover:text-gray-500"
                                            title="Edit"
                                        >
                                            <PencilIcon className="h-5 w-5" />
                                        </button>
                                        <button
                                            className="p-2 text-gray-400 hover:text-gray-500"
                                            title="Share"
                                        >
                                            <ShareIcon className="h-5 w-5" />
                                        </button>
                                        <button
                                            className="p-2 text-gray-400 hover:text-gray-500"
                                            title="Analytics"
                                        >
                                            <ChartBarIcon className="h-5 w-5" />
                                        </button>
                                        <button
                                            className="p-2 text-gray-400 hover:text-red-500"
                                            title="Delete"
                                            onClick={() => handleDelete(project.id)}
                                        >
                                            <TrashIcon className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">My Surveys</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Create, manage, and analyze your surveys
                    </p>
                </div>
                <div className="flex space-x-4">
                    <button
                        onClick={() => setView(view === 'grid' ? 'list' : 'grid')}
                        className="p-2 text-gray-400 hover:text-gray-500"
                    >
                        <AdjustmentsHorizontalIcon className="h-5 w-5" />
                    </button>
                    <Link
                        to="/create-survey"
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark"
                    >
                        Create Survey
                    </Link>
                </div>
            </div>

            {/* Quick Actions */}
            <QuickActions />

            {/* Category Filters */}
            <CategoryFilters />

            {/* Main Content */}
            <div className="space-y-6">
                {/* AI Assistant Banner */}
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6">
                    <div className="flex items-center space-x-4">
                        <SparklesIcon className="h-8 w-8 text-primary" />
                        <div>
                            <h3 className="text-lg font-medium text-gray-900">
                                Try SurveyMonkey Genius
                            </h3>
                            <p className="text-sm text-gray-600">
                                Create better surveys and spot insights quickly with built-in AI
                            </p>
                        </div>
                        <button className="ml-auto px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
                            Try Now
                        </button>
                    </div>
                </div>

                {/* Projects Grid/List */}
                {view === 'grid' ? <GridView /> : <ListView />}
            </div>
        </div>
    );
};

export default Projects;