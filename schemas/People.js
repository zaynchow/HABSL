export default {
  name: "people",
  type: "document",
  title: "People",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (rule) => rule.required(),
    },
    {
      name: "designation",
      type: "string",
      title: "Designation",
      validation: (rule) => rule.required(),
    },
    {
      name: "description",
      type: "string",
      title: "Description",
      validation: (rule) => rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      validation: (rule) => rule.required(),
    },
  ],
};
