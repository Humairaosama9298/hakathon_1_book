# Data Model: ROS 2 Educational Module

## Document Structure

### Chapter Entity
- **name**: String (e.g., "ROS 2 Fundamentals", "Python Control with rclpy", "Humanoid Modeling with URDF")
- **description**: String (brief overview of chapter content)
- **learning_objectives**: Array of strings (specific objectives students should achieve)
- **sections**: Array of Section entities
- **prerequisites**: Array of strings (knowledge required before starting)
- **estimated_duration**: Number (in hours)
- **exercises**: Array of Exercise entities

### Section Entity
- **title**: String (section heading)
- **content**: String (Markdown content)
- **learning_goals**: Array of strings (what students will learn in this section)
- **examples**: Array of Example entities
- **key_terms**: Array of strings (important terminology introduced)
- **duration**: Number (in minutes)

### Example Entity
- **title**: String (brief description of the example)
- **code**: String (code snippet if applicable)
- **explanation**: String (explanation of the example)
- **related_concepts**: Array of strings (concepts demonstrated)

### Exercise Entity
- **title**: String (exercise name)
- **description**: String (detailed description of the exercise)
- **difficulty**: String (beginner, intermediate, advanced)
- **expected_outcome**: String (what the student should achieve)
- **solution**: String (optional solution or guidance)

## Content Entities

### ROS 2 Concept Entity
- **name**: String (e.g., "Node", "Topic", "Service", "Action")
- **definition**: String (clear definition of the concept)
- **purpose**: String (why this concept exists in ROS 2)
- **usage**: String (how this concept is typically used)
- **examples**: Array of Example entities
- **related_concepts**: Array of strings (other concepts this relates to)

### rclpy Component Entity
- **name**: String (e.g., "Node", "Publisher", "Subscriber", "Client", "Service")
- **description**: String (what this component does)
- **implementation**: String (how to implement in Python)
- **parameters**: Array of Parameter entities
- **methods**: Array of Method entities

### Parameter Entity
- **name**: String (parameter name)
- **type**: String (data type)
- **description**: String (what this parameter controls)
- **default_value**: String (default value if applicable)

### Method Entity
- **name**: String (method name)
- **signature**: String (method signature with parameters)
- **description**: String (what the method does)
- **return_type**: String (what the method returns)

### URDF Element Entity
- **name**: String (e.g., "link", "joint", "robot", "material")
- **attributes**: Array of Attribute entities
- **child_elements**: Array of strings (allowed child elements)
- **description**: String (what this element represents)
- **example_usage**: String (example XML snippet)

### Attribute Entity
- **name**: String (attribute name)
- **type**: String (data type)
- **required**: Boolean (whether this attribute is required)
- **description**: String (what this attribute controls)

## Navigation Structure

### Sidebar Category
- **label**: String (category name in sidebar)
- **items**: Array of Sidebar Item entities
- **collapsible**: Boolean (whether the category can be collapsed)

### Sidebar Item
- **type**: String ("doc" or "category")
- **id**: String (document ID or category ID)
- **label**: String (display name in sidebar)
- **items**: Array of Sidebar Item entities (for nested categories)