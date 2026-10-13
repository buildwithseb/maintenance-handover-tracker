export default class LocalStorageService {

    static get(key) {

        const cached = localStorage.getItem(key);
        if (!cached) return null;

        try {
            return JSON.parse(cached);
        } catch (error) {
            console.error("Failed to parse cache:", error);
            localStorage.removeItem(key);
            return null;
        }
    }

    static set(data) {

        for (const key in data){
            localStorage.setItem(key, JSON.stringify(data[key]));
        }
    
    }

    static add(item, key) {

        const dataList = this.get(key) || [];
        dataList.push(item);
        localStorage.setItem(key, JSON.stringify(dataList));
        return item;
    }

    static update(item, key) {

        const dataList = (this.get(key) || []).map(data =>
            data.id === item.id ? item : data
        );
        localStorage.setItem(key, JSON.stringify(dataList));
        return item;

    }

    static delete(itemId, key) {
        const remainingItems = (this.get(key) || []).filter(data => data.id !== itemId);
        localStorage.setItem(key, JSON.stringify(remainingItems));
        return itemId;
    }
}