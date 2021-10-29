import { writable } from "svelte/store"

export let audio = writable(localStorage.getItem("audio") == "true" || true)
audio.subscribe((val) => localStorage.setItem("audio", val.toString()))

export let work = writable(parseInt(localStorage.getItem("work")) || 25)
work.subscribe((val) => localStorage.setItem("work", val.toString()))

export let shortT = writable(parseInt(localStorage.getItem("short")) || 5)
shortT.subscribe((val) => localStorage.setItem("short", val.toString()))

export let longT = writable(parseInt(localStorage.getItem("long")) || 15)
longT.subscribe((val) => localStorage.setItem("long", val.toString()))

export let toLongT = writable(parseInt(localStorage.getItem("toLong")) || 4)
toLongT.subscribe((val) => localStorage.setItem("toLong", val.toString()))

export let distraction = writable(localStorage.getItem("distraction") == "true" || true)
distraction.subscribe((val) => localStorage.setItem("distraction", val.toString()))
