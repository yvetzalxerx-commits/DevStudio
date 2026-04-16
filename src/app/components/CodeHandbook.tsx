import { Book, Lightbulb, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function CodeHandbook() {
  const [selectedTopic, setSelectedTopic] = useState('variables');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['basics', 'loops', 'conditionals']);

  const lessonCategories = [
    {
      id: 'basics',
      name: 'BASICS',
      lessons: [
        { id: 'variables', label: 'Variables', description: 'Learn how to store and use data' },
        { id: 'arrays', label: 'Arrays', description: 'Store multiple values in one variable' }
      ]
    },
    {
      id: 'loops',
      name: 'LOOPS',
      lessons: [
        { id: 'whileloop', label: 'While Loop', description: 'Repeat code while a condition is true' },
        { id: 'forloop', label: 'For Loop', description: 'Loop with a counter' }
      ]
    },
    {
      id: 'conditionals',
      name: 'CONDITIONALS',
      lessons: [
        { id: 'statements', label: 'If Statement', description: 'Make decisions in your code' }
      ]
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const content = {
    variables: {
      title: 'Variables',
      description: 'Learn how to store and use data',
      code: [
        'let age = 25;',
        'let name = "John";',
        'const PI = 3.14159;',
        'let isStudent = true;',
        '',
        'console.log(name); // John'
      ],
      explanation: 'Variables are containers that store data values. Think of them like labeled boxes where you can put information and use it later. Each variable can have a name and a type determines what sort of data it can hold.'
    },
    arrays: {
      title: 'Arrays',
      description: 'Work with collections of data',
      code: [
        'let fruits = ["apple", "banana", "orange"];',
        'console.log(fruits[0]); // apple',
        '',
        'fruits.push("grape");',
        'console.log(fruits.length); // 4',
        'fruits.forEach(fruit => console.log(fruit));'
      ],
      explanation: 'Arrays are collections of data stored in a single variable. Each item in an array has an index (position) starting from 0. Arrays provide useful methods like push(), pop(), map(), and filter() to manipulate and iterate through data efficiently.'
    },
    whileloop: {
      title: 'While Loop',
      description: 'Repeat code while a condition is true',
      code: [
        'let count = 0;',
        '',
        'while (count < 5) {',
        '  console.log("Count: " + count);',
        '  count++;',
        '}'
      ],
      explanation: 'A while loop repeats as long as a condition is true. It checks the condition before each iteration. While loops are useful when you don\'t know exactly how many times you need to repeat, like reading data until a file ends.'
    },
    forloop: {
      title: 'For Loop',
      description: 'Loop with a counter',
      code: [
        'for (let i = 0; i < 5; i++) {',
        '  console.log("Count: " + i);',
        '}',
        '',
        'let fruits = ["apple", "banana"];',
        'for (const fruit of fruits) { console.log(fruit); }'
      ],
      explanation: 'A for loop is perfect when you know exactly how many times you want to loop. It has three parts: initialization, condition, and increment. For loops are ideal for iterating through arrays and repeating code a specific number of times.'
    },
    statements: {
      title: 'If Statement',
      description: 'Make decisions in your code',
      code: [
        'let score = 85;',
        '',
        'if (score >= 90) { console.log("A"); }',
        'else if (score >= 80) { console.log("B"); }',
        'else if (score >= 70) { console.log("C"); }',
        'else { console.log("F"); }'
      ],
      explanation: 'If statements are fundamental control structures in programming. They allow your code to execute different blocks based on specific conditions. Chain multiple if-else statements for complex decision-making. Always use clear conditions to make your code readable.'
    }
  };

  const currentContent = content[selectedTopic as keyof typeof content];

  return (
    <section id="handbook" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Book className="w-8 h-8 text-blue-500" />
          <h2 className="text-3xl font-bold text-white">Code Handbook</h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-slate-900 rounded-xl border border-slate-800 p-4 max-h-[600px] overflow-y-auto">
              <h3 className="text-white font-semibold mb-6">Lessons</h3>
              
              <div className="space-y-4">
                {lessonCategories.map((category) => (
                  <div key={category.id}>
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="w-full flex items-center justify-between mb-2 px-2 py-1 hover:opacity-80 transition-opacity"
                    >
                      <span className="text-blue-400 font-semibold text-sm">{category.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-blue-400 transition-transform ${
                          expandedCategories.includes(category.id) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {expandedCategories.includes(category.id) && (
                      <div className="space-y-2 ml-2">
                        {category.lessons.map((lesson) => (
                          <button
                            key={lesson.id}
                            onClick={() => setSelectedTopic(lesson.id)}
                            className={`w-full text-left px-3 py-3 rounded transition-colors border ${
                              selectedTopic === lesson.id
                                ? 'bg-slate-800 border-blue-500 text-white'
                                : 'bg-slate-950 border-slate-700 text-slate-300 hover:text-white hover:border-slate-600'
                            }`}
                          >
                            <div className="font-medium text-sm">{lesson.label}</div>
                            <div className="text-xs text-slate-400 mt-1">{lesson.description}</div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-slate-900 rounded-xl border border-slate-800 p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{currentContent.title}</h3>
                <p className="text-slate-400">{currentContent.description}</p>
              </div>

              <div className="bg-slate-950 rounded-lg p-6 mb-6 border border-slate-800">
                <div className="flex items-center gap-2 mb-4">
                  <div className="px-3 py-1 bg-blue-600 rounded text-white text-sm font-medium">
                    JavaScript
                  </div>
                </div>
                
                <div className="text-slate-300 font-mono text-sm space-y-2">
                  <div className="text-slate-500">// Example Code</div>
                  {currentContent.code.map((line, index) => (
                    <div key={index}>
                      {line.split(/(\b(?:let|const|function|if|else|for|while|return|console|true|false|new)\b)/g).map((part, i) => (
                        part.match(/\b(?:let|const|function|if|else|for|while|return|console|true|false|new)\b/) 
                          ? <span key={i} className="text-purple-400">{part}</span>
                          : part.match(/^".*"|^'.*'/) 
                          ? <span key={i} className="text-green-400">{part}</span>
                          : part.match(/^\d+/)
                          ? <span key={i} className="text-green-400">{part}</span>
                          : part.match(/^\/\/.*/)
                          ? <span key={i} className="text-slate-500">{part}</span>
                          : <span key={i}>{part}</span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-6">
                <div className="flex gap-3">
                  <Lightbulb className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">How it works</h4>
                    <p className="text-slate-300 text-sm">
                      {currentContent.explanation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
