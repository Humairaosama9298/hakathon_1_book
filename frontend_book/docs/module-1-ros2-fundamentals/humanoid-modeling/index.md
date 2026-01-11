---
sidebar_position: 4
title: "Humanoid Modeling with URDF"
---

# Humanoid Modeling with URDF

URDF (Unified Robot Description Format) is an XML format used to describe robot models in ROS. It defines the physical and visual properties of a robot, including its links, joints, and kinematic structure. This chapter covers how to model humanoid robots using URDF and connect them to ROS 2 systems.

## URDF Purpose and Structure

### What is URDF?

URDF stands for Unified Robot Description Format. It's an XML-based format that describes the physical properties of a robot, including:

- **Links**: Rigid parts of the robot (e.g., arms, legs, torso)
- **Joints**: Connections between links that allow relative motion
- **Visual elements**: How the robot looks in simulation
- **Collision properties**: How the robot interacts with obstacles
- **Inertial properties**: Mass, center of mass, and inertia tensor

### Basic URDF Structure

```xml
<?xml version="1.0"?>
<robot name="my_robot">
  <!-- Links -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="1 1 1"/>
      </geometry>
    </visual>
    <collision>
      <geometry>
        <box size="1 1 1"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="1"/>
      <inertia ixx="1" ixy="0" ixz="0" iyy="1" iyz="0" izz="1"/>
    </inertial>
  </link>

  <!-- Joints -->
  <joint name="base_to_wheel" type="continuous">
    <parent link="base_link"/>
    <child link="wheel_link"/>
    <origin xyz="0 0.5 0" rpy="0 0 0"/>
    <axis xyz="0 0 1"/>
  </joint>

  <link name="wheel_link">
    <!-- ... -->
  </link>
</robot>
```

## Links, Joints, and Frames

### Links

Links represent rigid bodies in the robot. Each link has:

- **Visual properties**: How it appears in visualization tools
- **Collision properties**: How it interacts with other objects
- **Inertial properties**: Physical characteristics for simulation

#### Link Properties

```xml
<link name="link_name">
  <!-- Visual representation -->
  <visual>
    <origin xyz="0 0 0" rpy="0 0 0"/>
    <geometry>
      <!-- Different geometry types -->
      <box size="1 1 1"/>
      <!-- <cylinder radius="0.5" length="1"/> -->
      <!-- <sphere radius="0.5"/> -->
      <!-- <mesh filename="package://path/to/mesh.stl"/> -->
    </geometry>
    <material name="color_material">
      <color rgba="0.8 0.2 0.2 1.0"/>
    </material>
  </visual>

  <!-- Collision properties -->
  <collision>
    <origin xyz="0 0 0" rpy="0 0 0"/>
    <geometry>
      <box size="1 1 1"/>
    </geometry>
  </collision>

  <!-- Physical properties for simulation -->
  <inertial>
    <origin xyz="0 0 0" rpy="0 0 0"/>
    <mass value="1.0"/>
    <inertia ixx="1.0" ixy="0.0" ixz="0.0" iyy="1.0" iyz="0.0" izz="1.0"/>
  </inertial>
</link>
```

### Joints

Joints define how links can move relative to each other. Types include:

- **Fixed**: No movement allowed
- **Revolute**: Rotational joint with limited range
- **Continuous**: Rotational joint without limits
- **Prismatic**: Linear sliding joint with limits
- **Floating**: 6DOF movement
- **Planar**: Movement on a plane

#### Joint Properties

```xml
<joint name="joint_name" type="revolute">
  <parent link="parent_link_name"/>
  <child link="child_link_name"/>
  <origin xyz="1 0 0" rpy="0 0 0"/>
  <axis xyz="0 0 1"/>
  <limit lower="-1.57" upper="1.57" effort="100" velocity="1"/>
  <dynamics damping="0.1" friction="0.0"/>
</joint>
```

### Coordinate Frames

Each link has its own coordinate frame. The origin element defines the transformation from the parent frame to the child frame using:

- **xyz**: Translation vector
- **rpy**: Rotation angles (roll, pitch, yaw) in radians

## URDF for Humanoid Robots

Humanoid robots have a specific structure that includes:

- **Torso/Body**: Main central link
- **Head**: Connected to torso
- **Arms**: Left and right arms with shoulders, elbows, wrists
- **Legs**: Left and right legs with hips, knees, ankles
- **Hands/Feet**: End effectors

### Example Humanoid Structure

```xml
<robot name="humanoid_robot">
  <!-- Base of the robot -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="0.5 0.3 0.8"/>
      </geometry>
      <material name="blue">
        <color rgba="0 0 1 1"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <box size="0.5 0.3 0.8"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="10"/>
      <inertia ixx="1" ixy="0" ixz="0" iyy="1" iyz="0" izz="1"/>
    </inertial>
  </link>

  <!-- Torso -->
  <joint name="base_to_torso" type="fixed">
    <parent link="base_link"/>
    <child link="torso"/>
    <origin xyz="0 0 0.4"/>
  </joint>

  <link name="torso">
    <visual>
      <geometry>
        <box size="0.3 0.3 0.6"/>
      </geometry>
      <material name="red">
        <color rgba="1 0 0 1"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <box size="0.3 0.3 0.6"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="8"/>
      <inertia ixx="1" ixy="0" ixz="0" iyy="1" iyz="0" izz="1"/>
    </inertial>
  </link>

  <!-- Head -->
  <joint name="torso_to_head" type="revolute">
    <parent link="torso"/>
    <child link="head"/>
    <origin xyz="0 0 0.4"/>
    <axis xyz="0 1 0"/>
    <limit lower="-0.5" upper="0.5" effort="10" velocity="1"/>
  </joint>

  <link name="head">
    <visual>
      <geometry>
        <sphere radius="0.15"/>
      </geometry>
      <material name="white">
        <color rgba="1 1 1 1"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <sphere radius="0.15"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="2"/>
      <inertia ixx="1" ixy="0" ixz="0" iyy="1" iyz="0" izz="1"/>
    </inertial>
  </link>

  <!-- Left Arm -->
  <joint name="torso_to_left_shoulder" type="revolute">
    <parent link="torso"/>
    <child link="left_upper_arm"/>
    <origin xyz="0.2 0 0.2" rpy="0 0 0"/>
    <axis xyz="0 1 0"/>
    <limit lower="-1.57" upper="1.57" effort="10" velocity="1"/>
  </joint>

  <link name="left_upper_arm">
    <visual>
      <geometry>
        <cylinder radius="0.05" length="0.3"/>
      </geometry>
      <material name="green">
        <color rgba="0 1 0 1"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <cylinder radius="0.05" length="0.3"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="1"/>
      <inertia ixx="1" ixy="0" ixz="0" iyy="1" iyz="0" izz="1"/>
    </inertial>
  </link>

  <!-- Similar joints and links for other body parts -->
</robot>
```

## URDF-ROS 2 Integration

### Robot State Publisher

The robot_state_publisher package takes a URDF and joint positions and publishes transforms to tf2, which is ROS 2's transform library.

```python
import rclpy
from rclpy.node import Node
from sensor_msgs.msg import JointState
from std_msgs.msg import Header

class URDFController(Node):
    def __init__(self):
        super().__init__('urdf_controller')

        # Publisher for joint states
        self.joint_pub = self.create_publisher(JointState, 'joint_states', 10)

        # Timer to publish joint states
        self.timer = self.create_timer(0.1, self.publish_joint_states)

    def publish_joint_states(self):
        # Create joint state message
        msg = JointState()
        msg.name = ['joint1', 'joint2', 'joint3']
        msg.position = [0.0, 0.0, 0.0]  # Current joint positions
        msg.velocity = [0.0, 0.0, 0.0]
        msg.effort = [0.0, 0.0, 0.0]

        # Publish the message
        self.joint_pub.publish(msg)
```

### URDF in Simulation

URDF models can be loaded into simulation environments like Gazebo:

1. **Spawn the model** in the simulation
2. **Connect controllers** to the joints
3. **Visualize** the robot in RViz

### Working with URDF Files

Common file locations for URDF models:
- `package://package_name/urdf/model.urdf`
- `file:///absolute/path/to/model.urdf`
- `package://my_robot_description/robots/my_robot.urdf.xacro`

### Xacro for Complex Models

For complex humanoid robots, Xacro (XML Macros) can simplify URDF creation:

```xml
<?xml version="1.0"?>
<robot xmlns:xacro="http://www.ros.org/wiki/xacro" name="humanoid_robot">

  <!-- Define properties -->
  <xacro:property name="M_PI" value="3.1415926535897931" />
  <xacro:property name="arm_length" value="0.3" />

  <!-- Macro for arm -->
  <xacro:macro name="arm" params="prefix side">
    <link name="${prefix}_upper_arm">
      <visual>
        <geometry>
          <cylinder radius="0.05" length="${arm_length}"/>
        </geometry>
      </visual>
    </link>

    <joint name="shoulder_${side}" type="revolute">
      <parent link="torso"/>
      <child link="${prefix}_upper_arm"/>
      <origin xyz="0.2 0 0" rpy="0 0 0"/>
      <axis xyz="0 1 0"/>
      <limit lower="-1.57" upper="1.57" effort="10" velocity="1"/>
    </joint>
  </xacro:macro>

  <!-- Use the macro -->
  <xacro:arm prefix="left" side="left"/>
  <xacro:arm prefix="right" side="right"/>

</robot>
```

## Best Practices for Humanoid URDF Modeling

1. **Consistent Naming**: Use clear, consistent naming conventions for links and joints
2. **Proper Scaling**: Ensure dimensions are realistic for the intended robot
3. **Mass Distribution**: Accurately model mass properties for stable simulation
4. **Joint Limits**: Set appropriate limits to prevent damage in simulation
5. **Collision Avoidance**: Design the model to avoid self-collision where possible
6. **Modularity**: Structure the URDF to allow easy modification of parts
7. **Documentation**: Comment complex URDF files to explain the structure

## Validation and Testing

### Checking URDF Syntax

```bash
# Validate URDF file
check_urdf /path/to/robot.urdf

# Parse and display robot info
urdf_to_graphiz /path/to/robot.urdf
```

### Visualization

```bash
# Launch RViz to visualize the robot
ros2 run rviz2 rviz2

# Use robot_state_publisher to see the model
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:='$(cat robot.urdf)'
```

## Summary

URDF is a crucial component for representing humanoid robots in ROS 2. It provides a standardized way to describe the physical structure of robots, enabling simulation, visualization, and control. By properly defining links, joints, and frames, you can create accurate models of humanoid robots that can be integrated with ROS 2 systems for both simulation and real-world applications. The combination of URDF with ROS 2's control systems enables sophisticated humanoid robot behaviors and interactions.