

    exports.randomNumber = function getRandomHeroId(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      exports.shufflefunction  = function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    exports.randomId = function getRandomId(array){
            for(let i=0;i<563;i+20){
              var id = array.data[i].id
            }
        return id
    }