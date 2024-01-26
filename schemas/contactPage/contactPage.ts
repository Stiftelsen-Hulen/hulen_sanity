import { Rule } from "sanity";

export default {
    title: "Contact Info",
    name: "contactPage",
    type: "document",
    description: "Contact page information. Only the newest published version will be available",
    fields: [
        {
            type: "string",
            title: "Title",
            name: "title",
        },
       {
           type: "localeBlock",
           title: "headerInfo",
           name: "headerInfoBlock",
           validation: (rule: Rule) => rule.required(),
       },
       {type: "object",
       title: "Booking Info",
       name: "booking",
       fields: [{
        name: 'title',
        type: 'localeString',
        title: "Title"
       }, {
        type: "string",
        name: "email",
        title: "Email"
       }]
      },
       {
        type: 'array',
        title: 'Contact Info',
        name: 'contactList',
        of: [{type: 'contactInfo'}],
        options: {
          modal: {type: 'dialog', width: "80%"} //Makes the modal type a popover
        }
      }
    ]
   }