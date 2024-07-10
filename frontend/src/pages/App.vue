<template>
  <main id="app">
	  <div class="container">
		<div class="card">
		  <img class="logo" src="/images/logo.png" alt="Logo" />
		  <h1 class="title">
			{{ message }}
		  </h1>
		  <p class="description">
			Fullstack Framework with a backend using Node.js and a frontend using Vue.js 
			running on one server combines the power of these two technologies to build 
			modern and efficient web applications.
		  </p>
		  <div class="links">
			<a class="link" href="https://i-as.dev/" target="_blank">Official Site</a>
			<a class="link" href="https://github.com/fitri-hy/fullstack-framework" target="_blank">Github</a>
		  </div>
		</div>
	  </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.message = data.message;
      } catch (error) {
        console.error('Error fetching data:', error);
        this.message = 'Failed to fetch data.';
      }
    }
  }
};
</script>
