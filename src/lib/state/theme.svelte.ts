import { browser } from '$app/environment';
import { Theme } from '$lib/types';

const THEME_KEY = 'theme';

function createThemeStore() {
  let currentTheme = $state<Theme>(Theme.LIGHT);

  if (browser) {
    const stored = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    currentTheme = stored === Theme.DARK ? Theme.DARK : 
                   stored === Theme.LIGHT ? Theme.LIGHT : 
                   prefersDark ? Theme.DARK : Theme.LIGHT;
    
    applyTheme(currentTheme);
  }

  function applyTheme(theme: Theme) {
    if (!browser) return;
    
    if (theme === Theme.DARK) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  function toggle() {
    const newTheme = currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    currentTheme = newTheme;
    
    if (browser) {
      localStorage.setItem(THEME_KEY, newTheme);
      applyTheme(newTheme);
    }
  }

  function setTheme(theme: Theme) {
    currentTheme = theme;
    
    if (browser) {
      localStorage.setItem(THEME_KEY, theme);
      applyTheme(theme);
    }
  }

  return {
    get current() {
      return currentTheme;
    },
    toggle,
    setTheme
  };
}

export const themeStore = createThemeStore();