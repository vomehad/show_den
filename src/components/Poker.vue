<template>
  <div class="global">
    <v-row align="center" :key="countPlayers">
        <v-select
            cols="4"
            v-model="countPlayers"
            :items="rangePlayers"
            :menu-props="{top: true, offsetY: true}"
            label="Игроки"
        />
        <v-select
            cols="4"
            v-model="cardInHands"
            :items="getMaxHandCard()"
            :menu-props="{top: true, offsetY: true}"
            label="Карт на руках"
        />
        <v-btn cols="2" @click="handCards">Раздать</v-btn>
    </v-row>

    <v-row>
      <v-col :cols="12">
        <v-card
            class="mx-auto"
            v-for="(player, key) in players"
            :key="key"
        >
        <v-card-title>{{ player.name }}</v-card-title>
        <v-card-subtitle>Points {{ player.points }}</v-card-subtitle>
        <v-card-text>
          <v-btn
              depressed
              :color="getColor(card - 1)"
              v-for="card in player.cards"
              :key="card"
          >{{ cardNames[card - 1] }}</v-btn>
        </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card v-if="trump !== false">
          <v-card-title>Козырь</v-card-title>
          <v-card-text>
            <v-btn
                depressed
                class="mx-auto"
                :color="getColor(trump - 1)"
            >{{ cardNames[trump - 1] }}</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6" v-if="false">
        <v-card :key="deck.length">
          <v-card-title>Кон</v-card-title>
          <v-card-text>
            <v-btn
                depressed
                class="mx-auto"
                :color="getColor(card - 1)"
                v-for="card in deck"
                :key="card"
            >{{ cardNames[card - 1] + ` ${card-1}` }}</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import cardNames from '../deck';

export default {
name: "Poker",
  data: () => ({
    deck: [],
    trump: false,
    players: [],
    cardInHands: 2,
    countPlayers: 2,
    rangePlayers: [2,3,4],
    cardNames,
    move: 0,
  }),
  mounted() {
    this.initDeck();
    this.resetPlayers();
  },
  methods: {
    initDeck() {
      this.deck = [];

      for (let i = 1; i <= 54; i++) {
        this.deck.push(i);
      }
    },
    resetPlayers() {
      this.players = [];

      while (this.countPlayers) {
        const player = {
          name: `Player ${this.countPlayers}`,
          points: 0,
          cards: [],
        };

        this.players.push(player)
        this.countPlayers--;
      }
    },
    handCards() {
      this.resetPlayers();
      this.initDeck();

      while (this.deck.length && this.players.length) {
        if (this.players[0].cards.length === this.cardInHands) {
          this.trump = Math.floor(Math.random() * this.deck.length);
          this.deck.splice(this.trump, 1);
          break;
        }

        for (let player of this.players) {
          const cardIndex = Math.floor(Math.random() * this.deck.length);
          const card = this.deck[cardIndex];

          this.deck.splice(cardIndex, 1);
          player.cards.push(card);
        }
      }
    },
    getMaxHandCard() {
      let range = [];
      const countCards = 54/this.countPlayers;

      for (let i = 1; i <= countCards; i++) {
        if (i > 12) {
          break;
        }
        range.push(i);
      }

      return range;
    },
    getColor(card) {
      if (0 <= card && card <= 12) {
        return 'red';
      }
      if (12 < card && card <= 25) {
        return 'pink';
      }
      if (25 < card && card <= 38) {
        return 'blue';
      }
      if (38 < card && card <= 51) {
        return 'cyan';
      }

      return 'grey';
    },
  }
}
</script>

<style scoped>
.global {
  margin: auto;
  padding: 0 50px;
}
</style>