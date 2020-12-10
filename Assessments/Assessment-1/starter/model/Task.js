
// data model

class Task {
    constructor(text) {
        this.id = 1
        this.text = text;
        this.project = 'inbox';
        this.schedule = new Date()
        this.labels = "red"
        this.priority = "p1"
    }
}

module.exports = Task