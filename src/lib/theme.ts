export type UiTheme = "light" | "dark" | "system"

export function normalizeUiTheme(theme: UiTheme | null): UiTheme {
  return theme ?? "dark"
}

export function activateUiTheme(theme: UiTheme): void {
  const root = document.documentElement
  if (theme === "system") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    root.classList.toggle("dark", prefersDark)
  } else {
    root.classList.toggle("dark", theme === "dark")
  }
}