// app.js

var vm = new Vue({

    // We want to target the div with an id of 'events'
    el: '#events',

    // Here we can register any values or collections that hold data
    // for the application
    data: {
        event: {
            name: '',
            desription: '',
            date: ''
        },
        events: []
    },

    // Anything within the ready function will run when the application loads
    mounted: function() {
        console.log('ready function getting called');
        this.fetchEvents();
        console.log(this.addEvent);
    },

    // Methods we want to use in our application are registered here
    methods: {
        fetchEvents: function() {
            this.events = [{
                    id: 1,
                    name: 'TIFF',
                    description: 'Toronto International Film Festival',
                    date: '2015-09-10'
                },
                {
                    id: 2,
                    name: 'The Martian Premiere',
                    description: 'The Martian comes to theatres.',
                    date: '2015-10-02'
                },
                {
                    id: 3,
                    name: 'SXSW',
                    description: 'Music, film and interactive festival in Austin, TX.',
                    date: '2016-03-11'
                }
            ];

        },
        addEvent: function() {
            if (this.event.name) {
                this.events.push(this.event);
                this.event = { name: '', description: '', date: '' };
            }
        },
        deleteEvent: function(index) {
            if (confirm("Are you sure you want to delete this event?")) {
                // $remove is a Vue convenience method similar to splice
                this.events.splice(index, 1);
            }
        }
    }
});