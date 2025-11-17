export const inspector = () => {
    return (
        <div className="route-test-service-inspector">
            <div className="route-test-inspector-section">
                <h3>🛠️ Service Page Settings</h3>
                <div className="route-test-inspector-field">
                    <label>Page Title:</label>
                    <input type="text" defaultValue="Route-Test Services" className="regular-text" />
                </div>
                <div className="route-test-inspector-field">
                    <label>Subtitle:</label>
                    <input type="text" defaultValue="Comprehensive WordPress development services" className="regular-text" />
                </div>
            </div>
            
            <div className="route-test-inspector-section">
                <h3>📋 Service Configuration</h3>
                <div className="route-test-inspector-field">
                    <label>Featured Services:</label>
                    <div className="route-test-checkbox-group">
                        <label>
                            <input type="checkbox" defaultChecked /> Plugin Development
                        </label>
                        <label>
                            <input type="checkbox" defaultChecked /> Theme Development
                        </label>
                        <label>
                            <input type="checkbox" defaultChecked /> Performance Optimization
                        </label>
                        <label>
                            <input type="checkbox" defaultChecked /> Deployment & DevOps
                        </label>
                    </div>
                </div>
            </div>
            
            <div className="route-test-inspector-section">
                <h3>🎨 Display Settings</h3>
                <div className="route-test-inspector-field">
                    <label>
                        <input type="checkbox" defaultChecked /> Show service icons
                    </label>
                </div>
                <div className="route-test-inspector-field">
                    <label>
                        <input type="checkbox" defaultChecked /> Show CTA section
                    </label>
                </div>
                <div className="route-test-inspector-field">
                    <label>Grid Layout:</label>
                    <select defaultValue="auto" className="regular-text">
                        <option value="auto">Auto (responsive)</option>
                        <option value="2-columns">2 Columns</option>
                        <option value="3-columns">3 Columns</option>
                        <option value="4-columns">4 Columns</option>
                    </select>
                </div>
            </div>
            
            <div className="route-test-inspector-section">
                <h3>📞 Contact Settings</h3>
                <div className="route-test-inspector-field">
                    <label>Contact Button Text:</label>
                    <input type="text" defaultValue="Contact Us" className="regular-text" />
                </div>
                <div className="route-test-inspector-field">
                    <label>Portfolio Button Text:</label>
                    <input type="text" defaultValue="View Portfolio" className="regular-text" />
                </div>
            </div>
            
            <div className="route-test-inspector-section">
                <h3>📊 Service Analytics</h3>
                <div className="route-test-stats">
                    <div className="route-test-stat">
                        <strong>Page Views:</strong> 856
                    </div>
                    <div className="route-test-stat">
                        <strong>Inquiries:</strong> 23
                    </div>
                    <div className="route-test-stat">
                        <strong>Conversion Rate:</strong> 2.7%
                    </div>
                </div>
            </div>
        </div>
    );
};