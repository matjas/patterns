import Menu from "./Menu.js";

var tree = new Menu("root");
var left = new Menu("left");
var right = new Menu("right");
var leftleft = new Menu("leftleft");
var leftright = new Menu("leftright");
var rightleft = new Menu("rightleft");
var rightright = new Menu("rightright");

tree.add(left);
tree.add(right);
tree.remove(right);
tree.add(right);

left.add(leftleft);
left.add(leftright);

right.add(rightleft);
right.add(rightright);

tree.print(2);