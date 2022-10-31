<script setup lang="ts">
import { inject } from 'vue'
import type {Card, State} from '../types'

defineProps<{ cards: Array<Card> }>()

const state = inject<State>('state');

function shuffleCards(arr:Array<Card>):Array<Card> {
  return arr.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

function play(card:Card):void {
  if (state.lastCard === '') {
    state.lastCard = card.value;
    state.currentScore += 1;
  } else if (state.lastCard === card.value) {
    state.currentScore += 1;
  } else {
    if (state.currentScore > state.bestScore) {
      state.bestScore = state.currentScore
    }
    state.currentScore = 0;
    state.lastCard = ''
  }
}

</script>

<template>
  <div class="cards-grid">
    <div class="card" v-for="(card, index) in shuffleCards(cards)" @click="play(card)">
      <span>{{card.char}}</span>
    </div>
  </div>
</template>
