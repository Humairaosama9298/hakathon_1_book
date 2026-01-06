# Quickstart Guide: ROS 2 Educational Module

## Prerequisites

- Node.js (version 18.0 or higher)
- npm or yarn package manager
- Git for version control
- A GitHub account for deployment

## Setup Instructions

### 1. Clone or Initialize the Repository

```bash
# If starting fresh
mkdir ros2-educational-module
cd ros2-educational-module
git init

# Or clone existing repository
git clone <repository-url>
cd ros2-educational-module
```

### 2. Install Docusaurus

```bash
# Initialize Docusaurus project
npm init docusaurus@latest docs classic

# Install additional dependencies if needed
npm install
```

### 3. Project Structure Setup

After installation, your project structure should look like:

```
my-website/
├── blog/
├── docs/
├── src/
│   ├── components/
│   ├── css/
│   └── pages/
├── static/
├── docusaurus.config.js
├── package.json
├── sidebars.js
└── yarn.lock (or package-lock.json)
```

### 4. Configure Docusaurus

Edit `docusaurus.config.js` with your project details:

```javascript
// docusaurus.config.js
module.exports = {
  title: 'Physical AI: ROS 2 Educational Module',
  tagline: 'Connecting AI Agents to Humanoid Robot Control',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-username.github.io',
  // Set the /<base> pathname under which your site is served
  // For GitHub pages, this is usually your repo name
  baseUrl: '/ros2-educational-module',

  // GitHub pages deployment config
  organizationName: 'your-username', // Usually your GitHub org/user name
  projectName: 'ros2-educational-module', // Usually your repo name
  deploymentBranch: 'gh-pages', // Branch that GitHub Pages will deploy from

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Set the docs route base path to '/'
          routeBasePath: '/',
          // Please change this to your repo
          editUrl:
            'https://github.com/your-username/ros2-educational-module/edit/main/',
        },
        blog: false, // Disable blog if not needed
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
};
```

### 5. Set Up Sidebar Navigation

Update `sidebars.js` to reflect the three main chapters:

```javascript
// sidebars.js
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      items: [
        {
          type: 'category',
          label: 'ROS 2 Fundamentals',
          items: [
            'ros2-fundamentals/index',
            'ros2-fundamentals/role-of-ros2',
            'ros2-fundamentals/nodes-topics-services-actions',
            'ros2-fundamentals/robotic-nervous-system'
          ],
        },
        {
          type: 'category',
          label: 'Python Control with rclpy',
          items: [
            'python-control/index',
            'python-control/rclpy-introduction',
            'python-control/creating-nodes',
            'python-control/publishers-subscribers',
            'python-control/ai-robot-bridge'
          ],
        },
        {
          type: 'category',
          label: 'Humanoid Modeling with URDF',
          items: [
            'humanoid-modeling/index',
            'humanoid-modeling/urdf-purpose-structure',
            'humanoid-modeling/links-joints-frames',
            'humanoid-modeling/urdf-ros2-integration'
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
```

### 6. Create Content Files

Create the main content files in the `docs/` directory following the structure:

```
docs/
├── intro.md
├── ros2-fundamentals/
│   ├── index.md
│   ├── role-of-ros2.md
│   ├── nodes-topics-services-actions.md
│   └── robotic-nervous-system.md
├── python-control/
│   ├── index.md
│   ├── rclpy-introduction.md
│   ├── creating-nodes.md
│   ├── publishers-subscribers.md
│   └── ai-robot-bridge.md
└── humanoid-modeling/
    ├── index.md
    ├── urdf-purpose-structure.md
    ├── links-joints-frames.md
    └── urdf-ros2-integration.md
```

### 7. Develop Locally

```bash
# Start local development server
npm run start

# This will open your site in your browser at http://localhost:3000
```

### 8. Build for Production

```bash
# Build the static files
npm run build
```

### 9. Deploy to GitHub Pages

```bash
# Deploy to GitHub Pages
npm run deploy

# This command will:
# 1. Build the static files
# 2. Push the generated files to the `gh-pages` branch
```

## Running the Documentation Site

1. **Development mode**: `npm run start` - Starts a local server with hot reloading
2. **Build**: `npm run build` - Creates optimized static files in the `build/` directory
3. **Deploy**: `npm run deploy` - Builds and deploys to GitHub Pages

## File Structure Convention

- All content files use `.md` extension
- Images and other static assets go in `static/img/`
- Custom CSS goes in `src/css/custom.css`
- Navigation is defined in `sidebars.js`
- Site configuration is in `docusaurus.config.js`

## Common Commands

```bash
# Install dependencies
npm install

# Start development server
npm run start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Serve the built site locally (for testing)
npm run serve
```

Your ROS 2 educational module is now ready to develop! Start by creating content for the three main chapters in the appropriate directories.