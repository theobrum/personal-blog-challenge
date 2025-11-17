class ThemeStore {
  current = $state<'light' | 'dark'>('dark');

  constructor() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
      this.current = saved || 'dark';
    }
  }

  get isDark() {
    return this.current === 'dark';
  }

  toggle() {
    this.current = this.current === 'dark' ? 'light' : 'dark';
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', this.current);
    }
  }

  setTheme(theme: 'light' | 'dark') {
    this.current = theme;
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }
}

export const themeStore = new ThemeStore();