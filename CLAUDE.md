# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an academic project repository for web development practices at UNAMAD (Universidad Nacional Amazónica de Madre de Dios). The repository contains progressive web development exercises covering HTML, CSS, and JavaScript fundamentals through advanced topics.

## Repository Structure

The repository is organized into numbered class directories (`clase_1` through `clase_11`) that follow a structured learning progression:

- **clase_1-3**: HTML fundamentals and basic CSS
- **clase_4-7**: Advanced CSS, responsive design, SCSS/Sass preprocessing, and CSS frameworks
- **clase_8**: JavaScript fundamentals (variables, operators, conditionals, loops, arrays)
- **clase_9**: Advanced JavaScript (objects, array methods, data manipulation)
- **clase_10**: DOM manipulation and Local Storage
- **clase_11**: Asynchronous JavaScript and API integration

## Development Workflow

### No Build System
This project uses vanilla HTML, CSS, and JavaScript without any build tools or package managers. All code runs directly in the browser.

### Exercise Structure Patterns
- **Early classes**: Single HTML files with embedded or inline CSS/JavaScript
- **Later classes**: Separated concerns with external CSS and JavaScript files
- **Modern classes**: Modular JavaScript with ES6 imports/exports

### Testing and Validation
- No automated testing framework is used
- Code is validated by opening HTML files directly in a browser
- Use browser developer tools for debugging and console output

## Key Technologies and Patterns

### Frontend Technologies
- **HTML5**: Semantic markup, forms, modern elements
- **CSS3**: Flexbox, Grid, responsive design, SCSS/Sass preprocessing
- **JavaScript ES6+**: Modern syntax, async/await, modules, destructuring
- **Web APIs**: DOM API, Local Storage, Fetch API

### Common Development Patterns
- **Clase 8-9**: Procedural JavaScript with global functions
- **Clase 10**: Event-driven programming with DOM manipulation
- **Clase 11**: Service-oriented architecture with separated API layer

### File Organization
- **clase_11** uses modular structure:
  - `index.html`: Main HTML structure
  - `scripts/app.js`: UI logic and event handling
  - `scripts/service.js`: API calls and data management

## Common Commands

### Running the Code
```bash
# Open HTML files directly in browser - no build step required
# For modern browsers, serve via local server for ES6 modules:
npx serve .
# or
python -m http.server 8000
```

### Development Tools
- Use browser developer tools for debugging
- Check console output for JavaScript errors
- Use Network tab for API request monitoring (clase_11)

## Architecture Notes

### Progressive Complexity
The repository demonstrates educational progression from basic web concepts to modern JavaScript practices:

1. **Static Content** → **Interactive Elements** → **Dynamic Applications** → **API Integration**
2. **Inline Code** → **External Files** → **Modular Architecture**
3. **Synchronous** → **Asynchronous Programming**

### Data Management Evolution
- **clase_8**: Simple variables and arrays
- **clase_9**: Complex objects and array methods
- **clase_10**: Persistent data with Local Storage
- **clase_11**: External API data with error handling

### Modern JavaScript Features Used
- Template literals for string interpolation
- Arrow functions for concise syntax
- Destructuring for cleaner object handling
- Async/await for asynchronous operations
- ES6 modules for code organization (clase_11)

## Working with This Repository

### When Adding New Exercises
- Follow the existing naming convention (`clase_X`)
- Use progressive complexity appropriate to the class number
- Include comments in Spanish for educational clarity
- Test in multiple browsers for compatibility

### When Debugging
- Check browser console for JavaScript errors
- Verify file paths are correct (especially for external resources)
- For clase_11: Check Network tab for API response issues
- Use `console.log()` for debugging as it's part of the curriculum

### API Integration (clase_11)
- Uses `https://reqres.in/api/users` for user data
- Implements error handling with try/catch blocks
- Follows RESTful API patterns for educational purposes