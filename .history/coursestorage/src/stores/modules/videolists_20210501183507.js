const state = {
    videolists:[
        {
            id:1,
            name:"Laravel 8 REST API With Sanctum Authentication",
            minutes:'54:14',
            avatarUrl:'https://yt3.ggpht.com/ytc/AAUvwng963DN2_MIbKuvMWRrN4KG920h3Y4YHg6KET9vZg=s176-c-k-c0x00ffffff-no-rj',
            thumnailUrl:'https://i.ytimg.com/vi/MT-GJQIY3EU/maxresdefault.jpg',  
            channelName:'Traversy Media',
        },
        {
            id:2,
            name:"Node.js and Express.js - Full Course",
            minutes:'8:16:47',
            avatarUrl:'https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s176-c-k-c0x00ffffff-no-rj',
            thumnailUrl:'https://i.ytimg.com/vi/Oe421EPjeBE/maxresdefault.jpg',  
            channelName:'freeCodeCamp.org',
        },
        {
            id:3,
            name:"React JS - React Tutorial for Beginners",
            minutes:'2:25:26',
            avatarUrl:'https://yt3.ggpht.com/ytc/AAUvwnj82Lirw0dg6V5pJWAcWdG22OESyldUcDwAFEqQWg=s176-c-k-c0x00ffffff-no-rj',
            thumnailUrl:'https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg',  
            channelName:'Programming with Mosh',
        },
        {
            id:4,
            name:"Vuex Crash Course | State Management",
            minutes:'1:01:18',
            avatarUrl:'https://yt3.ggpht.com/ytc/AAUvwng963DN2_MIbKuvMWRrN4KG920h3Y4YHg6KET9vZg=s176-c-k-c0x00ffffff-no-rj',
            thumnailUrl:'https://i.ytimg.com/vi/5lVQgZzLMHc/maxresdefault.jpg',  
            channelName:'Travesy Media',
        }
    ]
}
const getters = {
    allVideos: (state) => state.videolists
}

export default {
    state, getters
}