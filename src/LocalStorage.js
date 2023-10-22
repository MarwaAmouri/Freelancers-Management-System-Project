export const localStorageGet = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };
  
  export const localStorageSet = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };