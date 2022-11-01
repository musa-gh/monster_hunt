new Vue({
  el: "#app",
  data: {
    player_heal: 100,
    monster_heal: 100,
    game_is_on: false,
    attack_multiple: 10,
    speacial_attack_multiple: 25,
    heal_up_multiple: 20,
    monster_attack_multiple: 25,
    log_text: {
      attack: "Player Attack : ",
      speacial_attack: "Speacial Player Attack : ",
      monster_attack: "Monster Attack : ",
      heal_up: "Heal Up : ",
      give_up: "Give Up : ",
    },
    logs: [],
  },
  methods: {
    start_game: function () {
      this.game_is_on = true;
    },
    attack: function () {
      let point = Math.ceil(Math.random() * this.attack_multiple);
      this.monster_heal -= point;
      this.add_to_log({ turn: "P", text: this.log_text.attack + point });
      this.monster_attack();
      //   console.log("M :" + this.monster_heal);
      //   console.log("P :" + this.player_heal);
    },
    speacial_attack: function () {
      let point = Math.ceil(Math.random() * this.speacial_attack_multiple);
      this.monster_heal -= point;
      this.add_to_log({
        turn: "P",
        text: this.log_text.speacial_attack + point,
      }),
        this.monster_attack();
      //   console.log("M :" + this.monster_heal);
      //   console.log("P :" + this.player_heal);
    },
    heal_up: function () {
      let point = Math.ceil(Math.random() * this.heal_up_multiple);
      this.player_heal += point;
      this.add_to_log({ turn: "P", text: this.log_text.heal_up + point });
      this.monster_attack();
      //   console.log("M :" + this.monster_heal);
      //   console.log("P :" + this.player_heal);
    },
    give_up: function () {
      this.player_heal = 0;
      this.add_to_log({ turn: "P", text: this.log_text.give_up });
      //   console.log("M :" + this.monster_heal);
      //   console.log("P :" + this.player_heal);
    },
    monster_attack() {
      let point = Math.ceil(Math.random() * this.monster_attack_multiple);
      this.player_heal -= point;
      this.add_to_log({
        turn: "M",
        text: this.log_text.monster_attack + point,
      });
    },
    add_to_log: function (log) {
      this.logs.push(log);
    },
  },
  watch: {
    player_heal: function (i) {
      if (i <= 0) {
        this.player_heal = 0;
        if (confirm("You Lost Try Again")) {
          this.player_heal = 100;
          this.monster_heal = 100;
          this.logs = [];
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
          this.logs = [];
        }
      }
    },
  },
  computed: {
    user_progress() {
      return {
        width: this.player_heal + "%",
      };
    },
    monster_progress() {
      return {
        width: this.monster_heal + "%",
      };
    },
  },
});

//! Tekrar Yazılmaya açlışılacak

// player_heal: function (i) {
//       if (i <= 0) {
//         this.player_heal = 0;
//       } else if (i >= 100) {
//         this.player_heal = 100;
//       }
//     },
