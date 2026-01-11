import React from 'react';

// ChatbotPlaceholder Component
//
// This component serves as a placeholder for the future RAG (Retrieval Augmented Generation)
// chatbot integration. It reserves space in the UI where the OpenAI ChatKit UI will be mounted
// once the backend services are implemented.
//
// FUTURE IMPLEMENTATION NOTES:
// - Will integrate with OpenAI ChatKit for conversational AI
// - Will connect to vector database for document retrieval
// - Will provide contextual assistance based on textbook content
// - Will support code explanations and robotics concepts

const ChatbotPlaceholder: React.FC = () => {
  return (
    <div className="chatbot-placeholder">
      <div className="chatbot-header">
        <h3>AI Assistant (Coming Soon)</h3>
      </div>
      <div className="chatbot-content">
        <p>
          This is a placeholder for the RAG-powered AI assistant that will provide
          contextual help based on the Physical AI & Humanoid Robotics textbook content.
        </p>
        <div className="features-preview">
          <h4>Planned Features:</h4>
          <ul>
            <li>Contextual Q&A based on textbook content</li>
            <li>Code explanation for ROS 2 and rclpy examples</li>
            <li>Concept clarification for robotics and AI topics</li>
            <li>Step-by-step guidance for complex procedures</li>
          </ul>
        </div>
        <div className="development-note">
          <small>
            NOTE: Backend services for RAG functionality will be implemented separately.
            This component reserves the UI space where the OpenAI ChatKit will be mounted.
          </small>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPlaceholder;