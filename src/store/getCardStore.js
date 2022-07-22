import { makeAutoObservable } from "mobx"

class getCardStore {
    card = {}
    constructor() {
        makeAutoObservable(this)
    }

    setCard(payload) {
        this.card = payload
    }
}

export default new getCardStore()