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
const timelinePlayhead = computed(() => new Date().toISOString())

// Time region properties (1 hour from now, spanning 1 hour)
const regionStartTime = new Date(currentTimeUTC.getTime() + 60 * 60 * 1000) // 1 hour from now
const regionEndTime = new Date(regionStartTime.getTime() + 60 * 60 * 1000) // 1 hour after region start

const timeRegionStart = computed(() => regionStartTime.toISOString())
const timeRegionEnd = computed(() => regionEndTime.toISOString())

// Timeline zoom control
const zoomLevel = ref(2)

// Events before current time (3 events)
const event1Start = new Date(currentTimeUTC.getTime() - 6 * 60 * 60 * 1000) // 6 hours ago
const event1End = new Date(event1Start.getTime() + 30 * 60 * 1000) // 30 min duration
const event1StartTime = computed(() => event1Start.toISOString())
const event1EndTime = computed(() => event1End.toISOString())

const event2Start = new Date(currentTimeUTC.getTime() - 3 * 60 * 60 * 1000) // 3 hours ago
const event2End = new Date(event2Start.getTime() + 45 * 60 * 1000) // 45 min duration
const event2StartTime = computed(() => event2Start.toISOString())
const event2EndTime = computed(() => event2End.toISOString())

const event3Start = new Date(currentTimeUTC.getTime() - 1 * 60 * 60 * 1000) // 1 hour ago
const event3End = new Date(event3Start.getTime() + 20 * 60 * 1000) // 20 min duration
const event3StartTime = computed(() => event3Start.toISOString())
const event3EndTime = computed(() => event3End.toISOString())

// Events after current time (5 events)
const event4Start = new Date(currentTimeUTC.getTime() + 2 * 60 * 60 * 1000) // 2 hours from now
const event4End = new Date(event4Start.getTime() + 90 * 60 * 1000) // 90 min duration
const event4StartTime = computed(() => event4Start.toISOString())
const event4EndTime = computed(() => event4End.toISOString())

const event5Start = new Date(currentTimeUTC.getTime() + 4 * 60 * 60 * 1000) // 4 hours from now
const event5End = new Date(event5Start.getTime() + 60 * 60 * 1000) // 1 hour duration
const event5StartTime = computed(() => event5Start.toISOString())
const event5EndTime = computed(() => event5End.toISOString())

const event6Start = new Date(currentTimeUTC.getTime() + 7 * 60 * 60 * 1000) // 7 hours from now
const event6End = new Date(event6Start.getTime() + 45 * 60 * 1000) // 45 min duration
const event6StartTime = computed(() => event6Start.toISOString())
const event6EndTime = computed(() => event6End.toISOString())

const event7Start = new Date(currentTimeUTC.getTime() + 10 * 60 * 60 * 1000) // 10 hours from now
const event7End = new Date(event7Start.getTime() + 30 * 60 * 1000) // 30 min duration
const event7StartTime = computed(() => event7Start.toISOString())
const event7EndTime = computed(() => event7End.toISOString())

const event8Start = new Date(currentTimeUTC.getTime() + 14 * 60 * 60 * 1000) // 14 hours from now
const event8End = new Date(event8Start.getTime() + 120 * 60 * 1000) // 2 hours duration
const event8StartTime = computed(() => event8Start.toISOString())
const event8EndTime = computed(() => event8End.toISOString())

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
      <div class="controls" style="margin: 1rem; display: flex; align-items: center; gap: 1rem;">
        <label style="color: white; font-weight: bold;">Zoom Level:</label>
        <rux-slider 
          v-model="zoomLevel"
          min="0" 
          max="20" 
          step="1"
          style="width: 300px;"
        ></rux-slider>
        <span style="color: white; min-width: 30px;">{{ zoomLevel }}</span>
      </div>
      
      <div style="width: calc(100dvw - 2rem); margin: 1rem;">
            <rux-timeline 
              has-played-indicator="true" 
              timezone="UTC" 
              :start="timelineStart" 
              :end="timelineEnd" 
              :playhead="timelinePlayhead" 
              interval="hour" 
              :zoom="zoomLevel" 
              ruler-position="top" 
              show-secondary-ruler="true" 
              show-grid="true" 
              hide-j-day="false">
                <rux-track slot="ruler">
                    <rux-ruler></rux-ruler>
                </rux-track>
                <!-- All Events Track -->
                <rux-track>
                    <div slot="label">Mission Schedule</div>
                    <!-- Past Events -->
                    <rux-time-region 
                      :start="event1StartTime" 
                      :end="event1EndTime" 
                      status="off">
                        dailyoperations_item_0
                    </rux-time-region>
                    <rux-time-region 
                      :start="event2StartTime" 
                      :end="event2EndTime" 
                      status="off">
                        dailyoperations_item_1
                    </rux-time-region>
                    <rux-time-region 
                      :start="event3StartTime" 
                      :end="event3EndTime" 
                      status="standby">
                        dailyoperations_item_2
                    </rux-time-region>
                    <!-- Future Events -->
                    <rux-time-region 
                      :start="timeRegionStart" 
                      :end="timeRegionEnd" 
                      status="serious">
                        dailyoperations_item_3
                    </rux-time-region>
                    <rux-time-region 
                      :start="event4StartTime" 
                      :end="event4EndTime" 
                      status="normal">
                        dailyoperations_item_4
                    </rux-time-region>
                    <rux-time-region 
                      :start="event5StartTime" 
                      :end="event5EndTime" 
                      status="serious">
                        dailyoperations_item_5
                    </rux-time-region>
                    <rux-time-region 
                      :start="event6StartTime" 
                      :end="event6EndTime" 
                      status="normal">
                        dailyoperations_item_6
                    </rux-time-region>
                    <rux-time-region 
                      :start="event7StartTime" 
                      :end="event7EndTime" 
                      status="caution">
                        dailyoperations_item_7
                    </rux-time-region>
                    <rux-time-region 
                      :start="event8StartTime" 
                      :end="event8EndTime" 
                      status="caution">
                        dailyoperations_item_8
                    </rux-time-region>
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
  width: 100dvw;
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

.controls {
  width: max-content;
  margin: 1rem 1rem 1rem auto;
}

rux-card {
  max-width: 500px;
  margin: 1rem 0;
}
</style>
