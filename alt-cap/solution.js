function capitalize(s){
    let cap = "";
        for (let i = 0; i < s.length; i++) {
    if (i % 2 != 0) {
      cap += s[i].toUpperCase();
    }
    else {
      cap += s[i].toLowerCase();
      }
    }
  
    let low = "";
        for (let i = 0; i < s.length; i++) {
    if (i % 2 != 0) {
      low += s[i].toLowerCase();
    }
    else {
      low += s[i].toUpperCase();
      }
    }
    return [low, cap];
  };