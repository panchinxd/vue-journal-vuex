
export default () => ({

    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), //123123123123123
            date: new Date().toDateString(), // sat 23, julio
            text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            picture: null, //https
        },

        {
            id: new Date().getTime() + 1000, //123123123123123
            date: new Date().toDateString(), // sat 23, julio
            text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software ',
            picture: null, //https
        },

        {
            id: new Date().getTime() + 2000, //123123123123123
            date: new Date().toDateString(), // sat 23, julio
            text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages ',
            picture: null, //https
        },

    ]
    
})  