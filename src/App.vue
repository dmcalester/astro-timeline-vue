<script setup lang="ts">
import { ref, computed } from 'vue'

// Timeline variables for 24-hour span starting at midnight UTC today
const now = new Date()
const todayMidnightUTC = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()))
const tomorrowMidnightUTC = new Date(todayMidnightUTC.getTime() + 24 * 60 * 60 * 1000)
const currentTimeUTC = new Date()

// Timeline properties
const timelineStart = computed(() => todayMidnightUTC.toISOString())
const timelineEnd = computed(() => tomorrowMidnightUTC.toISOString())
const timelinePlayhead = computed(() => currentTimeUTC.toISOString())

// Time region properties (1 hour from now, spanning 1 hour)
const regionStartTime = new Date(currentTimeUTC.getTime() + 60 * 60 * 1000) // 1 hour from now
const regionEndTime = new Date(regionStartTime.getTime() + 60 * 60 * 1000) // 1 hour after region start

const timeRegionStart = computed(() => regionStartTime.toISOString())
const timeRegionEnd = computed(() => regionEndTime.toISOString())

</script>

<template>
  <div class="app-container">
    <!-- Astro Web Components Header -->
    <rux-global-status-bar 
      app-domain="Vue" 
      app-name="Timeline Test"
      app-version="1.0.0"
    >
    <rux-clock></rux-clock>
    </rux-global-status-bar>

    <div class="content">

      <div style="width: 950px; margin: auto">
            <rux-timeline 
              has-played-indicator="false" 
              timezone="UTC" 
              :start="timelineStart" 
              :end="timelineEnd" 
              :playhead="timelinePlayhead" 
              interval="hour" 
              zoom="2" 
              ruler-position="bottom" 
              show-secondary-ruler="false" 
              show-grid="false" 
              hide-j-day="false">
                <rux-track>
                    <div slot="label">Upcoming Event</div>
                    <rux-time-region 
                      :start="timeRegionStart" 
                      :end="timeRegionEnd" 
                      status="serious">
                        Scheduled Event (1 hour from now)
                    </rux-time-region>
                </rux-track>
               
                <rux-track slot="ruler">
                    <rux-ruler></rux-ruler>
                </rux-track>
            </rux-timeline>
        
        

        
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  background: var(--color-background-base-default, #101923);
}

.content {
  
  text-align: center;
}

.logos {
  margin-bottom: 2rem;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.astro-demo {
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.astro-demo h2 {
  color: var(--color-text-primary, #ffffff);
  margin-bottom: 1rem;
}

rux-card {
  max-width: 500px;
  margin: 1rem 0;
}
</style>
