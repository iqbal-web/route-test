export const inspector = () => {
    return (
        <div className="route-test-home-inspector">
            <div className="route-test-inspector-section">
                <h3>🏠 Home Page Settings</h3>
                <div className="route-test-inspector-field">
                    <label>Page Title:</label>
                    <input type="text" defaultValue="Welcome to Route Test" className="regular-text" />
                </div>
                <div className="route-test-inspector-field">
                    <label>Subtitle:</label>
                    <input type="text" defaultValue="Your WordPress routing test companion" className="regular-text" />
                </div>
            </div>
            
            <div className="route-test-inspector-section">
                <h3>🎨 Display Options</h3>
                <div className="route-test-inspector-field">
                    <label>
                        <input type="checkbox" defaultChecked /> Show feature grid
                    </label>
                </div>
                <div className="route-test-inspector-field">
                    <label>
                        <input type="checkbox" defaultChecked /> Show action buttons
                    </label>
                </div>
            </div>
            
            <div className="route-test-inspector-section">
                <h3>📊 Page Analytics</h3>
                <div className="route-test-stats">
                    <div className="route-test-stat">
                        <strong>Views:</strong> 1,234
                    </div>
                    <div className="route-test-stat">
                        <strong>Last Updated:</strong> Today
                    </div>
                </div>
            </div>
        </div>
    );
};