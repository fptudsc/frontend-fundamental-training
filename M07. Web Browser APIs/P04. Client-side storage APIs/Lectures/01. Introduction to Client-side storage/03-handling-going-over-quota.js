function save(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    if (e.name === 'QuotaExceededError') {
      alert('Local Storage is full. Cannot save. Maybe delete a few items?');
    } else {
      alert('Something went wrong? Try again later?')
    }
  }
}