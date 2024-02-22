import { Rule } from "sanity";
import { validateUniquenessNumber } from "../validation";


export default {
    title: "Footer Elements",
    name: "footerElements",
    type: "document",
    description: "Every footer element created will be added to the list and inserted into place",
    fields: [
        {
            type: "string",
            title: "Title",
            name: "title",
        },
        {
            type: "number",
            title: "Sort Order",
            name: "sortOrder",
            description: "Sort order defines, in increasing order the placement of each element from the left",
            validation: (rule: Rule) => rule.required().custom(validateUniquenessNumber)

        },
       {
           type: "localeBlock",
           title: "Footer element",
           name: "footerElement",
           validation: (rule: Rule) => rule.required(),
       }
    ]
   }