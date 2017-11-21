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

    calculatePerimeter(){
        return "I don't have a perimeter yet";
    }

    calculateArea(){
        return "I don't have an area yet"
    }
}

class  Triangle extends Shape{
    constructor(name, color, breadth, length, hypothenus){
        super(name, color, breadth, length);
        this.hypothenus = hypothenus;
    }
    
    introduceSelf(){
        return `I am a ${this.name} and I have a height of ${this.length}cm, a width of ${this.breadth}cm, a hypothenus of ${this.hypothenus} and my color is ${this.color}.`;
    }

    calculatePerimeter(){
        return this.length+this.breadth+this.hypothenus;
    }

    calculateArea(){
        return 0.5*this.breadth*this.length;
    }
}

class Circle extends Shape{
    constructor(name, color, breadth, length){
        super(name, color, breadth, length);
    }   

    calculatePerimeter(){
        return 2*PI*this.calculateRadius();
    }

    calculateArea(){
      console.log("PI: "+PI);
      console.log("radius: "+this.calculateRadius());
        return PI*this.calculateRadius()**2;
    }

    calculateRadius(){
        return this.breadth/2;
    }

    introduceSelf(){
        return `I am a ${this.name} and I have a height of ${this.length}cm, a width of ${this.breadth}cm, a radius of ${this.calculateRadius()} and my color is ${this.color}.`;
    }
}