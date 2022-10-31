import type { InjectionKey } from 'vue'

export interface Card {
    char: string,
    value?: string,
}

export interface State {
    currentScore: number,
    bestScore: number,
    lastCard: string,
}
