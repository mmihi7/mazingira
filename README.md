# Mazingira - Governor's Planning Platform

A mobile-responsive web application for Nairobi County governance and planning, featuring interactive maps, AI-powered insights, and comprehensive data visualization.

## Features

- **Mobile-First Design**: Fully responsive across desktop, tablet, and mobile devices
- **Interactive Maps**: SVG-based county maps with real-time data overlays
- **AI Assistant**: Intelligent planning recommendations and briefings
- **Multi-Page Navigation**: Six specialized sections for different governance areas
- **File Upload**: Support for PDF, Word, Excel, and CSV reports
- **Touch Gestures**: Swipe navigation and touch-friendly interactions
- **Real-time Data**: Live status indicators and alerts

## Sections

1. **County Overview**: General statistics and key metrics
2. **Roads & Buildings**: Infrastructure monitoring and projects
3. **Nature & Water**: Environmental data and flood risk assessment
4. **People & Services**: Social services and public facilities
5. **Jobs & Business**: Economic development and opportunities
6. **Future Plans**: Long-term planning and scenario analysis

## Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Variables
- **Fonts**: Google Fonts (Fraunces, Plus Jakarta Sans)
- **Deployment**: Vercel (Static Site Hosting)

## Local Development

### Prerequisites
- Python 3.x (for local server)
- Git (for version control)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mazingira.git
cd mazingira
```

2. Start local development server:
```bash
python -m http.server 8000
```

3. Open your browser and navigate to:
```
http://localhost:8000/mazingira-v4.html
```

## Mobile Responsiveness

The application is optimized for mobile devices with:
- Responsive breakpoints at 768px and 480px
- Touch-friendly interface elements
- Swipe gestures for navigation
- Optimized layout for small screens
- Hamburger menu for mobile navigation

## Deployment to Vercel

### Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Connect your GitHub account to Vercel
3. Import the repository
4. Vercel will automatically detect the static site configuration

### Manual Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy to production:
```bash
vercel --prod
```

### Environment Variables

No environment variables are required for this static site.

## File Structure

```
mazingira/
?? mazingira-v4.html          # Main application file
?? package.json              # Project metadata and scripts
?? vercel.json               # Vercel deployment configuration
?? README.md                 # This file
?? .gitignore                # Git ignore rules
```

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Mobile Safari (iOS 13+)
- Chrome Mobile (Android 8+)

## Performance

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## Security

- Content Security Policy headers
- XSS protection
- Frame protection
- Secure referrer policy

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on multiple devices
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Contact

For questions or support, please open an issue on GitHub.

---

**Note**: This is a static site deployment. All functionality runs client-side with no backend dependencies.
