import appState from "../state/appState.js";

export class GeneralNote {
    constructor(text) {
        if (appState.mode === "demo") {
            
            this.id = crypto.randomUUID() // Local storage id 
        }
        this.text = text
        this.createdAt = new Date().toISOString();
    }
}

export class Machinery {
    constructor(name, type, status, remoteCapable, notes = "") {
        if (appState.mode === "demo") {
            this.id = crypto.randomUUID() // Local storage id 
        }
        this.name = name
        this.type = type
        this.status = status
        this.remoteCapable = remoteCapable
        this.notes = notes
    }
}

export class RemoteLevel {
    constructor(location, status, notes = "") {
        if (appState.mode === "demo") {
            this.id = crypto.randomUUID() // Local storage id 
        }
        this.location = location
        this.status = status
        this.notes = notes
    }
}

export class Telehut {
    constructor(name, location, status, notes = "") {
        if (appState.mode === "demo") {
            this.id = crypto.randomUUID() // Local storage id 
        }
        this.name = name
        this.location = location
        this.status = status

    }

}