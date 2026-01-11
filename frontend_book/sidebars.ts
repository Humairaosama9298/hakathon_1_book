import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Manual sidebar configuration for the Physical AI & Humanoid Robotics textbook
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Course Overview',
      collapsed: false,
      items: [
        'intro',
      ],
    },
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      collapsed: false,
      items: [
        'module-1-ros2-fundamentals/index',
        {
          type: 'category',
          label: 'ROS 2 Fundamentals',
          items: [
            'module-1-ros2-fundamentals/ros2-fundamentals/index',
          ],
        },
        {
          type: 'category',
          label: 'Python Control with rclpy',
          items: [
            'module-1-ros2-fundamentals/rclpy-control/index',
          ],
        },
        {
          type: 'category',
          label: 'Humanoid Modeling with URDF',
          items: [
            'module-1-ros2-fundamentals/humanoid-modeling/index',
          ],
        },
      ],
    },
    // Additional modules can be added here as they are developed
  ],
};

export default sidebars;
