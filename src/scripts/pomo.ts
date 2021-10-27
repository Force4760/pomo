import { writable } from "svelte/store"



const defaultPomo = {
  minutesLeft: 25,
  secondsLetf: 60,
  pomoMode: "work",
  isStopped: false,
  settings: {
    work: 25,
    short: 5,
    long: 15,
    toLong: 4,
    audio: true,
  },

  start() {
    this.secondsLetf = 0
    this.isStopped = false
  },

  startWork() {
    this.minutesLeft = this.settings.work
    this.pomoMode = "work"
    this.start()
  },

  startShort() {
    this.minutesLeft = this.settings.short
    this.pomoMode = "short"
    this.start()
  },

  startLong() {
    this.minutesLeft = this.settings.long
    this.pomoMode = "work"
    this.start()
  },
}

export let audio = writable(Boolean(localStorage.getItem("audio")) || true)
audio.subscribe((val) => localStorage.setItem("audio", String(val)))

export let work = writable(localStorage.getItem("work") || 25)
work.subscribe((val) => localStorage.setItem("work", val)

