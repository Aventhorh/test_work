import { useMemo } from "react";

export const useSearchCards = (cards, search) => {
    const sortedCards = useMemo(() => {
        if (search) {
            return [...cards].sort((a, b) => a[search].localeCompare(b[search]))
        }
        return cards;
    }, [search, cards]);

    return sortedCards;
}

export const useCards = (cards, search, query) => {
    const sortedCards = useSearchCards(cards, search)
    const sortedAndSearch = useMemo(() => {
        return sortedCards.filter(card => card.name.toLowerCase().includes(query))
    }, [query, sortedCards])

    return sortedAndSearch
}