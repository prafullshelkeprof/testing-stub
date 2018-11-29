new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'http://google.com'
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        },
        sayHello: function() {
            this.title = 'Hello';
            return this.title;
        }
    }
});
