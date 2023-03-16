export default {
  name: "partner-logos",
  type: "document",
  title: "Partner Logos",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Company Name",
      validation: (rule) => rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Logo Image",
      validation: (rule) => rule.required(),
    },
  ],
};
