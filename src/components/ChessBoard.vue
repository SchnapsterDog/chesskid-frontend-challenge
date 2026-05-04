<script setup>
import { computed, ref } from 'vue'

const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const ranks = [8, 7, 6, 5, 4, 3, 2, 1]

const highlightedSquares = ref(new Set())
const clickedSquaresLog = ref([])

const squares = computed(() =>
  ranks.flatMap((rank) =>
    files.map((file, fileIndex) => {
      const square = `${file}${rank}`

      return {
        id: square,
        label: square,
        isLight: (fileIndex + rank) % 2 === 1
      }
    })
  )
)

const entriesLabel = computed(() =>
  clickedSquaresLog.value.length === 1 ? '1 entry' : `${clickedSquaresLog.value.length} entries`
)

function toggleSquare(square) {
  const nextHighlightedSquares = new Set(highlightedSquares.value)

  if (nextHighlightedSquares.has(square)) {
    nextHighlightedSquares.delete(square)
    highlightedSquares.value = nextHighlightedSquares
    return
  }

  nextHighlightedSquares.add(square)
  highlightedSquares.value = nextHighlightedSquares
  clickedSquaresLog.value.push(square)
}
</script>

<template>
  <main class="challenge-layout">
    <section class="board-wrapper" aria-label="Chessboard area">
      <div class="chessboard" role="grid" aria-label="Interactive chessboard">
        <button
          v-for="square in squares"
          :key="square.id"
          class="chessboard__square"
          :class="{
            'chessboard__square--light': square.isLight,
            'chessboard__square--dark': !square.isLight,
            'chessboard__square--highlighted': highlightedSquares.has(square.id)
          }"
          type="button"
          role="gridcell"
          :aria-label="`Square ${square.label}`"
          :aria-pressed="highlightedSquares.has(square.id)"
          @click="toggleSquare(square.id)"
        >
          <span class="chessboard__label">{{ square.label }}</span>
        </button>
      </div>
    </section>

    <aside class="move-log" aria-label="Clicked squares log">
      <header class="move-log__header">
        <p class="move-log__eyebrow">Chess.com Challenge</p>
        <h1 class="move-log__title">Clicked Squares</h1>
        <p class="move-log__count">{{ entriesLabel }}</p>
      </header>

      <ol v-if="clickedSquaresLog.length" class="move-log__list">
        <li
          v-for="(square, index) in clickedSquaresLog"
          :key="`${square}-${index}`"
          class="move-log__item"
        >
          <span class="move-log__number">#{{ index + 1 }}</span>
          <span class="move-log__square">{{ square }}</span>
        </li>
      </ol>

      <div v-else class="move-log__empty">
        <p>Click any square to start the log.</p>
      </div>
    </aside>
  </main>
</template>
