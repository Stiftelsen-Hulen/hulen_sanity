

export default {
    title: 'Page',
    name: 'pageProps',
    type: 'document',
    fields: [{
        description: "",
        type: 'array',
        name: "blockContent",
        of: [
            {
                type: 'block'
            },
            {
                type: 'image'
            }
        ]

    }]


}