import CourseCard from './CourseCard';

const courses = [
  { title: "HTML", description: "The foundation of web pages. Learn tags, attributes, and semantic layouts.", count: "35", color: "bg-[#E34F26]", icon: "📁" },
  { title: "CSS", description: "Design beautiful responsive websites using layouts, flexbox, and grid.", count: "52", color: "bg-[#1572B6]", icon: "🎨" },
  { title: "JavaScript", description: "Bring life to your web pages with industrial-grade logic and interactions.", count: "128", color: "bg-[#F7DF1E]", icon: "📝" },
  { title: "React", description: "Learn to build high-performance user interfaces with components and hooks.", count: "84", color: "bg-[#61DAFB]", icon: "⚛️" },
  { title: "Next.js", description: "The production framework for React. SSR, SSG, and API routes.", count: "65", color: "bg-black", icon: "▲" },
  { title: "TypeScript", description: "Enhance your JavaScript with static types for safer, robust development.", count: "48", color: "bg-[#3178C6]", icon: "⌨️" },
  { title: "Tailwind CSS", description: "Build modern websites quickly with utility-first CSS styling.", count: "29", color: "bg-[#06B6D4]", icon: "✨" },
  { title: "Python", description: "Dive into data science, scripting, and backend development with Python.", count: "112", color: "bg-[#3776AB]", icon: "🐍" },
  { title: "PHP", description: "Master server-side scripting for building dynamic web applications.", count: "90", color: "bg-[#777BB4]", icon: "⚙️" },
  { title: "SQL", description: "Manage and query your databases to power data-driven applications.", count: "42", color: "bg-[#4479A1]", icon: "🗄️" },
];

export default function Home() {
  return (
    <div className="p-8 md:p-12 lg:p-16 max-w-7xl mx-auto">
      <header className="mb-12 text-center sm:text-left">
        <h1 className="text-4xl md:text-5xl font-black text-secondary leading-tight mb-4 tracking-tight">
          Welcome to <span className="text-primary underline decoration-4 underline-offset-8">LearnHub</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl font-medium">
          Whether you're starting with your first line of code or mastering professional frameworks, we have the resources to help you reach your goals.
        </p>
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
      
      <footer className="mt-20 py-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm font-medium text-gray-400">
          © 2026 LearnHub. Built for developers by developers.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-xs font-bold text-gray-400 hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="text-xs font-bold text-gray-400 hover:text-primary transition-colors">Terms</a>
          <a href="#" className="text-xs font-bold text-gray-400 hover:text-primary transition-colors">Support</a>
        </div>
      </footer>
    </div>
  );
}

