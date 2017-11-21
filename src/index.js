//initialize constant to hold the value of PI
const PI = 3.142
class Shape{
    //constructor for shapes class, takes in the name,color, breadth and length of the shape as parameters
    constructor(name, color, breadth, length){
        this.color = color;//color of shape
        this.breadth = breadth;//breadth/diameter of shape
        this.length = length;//height/length of shape
        this.name = name;//type of shape
    }

    //describe method where the shape talks about itself
    describeSelf(){
        return `I am a ${this.name} and I have a height of ${this.length}cm and a width of ${this.breadth}cm and my color is ${this.color}.`;
    }

    //not shape defined, so no perimeter
    calculatePerimeter(){
        return "I don't have a perimeter yet";
    }

    //not shape defined, so no area
    calculateArea(){
        return "I don't have an area yet"
    }
}

//triangle class, sub class of shape class
class  Triangle extends Shape{

    //define constructor for Triangle with extra parameter
    constructor(name, color, breadth, length, hypothenus){
        super(name, color, breadth, length);//call constructor of super class -Shape
        this.hypothenus = hypothenus;//initialize hypothenus
    }

    //describeSelf with different implementation from super class
    describeSelf(){
        return `I am a ${this.name} and I have a height of ${this.length}cm, a width of ${this.breadth}cm, a hypothenus of ${this.hypothenus} and my color is ${this.color}.`;
    }

    //calculate perimeter with different implementation from super class
    calculatePerimeter(){
        return this.length+this.breadth+this.hypothenus;
    }

    //calculate area with different implementation from super class
    calculateArea(){
        return 0.5*this.breadth*this.length;
    }
}

//circle class that extends Shape class as the super class
class Circle extends Shape{
    constructor(name, color, breadth, length){
        super(name, color, breadth, length);
    }   

    //different implementation of calculatePerimeter calling another method in the class
    calculatePerimeter(){
        return 2*PI*this.calculateRadius();
    }

    //different implementation of calculateArea method
    calculateArea(){
        return PI*this.calculateRadius()**2;
    }

    //method that uses the breadth to calculate the radius of the circle
    calculateRadius(){
        return this.breadth/2;
    }

    //different implementation of the describe self method
    describeSelf(){
        return `I am a ${this.name} and I have a height of ${this.length}cm, a width of ${this.breadth}cm, a radius of ${this.calculateRadius()} and my color is ${this.color}.`;
    }
}