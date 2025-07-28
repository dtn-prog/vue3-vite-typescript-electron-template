<script setup lang="ts">
import { ref } from 'vue'
import TourManager from './components/TourManager.vue'

const activeTab = ref('tours')

const getTabTitle = () => {
	const titles: Record<string, string> = {
		tours: 'Tour Management',
		scenes: 'Scene Editor',
		hotspots: 'Hotspot Manager',
		settings: 'Settings'
	}
	return titles[activeTab.value] || 'Virtual Tour Creator'
}


</script>


<template>
	<div id="app" class="vh-100 d-flex">
		<!-- Sidebar -->
		<aside class="bg-light border-end d-flex flex-column text-start" style="width: 150px;">
			<div class="p-4 border-bottom">
				<h2 class="h5 mb-0">Duli360</h2>
			</div>

			<nav class="nav flex-column p-2 flex-grow-1 text-start">
				<button @click="activeTab = 'tours'" :class="['nav-link', activeTab === 'tours' ? 'active' : '']"
					class="text-start" type="button">
					<span class="me-2">📁</span> Tours
				</button>
				<button @click="activeTab = 'settings'" :class="['nav-link', activeTab === 'settings' ? 'active' : '']"
					class="text-start" type="button">
					<span class="me-2">⚙️</span> Settings
				</button>
			</nav>
		</aside>

		<!-- Main Content -->
		<main class="flex-grow-1 d-flex flex-column">
			<!-- Header -->
			<header class="d-flex justify-content-between align-items-center border-bottom p-3 bg-light">
				<h1 class="h4 mb-0">{{ getTabTitle() }}</h1>
			</header>

			<!-- Content Area -->
			<div class="flex-grow-1 overflow-auto p-4">
				<div v-if="activeTab === 'tours'">
					<TourManager />
				</div>
				<div v-if="activeTab === 'settings'">
				</div>
			</div>
		</main>
	</div>
</template>

<style>
.nav-link.active {
  background-color: #e0e0e0;
  color: #000;
}
</style>
