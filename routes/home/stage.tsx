import './style.css';

export const stage = () => {
    return (
        <div className="route-test-home-stage">
            <div className="route-test-home-header">
                <h1>Welcome to Route Test</h1>
                <p>Your WordPress routing test companion</p>
            </div>
            
            <div className="route-test-home-content">
                <div className="route-test-feature-grid">
                    <div className="route-test-feature-card">
                        <h3>🔧 Build Tools</h3>
                        <p>Modern build system with TypeScript, JSX, and SCSS support.</p>
                    </div>
                    
                    <div className="route-test-feature-card">
                        <h3>🚀 Routing System</h3>
                        <p>File-based routing for WordPress admin pages with lifecycle hooks.</p>
                    </div>
                    
                    <div className="route-test-feature-card">
                        <h3>📦 Module System</h3>
                        <p>ES6 modules with automatic dependency management.</p>
                    </div>
                    
                    <div className="route-test-feature-card">
                        <h3>🎨 Component Library</h3>
                        <p>Reusable components for WordPress admin interfaces.</p>
                    </div>
                </div>
                
                <div className="route-test-actions">
                    <a href="#" className="button button-primary">Get Started</a>
                    <a href="#" className="button button-secondary">View Documentation</a>
                </div>
            </div>
        </div>
    );
};