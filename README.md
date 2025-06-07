# Skip Hire Selection Application

A modern React interface for selecting and booking skip hire services. This application provides an intuitive interface for users to browse, filter, and select skip sizes based on their requirements.

## Features

- **Progress Tracking**: Visual progress steps showing the booking journey
- **Smart Filtering**: Filter skips by size, price, road allowance, and hire duration
- **Interactive Carousel**: Browse through available skip options with smooth animations
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Modern UI**: Clean and intuitive user interface with smooth animations
- **Real-time Price Calculation**: Automatic price calculations including VAT

## Tech Stack

- React 20
- CSS3 with CSS Variables
- Lucide React (for icons)
- Modern JavaScript (ES6+)

## Technologies Used

### Frontend
- **React.js**: Core framework for building the user interface
- **Create React App**: Project bootstrapping and build configuration
- **CSS3**: 
  - CSS Variables for theming
  - Flexbox and Grid for layouts
  - Media Queries for responsiveness
  - CSS Animations and Transitions
- **JavaScript (ES6+)**: 
  - Arrow Functions
  - Destructuring
  - Async/Await
  - Template Literals

### UI Components
- **Lucide React**: Icon library
- **Custom Components**:
  - Progress Steps
  - Filter Section
  - Carousel
  - Navigation
  - Skip Cards
  - Skip Images

### Development Tools
- **Node.js**: Runtime environment
- **npm**: Package manager
- **Git**: Version control

### API Integration
- **REST API**: Integration with WeWantWaste API
- **Fetch API**: For making HTTP requests
- **JSON**: Data format for API communication

### Testing
- **POSTMAN**

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Project Structure

```
my-app/
├── src/
│   ├── components/
│   │   ├── Carousel/
│   │   │   ├── Carousel.js
│   │   │   └── Carousel.css
│   │   ├── FilterSection/
│   │   │   ├── FilterSection.js
│   │   │   └── FilterSection.css
│   │   ├── Navigation/
│   │   │   ├── Navigation.js
│   │   │   └── Navigation.css
│   │   ├── ProgressSteps/
│   │   │   ├── ProgressSteps.js
│   │   │   └── ProgressSteps.css
│   │   ├── SkipCard/
│   │   │   └── SkipCard.js
│   │   └── SkipImage/
│   │       └── SkipImage.js
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd my-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm start`: Runs the app in development mode

## Component Details

### ProgressSteps
- Shows the current step in the booking process
- Visual progress indicator with step numbers and names
- Responsive design that adapts to mobile view

### FilterSection
- Interactive filters for skip selection
- Range sliders for size and price
- Toggle switch for road allowance
- Dropdown for hire duration
- Reset filters functionality

### Carousel
- Smooth sliding animation for skip cards
- Navigation buttons for browsing
- Responsive grid layout
- Loading and error states
- Skip card selection functionality

### Navigation
- Back and Continue buttons
- Size information note
- Fixed position at bottom of screen
- Responsive layout for mobile devices

### SkipCard
- Displays individual skip hire options
- Features skip image with size badge
- Shows skip details including:
  - Title and size information
  - Road allowance status
  - Hire period
  - Price with VAT calculation
- Interactive selection with hover effects
- Visual feedback for selected state
- Responsive design for all screen sizes

### SkipImage
- Handles skip image display and optimization
- Manages image loading states
- Provides fallback for missing images
- Displays size badge overlay
- Maintains consistent aspect ratio
- Optimized for performance with lazy loading

## CSS Architecture

The project uses a modular CSS approach with:
- Global styles and variables in `App.css`
- Component-specific styles in their respective CSS files
- CSS variables for consistent theming
- Responsive design using media queries
- Modern CSS features like flexbox and grid

## API Integration

The application fetches skip data from:
```
https://app.wewantwaste.co.uk/api/skips/by-location
```


## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev/)
- Design inspiration from modern web applications
- API provided by WeWantWaste
