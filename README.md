# Cryomalus Dashboard: Orchard Management Interface

The **Cryomalus Dashboard** is a key component of a larger, cutting-edge project aimed at revolutionizing apple orchard management using drones, thermal imaging, and computer vision. This dashboard focuses on monitoring key orchard metrics and visualizing them through an interactive map interface, empowering farmers and agricultural specialists with real-time insights to optimize tree health, nutrient levels, and yield estimates.

Our objective is to create a user-friendly interface that seamlessly integrates drone-generated data, providing a holistic view of the orchard's health and production capacity.

## Key Features

### 🌍 Interactive Map Integration
The Cryomalus Dashboard utilizes **Mapbox GL** to display a real-time, interactive satellite map of the apple orchards. The map is fully integrated with drone-collected data, allowing users to visualize the geographical distribution of anomalies and monitor various orchard sectors effortlessly.

- **Satellite View**: Provides an aerial view of the orchard, helping users correlate anomalies and nutrient levels with their spatial distribution.
- **Dynamic Zoom & Pan**: Offers easy navigation across different sections of the orchard for in-depth analysis.

### 📊 Data-Driven Dashboard Overview
At the core of the dashboard is an extensive data management interface that tracks and displays vital metrics across four key categories:

- **Tree Health**: The system tracks detected anomalies such as pest infestations and diseases, which are critical for identifying affected areas in real-time.
    - Anomalies detected
    - Last health check update

- **Nutrient Levels**: We monitor the essential nutrients (Nitrogen, Phosphorus, and Potassium) to ensure optimal growth conditions.
    - Nitrogen: Low, Normal, High
    - Phosphorus: Normal, Deficient, Excess
    - Potassium: Critical for fruit development

- **Pest Counts**: Provides an ongoing analysis of pest populations within the orchard, giving actionable insights to mitigate potential threats.
    - Aphids, Mites, Worms, etc.

- **Production Estimates**: The platform aggregates drone and satellite data to estimate overall yield, allowing farmers to forecast production more accurately and plan accordingly.
    - Estimated Yield
    - Last survey date

### 🔗 Seamless Navigation
The dashboard features an intuitive navigation bar powered by **Next.js**, allowing users to quickly switch between home and anomaly detection modules. Each section is designed with flexibility in mind, providing the ability to expand and incorporate future enhancements.

### 🚀 Performance & Scalability
The Cryomalus Dashboard is designed to scale with the increasing size of data as orchard operations grow. We leverage:
- **React's State Management** for efficient handling of real-time updates.
- **Google Fonts Integration** (Quicksand & Raleway) to maintain a clean and professional UI.

### 🛰️ Mapbox Integration
The integration with **Mapbox** enhances the system's geographic visualization capabilities:
- Utilizes drone data collected from various orchard locations.
- Visualizes thermal and multispectral imaging data on the map, overlaying heatmaps to show areas needing immediate attention.

## Technologies Used

- **Next.js**: For seamless server-side rendering and efficient navigation.
- **React Map GL**: For rendering interactive maps that work with drone-generated data.
- **Mapbox GL**: To provide high-quality, satellite-view maps and visualization of orchard data.
- **TailwindCSS**: To create a responsive, modern, and minimalist design.
- **State Management**: Optimized through React's `useState` for managing live data and updates from drone feeds.

## Extra Features

- **Anomaly Heatmap**: Visualize anomalies with color-coded heatmaps.
- **Predictive Analytics**: Integrate machine learning models to predict future anomalies or yield decreases based on past trends.
- **Drone Path Visualization**: Visualize real-time drone paths and monitor their live feed directly from the dashboard.

