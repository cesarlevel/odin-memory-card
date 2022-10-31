<script setup lang="ts">
import { reactive } from 'vue'
import Cards from './components/Cards.vue'
import type { Card, State } from './types'

const cards:Array<Card> = [
  {
    char: 'Ω',
    value: 'omega'
  },
  {
    char: 'Π',
    value: 'pi'
  },
  {
    char: 'Γ',
    value: 'gamma'
  },
  {
    char: 'Δ',
    value: 'delta'
  },
  {
    char: 'Θ',
    value: 'theta'
  },
  {
    char: 'Ξ',
    value: 'xi'
  },
  {
    char: 'Φ',
    value: 'phi'
  },
  {
    char: 'Ψ',
    value: 'psi'
  }
]

const state: State = reactive({
  currentScore: 0,
  bestScore: 0,
  lastCard: '',
})

function test(card: any) {
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
  <div class="score">
    <p>Current score: {{state.currentScore}}</p>
    <p>Best score: {{state.bestScore}}</p>
  </div>
  <Cards :cards="cards" :index="state.currentScore" @update="test"></Cards>
</template>
