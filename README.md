# is219
Create a tutorial that explains how JavaScript implements each object oriented principle by using example code and a description.  You should have a text article written and accompany it with running code with tests in a Github repo.  You can put your article in the ReadMe.MD file of your repository and you should show the build status of passing from Travis.

Encapsulation:
When each object keeps its state private inside of a class. Capability of storing related information mutually in a single object. Other objects cannot access this state, and can only call a list of public functions called methods. 

Abstraction:
A way of maintaining a large codebase for a long duration of time with unsure changes to be made, meaning each object should only expose a high level mechanism for using it.

Inheritance:
Since objects are often very similar and share common logic but aren't always entirely the same, inheritance is a way of reusing common logic and extracting unique logic into a seperate class. This involves making a (child) class by deriving from another (parent) class. 

Polymorphism:
Gives a way to use a class exactly like it's parent so there's no confusion with mixing types, while each child class keeping its own methods as is. 
