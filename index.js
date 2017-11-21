const PI = 3.142
class Shape{
    constructor(name, color, breadth, length){
        this.color = color;
        this.breadth = breadth;
        this.length = length;
        this.name = name;
    }

    introduceSelf(){
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
}