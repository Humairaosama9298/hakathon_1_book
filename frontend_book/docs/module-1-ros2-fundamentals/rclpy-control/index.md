---
sidebar_position: 3
title: "Python Control with rclpy"
---

# Python Control with rclpy

rclpy is the Python client library for ROS 2. It provides the standard way to interface with ROS 2 from Python programs. This chapter covers how to create ROS 2 nodes in Python and establish communication between AI agents and robot controllers.

## Introduction to rclpy

rclpy provides a Python API that wraps around the underlying ROS 2 C++ client library (rcl). It allows Python developers to leverage the power of ROS 2 while working in a familiar programming environment.

### Installation and Setup

To use rclpy, you need to have ROS 2 installed on your system. The library comes as part of the standard ROS 2 distribution. You can import it in your Python scripts as follows:

```python
import rclpy
from rclpy.node import Node
```

## Creating Nodes in Python

A node is the fundamental building block of a ROS 2 system. In Python, you create nodes by subclassing the `Node` class from `rclpy.node`.

### Basic Node Structure

```python
import rclpy
from rclpy.node import Node

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        # Node initialization code goes here

def main(args=None):
    rclpy.init(args=args)
    minimal_publisher = MinimalPublisher()

    # Spin the node to process callbacks
    rclpy.spin(minimal_publisher)

    # Cleanup
    minimal_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Publishers and Subscribers

### Publishers

Publishers send messages to topics. They are created using the `create_publisher()` method of a node.

```python
from std_msgs.msg import String

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = f'Hello World: {self.i}'
        self.publisher.publish(msg)
        self.get_logger().info(f'Publishing: "{msg.data}"')
        self.i += 1
```

### Subscribers

Subscribers receive messages from topics. They are created using the `create_subscription()` method of a node.

```python
class MinimalSubscriber(Node):

    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(
            String,
            'topic',
            self.listener_callback,
            10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info(f'I heard: "{msg.data}"')
```

## Services in rclpy

Services provide request-response communication. You can create services using the `create_service()` method.

### Service Server

```python
from example_interfaces.srv import AddTwoInts

class MinimalService(Node):

    def __init__(self):
        super().__init__('minimal_service')
        self.srv = self.create_service(AddTwoInts, 'add_two_ints', self.add_two_ints_callback)

    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info(f'Incoming request\na: {request.a}, b: {request.b}')
        return response
```

### Service Client

```python
class MinimalClientAsync(Node):

    def __init__(self):
        super().__init__('minimal_client_async')
        self.cli = self.create_client(AddTwoInts, 'add_two_ints')

    def send_request(self):
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info('service not available, waiting again...')

        request = AddTwoInts.Request()
        request.a = 41
        request.b = 1
        self.future = self.cli.call_async(request)
```

## Actions in rclpy

Actions are used for long-running tasks that provide feedback. They are created using the `create_action_server()` and `create_action_client()` methods.

### Action Server Example

```python
import rclpy
from rclpy.action import ActionServer
from rclpy.node import Node

from example_interfaces.action import Fibonacci

class FibonacciActionServer(Node):

    def __init__(self):
        super().__init__('fibonacci_action_server')
        self._action_server = ActionServer(
            self,
            Fibonacci,
            'fibonacci',
            self.execute_callback)

    def execute_callback(self, goal_handle):
        self.get_logger().info('Executing goal...')

        feedback_msg = Fibonacci.Feedback()
        feedback_msg.sequence = [0, 1]

        for i in range(1, goal_handle.request.order):
            if goal_handle.is_cancel_requested:
                goal_handle.canceled()
                self.get_logger().info('Goal canceled')
                return Fibonacci.Result()

            feedback_msg.sequence.append(
                feedback_msg.sequence[i] + feedback_msg.sequence[i-1])

            goal_handle.publish_feedback(feedback_msg)

        goal_handle.succeed()
        result = Fibonacci.Result()
        result.sequence = feedback_msg.sequence

        return result
```

## Bridging AI Agents to Robot Controllers

One of the key advantages of using rclpy is the ability to seamlessly integrate Python-based AI algorithms with robot control systems.

### AI-Agent Integration Pattern

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import Float32MultiArray
import numpy as np

class AIBridgeNode(Node):
    """
    This node bridges AI agents to robot controllers
    """
    def __init__(self):
        super().__init__('ai_bridge_node')

        # Subscriber for sensor data from robot
        self.sensor_sub = self.create_subscription(
            Float32MultiArray,
            'sensor_data',
            self.sensor_callback,
            10
        )

        # Publisher for control commands to robot
        self.control_pub = self.create_publisher(
            Float32MultiArray,
            'control_commands',
            10
        )

        # Timer for AI processing loop
        self.timer = self.create_timer(0.1, self.ai_processing_loop)

        # Placeholder for AI model (could be a neural network, etc.)
        self.ai_model = None
        self.latest_sensor_data = None

    def sensor_callback(self, msg):
        """Receive sensor data from the robot"""
        self.latest_sensor_data = msg.data

    def ai_processing_loop(self):
        """Main AI processing loop"""
        if self.latest_sensor_data is not None:
            # Process sensor data through AI model
            control_commands = self.process_with_ai(self.latest_sensor_data)

            # Publish control commands to robot
            cmd_msg = Float32MultiArray()
            cmd_msg.data = control_commands
            self.control_pub.publish(cmd_msg)

    def process_with_ai(self, sensor_data):
        """Apply AI processing to generate control commands"""
        # This is where your AI algorithm would process the sensor data
        # and generate appropriate control commands
        processed_data = list(sensor_data)  # Placeholder for actual AI processing
        return processed_data
```

## Best Practices for rclpy Development

1. **Error Handling**: Always implement proper error handling in your nodes
2. **Resource Management**: Clean up resources properly using destroy_node()
3. **Threading**: Be aware of threading implications when using rclpy
4. **Logging**: Use the built-in logging system for debugging and monitoring
5. **Parameter Management**: Use ROS 2 parameters for configurable node behavior
6. **Testing**: Write unit tests for your nodes using the ROS 2 testing framework

## Summary

Python control with rclpy provides a powerful way to bridge AI agents with robot controllers. By leveraging the familiar Python programming environment, developers can easily implement complex AI algorithms that interact with robotic systems. The publish-subscribe, service, and action patterns in rclpy provide flexible communication mechanisms that enable sophisticated robot behaviors.