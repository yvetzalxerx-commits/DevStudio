import { Book, Lightbulb, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function CodeHandbook() {
  const [selectedTopic, setSelectedTopic] = useState('variables');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['basics']);
  const [activeLanguage, setActiveLanguage] = useState<'js' | 'html' | 'css'>('js');

  // Map language to its category IDs
  const languageCategoryMap: Record<string, string[]> = {
    js: ['basics', 'strings', 'loops', 'conditionals', 'functions', 'objects', 'dom', 'advanced'],
    html: ['htmlbasics', 'htmlforms', 'htmltables'],
    css: ['cssselectors', 'cssbox', 'csslayout', 'cssadvanced'],
  };

  const lessonCategories = [
    {
      id: 'basics',
      name: 'BASICS',
      lessons: [
        { id: 'variables', label: 'Variables', description: 'Learn how to store and use data' },
        { id: 'arrays', label: 'Arrays', description: 'Store multiple values in one variable' },
        { id: 'datatypes', label: 'Data Types', description: 'Strings, numbers, booleans & more' },
        { id: 'operators', label: 'Operators', description: 'Math, comparison & logical operators' }
      ]
    },
    {
      id: 'strings',
      name: 'STRINGS',
      lessons: [
        { id: 'strings', label: 'String Basics', description: 'Working with text in JavaScript' },
        { id: 'stringmethods', label: 'String Methods', description: 'Manipulate and transform strings' },
        { id: 'template', label: 'Template Literals', description: 'Modern string interpolation' }
      ]
    },
    {
      id: 'htmlbasics',
      name: 'BASICS',
      lessons: [
        { id: 'htmlboilerplate', label: 'The Boilerplate', description: '<!DOCTYPE, html, head, body' },
        { id: 'htmlheadings', label: 'Headings & Text', description: 'h1-h6, paragraphs, and text structure' },
        { id: 'htmllinksimages', label: 'Links & Images', description: 'Anchor and image elements' }
      ]
    },
    {
      id: 'htmlforms',
      name: 'FORMS',
      lessons: [
        { id: 'htmltextinputs', label: 'Text Inputs', description: 'text, email, and password inputs' },
        { id: 'htmlselections', label: 'Selections', description: 'radio and checkbox controls' },
        { id: 'htmldropdowns', label: 'Dropdowns', description: 'select and option menus' }
      ]
    },
    {
      id: 'htmltables',
      name: 'TABLES',
      lessons: [
        { id: 'htmltablestructure', label: 'Table Structure', description: 'table, tr, td, th layout' },
        { id: 'htmllists', label: 'Lists', description: 'ul, ol, li list types' }
      ]
    },
    {
      id: 'cssselectors',
      name: 'SELECTORS',
      lessons: [
        { id: 'cssbasicselectors', label: 'Basic Selectors', description: 'Element, class, and ID selectors' },
        { id: 'csscombinators', label: 'Combinators', description: 'Descendant and child selectors' },
        { id: 'csspseudoclasses', label: 'Pseudo-classes', description: ':hover and :focus states' }
      ]
    },
    {
      id: 'cssbox',
      name: 'BOX MODEL',
      lessons: [
        { id: 'cssmarginpadding', label: 'Margin & Padding', description: 'Control external and internal spacing' },
        { id: 'cssbordersoutlines', label: 'Borders & Outlines', description: 'Border styling and outlines' }
      ]
    },
    {
      id: 'csslayout',
      name: 'LAYOUT',
      lessons: [
        { id: 'cssflexboxbasics', label: 'Flexbox Basics', description: 'display, justify, align' },
        { id: 'cssgridbasics', label: 'Grid Basics', description: 'template-columns and gaps' }
      ]
    },
    {
      id: 'cssadvanced',
      name: 'ADVANCED',
      lessons: [
        { id: 'cssresponsive', label: 'Responsive Design', description: 'Media queries & mobile-first' }
      ]
    },
    {
      id: 'loops',
      name: 'LOOPS',
      lessons: [
        { id: 'whileloop', label: 'While Loop', description: 'Repeat code while a condition is true' },
        { id: 'forloop', label: 'For Loop', description: 'Loop with a counter' },
        { id: 'dowhile', label: 'Do While Loop', description: 'Execute at least once then repeat' }
      ]
    },
    {
      id: 'conditionals',
      name: 'CONDITIONALS',
      lessons: [
        { id: 'statements', label: 'If Statement', description: 'Make decisions in your code' },
        { id: 'switch', label: 'Switch Statement', description: 'Multiple condition branching' },
        { id: 'ternary', label: 'Ternary Operator', description: 'Shorthand if-else expression' }
      ]
    },
    {
      id: 'functions',
      name: 'FUNCTIONS',
      lessons: [
        { id: 'functions', label: 'Functions', description: 'Reusable blocks of code' },
        { id: 'arrow', label: 'Arrow Functions', description: 'Modern concise function syntax' },
        { id: 'parameters', label: 'Parameters & Return', description: 'Pass data in and get results out' },
        { id: 'scope', label: 'Scope & Closures', description: 'Variable visibility & closures' }
      ]
    },
    {
      id: 'objects',
      name: 'OBJECTS & JSON',
      lessons: [
        { id: 'objects', label: 'Objects', description: 'Key-value pair data structures' },
        { id: 'objectmethods', label: 'Object Methods', description: 'Functions inside objects' },
        { id: 'json', label: 'JSON', description: 'JavaScript Object Notation' },
        { id: 'destructure', label: 'Destructuring', description: 'Unpack values from objects/arrays' }
      ]
    },
    {
      id: 'dom',
      name: 'DOM MANIPULATION',
      lessons: [
        { id: 'domselectors', label: 'DOM Selectors', description: 'Find HTML elements' },
        { id: 'domevents', label: 'Events', description: 'Respond to user interactions' },
        { id: 'dommodify', label: 'Modifying Elements', description: 'Change content, styles & attributes' },
        { id: 'domtraverse', label: 'Traversing DOM', description: 'Navigate between elements' }
      ]
    },
    {
      id: 'advanced',
      name: 'ADVANCED',
      lessons: [
        { id: 'spread', label: 'Spread & Rest', description: 'Expand & collect values' },
        { id: 'mapfilter', label: 'Map, Filter & Reduce', description: 'Powerful array transformations' },
        { id: 'promises', label: 'Promises & Async', description: 'Handle asynchronous operations' },
        { id: 'classes', label: 'Classes', description: 'Object-oriented JavaScript' }
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

  const getLanguageBadge = (topicId: string): string => {
    if (topicId.startsWith('html')) return 'HTML';
    if (topicId.startsWith('css')) return 'CSS';
    return 'JavaScript';
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
      explanation: 'Variables are containers that store data values. Think of them like labeled boxes where you can put information and use it later. let declares a variable that can be reassigned, while const creates a constant that cannot change. Always use const by default and let only when you need to reassign.'
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
      explanation: 'Arrays are ordered collections of data stored in a single variable. Each item has an index starting from 0. Arrays come with powerful built-in methods: push() adds to the end, pop() removes from the end, shift() removes from the start, map() transforms each element, and filter() selects matching elements.'
    },
    datatypes: {
      title: 'Data Types',
      description: 'Strings, numbers, booleans & more',
      code: [
        'let name = "Alice";        // string',
        'let age = 30;              // number',
        'let isLoggedIn = false;    // boolean',
        'let colors = ["red", "blue"]; // object (array)',
        'let user = { name: "Bob" };   // object',
        'let nothing = null;        // null',
        'let notDefined;            // undefined',
        '',
        'console.log(typeof name);  // "string"'
      ],
      explanation: 'JavaScript has several primitive data types: string (text), number (integers and decimals), boolean (true/false), null (intentional empty value), and undefined (variable declared but not assigned). Objects and arrays are reference types. Use typeof to check a value\'s type at runtime.'
    },
    operators: {
      title: 'Operators',
      description: 'Math, comparison & logical operators',
      code: [
        '// Arithmetic',
        'let sum = 5 + 3;      // 8',
        'let power = 2 ** 3;   // 8 (exponent)',
        '',
        '// Comparison',
        'console.log(5 === "5"); // false (strict)',
        'console.log(5 == "5");  // true (loose)',
        '',
        '// Logical',
        'let a = true, b = false;',
        'console.log(a && b); // false (AND)',
        'console.log(a || b); // true  (OR)',
        'console.log(!a);     // false (NOT)'
      ],
      explanation: 'Operators let you perform operations on values. Arithmetic operators (+, -, *, /, **) handle math. Comparison operators (===, !==, >, <) compare values — always use === (strict equality) instead of == to avoid type coercion bugs. Logical operators (&&, ||, !) combine boolean expressions.'
    },
    strings: {
      title: 'String Basics',
      description: 'Working with text in JavaScript',
      code: [
        'let greeting = "Hello, World!";',
        'let single = \'Single quotes work too\';',
        '',
        '// Escape characters',
        'let quote = "She said \\"Hi!\\"";',
        '',
        '// String length',
        'console.log(greeting.length); // 13',
        '',
        '// Access characters',
        'console.log(greeting[0]);     // "H"',
        'console.log(greeting.charAt(4)); // "o"'
      ],
      explanation: 'Strings represent text and can be written with double quotes, single quotes, or backticks. Strings are immutable — you cannot change a character directly, but you can create new strings. The length property gives the number of characters, and bracket notation [] accesses individual characters starting at index 0.'
    },
    stringmethods: {
      title: 'String Methods',
      description: 'Manipulate and transform strings',
      code: [
        'let text = "  JavaScript is Awesome!  ";',
        '',
        'console.log(text.toLowerCase()); // "  javascript is awesome!  "',
        'console.log(text.toUpperCase()); // "  JAVASCRIPT IS AWESOME!  "',
        'console.log(text.trim());        // "JavaScript is Awesome!"',
        'console.log(text.includes("Java")); // true',
        'console.log(text.slice(2, 12));    // "JavaScript"',
        'console.log("a,b,c".split(","));   // ["a", "b", "c"]',
        'console.log("Hello".replace("l", "x")); // "Hexlo"'
      ],
      explanation: 'Strings have many built-in methods for manipulation. toLowerCase()/toUpperCase() change case, trim() removes whitespace from both ends, includes() checks if a substring exists, slice() extracts a portion, split() converts a string to an array, and replace() swaps text. Most string methods return a new string without modifying the original.'
    },
    template: {
      title: 'Template Literals',
      description: 'Modern string interpolation',
      code: [
        'let name = "Alice";',
        'let age = 30;',
        '',
        '// Template literals use backticks',
        'let message = `Hello, ${name}!`;',
        'console.log(message); // "Hello, Alice!"',
        '',
        '// Multi-line strings',
        'let html = `',
        '  <div>',
        '    <h1>${name}</h1>',
        '    <p>Age: ${age}</p>',
        '  </div>',
        '`;',
        '',
        '// Expressions inside ${}',
        `console.log(\`Sum: \${2 + 3}\`); // "Sum: 5"`
      ],
      explanation: 'Template literals use backticks (`) instead of quotes. They support string interpolation with ${expression} syntax, allowing you to embed variables and expressions directly. They also preserve line breaks, making multi-line strings much cleaner than concatenation with +.'
    },
    // HTML lessons
    htmlboilerplate: {
      title: 'The Boilerplate',
      description: '<!DOCTYPE, html, head, body',
      code: [
        '<!DOCTYPE html>',
        '<html lang="en">',
        '<head>',
        '  <meta charset="UTF-8">',
        '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
        '  <title>My Website</title>',
        '</head>',
        '<body>',
        '  <h1>Welcome to the page</h1>',
        '  <p>This is the starting structure for an HTML document.</p>',
        '</body>',
        '</html>'
      ],
      explanation: 'Every HTML page begins with <!DOCTYPE html> and wraps content inside <html>. The <head> stores metadata like charset, viewport settings, and title, while the <body> contains visible content. This basic structure is the foundation for all HTML documents.'
    },
    htmlheadings: {
      title: 'Headings & Text',
      description: 'h1-h6, paragraphs, and text structure',
      code: [
        '<h1>Main Heading</h1>',
        '<h2>Section Heading</h2>',
        '<h3>Subsection</h3>',
        '<p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p>',
        '<p>Use headings in order to create a content hierarchy.</p>'
      ],
      explanation: 'Headings (<h1> through <h6>) define content hierarchy and structure. Paragraphs (<p>) hold regular text. Use heading levels in order to make content easier to read and accessible for screen readers.'
    },
    htmllinksimages: {
      title: 'Links & Images',
      description: 'Anchor and image elements',
      code: [
        '<a href="https://example.com">Visit Example</a>',
        '<a href="#section">Jump to Section</a>',
        '<img src="photo.jpg" alt="A descriptive text" width="300">'
      ],
      explanation: '<a> creates hyperlinks that navigate to another page or section. href specifies the destination. <img> embeds images with src for the file path and alt text for accessibility. Always provide descriptive alt text so all users understand the image content.'
    },
    htmltextinputs: {
      title: 'Text Inputs',
      description: 'text, email, and password inputs',
      code: [
        '<label for="name">Name:</label>',
        '<input type="text" id="name" name="name">',
        '',
        '<label for="email">Email:</label>',
        '<input type="email" id="email" name="email">',
        '',
        '<label for="password">Password:</label>',
        '<input type="password" id="password" name="password">'
      ],
      explanation: 'Text-based input fields collect user information. type="text" accepts general text, type="email" validates email formatting, and type="password" hides typed characters. Labels improve accessibility by linking text to the input field.'
    },
    htmlselections: {
      title: 'Selections',
      description: 'radio and checkbox controls',
      code: [
        '<fieldset>',
        '  <legend>Choose a plan:</legend>',
        '  <label><input type="radio" name="plan" value="basic"> Basic</label>',
        '  <label><input type="radio" name="plan" value="pro"> Pro</label>',
        '</fieldset>',
        '',
        '<label><input type="checkbox" name="subscribe" value="newsletter"> Subscribe to updates</label>'
      ],
      explanation: 'Radio buttons let users choose one option from a group; all radios share the same name. Checkboxes allow multiple selections. Grouping related inputs with a fieldset and legend improves usability and accessibility.'
    },
    htmldropdowns: {
      title: 'Dropdowns',
      description: 'select and option menus',
      code: [
        '<label for="country">Country:</label>',
        '<select id="country" name="country">',
        '  <option value="us">United States</option>',
        '  <option value="uk">United Kingdom</option>',
        '  <option value="ca">Canada</option>',
        '</select>'
      ],
      explanation: '<select> creates a dropdown menu and <option> defines each choice. The selected option is submitted as form data. Use a label with a matching id for better accessibility.'
    },
    htmltablestructure: {
      title: 'Table Structure',
      description: 'table, tr, td, th layout',
      code: [
        '<table>',
        '  <thead>',
        '    <tr>',
        '      <th>Name</th>',
        '      <th>Age</th>',
        '      <th>City</th>',
        '    </tr>',
        '  </thead>',
        '  <tbody>',
        '    <tr>',
        '      <td>Alice</td>',
        '      <td>30</td>',
        '      <td>NYC</td>',
        '    </tr>',
        '    <tr>',
        '      <td>Bob</td>',
        '      <td>25</td>',
        '      <td>LA</td>',
        '    </tr>',
        '  </tbody>',
        '</table>'
      ],
      explanation: 'Tables organize tabular data. <table> wraps the whole table, <tr> defines rows, <th> defines header cells, and <td> defines data cells. Use <thead> and <tbody> to separate headings from data rows.'
    },
    htmllists: {
      title: 'Lists',
      description: 'ul, ol, li list types',
      code: [
        '<ul>',
        '  <li>Apples</li>',
        '  <li>Bananas</li>',
        '  <li>Oranges</li>',
        '</ul>',
        '',
        '<ol>',
        '  <li>First step</li>',
        '  <li>Second step</li>',
        '  <li>Third step</li>',
        '</ol>'
      ],
      explanation: '<ul> creates an unordered list with bullets, while <ol> creates an ordered list with numbers. Each list item is wrapped in <li>. Lists are useful for grouping related content semantically.'
    },
    cssbasicselectors: {
      title: 'Basic Selectors',
      description: 'Element, class, and ID selectors',
      code: [
        'h1 { color: blue; }',
        '.card { background: white; }',
        '#main-header { padding: 16px; }'
      ],
      explanation: 'Basic CSS selectors target elements by tag name, class, or ID. Element selectors match all tags of that type, class selectors start with a period, and ID selectors start with a hash. IDs should be unique on a page, while classes can be reused.'
    },
    csscombinators: {
      title: 'Combinators',
      description: 'Descendant and child selectors',
      code: [
        '/* Descendant selector */',
        'article p { color: gray; }',
        '',
        '/* Child selector */',
        'nav > a { margin-right: 10px; }'
      ],
      explanation: 'Combinator selectors target elements based on their relationship in the document tree. Descendant selectors match any descendant, while child selectors target only direct children. These selectors help style nested content without adding extra classes.'
    },
    csspseudoclasses: {
      title: 'Pseudo-classes',
      description: ':hover and :focus states',
      code: [
        'a:hover { color: red; }',
        'button:focus { outline: 2px solid blue; }'
      ],
      explanation: 'Pseudo-classes style elements in special states. :hover applies when the pointer hovers over an element, and :focus applies when an element receives keyboard focus. Use them to improve interactivity and accessibility.'
    },
    cssmarginpadding: {
      title: 'Margin & Padding',
      description: 'Control external and internal spacing',
      code: [
        '.card {',
        '  margin: 20px;',
        '  padding: 16px;',
        '}',
        '',
        '.box {',
        '  margin: 10px 0;',
        '  padding: 12px 24px;',
        '}'
      ],
      explanation: 'Margin adds space outside an element, separating it from neighbors. Padding adds space inside an element, between its border and content. Use margin for layout spacing and padding for breathing room around content.'
    },
    cssbordersoutlines: {
      title: 'Borders & Outlines',
      description: 'Border styling and outlines',
      code: [
        '.box {',
        '  border: 2px solid black;',
        '  border-radius: 8px;',
        '}',
        '',
        'button:focus {',
        '  outline: 3px solid royalblue;',
        '  outline-offset: 2px;',
        '}'
      ],
      explanation: 'Borders wrap an element and are part of the box model, while outlines sit outside the border and do not affect layout. border-radius rounds corners, and outline-offset moves the outline away from the element for better focus styling.'
    },
    cssflexboxbasics: {
      title: 'Flexbox Basics',
      description: 'display, justify, align',
      code: [
        '.container {',
        '  display: flex;',
        '  justify-content: center;',
        '  align-items: center;',
        '}',
        '',
        '.item {',
        '  flex: 1;',
        '}'
      ],
      explanation: 'Flexbox starts with display: flex on the container. justify-content aligns children along the main axis, and align-items aligns them along the cross axis. This makes it easy to center and distribute items in a row or column.'
    },
    cssgridbasics: {
      title: 'Grid Basics',
      description: 'template-columns and gaps',
      code: [
        '.grid {',
        '  display: grid;',
        '  grid-template-columns: repeat(3, 1fr);',
        '  gap: 16px;',
        '}',
        '',
        '.item {',
        '  background: #f0f0f0;',
        '  padding: 16px;',
        '}'
      ],
      explanation: 'CSS Grid layouts define rows and columns together. grid-template-columns sets the column sizes, and gap adds consistent spacing between items. Grid is ideal for card layouts, dashboards, and overall page structure.'
    },
    cssresponsive: {
      title: 'Responsive Design',
      description: 'Media queries & mobile-first',
      code: [
        '/* Mobile-first base styles */',
        '.container {',
        '  display: grid;',
        '  grid-template-columns: 1fr;   /* single column on mobile */',
        '  gap: 16px;',
        '  padding: 16px;',
        '}',
        '',
        '/* Tablet: 768px+ */',
        '@media (min-width: 768px) {',
        '  .container {',
        '    grid-template-columns: repeat(2, 1fr);',
        '    padding: 24px;',
        '  }',
        '}',
        '',
        '/* Desktop: 1024px+ */',
        '@media (min-width: 1024px) {',
        '  .container {',
        '    grid-template-columns: repeat(3, 1fr);',
        '    max-width: 1200px;',
        '    margin: 0 auto;',
        '    padding: 32px;',
        '  }',
        '}',
        '',
        '/* Responsive typography */',
        'h1 { font-size: 1.5rem; }',
        '@media (min-width: 768px) { h1 { font-size: 2rem; } }',
        '@media (min-width: 1024px) { h1 { font-size: 2.5rem; } }',
        '',
        '/* Responsive images */',
        'img { max-width: 100%; height: auto; }'
      ],
      explanation: 'Responsive design ensures websites work on all screen sizes. The mobile-first approach starts with base styles for small screens, then uses min-width media queries to add more complex layouts for larger screens. Common breakpoints: 768px (tablet) and 1024px+ (desktop). Use relative units like rem (font-size relative to root), %, and vw (viewport width) instead of fixed pixels. max-width: 100% on images prevents overflow.'
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
      explanation: 'A while loop repeats as long as a condition is true. It checks the condition before each iteration. While loops are useful when you don\'t know exactly how many times you need to repeat, like reading data until a file ends. Be careful not to create infinite loops — always update the condition variable inside the loop.'
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
      explanation: 'A for loop is perfect when you know exactly how many times you want to loop. It has three parts: initialization (let i = 0), condition (i < 5), and increment (i++). The for...of loop is a modern variant that iterates directly over array values, making it cleaner for looping through collections.'
    },
    dowhile: {
      title: 'Do While Loop',
      description: 'Execute at least once then repeat',
      code: [
        'let number;',
        '',
        'do {',
        '  number = Math.floor(Math.random() * 10);',
        '  console.log("Rolled: " + number);',
        '} while (number !== 7);',
        '',
        'console.log("Lucky 7!");'
      ],
      explanation: 'A do...while loop is similar to while, but the condition is checked after the loop body executes. This guarantees the code runs at least once. It\'s useful when you need to perform an action before checking if you should continue, like prompting a user for input until valid.'
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
    },
    switch: {
      title: 'Switch Statement',
      description: 'Multiple condition branching',
      code: [
        'let day = 3;',
        'let dayName;',
        '',
        'switch (day) {',
        '  case 1: dayName = "Monday"; break;',
        '  case 2: dayName = "Tuesday"; break;',
        '  case 3: dayName = "Wednesday"; break;',
        '  case 4: dayName = "Thursday"; break;',
        '  case 5: dayName = "Friday"; break;',
        '  default: dayName = "Weekend";',
        '}',
        '',
        'console.log(dayName); // "Wednesday"'
      ],
      explanation: 'A switch statement tests a value against multiple cases. It\'s cleaner than many if-else chains when comparing the same variable. Each case must end with break to prevent fall-through to the next case. The default case runs when no other case matches. Without break, execution continues into the next case (fall-through).'
    },
    ternary: {
      title: 'Ternary Operator',
      description: 'Shorthand if-else expression',
      code: [
        'let age = 20;',
        '',
        '// Traditional if-else',
        'let status;',
        'if (age >= 18) { status = "Adult"; }',
        'else { status = "Minor"; }',
        '',
        '// Ternary (shorthand)',
        'let result = age >= 18 ? "Adult" : "Minor";',
        '',
        '// Nested ternary (use sparingly)',
        'let grade = score >= 90 ? "A"',
        '         : score >= 80 ? "B"',
        '         : "C";'
      ],
      explanation: 'The ternary operator is a concise way to write if-else statements as an expression. Syntax: condition ? valueIfTrue : valueIfFalse. Unlike if-else, the ternary returns a value, so you can assign the result to a variable. Avoid nesting ternaries too deeply as it hurts readability.'
    },
    functions: {
      title: 'Functions',
      description: 'Reusable blocks of code',
      code: [
        '// Function declaration',
        'function greet(name) {',
        '  return "Hello, " + name + "!";',
        '}',
        '',
        'console.log(greet("Alice")); // "Hello, Alice!"',
        '',
        '// Default parameters',
        'function multiply(a, b = 1) {',
        '  return a * b;',
        '}',
        '',
        'console.log(multiply(5));    // 5',
        'console.log(multiply(5, 3)); // 15'
      ],
      explanation: 'Functions are reusable blocks of code that take inputs (parameters), perform actions, and optionally return a value. Function declarations are hoisted — they can be called before they appear in the code. Parameters can have default values that are used when the argument is omitted. The return statement sends a value back to the caller.'
    },
    arrow: {
      title: 'Arrow Functions',
      description: 'Modern concise function syntax',
      code: [
        '// Traditional function',
        'function add(a, b) {',
        '  return a + b;',
        '}',
        '',
        '// Arrow function (equivalent)',
        'const addArrow = (a, b) => a + b;',
        '',
        '// Single parameter (no parentheses needed)',
        'const double = n => n * 2;',
        '',
        '// No parameters',
        'const random = () => Math.random();',
        '',
        '// Multi-line body needs curly braces & return',
        'const sum = (a, b) => {',
        '  const result = a + b;',
        '  return result;',
        '};'
      ],
      explanation: 'Arrow functions provide a shorter syntax for writing functions. When the body is a single expression, the braces and return keyword are optional (implicit return). Arrow functions do NOT have their own this binding — they inherit this from the surrounding scope, making them ideal for callbacks and array methods.'
    },
    parameters: {
      title: 'Parameters & Return',
      description: 'Pass data in and get results out',
      code: [
        '// Rest parameters (...args)',
        'function sumAll(...numbers) {',
        '  return numbers.reduce((total, n) => total + n, 0);',
        '}',
        'console.log(sumAll(1, 2, 3, 4)); // 10',
        '',
        '// Return early',
        'function divide(a, b) {',
        '  if (b === 0) return "Cannot divide by zero";',
        '  return a / b;',
        '}',
        '',
        '// Multiple return paths',
        'function classify(age) {',
        '  if (age < 13) return "Child";',
        '  if (age < 20) return "Teen";',
        '  return "Adult";',
        '}'
      ],
      explanation: 'Functions receive data through parameters and send data back with return. The rest parameter (...numbers) collects remaining arguments into an array. A function stops executing as soon as it hits a return statement. You can have multiple return statements for different conditions, but only one executes.'
    },
    scope: {
      title: 'Scope & Closures',
      description: 'Variable visibility & closures',
      code: [
        '// Global scope',
        'let globalVar = "I am global";',
        '',
        'function outer() {',
        '  let outerVar = "I am outer";',
        '',
        '  function inner() {',
        '    let innerVar = "I am inner";',
        '    console.log(globalVar); // accessible',
        '    console.log(outerVar);  // accessible',
        '  }',
        '',
        '  inner();',
        '  console.log(innerVar); // Error! Not accessible',
        '}',
        '',
        '// Closure example',
        'function counter() {',
        '  let count = 0;',
        '  return () => ++count;',
        '}',
        'const inc = counter();',
        'console.log(inc()); // 1',
        'console.log(inc()); // 2'
      ],
      explanation: 'Scope determines where variables are accessible. let and const are block-scoped (inside {}) while var is function-scoped. Inner functions can access outer variables — this is called lexical scoping. A closure happens when a function remembers its outer variables even after the outer function has returned, enabling powerful patterns like private state.'
    },
    objects: {
      title: 'Objects',
      description: 'Key-value pair data structures',
      code: [
        '// Object literal',
        'const user = {',
        '  name: "Alice",',
        '  age: 30,',
        '  email: "alice@example.com"',
        '};',
        '',
        '// Access properties',
        'console.log(user.name);    // "Alice" (dot notation)',
        'console.log(user["age"]); // 30 (bracket notation)',
        '',
        '// Add or update properties',
        'user.city = "New York";',
        'user.age = 31;',
        '',
        '// Dynamic keys',
        'const key = "email";',
        'console.log(user[key]);'
      ],
      explanation: 'Objects store data as key-value pairs. Keys are strings (or Symbols), values can be any type including nested objects and functions. Use dot notation for known property names and bracket notation for dynamic or special keys. Objects are the foundation of JSON and almost everything in JavaScript is an object under the hood.'
    },
    objectmethods: {
      title: 'Object Methods',
      description: 'Functions inside objects',
      code: [
        'const calculator = {',
        '  value: 0,',
        '',
        '  // Method shorthand',
        '  add(n) { this.value += n; }',
        '',
        '  subtract(n) { this.value -= n; }',
        '',
        '  // Arrow function as method (no own this)',
        '  getValue: () => this.value,',
        '',
        '  // Returning this for chaining',
        '  reset() {',
        '    this.value = 0;',
        '    return this;',
        '  }',
        '};',
        '',
        'calculator.add(10).subtract(3);',
        'console.log(calculator.value); // 7'
      ],
      explanation: 'Object methods are functions stored as property values. The method shorthand syntax (methodName() {}) is cleaner than function expressions. Inside a method, this refers to the object the method was called on. Returning this from methods enables method chaining (calling multiple methods in sequence). Arrow functions do not have their own this binding.'
    },
    json: {
      title: 'JSON',
      description: 'JavaScript Object Notation',
      code: [
        '// JavaScript object',
        'const user = {',
        '  name: "Alice",',
        '  age: 30,',
        '  hobbies: ["reading", "coding"]',
        '};',
        '',
        '// Convert to JSON string',
        'const jsonString = JSON.stringify(user);',
        'console.log(jsonString);',
        '// {"name":"Alice","age":30,"hobbies":["reading","coding"]}',
        '',
        '// Parse JSON string back to object',
        'const parsed = JSON.parse(jsonString);',
        'console.log(parsed.name); // "Alice"'
      ],
      explanation: 'JSON (JavaScript Object Notation) is a lightweight data interchange format. JSON.stringify() converts a JavaScript object to a JSON string for sending to APIs or storing. JSON.parse() converts a JSON string back to a JavaScript object. JSON keys and string values must use double quotes. JSON does not support functions, undefined, or Symbols.'
    },
    destructure: {
      title: 'Destructuring',
      description: 'Unpack values from objects/arrays',
      code: [
        '// Object destructuring',
        'const user = { name: "Alice", age: 30, city: "NYC" };',
        'const { name, age } = user;',
        'console.log(name); // "Alice"',
        '',
        '// Rename variables',
        'const { name: userName } = user;',
        '',
        '// Array destructuring',
        'const colors = ["red", "green", "blue"];',
        'const [first, second] = colors;',
        'console.log(first); // "red"',
        '',
        '// Skip items with commas',
        'const [,, third] = colors;',
        'console.log(third); // "blue"',
        '',
        '// Default values',
        'const [a = 1, b = 2] = [10];',
        'console.log(a); // 10',
        'console.log(b); // 2'
      ],
      explanation: 'Destructuring allows you to unpack values from objects or arrays into distinct variables. For objects, variable names must match property names (use colon to rename). For arrays, variable names can be anything and positions match indices. Use commas to skip elements and = to provide default values for missing ones.'
    },
    domselectors: {
      title: 'DOM Selectors',
      description: 'Find HTML elements',
      code: [
        '// By ID',
        'const header = document.getElementById("header");',
        '',
        '// By class name (returns HTMLCollection)',
        'const cards = document.getElementsByClassName("card");',
        '',
        '// By tag name',
        'const paragraphs = document.getElementsByTagName("p");',
        '',
        '// CSS selector (single)',
        'const firstBtn = document.querySelector(".btn");',
        '',
        '// CSS selector (all matches)',
        'const allBtns = document.querySelectorAll(".btn");',
        'allBtns.forEach(btn => console.log(btn));'
      ],
      explanation: 'DOM selectors let you find HTML elements to manipulate. getElementById is fastest for single elements. querySelector and querySelectorAll use CSS selector syntax (classes with . and IDs with #) and are the most flexible. querySelectorAll returns a static NodeList that supports forEach, unlike getElementsByClassName which returns a live HTMLCollection.'
    },
    domevents: {
      title: 'Events',
      description: 'Respond to user interactions',
      code: [
        '// Click event',
        'const button = document.querySelector("button");',
        'button.addEventListener("click", () => {',
        '  console.log("Button clicked!");',
        '});',
        '',
        '// Mouse events',
        'element.addEventListener("mouseenter", () => {',
        '  element.style.background = "yellow";',
        '});',
        '',
        '// Keyboard events',
        'document.addEventListener("keydown", (e) => {',
        '  console.log(`Key pressed: ${e.key}`);',
        '});',
        '',
        '// Form events',
        'form.addEventListener("submit", (e) => {',
        '  e.preventDefault(); // Stop page reload',
        '  console.log("Form submitted");',
        '});'
      ],
      explanation: 'Events let your code respond to user interactions like clicks, key presses, mouse movements, and form submissions. addEventListener attaches a handler to an element. The event object (e) contains details like which key was pressed (e.key) or which element was clicked (e.target). Use e.preventDefault() to stop default browser behavior like form submission reloading the page.'
    },
    dommodify: {
      title: 'Modifying Elements',
      description: 'Change content, styles & attributes',
      code: [
        'const element = document.querySelector(".myDiv");',
        '',
        '// Change text content',
        'element.textContent = "New text";',
        '',
        '// Change HTML content',
        'element.innerHTML = "<strong>Bold text</strong>";',
        '',
        '// Change styles',
        'element.style.color = "red";',
        'element.style.fontSize = "20px";',
        '',
        '// Change attributes',
        'const img = document.querySelector("img");',
        'img.src = "photo.jpg";',
        'img.alt = "A photo";',
        '',
        '// Toggle classes',
        'element.classList.add("active");',
        'element.classList.remove("hidden");',
        'element.classList.toggle("visible");'
      ],
      explanation: 'You can dynamically change elements after finding them. textContent sets text safely (no HTML parsing), while innerHTML parses HTML tags. The style property lets you set CSS properties (use camelCase like fontSize instead of font-size). classList provides methods to add, remove, toggle, and check CSS classes for styling.'
    },
    domtraverse: {
      title: 'Traversing DOM',
      description: 'Navigate between elements',
      code: [
        'const element = document.querySelector(".card");',
        '',
        '// Parent',
        'const parent = element.parentElement;',
        '',
        '// Children',
        'const children = element.children;     // HTMLCollection',
        'const firstChild = element.firstElementChild;',
        'const lastChild  = element.lastElementChild;',
        '',
        '// Siblings',
        'const prev = element.previousElementSibling;',
        'const next = element.nextElementSibling;',
        '',
        '// Closest ancestor matching selector',
        'const container = element.closest(".container");',
        '',
        '// Check if contains',
        'const isInside = parent.contains(element); // true'
      ],
      explanation: 'DOM traversal lets you navigate the document tree between elements. parentElement goes up one level, children gets direct children, and nextElementSibling/previousElementSibling move sideways. The closest() method is powerful — it walks up the tree to find the nearest ancestor matching a CSS selector. Node traversal methods (like childNodes) include text nodes; Element versions skip them.'
    },
    spread: {
      title: 'Spread & Rest',
      description: 'Expand & collect values',
      code: [
        '// Spread arrays (expand)',
        'const arr1 = [1, 2, 3];',
        'const arr2 = [4, 5, 6];',
        'const combined = [...arr1, ...arr2];',
        'console.log(combined); // [1, 2, 3, 4, 5, 6]',
        '',
        '// Spread objects (copy + merge)',
        'const defaults = { theme: "dark", lang: "en" };',
        'const config = { ...defaults, lang: "fr" };',
        '',
        '// Rest in destructuring',
        'const [first, ...rest] = [1, 2, 3, 4];',
        'console.log(rest); // [2, 3, 4]',
        '',
        '// Clone (shallow)',
        'const copy = { ...original };'
      ],
      explanation: 'The spread operator (...) expands iterables (arrays, objects, strings) into individual elements. It\'s perfect for copying arrays/objects (shallow copy), merging them, and passing array elements as function arguments. The rest parameter collects remaining values into an array in function parameters or destructuring patterns.'
    },
    mapfilter: {
      title: 'Map, Filter & Reduce',
      description: 'Powerful array transformations',
      code: [
        'const numbers = [1, 2, 3, 4, 5];',
        '',
        '// map - transform each element',
        'const doubled = numbers.map(n => n * 2);',
        'console.log(doubled); // [2, 4, 6, 8, 10]',
        '',
        '// filter - keep matching elements',
        'const evens = numbers.filter(n => n % 2 === 0);',
        'console.log(evens); // [2, 4]',
        '',
        '// reduce - accumulate to single value',
        'const sum = numbers.reduce((acc, n) => acc + n, 0);',
        'console.log(sum); // 15',
        '',
        '// Chaining all three',
        'const result = numbers',
        '  .filter(n => n > 2)',
        '  .map(n => n * 10)',
        '  .reduce((a, b) => a + b, 0);',
        'console.log(result); // 120'
      ],
      explanation: 'map(), filter(), and reduce() are the cornerstone of functional programming in JavaScript. map transforms each element and returns a new array of the same length. filter keeps elements that pass a test and returns a shorter array. reduce accumulates all elements into a single value (number, object, array, etc.). They can be chained for expressive data transformations without mutating the original array.'
    },
    promises: {
      title: 'Promises & Async',
      description: 'Handle asynchronous operations',
      code: [
        '// Creating a promise',
        'const fetchData = new Promise((resolve, reject) => {',
        '  setTimeout(() => {',
        '    const success = true;',
        '    if (success) resolve("Data loaded");',
        '    else reject("Error loading");',
        '  }, 1000);',
        '});',
        '',
        '// Using .then() and .catch()',
        'fetchData',
        '  .then(data => console.log(data))',
        '  .catch(err => console.error(err));',
        '',
        '// Using async/await (modern)',
        'async function loadUser() {',
        '  try {',
        '    const response = await fetch("/api/user");',
        '    const user = await response.json();',
        '    console.log(user);',
        '  } catch (error) {',
        '    console.error("Failed:", error);',
        '  }',
        '}'
      ],
      explanation: 'Promises represent values that will be available in the future — like API responses or file reads. async/await is modern syntax that makes promise-based code read like synchronous code. await pauses execution until the promise resolves. Always wrap await calls in try/catch blocks to handle errors gracefully. Promises enable non-blocking code execution.'
    },
    classes: {
      title: 'Classes',
      description: 'Object-oriented JavaScript',
      code: [
        'class Animal {',
        '  constructor(name) {',
        '    this.name = name;',
        '  }',
        '',
        '  speak() {',
        '    console.log(`${this.name} makes a sound`);',
        '  }',
        '}',
        '',
        '// Inheritance',
        'class Dog extends Animal {',
        '  constructor(name, breed) {',
        '    super(name); // Call parent constructor',
        '    this.breed = breed;',
        '  }',
        '',
        '  speak() {',
        '    console.log(`${this.name} barks!`);',
        '  }',
        '',
        '  // Static method',
        '  static classify() {',
        '    return "Mammal";',
        '  }',
        '}',
        '',
        'const rex = new Dog("Rex", "German Shepherd");',
        'rex.speak(); // "Rex barks!"',
        'console.log(Dog.classify()); // "Mammal"'
      ],
      explanation: 'Classes are syntactic sugar over JavaScript\'s prototype-based inheritance. The constructor method runs when creating a new instance (new ClassName()). extends sets up inheritance, and super() calls the parent class constructor/ methods. Static methods belong to the class itself, not instances. Classes make object-oriented patterns cleaner and more familiar for developers coming from languages like Java or Python.'
    }
  };

  const currentContent = content[selectedTopic as keyof typeof content];

  return (
    <section id="handbook" className="py-20 px-6">
      <style>{`
        .slim-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #334155 transparent;
        }
        .slim-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .slim-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .slim-scrollbar::-webkit-scrollbar-thumb {
          background-color: #334155;
          border-radius: 9999px;
        }
      `}</style>
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Book className="w-8 h-8 text-blue-500" />
          <h2 className="text-3xl font-bold text-white">Code Handbook</h2>
        </div>

        <div className="flex gap-6 items-stretch min-h-[400px] max-h-[700px]">
          <div className="w-[280px] shrink-0 min-h-0 overflow-x-hidden">
            <div className="bg-slate-900 rounded-xl border border-slate-800 px-4 py-4 h-full overflow-y-auto slim-scrollbar">
              <h3 className="text-white font-semibold mb-4">Lessons</h3>
              
              {/* Language Tab Bar */}
              <div className="flex gap-1 mb-4 p-1 bg-slate-950 rounded-lg border border-slate-800">
                {(['js', 'html', 'css'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setActiveLanguage(lang);
                      const firstCategoryId = languageCategoryMap[lang][0];
                      setExpandedCategories([firstCategoryId]);
                      const firstLesson = lessonCategories.find(c => c.id === firstCategoryId)?.lessons[0];
                      if (firstLesson) setSelectedTopic(firstLesson.id);
                    }}
                    className={`flex-1 py-1.5 px-3 rounded-md text-xs font-semibold transition-all ${
                      activeLanguage === lang
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {lessonCategories
                  .filter((category) => (languageCategoryMap[activeLanguage] || []).includes(category.id))
                  .map((category) => (
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
                      <div className="space-y-2 ml-2 p-2 bg-slate-950/60 rounded-lg border border-slate-800/50">
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

          <div className="flex-1 min-h-0">
            <div className="bg-slate-900 rounded-xl border border-slate-800 p-8 h-full overflow-y-auto slim-scrollbar">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{currentContent.title}</h3>
                <p className="text-slate-400">{currentContent.description}</p>
              </div>

              <div className="bg-slate-950 rounded-lg p-6 mb-6 border border-slate-800">
                <div className="flex items-center gap-2 mb-4">
                  <div className="px-3 py-1 bg-blue-600 rounded text-white text-sm font-medium">
                    {getLanguageBadge(selectedTopic)}
                  </div>
                </div>
                
                <div
                  className="text-slate-300 font-mono text-sm space-y-2"
                  style={{ whiteSpace: 'pre-wrap', tabSize: 2 }}
                >
                  <div className="text-slate-500">// Example Code</div>
                  {currentContent.code.map((line, index) => (
                    <div key={index}>
                      {line.split(/(\b(?:let|const|function|if|else|for|while|return|console|true|false|new|DOCTYPE|\d+)\b|@@@|<!--|<[^>]*>)/g).map((part, i) => (
                        part.match(/\b(?:let|const|function|if|else|for|while|return|console|true|false|new)\b/) 
                          ? <span key={i} className="text-purple-400">{part}</span>
                          : part.match(/^".*"|^'.*'|^`.*`/) 
                          ? <span key={i} className="text-green-400">{part}</span>
                          : part.match(/^&[a-z]+;|^<[^>]*>/)
                          ? <span key={i} className="text-blue-400">{part}</span>
                          : part.match(/^\d+/)
                          ? <span key={i} className="text-green-400">{part}</span>
                          : part.match(/^\/\/.*|^<!--.*/)
                          ? <span key={i} className="text-slate-500">{part}</span>
                          : part.match(/^@media|^@import|\bmin-width|\bmax-width|@keyframes/)
                          ? <span key={i} className="text-purple-400">{part}</span>
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