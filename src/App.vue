<script setup lang="ts">
import { reactive, provide } from 'vue'
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

provide('state', state);

</script>

<template>
  <div class="score">
    <p>Current score: {{state.currentScore}}</p>
    <p>Best score: {{state.bestScore}}</p>
  </div>
  <Cards :cards="cards" :index="state.currentScore"></Cards>
</template>
