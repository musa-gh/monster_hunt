new Vue({
  el: "#app",
  data: {
    player_heal: 100,
    monster_heal: 100,
    game_is_on: false,
  },
  methods: {
    start_game: function () {
      this.game_is_on = true;
    },
    attack: function () {
      let point = Math.ceil(Math.random() * 10);
      this.monster_heal -= point;
      this.monster_attack();
      //   console.log("M :" + this.monster_heal);
      //   console.log("P :" + this.player_heal);
    },
    speacial_attack: function () {
      let point = Math.ceil(Math.random() * 25);
      this.monster_heal -= point;
      this.monster_attack();
      //   console.log("M :" + this.monster_heal);
      //   console.log("P :" + this.player_heal);
    },
    heal_up: function () {
      let point = Math.ceil(Math.random() * 20);
      this.player_heal += point;
      this.monster_attack();
      //   console.log("M :" + this.monster_heal);
      //   console.log("P :" + this.player_heal);
    },
    give_up: function () {
      this.player_heal = 0;
      //   console.log("M :" + this.monster_heal);
      //   console.log("P :" + this.player_heal);
    },
    monster_attack() {
      let point = Math.ceil(Math.random() * 15);
      this.player_heal -= point;
    },
  },
  watch: {
    player_heal: function (i) {
      if (i <= 0) {
        this.player_heal = 0;
        if (confirm("You Lost Try Again")) {
          this.player_heal = 100;
          this.monster_heal = 100;
        }
      } else if (i >= 100) {
        this.player_heal = 100;
      }
    },
    monster_heal: function (i) {
      if (i <= 0) {
        this.monster_heal = 0;
        if (confirm("You Win :D Yuppiii ")) {
          this.player_heal = 100;
          this.monster_heal = 100;
        }
      }
    },
  },
});

// player_heal: function (i) {
//       if (i <= 0) {
//         this.player_heal = 0;
//       } else if (i >= 100) {
//         this.player_heal = 100;
//       }
//     },
