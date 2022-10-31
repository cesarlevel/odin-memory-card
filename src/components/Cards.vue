<script setup lang="ts">
import type { Card } from '../types'

defineProps<{ cards: Array<Card> }>()

const emit = defineEmits<{
  (e: 'update', value: Card): void
}>()

function shuffleCards(arr:Array<Card>):Array<Card> {
  return arr.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}
</script>

<template>
  <div class="cards-grid">
    <div class="card" v-for="(card, index) in shuffleCards(cards)" @click="emit('update', card)">
      <span>{{card.char}}</span>
    </div>
  </div>
</template>
