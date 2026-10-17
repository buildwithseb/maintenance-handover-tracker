import ApiService from "./apiService.js";
import LocalStorageService from "./localStorageService.js";
import appState from "../state/appState.js";

export default class EquipmentService {

    static baseUrl = process.env.API_BASE_URL || "http://localhost:3000";
    static CSRF_TOKEN;

    // -------------GET DATA--------------\\

    static async getCsrf() {
        const res = await fetch(`${this.baseUrl}/csrf-token`, {
            credentials: "include"
        });
        if (!res.ok) {
            throw new Error("Failed to get CSRF token");
        }

        const { csrfToken } = await res.json();

        this.CSRF_TOKEN = csrfToken;
    }

    static async postWithCsrf(data, path) {
        await this.getCsrf();
        return await ApiService.postData(data, path, this.CSRF_TOKEN);
    }

    static async fetchLists() {

        //  await new Promise(resolve => setTimeout(resolve, 4000));
        const [machineryRes, telehutRes, remoteLevelRes, generalNoteRes] = await Promise.all(
            [
                fetch(`${this.baseUrl}/machinery`, { credentials: "include" }),
                fetch(`${this.baseUrl}/telehut`, { credentials: "include" }),
                fetch(`${this.baseUrl}/remote-level`, { credentials: "include" }),
                fetch(`${this.baseUrl}/general-note`, { credentials: "include" })
            ]
        )

        if (!machineryRes.ok || !telehutRes.ok || !remoteLevelRes.ok || !generalNoteRes.ok) {
            throw new Error("Failed to fetch one or more resources from backend");
        }

        const [machineryList, telehutList, remoteLevelList, generalNoteList] = await Promise.all([
            machineryRes.json(),
            telehutRes.json(),
            remoteLevelRes.json(),
            generalNoteRes.json()
        ])

        return {
            machineryList,
            telehutList,
            remoteLevelList,
            generalNoteList
        }
    }


    static async getAllCache() {
        const generalNoteList = LocalStorageService.get("generalNoteList") || [];
        const machineryList = LocalStorageService.get("machineryList") || [];
        const telehutList = LocalStorageService.get("telehutList") || [];
        const remoteLevelList = LocalStorageService.get("remoteLevelList") || [];

        return {
            generalNoteList,
            machineryList,
            telehutList,
            remoteLevelList
        };
    }


    // -------------GENERAL NOTE--------------\\

    static async updateGeneralNote(data, id) {
        if (appState.mode === "api") {
            return await ApiService.updateGeneralNote(data, id, this.CSRF_TOKEN);
        }
        return LocalStorageService.update(data, "generalNoteList");

    }

    static addGeneralNote(data, path) {
        if (appState.mode === "api") {
            return ApiService.postData(data, path, this.CSRF_TOKEN);
        }
        return LocalStorageService.add(data, "generalNoteList");

    }

    static async deleteGeneralNote(id) {
        if (appState.mode === "api") {
            return await ApiService.deleteGeneralNote(id, this.CSRF_TOKEN);
        }
        return LocalStorageService.delete(id, "generalNoteList");
    }


    // -------------MACHINERY--------------\\

    static async updateMachinery(data, id) {
        if (appState.mode === "api" ) {
            return await ApiService.updateMachinery(data, id, this.CSRF_TOKEN);
        } else {
            return LocalStorageService.update(data, "machineryList");
        }
    }

    static async addMachinery(data, path) {
        if (appState.mode=== "api") {
            return await ApiService.postData(data, path, this.CSRF_TOKEN);
        } else {
            return LocalStorageService.add(data, "machineryList");
        }
    }

    static async deleteMachinery(id) {
        if (appState.mode === "api") {
            return await ApiService.deleteMachinery(id, this.CSRF_TOKEN);
        } else {
            return LocalStorageService.delete(id, "machineryList");
        }
    }

    // -------------TELEHUT--------------\\

    static async updateTelehut(data, id) {
        if (appState.mode === "api") {
            return await ApiService.updateTelehut(data, id, this.CSRF_TOKEN);
        } else {
            return LocalStorageService.update(data, "telehutList");
        }
    }

    static async addTelehut(data, path) {
        if (appState.mode === "api") {
            return await ApiService.postData(data, path, this.CSRF_TOKEN);
        } else {
            return LocalStorageService.add(data, "telehutList");
        }
    }

    static async deleteTelehut(id) {
        if (appState.mode === "api") {
            return await ApiService.deleteTelehut(id, this.CSRF_TOKEN);
        } else {
            return LocalStorageService.delete(id, "telehutList");
        }
    }

    // -------------REMOTE LEVEL--------------\\

    static async updateRemoteLevel(data, id) {
        if (appState.mode === "api") {
            return await ApiService.updateRemoteLevel(data, id, this.CSRF_TOKEN);
        } else {
            return LocalStorageService.update(data, "remoteLevelList");
        }
    }

    static async addRemoteLevel(data, path) {
        if (appState.mode === "api") {
            return await ApiService.postData(data, path, this.CSRF_TOKEN);
        } else {
            return LocalStorageService.add(data, "remoteLevelList");
        }
    }

    static async deleteRemoteLevel(id) {
        if (appState.mode === "api") {
            return await ApiService.deleteRemoteLevel(id, this.CSRF_TOKEN);
        } else {
            return LocalStorageService.delete(id, "remoteLevelList");
        }
    }

}



