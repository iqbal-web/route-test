import './style.css';

export const stage = () => {
    return (
        <div className="route-test-service-stage">
            <div className="route-test-service-header">
                <h1>Route-Test Services</h1>
                <p>Comprehensive WordPress development services</p>
            </div>
            
            <div className="route-test-service-content">
                <div className="route-test-services-grid">
                    <div className="postbox">
                        <div className="inside">
                            <div className="route-test-service-icon">🔧</div>
                            <h3>Plugin Development</h3>
                            <p>Custom WordPress plugin development with modern build tools and best practices.</p>
                            <ul>
                                <li>TypeScript/JSX support</li>
                                <li>Automated testing</li>
                                <li>Module bundling</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="postbox">
                        <div className="inside">
                            <div className="route-test-service-icon">🎨</div>
                            <h3>Theme Development</h3>
                            <p>Modern WordPress themes with block editor support and responsive design.</p>
                            <ul>
                                <li>Block theme architecture</li>
                                <li>Custom block development</li>
                                <li>Performance optimization</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="postbox">
                        <div className="inside">
                            <div className="route-test-service-icon">⚡</div>
                            <h3>Performance Optimization</h3>
                            <p>Speed up your WordPress site with advanced optimization techniques.</p>
                            <ul>
                                <li>Code splitting</li>
                                <li>Lazy loading</li>
                                <li>Cache management</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="postbox">
                        <div className="inside">
                            <div className="route-test-service-icon">🚀</div>
                            <h3>Deployment & DevOps</h3>
                            <p>Automated deployment pipelines and infrastructure management.</p>
                            <ul>
                                <li>CI/CD pipelines</li>
                                <li>Cloud deployment</li>
                                <li>Monitoring & alerts</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="route-test-service-cta">
                    <h2>Ready to Get Started?</h2>
                    <p>Let's build something amazing together!</p>
                    <div className="route-test-cta-buttons">
                        <button className="button button-primary">Contact Us</button>
                        <button className="button button-secondary">View Portfolio</button>
                    </div>
                </div>
            </div>
        </div>
    );
};