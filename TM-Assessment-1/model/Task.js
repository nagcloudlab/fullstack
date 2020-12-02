
// data model

class Task {
    constructor() {
        this.id = 1
        this.text = "item-1";
        this.project = 'inbox';
        this.schedule = new Date()
        this.labels = ""
        this.priority = "p1"
    }
}

module.exports = Task