const app = Vue.createApp({
  // data, functions
  data() {
    return {
      showBooks: true,
      title: "The final Empire",
      author: "Brandon Sanderson",
      age: 21,
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
