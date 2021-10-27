import { writable } from "svelte/store"

export let audio = writable(localStorage.getItem("audio") || true)
audio.subscribe((val) => localStorage.setItem("audio", val))

export let work = writable(localStorage.getItem("work") || 25)
work.subscribe((val) => localStorage.setItem("work", val))

export let shortT = writable(localStorage.getItem("short") || 5)
shortT.subscribe((val) => localStorage.setItem("short", val))

export let longT = writable(localStorage.getItem("long") || 15)
longT.subscribe((val) => localStorage.setItem("long", val))

export let toLongT = writable(localStorage.getItem("toLong") || 4)
toLongT.subscribe((val) => localStorage.setItem("toLong", val))
