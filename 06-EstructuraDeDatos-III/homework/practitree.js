function BinarySearchTree (value){
    this.value = value;
    this.left = null;
    this.right = null;
}

BinarySearchTree.prototype.insert = function (value){
    if(value < this.value){
        if(this.left)this.left.insert(value);
        else this.left= new BinarySearchTree(value);
    }
    if(value > this.value){
        if(this.right)this.right.insert(value);
        else this.right= new BinarySearchTree(value);
    }
}

BinarySearchTree.prototype.size = function(){
    if(!this.left && !this.right)return 1;
    if(this.left && !this.right)return 1 + this.left.size();
    if(!this.left && this.right)return 1 + this.right.size();
    if(this.left && this.right)return 1+ this.left.size() + this.right.size();
}

BinarySearchTree.prototype.contain = function(value){
    if(value== this.value)return true;
    if(value < this.value){
        if(!this.left)return false
        else return this.left.contain(value)
    }
    if(value > this.value){
        if(!this.right)return false
        else return this.right.contain(value)
    }
}
BinarySearchTree.prototype.menor = function(){
    current = arbol;
 
    while (current.left) {
        current = current.left;
    }
    return (current.value);
}
BinarySearchTree.prototype.mayor = function(){
    current = arbol;
 
    while (current.right) {
        current = current.right;
    }
    return (current.value);
}

var arbol = new BinarySearchTree(50)

arbol.insert(26)
arbol.insert(51)
arbol.insert(35)
arbol.insert(18)
arbol.insert(102)
arbol.insert(9)

console.log(arbol)
console.log(arbol.size())
console.log(arbol.contain(35))
console.log('Nodo menor' + ' ' + arbol.menor())
console.log('Nodo mayor' + ' ' + arbol.mayor())