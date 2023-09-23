

export default {
    title: 'Page',
    name: 'pageProps',
    type: 'document',
    fields: [
        {
            type: "string", 
            name: "title", 
            title: "Page Name",
            description: "This field is used to match Hulen.No page routing and need to match exactly the page config"
            },
        {
        description: "The content you wish to show",
        type: 'localeBlock',
        name: "locale",
   
    }]


}