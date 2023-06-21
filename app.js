// create view app
const app = Vue.createApp({
  data() {
    return {
      title: "1984",
      author: "George Orwell",
      age: 50,
      booksShown: false,
    };
  },

  methods: {
    handleAgeClick(type) {
      if (type === "increase") {
        this.age++;
      } else if (type == "decrease") {
        this.age--;
      }
    },
    toggleBooksShown() {
      this.booksShown = !this.booksShown;
    },
  },
});

app.mount("#app");
