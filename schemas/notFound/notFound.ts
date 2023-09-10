

export default {
    title: "Page Not found",
    name: "notFoundPage",
    type: "document",
    description: "Information display when page is not found. Only the latest updated document will be used",
    fields: [
       {
           type: "image",
           name: "notFoundImage",
           description: "The image that appears when not found",
           fields: [{
               name: "altText",
               type: "localeString",
           }]
       },

       {
        type: "localeString",
        title: "Info Text",
        name: "infotext",
        description: "The information text provided if the page is not found",
       },
       {
        type: "localeString",
        title: "Back button label",
        name: "backbuttonlabel",
        description: "The label of the back button",
       }
    ]
   }