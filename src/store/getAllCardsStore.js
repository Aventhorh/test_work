import { makeAutoObservable } from "mobx"

class getAllCardsStore {
    cards = []
    constructor() {
        makeAutoObservable(this)
    }

    setCards(card) {
        this.cards = card
    }
}

export default new getAllCardsStore()