function howMany(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numberSelected++;
      }
    }
    return numberSelected;
  }
  
  const btn = document.getElementById('btn');
  
  btn.addEventListener('click', () => {
    const musicTypes = document.selectForm.musicTypes;
    console.log(`You have selected ${howMany(musicTypes)} option(s).`);
  });