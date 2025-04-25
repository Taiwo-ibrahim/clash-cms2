// composables/useSidenav.js
export const useSidenav = () => {
  const isShown = useState("isSidenavShown", () => false)

  const toggleShow = () => {
    isShown.value = !isShown.value
  }

  return { isShown, toggleShow }
}
