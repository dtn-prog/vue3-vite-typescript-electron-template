<template>
  <div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h3 class="mb-0">Tour Manager</h3>
      <button class="btn btn-primary">Add Tour</button>
    </div>

    <div class="row">
      <div class="col-md-4 mb-3" v-for="tour in tours" :key="tour.id">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ tour.name }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Tour {
  id: number
  name: string
}

const tours = ref<Tour[]>([
  { id: 1, name: 'City Lights Tour' },
  { id: 2, name: 'Nature Escape' },
  { id: 3, name: 'Historic Landmarks' }
])
</script>

<style scoped>
/* Optional styling */
</style>
