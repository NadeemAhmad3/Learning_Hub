import React from 'react';

interface CourseCardProps {
  title: string;
  description: string;
  count: string;
  color: string;
  icon: React.ReactNode;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, count, color, icon }) => {
  return (
    <div className="flex flex-col bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer group">
      <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4 text-white text-2xl group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
        <span className="text-xs font-medium text-gray-400">{count} Lessons</span>
        <span className="text-primary font-bold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center">
          Start Learning 
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CourseCard;
