<?php
//Comment
#COMMENT
/**
 * MultiLine Comment
 */
echo "I'ts a print";
$variableColor = "red";
echo "My favorite color is " . $variable_color . "<br>";
echo "<h1>Pepsi color is $variable_color</h1>";
/*DataTypes
    String
    Integer
    Float (floating point numbers - also called double)
    Boolean
    Array
    Object
    NULL
    Resource

    var_dump() (to get the data type)
 */

#MultiValue
$x = $y = $z = "Fruit";
var_dump($x);

#global

global $variable_global;

    #PHP The static Keyword

function myTest() {
    static $x = 0;
    echo $x;
    $x++;
  }
  
  myTest();
  myTest();
  myTest();
  
  #Print
  print "<h2>PHP is Fun!</h2>";
  print ("Hello world!<br>");
  print "I'm about to learn PHP!";

  #Array
  $cars = array("Volvo","BMW","Toyota");

#Objects
$x = new stdClass();
$x->name = "Pepsi"; 
$x->color = "Red";
$x->age = 10;
var_dump($x);

  class Car {
    public $color;
    public $model;
    public function __construct($color, $model) {
      $this->color = $color;
      $this->model = $model;
    }
    public function message() {
      return "My car is a " . $this->color . " " . $this->model . "!";
    }
  }
  
  $myCar = new Car("red", "Volvo");
  var_dump($myCar);
  
  #Strings and Numbers
  #Casting
  #Constants
  #Math
  #Magic Constants
  #Operators
  #Conditions
  #Loops
  #Functions
  #SuperGlobals
  #RegEx
  #Forms
  #Advances Themes
    #Date and time
    #Includes
    #File Handling,Open, Read, Create, Write, upload
    #Cookies
    #Sessions
    #Filters, Filters Advanced
    #Callback Functions
    #Json
    #Exceptions
  #Oop
    #Objects, Classes
    #Constructors, Destructors
    #Acces Modidifiers
    #inheritance
    #Constants
    #Abstracts Classes
    #Interferences
    #Traits
    #Static Methods and Properties
    #NameSpaces
    #Iterables
  #Mysql with php
  #Xml with php
  #Ajax with php

?>