class Menu {
    constructor(name = "") {
        this.children = [];
        this.name = name;
    }

    add(child) {
        this.children.push(child);
    }

    remove (child) {
        var length = this.children.length;
        for (var i = 0; i < length; i++) {
            if (this.children[i] === child) {
                this.children.splice(i, 1);
                return;
            }
        }
    }

    getChild(i) {
        return this.children[i];
    }

    hasChildren() {
        return this.children.length > 0;
    }

    getName() {
        return this.name;
    }

    print(indent = 1, log = "") {
        console.log(log + " " + this.getName());
        console.log("--------------------------------------------");
        var l = Array(indent++).join("--");
        this.children.forEach(menu => {
            menu.print(indent, l);
        });
    }
}

export default Menu;