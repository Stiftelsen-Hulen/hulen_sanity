

export default {
 title: "Navigation bar",
 name: "navBarProps",
 type: "document",
 fields: [
    {
        type: "string",
        name: "version",
        title: "Version title",
        description: "You only need one navbar. Hulen.no will pick the latest navbar, so you can work on creating a new one, or edit the current one. Version title is a descriptive field only."
    },
    {
        type: "image",
        name: "navbarLogo",
        description: "Logo element that appear on top of Hulen.no in the navbar. The Alt text is for screen readers and such.",
        fields: [{
            name: "altText",
            type: "localeString",
        }]
    },
    {
        type: "array",
        title: "Navigation Buttons",
        name: "navElements",
        of: [{type: 'navElement'}]
        
    }
 ]
}