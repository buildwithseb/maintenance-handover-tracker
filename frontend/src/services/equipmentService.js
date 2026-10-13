import ApiService from "./apiService.js";
import LocalStorageService from "./localStorageService.js";
import AppController from "../controllers/AppController";

export default class EquipmentService {

    static baseUrl = process.env.API_BASE_URL || "http://localhost:3000";


    // -------------GET DATA--------------\\


    static async fetchLists() {

        //  await new Promise(resolve => setTimeout(resolve, 4000));
        const [machineryRes, telehutRes, remoteLevelRes, generalNoteRes] = await Promise.all(
            [
                fetch(`${this.baseUrl}/machinery`),
                fetch(`${this.baseUrl}/telehut`),
                fetch(`${this.baseUrl}/remote-level`),
                fetch(`${this.baseUrl}/general-note`)
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
        if (AppController.mode === "api") {
            return await ApiService.updateGeneralNote(data, id);
        }
        return LocalStorageService.update(data, "generalNoteList");

    }

    static async addGeneralNote(data, path) {
        if (AppController.mode === "api") {
            return ApiService.postData(data, path);
        }
        return LocalStorageService.add(data, "generalNoteList");

    }

    static async deleteGeneralNote(id) {
        if (AppController.mode === "api") {
            return await ApiService.deleteGeneralNote(id);
        }
        return LocalStorageService.delete(id, "generalNoteList");
    }


    // -------------MACHINERY--------------\\

    static async updateMachinery(data, id) {
        if (AppController.mode === "api" ) {
            return await ApiService.updateMachinery(data, id);
        } else {
            return LocalStorageService.update(data, "machineryList");
        }
    }

    static async addMachinery(data, path) {
        if (AppController.mode === "api") {
            return await ApiService.postData(data, path);
        } else {
            return LocalStorageService.add(data, "machineryList");
        }
    }

    static async deleteMachinery(id) {
        if (AppController.mode === "api") {
            return await ApiService.deleteMachinery(id);
        } else {
            return LocalStorageService.delete(id, "machineryList");
        }
    }

    // -------------TELEHUT--------------\\

    static async updateTelehut(data, id) {
        if (AppController.mode === "api") {
            return await ApiService.updateTelehut(data, id);
        } else {
            return LocalStorageService.update(data, "telehutList");
        }
    }

    static async addTelehut(data, path) {
        if (AppController.mode === "api") {
            return await ApiService.postData(data, path);
        } else {
            return LocalStorageService.add(data, "telehutList");
        }
    }

    static async deleteTelehut(id) {
        if (AppController.mode === "api") {
            return await ApiService.deleteTelehut(id);
        } else {
            return LocalStorageService.delete(id, "telehutList");
        }
    }

    // -------------REMOTE LEVEL--------------\\

    static async updateRemoteLevel(data, id) {
        if (AppController.mode === "api") {
            return await ApiService.updateRemoteLevel(data, id);
        } else {
            return LocalStorageService.update(data, "remoteLevelList");
        }
    }

    static async addRemoteLevel(data, path) {
        if (AppController.mode === "api") {
            return await ApiService.postData(data, path);
        } else {
            return LocalStorageService.add(data, "remoteLevelList");
        }
    }

    static async deleteRemoteLevel(id) {
        if (AppController.mode === "api") {
            return await ApiService.deleteRemoteLevel(id);
        } else {
            return LocalStorageService.delete(id, "remoteLevelList");
        }
    }

}



